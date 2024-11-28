NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/BaseStation_SetBeacon.h",{5544:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5544\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStation_SetBeacon</div></div></div><div class=\"TTSummary\">Contains logic for the base station set (enable/disable) beacon command</div></div>",5546:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5546\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">utcTime</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the set beacon command packet, using the passed in seconds as the start time</div></div>",5547:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5547\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the base station write eeprom command</div></div>",5549:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5549\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">utcTime,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a set beacon Response object</div></div>",5551:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5551\" class=\"NDPrototype NoParameterForm\">Timestamp m_beaconStartTime</div><div class=\"TTSummary\">The start time that was sent to the beacon as a Timestamp object</div></div>",5553:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5553\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> matchSuccessResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the bytes passed in match the response pattern from their current read position</div></div>",5554:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5554\" class=\"NDPrototype NoParameterForm\">Timestamp beaconStartTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the start time that was sent to enable the beacon</div></div>"});