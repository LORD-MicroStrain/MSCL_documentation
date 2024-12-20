NDSummary.OnToolTipsLoaded("CClass:MipModels",{2112:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2112\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipModels</div></div></div><div class=\"TTSummary\">Contains the model number information of MIP devices.</div></div>",2113:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The base model numbers for each of the MIP devices.&nbsp; Ex: 6284-4220 (3DM-GQ7) NodeModel is 6284</div></div>",2151:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The modifier options for MIP devices.&nbsp; Ex: 6285-0100 (3DM-RTK) Modifier is 0100 This list does not define modifiers for all devices. The placeholder value (9999) will match to any value read from the device when comparing MipModel objects.</div></div>",2155:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The combined node model and modifier numbers for each of the MIP devices.&nbsp; Ex: Model = 6285, Modifiers = RTK v2 (0100) - NodeModel = 62580100 Most models have 9999 placeholder modifier values because there is no significant interface difference between the different versions of the same base model.&nbsp; This placeholder value will match to any modifier value read from the device when comparing MipModel objects.</div></div>",2194:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Compare two MipModels::ModelNumber enum values (functionally the same as == operator overload for two MipModels::ModelNumber values).</div></div>",2195:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2195\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ModelNumber modelNumberFromStr(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">modelNumberString</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns a full ModelNumber integer value parsed from a model number string.</div></div>",2196:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2196\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ModelNumber modelNumberFromParts(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeModel&nbsp;</td><td class=\"PName last\">nodeModel,</td></tr><tr><td class=\"PType first\">Modifier&nbsp;</td><td class=\"PName last\">modifier</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs a full ModelNumber integer from node model and modifier sections. Ex: nodeModel: 6284, modifier: 4220 -&gt; 62844220</div></div>",2197:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2197\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> NodeModel nodeModelFromStr(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">modelNumberString</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns the NodeModel section of a ModelNumber as an integer value parsed from a model number string.</div></div>"});