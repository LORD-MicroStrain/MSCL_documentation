NDSummary.OnToolTipsLoaded("CClass:PingResponse",{5443:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5443\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">PingResponse</div></div></div><div class=\"TTSummary\">Represents the response to a Long Ping Node command</div></div>",5445:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5445\" class=\"NDPrototype NoParameterForm\">PingResponse()</div><div class=\"TTSummary\">Creates a PingResponse with default values</div></div>",5446:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5446\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">PingResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">success,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">nodeRssi,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">baseRssi</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a PingResponse with the given parameters</div></div>",5447:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5447\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> PingResponse ResponseSuccess(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">nodeRssi,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">baseRssi</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a PingResponse with a successful response</div></div>",5448:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5448\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> PingResponse ResponseFail()</div><div class=\"TTSummary\">Creates a PingResponse with a fail response</div></div>",5450:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5450\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_success</div><div class=\"TTSummary\">Whether or not the Long Ping response was a success</div></div>",5451:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5451\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> m_nodeRssi</div><div class=\"TTSummary\">The node RSSI value received in the Long Ping response</div></div>",5452:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5452\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> m_baseRssi</div><div class=\"TTSummary\">The base station RSSI value received in the Long Ping response</div></div>",5454:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5454\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> success() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether or not the Long Ping command was a success (the node responded).</div></div>",5455:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5455\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> nodeRssi() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node RSSI that was returned with the response (if success() returns true).&nbsp; This is the signal strength at which the Node received the BaseStation\'s command packet.</div></div>",5456:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5456\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> baseRssi() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the base station RSSI that was returned with the response (if success() returns true).&nbsp; This is the signal strength at which the BaseStation received the Nodes\'s response packet.</div></div>"});