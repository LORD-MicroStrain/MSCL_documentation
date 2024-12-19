NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/AutoBalance_v2.h",{5592:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5592\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AutoBalance_v2</div></div></div><div class=\"TTSummary\">Contains logic for the Auto Balance Node command (Version 2).</div></div>",5594:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5594\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessPacket::</td><td class=\"PType\">AsppVersion&nbsp;</td><td class=\"PName last\">asppVer,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">channelNumber,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">targetPercent</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the AutoBalance_v2 command packet.</div></div>",5595:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5595\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the AutoBalance Node command</div></div>",5597:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5597\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">channelNumber,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">targetPercent,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an AutoBalance Response object</div></div>",5599:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5599\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address to look for in the response.</div></div>",5600:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5600\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> m_channelNumber</div><div class=\"TTSummary\">The channel number to look for in the response.</div></div>",5601:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5601\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_targetPercent</div><div class=\"TTSummary\">The target percentage to look for in the response.</div></div>",5602:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5602\" class=\"NDPrototype NoParameterForm\">AutoBalanceResult m_result</div><div class=\"TTSummary\">The AutoBalanceResult containing info about the autobalance response.</div></div>",5604:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5604\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> match(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the WirelessPacket passed in matches the expected response pattern\'s bytes</div></div>",5605:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5605\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> AutoBalanceResult&amp; result() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the AutoBalanceResult of the command.</div></div>"});