NDSummary.OnToolTipsLoaded("CClass:BaseStationEepromHelper",{6689:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6689\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStationEepromHelper</div></div></div><div class=\"TTSummary\">A helper class for reading and writing to a BaseStation\'s Eeprom.&nbsp; This class provides eeprom specific parsing so that high-level objects can be converted to their low-level eeprom value equivelent and vice-versa.</div></div>",6691:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6691\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationEepromHelper(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">BaseStation_Impl&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">basestation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a BaseStationEepromHelper object with a BaseStation.</div></div>",6692:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6692\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> checkAnalogPairingSupported() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks that analog pairing is supported and throws an exception if it isn\'t.</div></div>",6694:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6694\" class=\"NDPrototype NoParameterForm\">BaseStation_Impl* m_baseStation</div><div class=\"TTSummary\">The BaseStation_Impl used by this eeprom helper.</div></div>",6696:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6696\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Version read_asppVersion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td class=\"PName last\">commProtocol</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the ASPP Version of the BaseStation.</div></div>",6697:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6697\" class=\"NDPrototype NoParameterForm\">WirelessTypes::CommProtocol read_commProtocol() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::CommProtocol of the BaseStation.</div></div>",6698:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6698\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> write_commProtocol(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td class=\"PName last\">commProtocol</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Changes the WirelessTypes::CommProtocol of the BaseStation.</div></div>",6699:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6699\" class=\"NDPrototype NoParameterForm\">Version read_fwVersion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the firmware Version of the BaseStation.</div></div>",6700:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6700\" class=\"NDPrototype NoParameterForm\">WirelessModels::BaseModel read_model() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the WirelessModels::BaseModel of the BaseStation.</div></div>",6701:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6701\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> read_serial() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the serial of the BaseStation.</div></div>",6702:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6702\" class=\"NDPrototype NoParameterForm\">WirelessTypes::MicroControllerType read_microcontroller() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the WirelessTypes::MicroControllerType of the BaseStation.</div></div>",6703:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6703\" class=\"NDPrototype NoParameterForm\">WirelessTypes::TransmitPower read_transmitPower() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the WirelessTypes::TransmitPower that is currently set on the BaseStation.</div></div>",6704:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6704\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> write_transmitPower(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">TransmitPower&nbsp;</td><td class=\"PName last\">power</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the WirelessTypes::TransmitPower to the BaseStation.</div></div>",6705:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6705\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationButton read_button(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">buttonNumber,</td></tr><tr><td class=\"PModifierQualifier first\">BaseStationButton::</td><td class=\"PType\">UserAction&nbsp;</td><td class=\"PName last\">action</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the current settings for a particular button and action as a BaseStationButton.</div></div>",6706:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6706\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> write_button(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">buttonNumber,</td></tr><tr><td class=\"PModifierQualifier first\">BaseStationButton::</td><td class=\"PType\">UserAction&nbsp;</td><td></td><td class=\"PName last\">action,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationButton&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">btn</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the BaseStationButton to the BaseStation for a particular button and action.</div></div>",6707:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6707\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> read_analogPairingEnabled() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the setting for if analog pairing is enabled.</div></div>",6708:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6708\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> write_analogPairingEnabled(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the analog pairing enable setting to the BaseStation.</div></div>",6709:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6709\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> read_analogTimeoutTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the analog timeout time in seconds.</div></div>",6710:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6710\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> write_analogTimeoutTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">seconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the analog timeout time to the BaseStation.</div></div>",6711:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6711\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> read_analogTimeoutVoltage() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the analog timeout voltage.</div></div>",6712:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6712\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> write_analogTimeoutVoltage(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">voltage</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the analog timeout voltage to the BaseStation.</div></div>",6713:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6713\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> read_analogExceedanceEnabled() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the setting for if analog exceedance is enabled.</div></div>",6714:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6714\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> write_analogExceedanceEnabled(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the analog exceedance enable setting to the BaseStation.</div></div>",6715:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6715\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationAnalogPair read_analogPair(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">portNumber</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the current settings for a particular analog pairing as a BaseStationAnalogPair.</div></div>",6716:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6716\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> write_analogPair(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">portNumber,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationAnalogPair&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">pair</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the BaseStationAnalogPair to the BaseStation for a particular port number.</div></div>",6717:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6717\" class=\"NDPrototype NoParameterForm\">WirelessTypes::RegionCode read_regionCode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the region code from the BaseStation.</div></div>"});