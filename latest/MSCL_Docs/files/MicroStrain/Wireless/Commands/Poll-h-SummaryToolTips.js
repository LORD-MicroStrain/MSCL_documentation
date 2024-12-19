NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/Poll.h",{5102:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5102\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Poll</div></div></div><div class=\"TTSummary\">Contains logic for the Poll Node command.</div></div>",5104:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5104\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessPacket::</td><td class=\"PType\">AsppVersion&nbsp;</td><td></td><td class=\"PName last\">asppVer,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td></td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">chMask</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the Poll command packet.</div></div>",5105:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5105\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the AutoBalance Node command</div></div>",5107:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5107\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Poll Response object</div></div>",5109:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5109\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address to look for in the response.</div></div>",5110:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5110\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_started</div><div class=\"TTSummary\">Whether the Poll has been successfully started or not (as reported by the Node).</div></div>",5111:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5111\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_timeUntilCompletion</div><div class=\"TTSummary\">The amount of time (in seconds) that the Poll operation will take to complete.&nbsp; This value gets reported by the Node before starting the Poll.</div></div>",5112:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5112\" class=\"NDPrototype NoParameterForm\">WirelessPollData m_result</div><div class=\"TTSummary\">The &lt;WirelessPollData&gt; response from a successful poll command.</div></div>",5114:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5114\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> started() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the Poll operation has started or not.</div></div>",5115:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5115\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> timeToComplete() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the total time (in seconds) that the Node reported it will take to complete the Poll operation.</div></div>",5116:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5116\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> WirelessPollData&amp; result() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the &lt;WirelessPollData&gt; from a successful poll command.</div></div>",5117:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5117\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> match(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the WirelessPacket passed in matches the expected response pattern\'s bytes.</div></div>",5118:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5118\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> match_nodeReceived(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if the WirelessPacket passed in matches the &quot;Node Received&quot; packet.</div></div>"});