'use strict';

var AnnotationMacro = require('../../ui/AnnotationMacro');

/**
 * A macro for creating `Code` nodes
 * 
 * Uses Markdown syntax of enclosing backticks.
 *
 * @class      CodeMacro (name)
 */
function CodeMacro () {
};

CodeMacro.Prototype = function() {

  this.appliesTo = [];

  this.regex =  /\`([^\`]+)\`/;
  
  this.createNodeData = function(match) {
  	console.log(match[0]);
    return {
      type: 'code',
      text: match[1]
    };
  };

};

AnnotationMacro.extend(CodeMacro);

module.exports = CodeMacro;