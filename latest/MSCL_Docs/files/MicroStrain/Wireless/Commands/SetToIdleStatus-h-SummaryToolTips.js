NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/SetToIdleStatus.h",{5416:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5416\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SetToIdleStatus</div></div></div><div class=\"TTSummary\">Holds the status information of the Set to Idle command.</div></div>",5418:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The result of the Set To Idle command once the operation has ceased.</div></div>",5424:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5424\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">SetToIdleStatus(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">shared_ptr&lt;SetToIdle::Response&gt;&nbsp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SetToIdleStatus object</div></div>",5426:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5426\" class=\"NDPrototype NoParameterForm\">std::shared_ptr&lt;SetToIdle::Response&gt; m_response</div><div class=\"TTSummary\">A shared_ptr to the SetToIdle::Response that this status pertains to.</div></div>",5427:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5427\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_complete</div><div class=\"TTSummary\">Whether or not the Stop Node command has come to a completion.</div></div>",5429:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5429\" class=\"NDPrototype NoParameterForm\">SetToIdleResult result()</div><div class=\"TTSummary\">Gets the SetToIdleResult representing the result of the Stop Node command (success, fail, canceled, etc.).&nbsp; After complete is true, this should be called to discover how the command completed.</div></div>",5430:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5430\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> complete(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">10</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets whether the Stop Node command has completed or not, waiting for the specified amount of time before returning.</div></div>",5431:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5431\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> cancel()</div><div class=\"TTSummary\">Cancels the Stop Node operation that this SetToIdleResult belongs to.&nbsp; If the Stop Node operation has already been completed/canceled, this will have no effect.</div></div>"});