NDSummary.OnToolTipsLoaded("CClass:NodeMemory",{9300:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9300\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeMemory</div></div></div><div class=\"TTSummary\">Provides easy access to the datalogging memory on a WirelessNode.</div></div>",9302:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9302\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">NodeMemory(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">WirelessNode&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">node</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a NodeMemory object.</div></div>",9303:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9303\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> ~NodeMemory()</div><div class=\"TTSummary\">Destroys a NodeMemory object.</div></div>",9305:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9305\" class=\"NDPrototype NoParameterForm\">WirelessNode&amp; m_node</div><div class=\"TTSummary\">The WirelessNode to access the memory of.</div></div>",9306:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9306\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_totalBytes</div><div class=\"TTSummary\">The total number of bytes that can be downloaded.</div></div>",9307:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9307\" class=\"NDPrototype NoParameterForm\">ByteStream m_currentData</div><div class=\"TTSummary\">Contains data for the current page that has been downloaded.</div></div>",9309:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9309\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> nextByte() = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Reads the next byte from the datalogging data.</div></div>",9310:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9310\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> isNextByteNewHeader() = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Checks if the next byte will be the start of a new header.&nbsp; Note: upon returning from this function, the read position will not have changed.</div></div>",9311:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9311\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint32</span> readIndex() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Returns the current read index for the data.</div></div>",9312:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9312\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> setAddress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">newAddress</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Sets the read address to the specified value.</div></div>",9313:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9313\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint32</span> bytesRemaining() = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Calculates how many bytes are remaining in the Node\'s datalogging memory, based on the current byte position.</div></div>",9314:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9314\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual float</span> percentComplete() = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Calculates the percentage complete based on the current byte position.</div></div>",9315:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9315\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> skipBytes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">numBytesToSkip</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Moves the read pointer ahead by the number of bytes specified (calls read_uint8).</div></div>",9316:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9316\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> read_uint8()</div><div class=\"TTSummary\">Reads a 1-byte unsigned integer from the Node\'s memory.</div></div>",9317:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9317\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int16</span> read_int16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">Utils::</td><td class=\"PType\">Endianness&nbsp;</td><td class=\"PName\">endian&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">Utils::bigEndian</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Reads a 2-byte signed integer from the Node\'s memory.</div></div>",9318:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9318\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> read_uint16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">Utils::</td><td class=\"PType\">Endianness&nbsp;</td><td class=\"PName\">endian&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">Utils::bigEndian</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Reads a 2-byte unsigned integer from the Node\'s memory.</div></div>",9319:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9319\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> read_uint24(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">Utils::</td><td class=\"PType\">Endianness&nbsp;</td><td class=\"PName\">endian&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">Utils::bigEndian</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Reads a 3-byte unsigned integer from the Node\'s memory.</div></div>",9320:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9320\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int32</span> read_int24(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">Utils::</td><td class=\"PType\">Endianness&nbsp;</td><td class=\"PName\">endian&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">Utils::bigEndian</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Reads a 3-byte signed integer from the Node\'s memory.</div></div>",9321:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9321\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> read_uint32(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">Utils::</td><td class=\"PType\">Endianness&nbsp;</td><td class=\"PName\">endian&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">Utils::bigEndian</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Reads a 4-byte unsigned integer from the Node\'s memory.</div></div>",9322:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9322\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint64</span> read_uint64(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">Utils::</td><td class=\"PType\">Endianness&nbsp;</td><td class=\"PName\">endian&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">Utils::bigEndian</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Reads an 8-byte unsigned integer from the Node\'s memory.</div></div>",9323:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9323\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> read_float(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">Utils::</td><td class=\"PType\">Endianness&nbsp;</td><td class=\"PName\">endian&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">Utils::bigEndian</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Reads a 4-byte float from the Node\'s memory.</div></div>",9324:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9324\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::<span class=\"SHKeyword\">string</span> read_string(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">length</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Reads a string of the specified length from the Node\'s memory.</div></div>"});