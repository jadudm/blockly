'use strict';

goog.provide('Blockly.Blocks.occam');

goog.require('Blockly.Blocks');

Blockly.Blocks['occam_PAR'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendStatementInput("par_blocks")
        .setCheck("process_type")
        .appendField("parallel");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "process_type");
    this.setNextStatement(true, "process_type");
    this.setTooltip('');
  }
};

Blockly.Blocks['occam_SEQ'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendStatementInput("seq_blocks")
        .setCheck("process_type")
        .appendField("sequence");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "process_type");
    this.setNextStatement(true, "process_type");
    this.setTooltip('');
  }
};

Blockly.Blocks['occam_PROC'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendStatementInput("proc_blocks")
        .setCheck("process_type")
        .appendField("process");
    this.setInputsInline(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['occam_SKIP'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendDummyInput()
        .appendField("SKIP");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "process_type");
    this.setNextStatement(true, "process_type");
    this.setTooltip('');
  }
};

Blockly.Blocks['occam_STOP'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendDummyInput()
        .appendField("STOP");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "process_type");
    this.setTooltip('');
  }
};


Blockly.Blocks['occam_CHAN'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("channel")
        .appendField(new Blockly.FieldTextInput("ch"), "CHANNEL_NAME");
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['occam_SEND'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendValueInput("NAME")
        .appendField("send value");
    this.appendDummyInput()
        .appendField("on channel")
        .appendField(new Blockly.FieldTextInput("ch"), "CHANNEL_NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "process_type");
    this.setNextStatement(true, "process_type");
    this.setTooltip('');
  }
};

Blockly.Blocks['occam_READ'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendDummyInput()
        .appendField("read from channel")
        .appendField(new Blockly.FieldTextInput("ch"), "CHANNEL_NAME");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};