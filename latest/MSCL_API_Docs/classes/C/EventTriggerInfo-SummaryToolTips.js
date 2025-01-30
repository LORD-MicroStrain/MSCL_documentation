NDSummary.OnToolTipsLoaded("CClass:EventTriggerInfo",{922:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Information about an event trigger</div></div>",923:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype923\" class=\"NDPrototype NoParameterForm\">EventTriggerInfo() : type(EventTriggerConfiguration::NONE), instanceId(<span class=\"SHNumber\">0</span>), status(<span class=\"SHNumber\">0</span>)</div><div class=\"TTSummary\">Default constructor</div></div>",924:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype924\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">EventTriggerInfo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> EventTriggerConfiguration::</td><td class=\"PType\">Type&nbsp;</td><td class=\"PName last\">type,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">instanceId,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">status</td></tr></table></td><td class=\"PAfterParameters\">) : type(type), instanceId(instanceId), status(status)</td></tr></table></div></div>",925:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Trigger status masks for the status bitfield</div></div>",929:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype929\" class=\"NDPrototype NoParameterForm\">EventTriggerConfiguration::Type type</div><div class=\"TTSummary\">Configured trigger type</div></div>",930:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype930\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> instanceId</div><div class=\"TTSummary\">Instance ID of the trigger</div></div>",931:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype931\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> isActive() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">True if the trigger is currently active (either due to its logic or being in test mode)</div></div>",932:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype932\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> isEnabled() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">True if the trigger is enabled</div></div>",933:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype933\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> isTestMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">True if the trigger is in test mode</div></div>",934:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype934\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setStatus(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the value of the status bitfield</div></div>",935:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A vector of EventTriggerInfo</div></div>"});