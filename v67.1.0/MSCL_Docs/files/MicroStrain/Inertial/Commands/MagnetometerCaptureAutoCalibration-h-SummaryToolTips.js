NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/MagnetometerCaptureAutoCalibration.h",{557:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype557\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MagnetometerCaptureAutoCalibration</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial MagnetometerCaptureAutoCalibration command.</div></div>",559:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype559\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const override</span></div></div>",560:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype560\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> MagnetometerCaptureAutoCalibration MakeCommand()</div></div>",561:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype561\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> MagnetometerCaptureAutoCalibration MakeSaveCommand()</div></div>",562:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype562\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">A GeometricVector object with the data returned from the device.</div></div>",563:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype563\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const override</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",564:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype564\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MagnetometerCaptureAutoCalibration(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">FunctionSelector&nbsp;</td><td class=\"PName last\">functionSelector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Private constructor creates a MagnetometerCaptureAutoCalibration object.&nbsp; Use MakeCommand methods to create an object.</div></div>",565:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype565\" class=\"NDPrototype NoParameterForm\">MipTypes::Command commandType() <span class=\"SHKeyword\">const override</span></div></div>",566:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype566\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> responseExpected() <span class=\"SHKeyword\">const override</span></div></div>",568:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype568\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",570:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype570\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> fieldDataByte() <span class=\"SHKeyword\">const override</span></div></div>"});