NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/DeviceStatus.h",{942:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype942\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DeviceStatus</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial DeviceStatus command.</div></div>",944:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype944\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",945:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype945\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> DeviceStatus MakeGetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td class=\"PName last\">model,</td></tr><tr><td class=\"PModifierQualifier first\">DeviceStatusData::</td><td class=\"PType\">StatusSelector&nbsp;</td><td class=\"PName last\">statusSelector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",946:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype946\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> DeviceStatus MakeGetBasicCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td class=\"PName last\">model</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",947:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype947\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> DeviceStatus MakeGetDiagnosticCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td class=\"PName last\">model</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",948:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype948\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> DeviceStatusData getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",949:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype949\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",950:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a DeviceStatus object.&nbsp; Use Make___Command methods to create an object.</div></div>",951:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype951\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",952:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype952\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",953:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype953\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",955:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype955\" class=\"NDPrototype NoParameterForm\">MipModels::NodeModel m_model</div><div class=\"TTSummary\">The inertial &lt;NodeModel&gt; of the device.</div></div>",956:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype956\" class=\"NDPrototype NoParameterForm\">DeviceStatusData::StatusSelector m_statusSelector</div><div class=\"TTSummary\">The &lt;StatusSelector&gt; to determine</div></div>"});