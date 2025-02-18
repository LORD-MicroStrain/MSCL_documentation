NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/WriteEeprom_v2.h",{3687:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3687\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WriteEeprom_v2</div></div></div><div class=\"TTSummary\">Contains logic for the WriteEeprom (version 2) Node command</div></div>",3689:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3689\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessPacket::</td><td class=\"PType\">AsppVersion&nbsp;</td><td class=\"PName last\">asppVer,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">eepromAddress,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">valueToWrite</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the WriteEeprom_v2 command packet</div></div>",3690:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3690\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the WriteEeprom_v2 Node command</div></div>",3692:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3692\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">eepromAddress,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">valueWritten,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a WriteEeprom_v2 Response object</div></div>",3694:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3694\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address to look for in the WriteEeprom_v2 response</div></div>",3695:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3695\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_eepromAddress</div><div class=\"TTSummary\">The eeprom address to look for in the WriteEeprom_v2 response.</div></div>",3696:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3696\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_eepromValue</div><div class=\"TTSummary\">The eeprom value to look for in the WriteEeprom_v2 response.</div></div>",3697:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3697\" class=\"NDPrototype NoParameterForm\">WirelessPacket::ResponseErrorCode m_errorCode</div><div class=\"TTSummary\">The WirelessPacket::ResponseErrorCode from the response.</div></div>",3699:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3699\" class=\"NDPrototype NoParameterForm\">WirelessPacket::ResponseErrorCode errorCode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessPacket::ResponseErrorCode from the response packet.</div></div>",3700:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3700\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> matchSuccessResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the WirelessPacket passed in matches the success response.</div></div>",3701:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3701\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> matchFailResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the WirelessPacket passed in matches the failure response.</div></div>"});