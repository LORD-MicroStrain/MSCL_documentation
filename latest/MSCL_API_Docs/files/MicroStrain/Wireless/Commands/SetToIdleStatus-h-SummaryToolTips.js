NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/SetToIdleStatus.h",{2303:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2303\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SetToIdleStatus</div></div></div><div class=\"TTSummary\">Holds the status information of the Set to Idle command.</div></div>",2304:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The result of the Set To Idle command once the operation has ceased.</div></div>",2309:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2309\" class=\"NDPrototype NoParameterForm\">SetToIdleResult result()</div><div class=\"TTSummary\">Gets the SetToIdleResult representing the result of the Stop Node command (success, fail, canceled, etc.).&nbsp; After complete is true, this should be called to discover how the command completed.</div></div>",2310:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2310\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> complete(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">10</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets whether the Stop Node command has completed or not, waiting for the specified amount of time before returning.</div></div>",2311:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2311\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> cancel()</div><div class=\"TTSummary\">Cancels the Stop Node operation that this SetToIdleResult belongs to.&nbsp; If the Stop Node operation has already been completed/canceled, this will have no effect.</div></div>"});