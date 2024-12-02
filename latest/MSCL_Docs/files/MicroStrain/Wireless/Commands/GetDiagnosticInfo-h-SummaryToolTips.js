NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/GetDiagnosticInfo.h",{5532:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5532\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GetDiagnosticInfo</div></div></div><div class=\"TTSummary\">Contains logic for the Get Diagnostic Info Node command.</div></div>",5534:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5534\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessPacket::</td><td class=\"PType\">AsppVersion&nbsp;</td><td class=\"PName last\">asppVer,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the command packet.</div></div>",5535:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5535\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the GetDiagnosticInfo Node command.</div></div>",5537:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5537\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a GetDiagnosticInfo Response object</div></div>",5539:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5539\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address to look for in the Long Ping response.</div></div>",5540:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5540\" class=\"NDPrototype NoParameterForm\">ChannelData m_result</div><div class=\"TTSummary\">The &lt;ChannelData&gt; that holds the result data of the GetDiagnosticInfo Node command.</div></div>",5542:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5542\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> matchSuccessResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the WirelessPacket passed in matches the expected response pattern\'s bytes</div></div>",5543:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5543\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> ChannelData&amp; result() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the &lt;ChannelData&gt; that holds the result info from the response</div></div>"});