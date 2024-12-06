NDSummary.OnToolTipsLoaded("CClass:MipModel",{4502:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4502\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipModel</div></div></div><div class=\"TTSummary\">Contains the model information of MIP devices.</div></div>",4504:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">Constant MipModel object definitions for each known MIP device.&nbsp; Most models have 9999 placeholder modifier values because there is no significant interface difference between the different versions of the same base model.&nbsp; This placeholder value will match to any modifier value read from the device when comparing MipModel objects.</div></div>",4506:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4506\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipModel(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipModels::</td><td class=\"PType\">ModelNumber&nbsp;</td><td class=\"PName last\">modelNumber</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipModel object from a MipModels::ModelNumber value.&nbsp; This is used for instantiating known MipModel constants</div></div>",4507:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4507\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipModel(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">modelNumberStr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipModel object from the model string read from a MIP device (inertial, RTK)</div></div>",4508:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4508\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipModel(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipModel&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">copy</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipModel object based on another MipModel object</div></div>",4510:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Define == behavior when comparing two MipModel objects (functionally the same as MipModel::equals()).</div></div>",4511:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Define != behavior when comparing two MipModel objects (functionally the same as MipModel::equals()).</div></div>",4512:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Define == behavior when comparing two MipModel objects (functionally the same as MipModel::equals()).</div></div>",4513:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Define != behavior when comparing two MipModel objects (functionally the same as MipModel::equals()).</div></div>",4514:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Define behavior when casting a MipModel to std::string (funtionally the same as MipModel::str()).</div></div>",4516:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4516\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> equals(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipModel&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">compare</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Function to compare two MipModel objects for equality (functionally the same as overloaded == operator).</div></div>",4517:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4517\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> std::<span class=\"SHKeyword\">string</span> str() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the model string formatted as it would be read from the device (ex: 6284-4220) (funtionally the same as std::string overloaded operator).</div></div>",4518:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4518\" class=\"NDPrototype NoParameterForm\">MipModels::NodeModel nodeModel() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the NodeModel value for this model number. Ex: str: &quot;6284-4220&quot;, nodeModel: 6284</div></div>",4519:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4519\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> modifier() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the modifier value for this model number. Ex: str: &quot;6284-4220&quot;, modifier: 4220 Note: most actual modifier values are not defined in the Modifier enum - actual value read from the device likely won\'t match.</div></div>",4520:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4520\" class=\"NDPrototype NoParameterForm\">MipModels::ModelNumber modelNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the full ModelNumber value for this model number. Ex: str: &quot;6284-4220&quot;, modelNumber: 62844220 Note: most values in the ModelNumber enum use the placeholder modifier - actual value read from the device likely won\'t match.</div></div>",4521:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4521\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static void</span> setBaseModelMap(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">map&lt;<span class=\"SHKeyword\">uint32</span>, <span class=\"SHKeyword\">const</span> MipModel&amp;&gt;&nbsp;</td><td class=\"PName last\">baseModels</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the BASE_MODEL_MAP to map custom model definitions to base models with known features.</div></div>",4522:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4522\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static const</span> MipModel&amp; baseModelLookup(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipModel&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">model</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Finds the base model for the specified model as defined by the BASE_MODEL_MAP. The specified model is returned without changes if no base model is found.</div></div>",4523:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4523\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> MipModel&amp; baseModel() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the base model for this device.&nbsp; This function is present with the intent it will be overloaded for custom model number functionality.</div></div>",4525:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Define == behavior when comparing a MipModels::ModelNumber enum value and MipModel object (functionally the same as comparing the MipModel::modelNumber() value with MipModels::modelNumbersEqual()).</div></div>",4526:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Define != behavior when comparing a MipModels::ModelNumber enum value and MipModel object (functionally the same as comparing the MipModel::modelNumber() value with MipModels::modelNumbersEqual()).</div></div>"});