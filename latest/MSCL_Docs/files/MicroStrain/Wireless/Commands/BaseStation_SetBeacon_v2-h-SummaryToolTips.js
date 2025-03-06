NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/BaseStation_SetBeacon_v2.h",{5674:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5674\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStation_SetBeacon_v2</div></div></div><div class=\"TTSummary\">Contains logic for the base station set (enable/disable) beacon command (v2)</div></div>",5676:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5676\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessPacket::</td><td class=\"PType\">AsppVersion&nbsp;</td><td class=\"PName last\">asppVer,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">utcTime</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the set beacon command packet, using the passed in seconds as the start time</div></div>",5677:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5677\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the base station write eeprom command</div></div>",5679:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5679\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">utcTime,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a set beacon Response object</div></div>",5681:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5681\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_beaconStartTime</div><div class=\"TTSummary\">The start time that was sent to the beacon.</div></div>",5683:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5683\" class=\"NDPrototype NoParameterForm\">Timestamp beaconStartTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the start time that was sent to enable the beacon</div></div>",5684:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5684\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> matchSuccessResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the packet passed in matches the success response.</div></div>",5685:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5685\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> matchFailResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the packet passed in matches the failure response.</div></div>"});