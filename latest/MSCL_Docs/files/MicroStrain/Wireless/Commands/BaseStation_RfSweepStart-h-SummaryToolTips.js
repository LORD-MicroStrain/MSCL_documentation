NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/BaseStation_RfSweepStart.h",{5686:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5686\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStation_RfSweepStart</div></div></div><div class=\"TTSummary\">Contains logic for the base station Start RF Sweep command.</div></div>",5688:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5688\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessPacket::</td><td class=\"PType\">AsppVersion&nbsp;</td><td class=\"PName last\">asppVer,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">min,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">max,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">interval,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">options</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the beacon status command.</div></div>",5689:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5689\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the command</div></div>",5691:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\">The min frequency to match in the response.</div></div>",5692:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\">The max frequency to match in the response.</div></div>",5693:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\">The interval to match in the response.</div></div>",5694:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5694\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_options</div><div class=\"TTSummary\">The options to send with the command.</div></div>",5696:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5696\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">min,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">max,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">interval,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">options</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a get beacon status Response object</div></div>",5697:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5697\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> matchSuccessResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the packet passed in matches the success response.</div></div>"});