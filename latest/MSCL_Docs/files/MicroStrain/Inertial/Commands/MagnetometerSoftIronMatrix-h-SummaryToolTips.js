NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/MagnetometerSoftIronMatrix.h",{586:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype586\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MagnetometerSoftIronMatrix</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial MagnetometerSoftIronMatrix command.</div></div>",588:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype588\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",589:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype589\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MagnetometerSoftIronMatrix MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Matrix_3x3&nbsp;</td><td class=\"PName last\">dataToUse</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: dataToUse The Matrix_3x3 object to set.</div></div>",590:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype590\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> MagnetometerSoftIronMatrix MakeGetCommand()</div></div>",591:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype591\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Matrix_3x3 getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",592:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype592\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",593:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a MagnetometerSoftIronMatrix object.&nbsp; Use Make___Command methods to create an object.</div></div>",594:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype594\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",595:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype595\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",596:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype596\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",598:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype598\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",599:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype599\" class=\"NDPrototype NoParameterForm\">Matrix_3x3 m_matrix</div><div class=\"TTSummary\">The Matrix_3x3 to send to the device.</div></div>"});