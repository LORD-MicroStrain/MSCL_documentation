NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/GNSS_SourceControl.h",{561:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype561\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GNSS_SourceControl</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial GNSS_SourceControl command.</div></div>",563:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype563\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",564:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype564\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GNSS_SourceControl MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> InertialTypes::</td><td class=\"PType\">GNSS_Source&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">dataToUse</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: dataToUse The GNSS_Source object to set.</div></div>",565:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype565\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> GNSS_SourceControl MakeGetCommand()</div></div>",566:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype566\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> InertialTypes::GNSS_Source getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",567:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype567\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",568:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a GNSS_SourceControl object.&nbsp; Use Make___Command methods to create an object.</div></div>",569:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype569\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",570:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype570\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",571:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype571\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",573:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype573\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",574:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype574\" class=\"NDPrototype NoParameterForm\">InertialTypes::GNSS_Source m_gnssSource</div><div class=\"TTSummary\">The GNSS_Source to send to the device.</div></div>"});