NDSummary.OnToolTipsLoaded("CClass:GNSS_SourceControl",{616:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype616\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GNSS_SourceControl</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial GNSS_SourceControl command.</div></div>",618:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype618\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",619:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype619\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GNSS_SourceControl MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> InertialTypes::</td><td class=\"PType\">GNSS_Source&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">dataToUse</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: dataToUse The GNSS_Source object to set.</div></div>",620:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype620\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> GNSS_SourceControl MakeGetCommand()</div></div>",621:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype621\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> InertialTypes::GNSS_Source getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",622:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype622\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",623:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a GNSS_SourceControl object.&nbsp; Use Make___Command methods to create an object.</div></div>",624:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype624\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",625:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype625\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",626:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype626\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",628:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype628\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",629:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype629\" class=\"NDPrototype NoParameterForm\">InertialTypes::GNSS_Source m_gnssSource</div><div class=\"TTSummary\">The GNSS_Source to send to the device.</div></div>"});