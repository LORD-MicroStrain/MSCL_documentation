NDSummary.OnToolTipsLoaded("CClass:MipCommandBytes",{3044:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains an &lt;Command&gt; id and a BytesCollection vector to store the actual bytes to send to the device for that command.</div></div>",3046:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3046\" class=\"NDPrototype NoParameterForm\">MipTypes::Command id</div><div class=\"TTSummary\">MipTypes::Command this object represents</div></div>",3047:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3047\" class=\"NDPrototype NoParameterForm\">BytesCollection commands</div><div class=\"TTSummary\">BytesCollection of raw command bytes</div></div>",3048:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3048\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> buildCmdFailed</div></div>",3049:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3049\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> sendCmdFailed</div></div>",3051:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3051\" class=\"NDPrototype NoParameterForm\">MipCommandBytes() : buildCmdFailed(<span class=\"SHKeyword\">false</span>), sendCmdFailed(<span class=\"SHKeyword\">false</span>)</div><div class=\"TTSummary\">Default constructor for MipCommandBytes object</div></div>",3052:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3052\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipCommandBytes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">_id</td></tr></table></td><td class=\"PAfterParameters\">) : id(_id), buildCmdFailed(<span class=\"SHKeyword\">false</span>), sendCmdFailed(<span class=\"SHKeyword\">false</span>)</td></tr></table></div><div class=\"TTSummary\">Constructor for MipCommandBytes object</div></div>",3053:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3053\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipCommandBytes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">_id,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PName last\">_cmd</td></tr></table></td><td class=\"PAfterParameters\">) : id(_id), commands({ _cmd }), buildCmdFailed(<span class=\"SHKeyword\">false</span>), sendCmdFailed(<span class=\"SHKeyword\">false</span>)</td></tr></table></div><div class=\"TTSummary\">Constructor for MipCommandBytes object</div></div>",3054:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3054\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipCommandBytes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">_id,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">BytesCollection&nbsp;</td><td class=\"PName last\">_cmds</td></tr></table></td><td class=\"PAfterParameters\">) : id(_id), commands(_cmds), buildCmdFailed(<span class=\"SHKeyword\">false</span>), sendCmdFailed(<span class=\"SHKeyword\">false</span>)</td></tr></table></div><div class=\"TTSummary\">Constructor for MipCommandBytes object</div></div>",3055:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3055\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> add(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Bytes&nbsp;</td><td class=\"PName last\">cmd</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Add raw command Bytes to commands BytesCollection</div></div>",3056:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3056\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> valid()</div><div class=\"TTSummary\">Indicates whether this object contains any relevant information, specifically whether it contains any command Bytes or has been marked for failure.</div></div>",3058:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A vector of MipCommandBytes</div></div>",3059:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A ValueType vector</div></div>",3060:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A Value vector</div></div>",3061:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A list of &lt;MipCommandParameterList&gt; command/parameter definitions</div></div>",3062:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A MipTypes::FunctionSelector vector</div></div>",3063:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A map of locations and values to match in a MIP response to determine success</div></div>"});