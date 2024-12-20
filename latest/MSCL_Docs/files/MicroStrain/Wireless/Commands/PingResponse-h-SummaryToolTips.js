NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/PingResponse.h",{4984:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4984\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">PingResponse</div></div></div><div class=\"TTSummary\">Represents the response to a Long Ping Node command</div></div>",4986:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4986\" class=\"NDPrototype NoParameterForm\">PingResponse()</div><div class=\"TTSummary\">Creates a PingResponse with default values</div></div>",4987:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4987\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">PingResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">success,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">nodeRssi,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">baseRssi</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a PingResponse with the given parameters</div></div>",4988:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4988\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> PingResponse ResponseSuccess(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">nodeRssi,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">baseRssi</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a PingResponse with a successful response</div></div>",4989:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4989\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> PingResponse ResponseFail()</div><div class=\"TTSummary\">Creates a PingResponse with a fail response</div></div>",4991:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4991\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_success</div><div class=\"TTSummary\">Whether or not the Long Ping response was a success</div></div>",4992:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4992\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> m_nodeRssi</div><div class=\"TTSummary\">The node RSSI value received in the Long Ping response</div></div>",4993:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4993\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> m_baseRssi</div><div class=\"TTSummary\">The base station RSSI value received in the Long Ping response</div></div>",4995:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4995\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> success() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether or not the Long Ping command was a success (the node responded).</div></div>",4996:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4996\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> nodeRssi() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node RSSI that was returned with the response (if success() returns true).&nbsp; This is the signal strength at which the Node received the BaseStation\'s command packet.</div></div>",4997:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4997\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> baseRssi() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the base station RSSI that was returned with the response (if success() returns true).&nbsp; This is the signal strength at which the BaseStation received the Nodes\'s response packet.</div></div>"});