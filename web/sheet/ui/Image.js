'use strict';

var Component = require('substance/ui/Component');
var CellTeaserComponent = require('./CellTeaserComponent');
var $$ = Component.$$;

function Image() {
  Image.super.apply(this, arguments);
}

Image.Prototype = function() {

  this.render = function() {
    var node = this.props.node;
    // Using .sc-sheet-image instead of .sc-image so we don't have style
    // clashes with native Substance Image
    var el = $$('div').addClass('sc-sheet-image');
    el.append($$(CellTeaserComponent, {node: node}));
    if (node.value !== undefined && node.displayMode !== 'clipped') {
      el.append(
        $$('img').attr('src', node.value)
      );
    }
    return el;
  };
};

Component.extend(Image);

Image.static.displayModes = ['overlay', 'clipped', 'expanded'];

module.exports = Image;
