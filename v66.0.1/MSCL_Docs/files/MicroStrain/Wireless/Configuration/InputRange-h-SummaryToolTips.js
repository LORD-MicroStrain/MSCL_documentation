NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Configuration/InputRange.h",{6632:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">struct for Input Range options that specify an input range and associated gain for a channel</div></div>",6634:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6634\" class=\"NDPrototype NoParameterForm\">WirelessTypes::InputRange inputRange</div><div class=\"TTSummary\">The WirelessTypes::InputRange enum value for the input voltage range</div></div>",6635:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6635\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasGain</div><div class=\"TTSummary\">bool indicating whether or not this input range option has a valid associated gain</div></div>",6636:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6636\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> gain</div><div class=\"TTSummary\">the gain for this input range</div></div>",6638:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6638\" class=\"NDPrototype NoParameterForm\">InputRangeEntry() : inputRange(WirelessTypes::range_invalid), hasGain(<span class=\"SHKeyword\">false</span>), gain(<span class=\"SHNumber\">0</span>)</div><div class=\"TTSummary\">creates an InputRangeEntry with inputRange = range_invalid, hasGain = false, and gain = 0</div></div>",6639:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6639\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">InputRangeEntry(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">InputRange&nbsp;</td><td class=\"PName last\">ir</td></tr></table></td><td class=\"PAfterParameters\">) : inputRange(ir), hasGain(<span class=\"SHKeyword\">false</span>), gain(<span class=\"SHNumber\">0</span>)</td></tr></table></div><div class=\"TTSummary\">creates an InputRangeEntry with inputRange = ir, hasGain = false and gain = 0</div></div>",6640:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6640\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">InputRangeEntry(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">InputRange&nbsp;</td><td class=\"PName last\">ir,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">g</td></tr></table></td><td class=\"PAfterParameters\">) : inputRange(ir), hasGain(<span class=\"SHKeyword\">true</span>), gain(g)</td></tr></table></div><div class=\"TTSummary\">creates an InputRangeEntry with inputRange = ir, hasGain = true and gain = g</div></div>",6642:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A vector of InputRangeEntry objects.</div></div>",6643:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6643\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">InputRangeHelper</div></div></div><div class=\"TTSummary\">Contains functions specific to input range for Wireless Nodes.</div></div>",6645:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">typedef for a map of uint16 eeprom values to WirelessTypes::InputRange values.</div></div>",6647:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6647\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static const</span> InputRangeMap&amp; getRangeMap(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td class=\"PName\">nodeType,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">ChannelType&nbsp;</td><td class=\"PName\">channelType,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Voltage&nbsp;</td><td class=\"PName\">excitationVoltage&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">static_cast&lt;WirelessTypes::Voltage&gt;(<span class=\"SHNumber\">0</span>)</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the InputRangeMap for the specified node and channel type.</div></div>",6648:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6648\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static uint16</span> inputRangeToEepromVal(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">InputRange&nbsp;</td><td class=\"PName last\">range,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td class=\"PName last\">nodeType,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">ChannelType&nbsp;</td><td class=\"PName last\">channelType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Converts a WirelessTypes::InputRange to the eeprom value that corresponds to it.</div></div>",6649:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6649\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static uint16</span> inputRangeToEepromVal(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">InputRange&nbsp;</td><td class=\"PName last\">range,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td class=\"PName last\">nodeType,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">ChannelType&nbsp;</td><td class=\"PName last\">channelType,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Voltage&nbsp;</td><td class=\"PName last\">excitationVoltage</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Converts a WirelessTypes::InputRange to the eeprom value that corresponds to it, given the excitation voltage.</div></div>",6650:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6650\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> WirelessTypes::InputRange eepromValToInputRange(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">eepromValue,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td class=\"PName last\">nodeType,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">ChannelType&nbsp;</td><td class=\"PName last\">channelType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Converts an eeprom value to the corresponding WirelessTypes::InputRange.</div></div>",6651:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6651\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> WirelessTypes::InputRange eepromValToInputRange(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">eepromValue,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td class=\"PName last\">nodeType,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">ChannelType&nbsp;</td><td class=\"PName last\">channelType,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Voltage&nbsp;</td><td class=\"PName last\">excitationVoltage</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Converts an eeprom value to the corresponding WirelessTypes::InputRange, given the excitation voltage.</div></div>",6652:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6652\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static void</span> getRangeVector(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td></td><td class=\"PName last\">nodeType,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">ChannelType&nbsp;</td><td></td><td class=\"PName last\">channelType,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">InputRanges&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">result</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets a WirelessTypes::InputRanges container for the provided node type and channel type.</div></div>",6653:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6653\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static void</span> getRangeVector(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td></td><td class=\"PName last\">nodeType,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">ChannelType&nbsp;</td><td></td><td class=\"PName last\">channelType,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Voltage&nbsp;</td><td></td><td class=\"PName last\">excitationVoltage,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">InputRanges&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">result</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets a WirelessTypes::InputRanges container for the provided node type, channel type, and excitation voltage.</div></div>"});