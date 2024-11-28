NDSummary.OnToolTipsLoaded("CClass:MipCommandBytes",{2105:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains an &lt;Command&gt; id and a BytesCollection vector to store the actual bytes to send to the device for that command.</div></div>",2106:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2106\" class=\"NDPrototype NoParameterForm\">MipTypes::Command id</div><div class=\"TTSummary\">MipTypes::Command this object represents</div></div>",2107:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2107\" class=\"NDPrototype NoParameterForm\">BytesCollection commands</div><div class=\"TTSummary\">BytesCollection of raw command bytes</div></div>",2108:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2108\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> buildCmdFailed</div></div>",2109:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2109\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> sendCmdFailed</div></div>",2110:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2110\" class=\"NDPrototype NoParameterForm\">MipCommandBytes() : buildCmdFailed(<span class=\"SHKeyword\">false</span>), sendCmdFailed(<span class=\"SHKeyword\">false</span>)</div><div class=\"TTSummary\">Default constructor for MipCommandBytes object</div></div>",2111:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2111\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipCommandBytes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">_id</td></tr></table></td><td class=\"PAfterParameters\">) : id(_id), buildCmdFailed(<span class=\"SHKeyword\">false</span>), sendCmdFailed(<span class=\"SHKeyword\">false</span>)</td></tr></table></div><div class=\"TTSummary\">Constructor for MipCommandBytes object</div></div>",2112:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2112\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipCommandBytes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">_id,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PName last\">_cmd</td></tr></table></td><td class=\"PAfterParameters\">) : id(_id), commands({ _cmd }), buildCmdFailed(<span class=\"SHKeyword\">false</span>), sendCmdFailed(<span class=\"SHKeyword\">false</span>)</td></tr></table></div><div class=\"TTSummary\">Constructor for MipCommandBytes object</div></div>",2113:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2113\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipCommandBytes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">_id,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">BytesCollection&nbsp;</td><td class=\"PName last\">_cmds</td></tr></table></td><td class=\"PAfterParameters\">) : id(_id), commands(_cmds), buildCmdFailed(<span class=\"SHKeyword\">false</span>), sendCmdFailed(<span class=\"SHKeyword\">false</span>)</td></tr></table></div><div class=\"TTSummary\">Constructor for MipCommandBytes object</div></div>",2114:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2114\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> add(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Bytes&nbsp;</td><td class=\"PName last\">cmd</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Add raw command Bytes to commands BytesCollection</div></div>",2115:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2115\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> valid()</div><div class=\"TTSummary\">Indicates whether this object contains any relevant information, specifically whether it contains any command Bytes or has been marked for failure.</div></div>",2116:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A vector of MipCommandBytes</div></div>",2117:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A ValueType vector</div></div>",2118:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A Value vector</div></div>",2119:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A list of &lt;MipCommandParameterList&gt; command/parameter definitions</div></div>",2120:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A MipTypes::FunctionSelector vector</div></div>",2121:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A map of locations and values to match in a MIP response to determine success</div></div>"});