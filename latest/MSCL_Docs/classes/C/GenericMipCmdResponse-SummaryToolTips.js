NDSummary.OnToolTipsLoaded("CClass:GenericMipCmdResponse",{2961:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2961\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GenericMipCmdResponse</div></div></div><div class=\"TTSummary\">Represents the response to a GenericMipCommand.</div></div>",2963:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2963\" class=\"NDPrototype NoParameterForm\">GenericMipCmdResponse()</div><div class=\"TTSummary\">Creates a GenericMipCmdResponse with default values.</div></div>",2964:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2964\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">GenericMipCmdResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ResponsePattern::</td><td class=\"PType\">State&nbsp;</td><td class=\"PName last\">state,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">success,</td></tr><tr><td class=\"PModifierQualifier first\">MipPacket::</td><td class=\"PType\">MipAckNack&nbsp;</td><td class=\"PName last\">errorCode,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">cmdName,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ByteStream&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a GenericMipCmdResponse with the given parameters.</div></div>",2965:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2965\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GenericMipCmdResponse ResponseSuccess(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">cmdName,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">ByteStream&nbsp;</td><td></td><td class=\"PName\">data&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">ByteStream()</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a GenericMipCmdResponse with a successful response.</div></div>",2966:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2966\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GenericMipCmdResponse ResponseFail(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ResponsePattern::</td><td class=\"PType\">State&nbsp;</td><td></td><td class=\"PName last\">errorState,</td></tr><tr><td class=\"PModifierQualifier first\">MipPacket::</td><td class=\"PType\">MipAckNack&nbsp;</td><td></td><td class=\"PName last\">errorCode,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">cmdName</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a GenericMipCmdResponse with a fail response.</div></div>",2968:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2968\" class=\"NDPrototype NoParameterForm\">ByteStream m_data</div><div class=\"TTSummary\">The &lt;ByteStream that holds the data received from the response, if any.</div></div>",2970:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2970\" class=\"NDPrototype NoParameterForm\">ByteStream data() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data that was received from the response, if any.</div></div>"});