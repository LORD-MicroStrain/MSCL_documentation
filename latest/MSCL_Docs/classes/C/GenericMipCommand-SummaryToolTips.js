NDSummary.OnToolTipsLoaded("CClass:GenericMipCommand",{2046:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2046\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GenericMipCommand</div></div></div><div class=\"TTSummary\">Represents a base class for MIP commands</div></div>",2048:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">The byte index of a command\'s descriptor set identifier</div></div>",2049:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">The byte index of a command\'s field descriptor</div></div>",2050:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">The byte index of a command\'s function selector (if present)</div></div>",2052:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2052\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">descSetByte,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">cmdByte,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">fieldData&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">Bytes()</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the command for a MIP command, and returns a ByteStream containing the bytes to send</div></div>",2053:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2053\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td></td><td class=\"PName\">commandId,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">fieldData&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">Bytes()</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the command for a MIP command, and returns a ByteStream containing the bytes to send</div></div>",2054:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2054\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MipTypes::Command peekCommandId(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">commandBytes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Read the descriptor set and field descriptor from the provided command bytes.&nbsp; Note: The provided command bytes are assumed to be formatted properly, no validation occurs.</div></div>",2055:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2055\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MipTypes::FunctionSelector peekFunctionSelector(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">commandBytes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Read the function selector from the provided command bytes.&nbsp; Note: The provided command bytes are assumed to be formatted properly, no validation occurs.</div></div>",2056:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2056\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">fieldData&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">Bytes()</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the command for a derived MIP command, and returns a ByteStream containing the bytes to send</div></div>",2057:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Gets the MipTypes::Command</div></div>"});