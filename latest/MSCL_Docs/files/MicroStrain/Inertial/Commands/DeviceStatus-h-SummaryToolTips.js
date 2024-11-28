NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/DeviceStatus.h",{981:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype981\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DeviceStatus</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial DeviceStatus command.</div></div>",983:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype983\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",984:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype984\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> DeviceStatus MakeGetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td class=\"PName last\">model,</td></tr><tr><td class=\"PModifierQualifier first\">DeviceStatusData::</td><td class=\"PType\">StatusSelector&nbsp;</td><td class=\"PName last\">statusSelector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",985:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype985\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> DeviceStatus MakeGetBasicCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td class=\"PName last\">model</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",986:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype986\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> DeviceStatus MakeGetDiagnosticCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td class=\"PName last\">model</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",987:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype987\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> DeviceStatusData getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",988:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype988\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",989:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a DeviceStatus object.&nbsp; Use Make___Command methods to create an object.</div></div>",990:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype990\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",991:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype991\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",992:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype992\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",994:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype994\" class=\"NDPrototype NoParameterForm\">MipModels::NodeModel m_model</div><div class=\"TTSummary\">The inertial &lt;NodeModel&gt; of the device.</div></div>",995:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype995\" class=\"NDPrototype NoParameterForm\">DeviceStatusData::StatusSelector m_statusSelector</div><div class=\"TTSummary\">The &lt;StatusSelector&gt; to determine</div></div>"});