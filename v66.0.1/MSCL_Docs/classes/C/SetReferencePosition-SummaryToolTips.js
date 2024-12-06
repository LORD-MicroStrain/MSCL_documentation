NDSummary.OnToolTipsLoaded("CClass:SetReferencePosition",{515:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype515\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SetReferencePosition</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial Set Reference Position command.</div></div>",517:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype517\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",518:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype518\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> SetReferencePosition MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">FixedReferencePositionData&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: data The FixedReferencePositionData object to set.</div></div>",519:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype519\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> SetReferencePosition MakeGetCommand()</div></div>",520:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype520\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> FixedReferencePositionData getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",521:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype521\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",522:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a SetReferencePosition object.&nbsp; Use Make___Command methods to create an object.</div></div>",523:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype523\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",524:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype524\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",525:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype525\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",527:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype527\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",528:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype528\" class=\"NDPrototype NoParameterForm\">FixedReferencePositionData m_data</div><div class=\"TTSummary\">The FixedReferencePositionData for this node.</div></div>"});