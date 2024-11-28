NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/StartSyncSampling.h",{5234:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5234\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">StartSyncSampling</div></div></div><div class=\"TTSummary\">Contains logic for the Start Sync Sampling Node command</div></div>",5236:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5236\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessPacket::</td><td class=\"PType\">AsppVersion&nbsp;</td><td class=\"PName last\">asppVer,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the Start Sync Sampling command packet</div></div>",5237:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5237\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the Start Sync Sampling Node command</div></div>",5239:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5239\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a StartSyncSampling Response object</div></div>",5241:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5241\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address to look for in the response</div></div>",5243:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5243\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> matchSuccessResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the WirelessPacket passed in matches the expected response pattern\'s bytes</div></div>"});