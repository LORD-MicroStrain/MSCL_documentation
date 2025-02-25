NDContentPage.OnToolTipsLoaded({1236:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The base model numbers for each of the MIP devices.&nbsp; Ex: 6284-4220 (3DM-GQ7) NodeModel is 6284</div></div>",1274:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The modifier options for MIP devices.&nbsp; Ex: 6285-0100 (3DM-RTK) Modifier is 0100 This list does not define modifiers for all devices. The placeholder value (9999) will match to any value read from the device when comparing MipModel objects.</div></div>",1278:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The combined node model and modifier numbers for each of the MIP devices.&nbsp; Ex: Model = 6285, Modifiers = RTK v2 (0100) - NodeModel = 62580100 Most models have 9999 placeholder modifier values because there is no significant interface difference between the different versions of the same base model.&nbsp; This placeholder value will match to any modifier value read from the device when comparing MipModel objects.</div></div>",1321:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1321\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipModel</div></div></div><div class=\"TTSummary\">Contains the model information of MIP devices.</div></div>",1323:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1323\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipModel(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">modelNumberStr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipModel object from the model string read from a MIP device (inertial, RTK)</div></div>",1332:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1332\" class=\"NDPrototype NoParameterForm\">MipModels::NodeModel nodeModel() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the NodeModel value for this model number. Ex: str: &quot;6284-4220&quot;, nodeModel: 6284</div></div>",1333:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1333\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> modifier() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the modifier value for this model number. Ex: str: &quot;6284-4220&quot;, modifier: 4220 Note: most actual modifier values are not defined in the Modifier enum - actual value read from the device likely won\'t match.</div></div>",1334:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1334\" class=\"NDPrototype NoParameterForm\">MipModels::ModelNumber modelNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the full ModelNumber value for this model number. Ex: str: &quot;6284-4220&quot;, modelNumber: 62844220 Note: most values in the ModelNumber enum use the placeholder modifier - actual value read from the device likely won\'t match.</div></div>"});