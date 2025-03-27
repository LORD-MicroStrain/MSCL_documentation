NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/BaseStation_ReadEeprom.h",{5684:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5684\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStation_ReadEeprom</div></div></div><div class=\"TTSummary\">Contains logic for the base station read eeprom command</div></div>",5686:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5686\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">eepromAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the eeprom read command packet</div></div>",5687:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5687\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the base station read eeprom command</div></div>",5689:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5689\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a read eeprom Response object</div></div>",5691:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5691\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_result</div><div class=\"TTSummary\">The result value of the read eeprom command.</div></div>",5693:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5693\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> result() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the result value of the response.</div></div>",5694:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5694\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> matchSuccessResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the bytes passed in match the success response pattern from their current read position</div></div>",5695:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5695\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> matchFailResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the bytes passed in match the failure response pattern from their current read position</div></div>"});