---
title: An article with executable nodes within table cells
description: |
  This article illustrates the placement of executable node types such as `Parameter` and `CodeExpression` within table cells. It is mainly used for testing that these more deeply nodes are actually executed.
---

| Description            | Node               |
| ---------------------- | ------------------ |
| `Parameter` `a`        | /a/{type=num}      |
| `Parameter` `b`        | /b/{type=num}      |
| `CodeExpression` `a+b` | `a + b`{calc exec} |
