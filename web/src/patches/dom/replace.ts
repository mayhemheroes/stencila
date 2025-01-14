import { OperationReplace, Slot, ElementId } from '../../types'
import {
  assert,
  assertElement,
  assertIndex,
  assertName,
  assertString,
  isAttr,
  isElement,
  isName,
  JsonValue,
  panic,
} from '../checks'
import { applyReplace as applyReplaceString } from '../string'
import { applyAddObject, applyAddStruct } from './add'
import { escapeAttr, unescapeAttr, unescapeHtml } from './escape'
import { hasProxy } from './proxies'
import {
  createFragment,
  createFragmentWrapEach,
  isArrayElement,
  isObjectElement,
  resolveObjectKey,
  resolveParent,
} from './resolve'

/**
 * Apply a replace operation
 */
export function applyReplace(op: OperationReplace, target?: ElementId): void {
  const { address, items, length } = op
  const value = op.value as JsonValue
  const html = op.html ?? value

  const [parent, slot] = resolveParent(address, target)

  if (parent === undefined) {
    console.warn(
      `Unable to resolve address '${address.join(
        ','
      )}'; 'Replace' operation will be ignored'`
    )
  } else if (isElement(parent)) {
    assertString(html)
    if (isName(slot)) {
      if (isObjectElement(parent)) applyReplaceObject(parent, slot, items, html)
      else applyReplaceStruct(parent, slot, items, value, html)
    } else {
      if (isArrayElement(parent))
        applyReplaceArray(parent, slot, items, length, html)
      else applyReplaceVec(parent, slot, items, length, html)
    }
  } else {
    assertString(value)
    applyReplaceText(parent, slot, items, value)
  }
}

/**
 * Apply a `Replace` operation to an element representing a `Object` (key-value pairs)
 */
export function applyReplaceObject(
  object: Element,
  name: Slot,
  items: number,
  html: string
): void {
  assertName(name)
  assert(items === 1, `Unexpected replace items ${items} for object`)

  const key = resolveObjectKey(object, name)
  if (key !== undefined) {
    const fragment = createFragment(`<dd>${html}</dd>`)
    key.nextElementSibling?.replaceWith(fragment)
  } else {
    console.warn('Unable to find existing object key to replace; will add')
    applyAddObject(object, name, html)
  }
}

/**
 * Apply a `Replace` operation to an element representing a `struct`
 */
export function applyReplaceStruct(
  struct: Element,
  name: Slot,
  items: number,
  value: JsonValue,
  html: string
): void {
  assertName(name)
  assert(
    items === 1,
    `Unexpected replace items ${items} for option slot '${name}'`
  )

  // Is there a proxy element for the property? If so, apply the operation to its target.
  const target = hasProxy(struct, name)
  if (target) {
    target.applyReplaceStruct(name, items, value, html)
    return
  }

  // Simply delegate to `applyAddStruct` which has the same logic as needed here
  applyAddStruct(struct, name, value, html)
}

/**
 * Apply a `Replace` operation to an element representing an `Array`
 */
export function applyReplaceArray(
  array: Element,
  index: Slot,
  items: number,
  length: number,
  html: string
): void {
  assertIndex(index)

  const ol = array.querySelector('ol')
  assertElement(ol)

  const fragment = createFragmentWrapEach(html, 'li')
  replaceChildren(ol, index, items, length, fragment)
}

/**
 * Apply a `Replace` operation to an element representing a `Vec`
 */
export function applyReplaceVec(
  vec: Element,
  index: Slot,
  items: number,
  length: number,
  html: string
): void {
  assertIndex(index)

  const fragment = createFragment(html)
  replaceChildren(vec, index, items, length, fragment)
}

/**
 * Replace children in an element
 */
function replaceChildren(
  elem: Element,
  index: number,
  items: number,
  length: number,
  fragment: DocumentFragment
): void {
  const children = elem.childNodes
  if (children.length === 0) {
    elem.appendChild(fragment)
  } else {
    const sibling = children[index]
    if (sibling === undefined) {
      throw panic(
        `Unexpected replace slot '${index}' for ${elem.tagName} element with ${children.length} children`
      )
    }
    elem.insertBefore(fragment, sibling)

    let removed = 0
    while (removed < items) {
      children[index + length]?.remove()
      removed += 1
    }
  }
}

/**
 * Apply a `Replace` operation to a `Text` or `Attr` DOM node representing a `String`
 */
export function applyReplaceText(
  text: Attr | Text,
  index: Slot,
  items: number,
  value: string
): void {
  assertIndex(index)

  const current = text.textContent ?? ''
  const unescaped = isAttr(text) ? unescapeAttr(current) : unescapeHtml(current)
  const updated = applyReplaceString(unescaped, index, items, value)
  // It seems that, because setting textContent (?), it is not necessary to escape innerHTML
  const escaped = isAttr(text) ? escapeAttr(updated) : updated
  text.textContent = escaped
}
