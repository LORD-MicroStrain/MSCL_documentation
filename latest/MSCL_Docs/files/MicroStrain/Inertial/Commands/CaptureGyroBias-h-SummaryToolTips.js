NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/CaptureGyroBias.h",{995:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype995\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">CaptureGyroBias</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial CaptureGyroBias command.</div></div>",997:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype997\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",998:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype998\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> CaptureGyroBias MakeCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">dataToUse</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",999:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype999\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GeometricVector getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">A GeometricVector object with the data returned from the device.</div></div>",1000:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1000\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",1001:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1001\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">CaptureGyroBias(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">samplingTimeInMS</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Private constructor creates a CaptureGyroBias object.&nbsp; Use MakeCommand methods to create an object.</div></div>",1002:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1002\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",1003:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1003\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",1004:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1004\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",1006:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1006\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_samplingTimeInMS</div><div class=\"TTSummary\">The uint16 CaptureGyroBiasData to send to the device.</div></div>"});