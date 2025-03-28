NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/CaptureGyroBias.h",{1009:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1009\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">CaptureGyroBias</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial CaptureGyroBias command.</div></div>",1011:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1011\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const override</span></div></div>",1012:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1012\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> CaptureGyroBias MakeCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">dataToUse</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",1013:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1013\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GeometricVector getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">A GeometricVector object with the data returned from the device.</div></div>",1014:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1014\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const override</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",1015:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1015\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">CaptureGyroBias(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">samplingTimeInMS</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Private constructor creates a CaptureGyroBias object.&nbsp; Use MakeCommand methods to create an object.</div></div>",1016:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1016\" class=\"NDPrototype NoParameterForm\">MipTypes::Command commandType() <span class=\"SHKeyword\">const override</span></div></div>",1017:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1017\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> fieldDataByte() <span class=\"SHKeyword\">const override</span></div></div>",1018:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1018\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> responseExpected() <span class=\"SHKeyword\">const override</span></div></div>",1020:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1020\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_samplingTimeInMS</div><div class=\"TTSummary\">The uint16 CaptureGyroBiasData to send to the device.</div></div>"});