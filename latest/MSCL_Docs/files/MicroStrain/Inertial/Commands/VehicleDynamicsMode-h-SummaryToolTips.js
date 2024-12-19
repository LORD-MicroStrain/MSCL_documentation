NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/VehicleDynamicsMode.h",{326:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype326\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">VehicleDynamicsMode</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial VehicleDynamicsMode command.</div></div>",328:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype328\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",329:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype329\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> VehicleDynamicsMode MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> InertialTypes::</td><td class=\"PType\">VehicleModeType&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">vehicleType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: dataToUse The VehicleModeType object to set.</div></div>",330:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype330\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> VehicleDynamicsMode MakeGetCommand()</div></div>",331:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype331\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> InertialTypes::VehicleModeType getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",332:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype332\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",333:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a VehicleDynamicsMode object.&nbsp; Use Make___Command methods to create an object.</div></div>",334:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype334\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",335:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype335\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",336:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype336\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",338:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype338\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",339:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype339\" class=\"NDPrototype NoParameterForm\">InertialTypes::VehicleModeType m_VehicleType</div><div class=\"TTSummary\">The uint8 to send to the device.</div></div>"});