'use strict';

var Overlay = require('substance/ui/Overlay');
var getRelativeBoundingRect = require('substance/util/getRelativeBoundingRect');

var TextToolset = require('./TextToolset');
var BlockToolset = require('./BlockToolset');

/**
 * Overlay toolsets over the current slection
 * 
 * This is derived from Substance `Overlay` to implement
 * alternative positioning. Instead of using the Substance class `DefaultOverlay`
 * this class renders toolsets directly within the overlay element
 *
 * @class      Overlayer (name)
 */
function Overlayer() {
  Overlayer.super.apply(this, arguments);

  /**
   * Keep track of position because this can be lost
   * when this overlay is rerendered but without `position()`
   * being called for certain documents events.
   */
  this.top = 0;
  this.left = 0;
}

Overlayer.Prototype = function() {

  var _super = Overlayer.super.prototype;

  this.render = function($$) {
	  var el = $$('div')
      .addClass('sc-overlay')
      .css('top', this.top + 'px')
      .css('left', this.left + 'px');
    el.append(
      $$(TextToolset).ref('textToolset'),
      $$(BlockToolset).ref('blockToolset')
    );
    return el;
  }

  // Override of `position()` method
  this.position = function(hints) {
    // At time of writing `Surface.getBoundingRectangleForSelection` was experimental and
    // sometimes created a hints.rectangle that was an empty object (e.g. for node selections). This checks for that
    // and if necessary tries to work out it's own selection rectangle
    var position= null;
    if (hints) {
      if (hints.rectangle) {
        if (hints.rectangle.top) {
          position = hints.rectangle;
        }
      }
    }
    if(!position) {
      console.warn('No selection rectangle provided, attempting to get one');
      var surface = this.context.surfaceManager.getFocusedSurface();
      var selection = surface.getSelection();
      var componentEl = document.querySelector('[data-id=' + selection.getNodeId() + ']');
      var containerEl = this.context.scrollPane.refs.content.el.el;
      position = getRelativeBoundingRect(componentEl, containerEl);
    }

    if (position) {
      var overlay = {
        height: this.el.htmlProp('offsetHeight'),
        width: this.el.htmlProp('offsetWidth')
      };

      // By default, aligned top/center to the position
      var top = position.top - overlay.height;
      var left = position.left + position.width/2 - overlay.width/2;
      // Must not exceed left bound
      left = Math.max(left, 0);
      // Must not exceed right bound
      var maxLeftPos = position.left + position.width + position.right - overlay.width;
      left = Math.min(left, maxLeftPos);
      
      // Change position
      this.el.css('top', top);
      this.el.css('left', left);

      // Store position for next rendering
      this.top = top;
      this.left = left;
    } else {
      console.warn('No selection rectangle to position overlay');
    }
  };

};

Overlay.extend(Overlayer);

module.exports = Overlayer;
