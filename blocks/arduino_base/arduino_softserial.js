/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Colour blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.arduino_softserial');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/**
 * Common HSV hue for all blocks in this category.
 */

Blockly.Blocks['soft_init'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_softserial.HUE);
	this.setHelpUrl('http://arduino.cc/en/Reference/AnalogWrite');
	//only arduino mega admit multi softserial connection
	if (window.profile.defaultBoard != window.profile["mega"]) {
		this.appendDummyInput()
			.appendField(Blockly.Msg.SSERIAL_Init)
			.appendField(
				new Blockly.FieldInstance('SoftSerial',
										  Blockly.Msg.STEPPER_DEFAULT_NAME,
										  true, true, false),
				'SOFTSERIAL_NAME')
			.appendField(Blockly.Msg.SSERIAL_RX)
			.appendField(new Blockly.FieldDropdown(profile.defaultBoard.serialPin), "PIN1");
	} else {
		this.appendDummyInput()
			.appendField(Blockly.Msg.SSERIAL_Init)
			.appendField(
				new Blockly.FieldInstance('SoftSerial',
										  Blockly.Msg.STEPPER_DEFAULT_NAME,
										  true, false, false),
				'SOFTSERIAL_NAME')
			.appendField(Blockly.Msg.SSERIAL_RX)
			.appendField(new Blockly.FieldDropdown(profile.defaultBoard.serialPin), "PIN1");
		};
    this.appendDummyInput()
	    .appendField(Blockly.Msg.SSERIAL_SPEED)
     	.appendField(new Blockly.FieldDropdown(profile.defaultBoard.serial), "SPEED");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('A call to SoftwareSerial(rxPin, txPin) creates a new SoftwareSerial object');
  }
};

Blockly.Blocks['soft_read'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_softserial.HUE);
	this.setHelpUrl('');
	if (window.profile.defaultBoard != window.profile["mega"]) {
		this.appendDummyInput()
			.appendField(Blockly.Msg.SSERIAL_Init)
			.appendField(
				new Blockly.FieldInstance('SoftSerial',
										  Blockly.Msg.STEPPER_DEFAULT_NAME,
										  true, true, false),
				'SOFTSERIAL_NAME')
			.appendField(Blockly.Msg.SSERIAL_RX)
			.appendField(new Blockly.FieldDropdown(profile.defaultBoard.serialPin), "RX_ss")
			.appendTitle(Blockly.Msg.SSERIAL_Read);
	} else {
		this.appendDummyInput()
			.appendField(Blockly.Msg.SSERIAL_Init)
			.appendField(
				new Blockly.FieldInstance('SoftSerial',
										  Blockly.Msg.STEPPER_DEFAULT_NAME,
										  true, false, false),
				'SOFTSERIAL_NAME')
			.appendField(Blockly.Msg.SSERIAL_RX)
			.appendField(new Blockly.FieldDropdown(profile.defaultBoard.serialPin), "RX_ss")
			.appendTitle(Blockly.Msg.SSERIAL_Read);
		};
	/*this.appendDummyInput("")
		.appendField(Blockly.Msg.SSERIAL_RX)
        .appendField(new Blockly.FieldTextInput(''), 'RX_ss')
	    .appendTitle(Blockly.Msg.SSERIAL_Read);*/
    this.setInputsInline(false);
    this.setOutput(true, 'String');
    this.setTooltip('');
  }
};

Blockly.Blocks['soft_print'] = {
  init: function() {
	this.setHelpUrl('http://www.arduino.cc/en/Serial/Print');
    this.setColour(Blockly.Blocks.arduino_softserial.HUE);
	this.appendDummyInput("")
		.appendField(Blockly.Msg.SSERIAL_RX)
        .appendField(new Blockly.FieldTextInput(''), 'RX_ss');
    this.appendValueInput("CONTENT")
		.setCheck('String')
        .appendField(Blockly.Msg.SSERIAL_Print);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['soft_write'] = {
  init: function() {
	this.setHelpUrl('http://www.arduino.cc/en/Serial/Print');
    this.setColour(Blockly.Blocks.arduino_softserial.HUE);
	this.appendDummyInput("")
		.appendField(Blockly.Msg.SSERIAL_RX)
        .appendField(new Blockly.FieldTextInput(''), 'RX_ss');
    this.appendValueInput("CONTENT")
		.setCheck('String')
        .appendField(Blockly.Msg.SSERIAL_Write);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['soft_available'] = {
  init: function() {
	this.setHelpUrl('');
    this.setColour(Blockly.Blocks.arduino_softserial.HUE);
	this.appendDummyInput("")
		.appendField(Blockly.Msg.SSERIAL_RX)
        .appendField(new Blockly.FieldTextInput(''), 'RX_ss')
	    .appendTitle(Blockly.Msg.SSERIAL_Avai);
    this.setInputsInline(false);
    this.setOutput(true, 'Boolean');
    this.setTooltip('');
  }
};

Blockly.Blocks['soft_flush'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_softserial.HUE);
	this.setHelpUrl('http://arduino.cc/en/Serial/Flush');
	this.appendDummyInput("")
		.appendField(Blockly.Msg.SSERIAL_RX)
        .appendField(new Blockly.FieldTextInput(''), 'RX_ss')
	    .appendField(Blockly.Msg.Serial_flush);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Waits for the transmission of outgoing serial data to complete.');
  }
};