NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/PingResponse.h",{5382:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5382\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">PingResponse</div></div></div><div class=\"TTSummary\">Represents the response to a Long Ping Node command</div></div>",5384:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5384\" class=\"NDPrototype NoParameterForm\">PingResponse()</div><div class=\"TTSummary\">Creates a PingResponse with default values</div></div>",5385:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5385\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">PingResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">success,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">nodeRssi,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">baseRssi</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a PingResponse with the given parameters</div></div>",5386:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5386\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> PingResponse ResponseSuccess(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">nodeRssi,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">baseRssi</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a PingResponse with a successful response</div></div>",5387:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5387\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> PingResponse ResponseFail()</div><div class=\"TTSummary\">Creates a PingResponse with a fail response</div></div>",5389:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5389\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_success</div><div class=\"TTSummary\">Whether or not the Long Ping response was a success</div></div>",5390:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5390\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> m_nodeRssi</div><div class=\"TTSummary\">The node RSSI value received in the Long Ping response</div></div>",5391:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5391\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> m_baseRssi</div><div class=\"TTSummary\">The base station RSSI value received in the Long Ping response</div></div>",5393:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5393\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> success() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether or not the Long Ping command was a success (the node responded).</div></div>",5394:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5394\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> nodeRssi() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node RSSI that was returned with the response (if success() returns true).&nbsp; This is the signal strength at which the Node received the BaseStation\'s command packet.</div></div>",5395:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5395\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> baseRssi() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the base station RSSI that was returned with the response (if success() returns true).&nbsp; This is the signal strength at which the BaseStation received the Nodes\'s response packet.</div></div>"});