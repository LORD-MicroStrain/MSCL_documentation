NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/SetToIdle_v2.h",{5261:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5261\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">namespace</span> </div><div class=\"CPName\">SetToIdle_v2</div></div></div><div class=\"TTSummary\">Contains logic for the Set to Idle (v2) command.</div></div>",5263:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5263\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the SetToIdle command packet.</div></div>",5264:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5264\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the SetToIdle command</div></div>",5266:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5266\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td></td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td></td><td class=\"PName last\">collector,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">baseStation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SetToIdle Response object</div></div>",5267:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5267\" class=\"NDPrototype NoParameterForm\">~Response()</div><div class=\"TTSummary\">Destroys the SetToIdle Response object. This also cancels the SetToIdle operation on the BaseStation, if not already complete or canceled.</div></div>",5269:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5269\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_started</div><div class=\"TTSummary\">Whether the set to idle process has been started or not.</div></div>",5271:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5271\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> match_baseReceived(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if the packet passed in matches the base station received packet.</div></div>",5272:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5272\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> match_completion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if the packet passed in matches the completion packet.</div></div>",5273:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5273\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> match(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the packet passed in matches a response packet.</div></div>",5274:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5274\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> started()</div><div class=\"TTSummary\">Checks if the set to idle operation has started or not.</div></div>"});