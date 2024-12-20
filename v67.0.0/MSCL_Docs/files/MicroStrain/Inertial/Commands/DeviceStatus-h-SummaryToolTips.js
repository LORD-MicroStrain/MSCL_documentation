NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/DeviceStatus.h",{927:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype927\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DeviceStatus</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial DeviceStatus command.</div></div>",929:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype929\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",930:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype930\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> DeviceStatus MakeGetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td class=\"PName last\">model,</td></tr><tr><td class=\"PModifierQualifier first\">DeviceStatusData::</td><td class=\"PType\">StatusSelector&nbsp;</td><td class=\"PName last\">statusSelector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",931:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype931\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> DeviceStatus MakeGetBasicCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td class=\"PName last\">model</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",932:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype932\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> DeviceStatus MakeGetDiagnosticCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td class=\"PName last\">model</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",933:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype933\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> DeviceStatusData getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",934:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype934\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",935:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a DeviceStatus object.&nbsp; Use Make___Command methods to create an object.</div></div>",936:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype936\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",937:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype937\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",938:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype938\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",940:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype940\" class=\"NDPrototype NoParameterForm\">MipModels::NodeModel m_model</div><div class=\"TTSummary\">The inertial &lt;NodeModel&gt; of the device.</div></div>",941:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype941\" class=\"NDPrototype NoParameterForm\">DeviceStatusData::StatusSelector m_statusSelector</div><div class=\"TTSummary\">The &lt;StatusSelector&gt; to determine</div></div>"});