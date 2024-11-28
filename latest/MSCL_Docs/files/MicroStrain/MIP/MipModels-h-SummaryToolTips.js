NDSummary.OnToolTipsLoaded("File:MicroStrain/MIP/MipModels.h",{4294:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4294\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipModels</div></div></div><div class=\"TTSummary\">Contains the model number information of MIP devices.</div></div>",4296:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The base model numbers for each of the MIP devices.&nbsp; Ex: 6284-4220 (3DM-GQ7) NodeModel is 6284</div></div>",4334:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The modifier options for MIP devices.&nbsp; Ex: 6285-0100 (3DM-RTK) Modifier is 0100 This list does not define modifiers for all devices. The placeholder value (9999) will match to any value read from the device when comparing MipModel objects.</div></div>",4338:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The combined node model and modifier numbers for each of the MIP devices.&nbsp; Ex: Model = 6285, Modifiers = RTK v2 (0100) - NodeModel = 62580100 Most models have 9999 placeholder modifier values because there is no significant interface difference between the different versions of the same base model.&nbsp; This placeholder value will match to any modifier value read from the device when comparing MipModel objects.</div></div>",4378:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Compare two MipModels::ModelNumber enum values (functionally the same as == operator overload for two MipModels::ModelNumber values).</div></div>",4379:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4379\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ModelNumber modelNumberFromStr(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">modelNumberString</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns a full ModelNumber integer value parsed from a model number string.</div></div>",4380:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4380\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ModelNumber modelNumberFromParts(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeModel&nbsp;</td><td class=\"PName last\">nodeModel,</td></tr><tr><td class=\"PType first\">Modifier&nbsp;</td><td class=\"PName last\">modifier</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs a full ModelNumber integer from node model and modifier sections. Ex: nodeModel: 6284, modifier: 4220 -&gt; 62844220</div></div>",4381:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4381\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> NodeModel nodeModelFromStr(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">modelNumberString</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns the NodeModel section of a ModelNumber as an integer value parsed from a model number string.</div></div>",4382:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4382\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static uint32</span> modifierFromStr(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">modelNumberString</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns the Modifier section of a ModelNumber as an integer value parsed from a model number string.</div></div>",4383:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4383\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> NodeModel nodeModelFromModelNumber(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ModelNumber&nbsp;</td><td class=\"PName last\">modelNumber</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns the NodeModel section of a full ModelNumber integer.</div></div>",4384:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4384\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static uint32</span> modifierFromModelNumber(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ModelNumber&nbsp;</td><td class=\"PName last\">modelNumber</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns the Modifier section of a full ModelNumber integer.</div></div>",4385:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4385\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipModel</div></div></div><div class=\"TTSummary\">Contains the model information of MIP devices.</div></div>",4387:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">Constant MipModel object definitions for each known MIP device.&nbsp; Most models have 9999 placeholder modifier values because there is no significant interface difference between the different versions of the same base model.&nbsp; This placeholder value will match to any modifier value read from the device when comparing MipModel objects.</div></div>",4389:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4389\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipModel(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipModels::</td><td class=\"PType\">ModelNumber&nbsp;</td><td class=\"PName last\">modelNumber</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipModel object from a MipModels::ModelNumber value.&nbsp; This is used for instantiating known MipModel constants</div></div>",4390:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4390\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipModel(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">modelNumberStr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipModel object from the model string read from a MIP device (inertial, RTK)</div></div>",4391:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4391\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipModel(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipModel&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">copy</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipModel object based on another MipModel object</div></div>",4393:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Define == behavior when comparing two MipModel objects (functionally the same as MipModel::equals()).</div></div>",4394:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Define != behavior when comparing two MipModel objects (functionally the same as MipModel::equals()).</div></div>",4395:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Define == behavior when comparing two MipModel objects (functionally the same as MipModel::equals()).</div></div>",4396:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Define != behavior when comparing two MipModel objects (functionally the same as MipModel::equals()).</div></div>",4397:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Define behavior when casting a MipModel to std::string (funtionally the same as MipModel::str()).</div></div>",4399:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4399\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> equals(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipModel&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">compare</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Function to compare two MipModel objects for equality (functionally the same as overloaded == operator).</div></div>",4400:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4400\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> std::<span class=\"SHKeyword\">string</span> str() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the model string formatted as it would be read from the device (ex: 6284-4220) (funtionally the same as std::string overloaded operator).</div></div>",4401:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4401\" class=\"NDPrototype NoParameterForm\">MipModels::NodeModel nodeModel() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the NodeModel value for this model number. Ex: str: &quot;6284-4220&quot;, nodeModel: 6284</div></div>",4402:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4402\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> modifier() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the modifier value for this model number. Ex: str: &quot;6284-4220&quot;, modifier: 4220 Note: most actual modifier values are not defined in the Modifier enum - actual value read from the device likely won\'t match.</div></div>",4403:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4403\" class=\"NDPrototype NoParameterForm\">MipModels::ModelNumber modelNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the full ModelNumber value for this model number. Ex: str: &quot;6284-4220&quot;, modelNumber: 62844220 Note: most values in the ModelNumber enum use the placeholder modifier - actual value read from the device likely won\'t match.</div></div>",4404:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4404\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static void</span> setBaseModelMap(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">map&lt;<span class=\"SHKeyword\">uint32</span>, <span class=\"SHKeyword\">const</span> MipModel&amp;&gt;&nbsp;</td><td class=\"PName last\">baseModels</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the BASE_MODEL_MAP to map custom model definitions to base models with known features.</div></div>",4405:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4405\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static const</span> MipModel&amp; baseModelLookup(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipModel&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">model</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Finds the base model for the specified model as defined by the BASE_MODEL_MAP. The specified model is returned without changes if no base model is found.</div></div>",4406:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4406\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> MipModel&amp; baseModel() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the base model for this device.&nbsp; This function is present with the intent it will be overloaded for custom model number functionality.</div></div>",4408:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Define == behavior when comparing a MipModels::ModelNumber enum value and MipModel object (functionally the same as comparing the MipModel::modelNumber() value with MipModels::modelNumbersEqual()).</div></div>",4409:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Define != behavior when comparing a MipModels::ModelNumber enum value and MipModel object (functionally the same as comparing the MipModel::modelNumber() value with MipModels::modelNumbersEqual()).</div></div>"});