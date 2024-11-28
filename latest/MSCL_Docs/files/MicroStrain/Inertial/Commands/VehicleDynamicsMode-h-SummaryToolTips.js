NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/VehicleDynamicsMode.h",{290:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype290\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">VehicleDynamicsMode</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial VehicleDynamicsMode command.</div></div>",292:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype292\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",293:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype293\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> VehicleDynamicsMode MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> InertialTypes::</td><td class=\"PType\">VehicleModeType&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">vehicleType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: dataToUse The VehicleModeType object to set.</div></div>",294:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype294\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> VehicleDynamicsMode MakeGetCommand()</div></div>",295:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype295\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> InertialTypes::VehicleModeType getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",296:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype296\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",297:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a VehicleDynamicsMode object.&nbsp; Use Make___Command methods to create an object.</div></div>",298:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype298\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",299:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype299\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",300:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype300\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",302:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype302\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",303:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype303\" class=\"NDPrototype NoParameterForm\">InertialTypes::VehicleModeType m_VehicleType</div><div class=\"TTSummary\">The uint8 to send to the device.</div></div>"});