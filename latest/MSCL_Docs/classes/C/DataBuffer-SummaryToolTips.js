NDSummary.OnToolTipsLoaded("CClass:DataBuffer",{10008:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10008\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DataBuffer</div></div></div><div class=\"TTSummary\">A buffer of bytes extending from the ByteStream class that is used for holding bytes read in from the connection</div></div>",10010:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype10010\" class=\"NDPrototype NoParameterForm\">ByteStream m_data</div><div class=\"TTSummary\">The underlying ByteStream that holds the data</div></div>",10011:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype10011\" class=\"NDPrototype NoParameterForm\">std::size_t m_appendPosition</div><div class=\"TTSummary\">The current position to use when appending data to the buffer</div></div>",10012:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype10012\" class=\"NDPrototype NoParameterForm\">std::size_t m_readPosition</div><div class=\"TTSummary\">The current position in the buffer for reading data</div></div>",10014:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10014\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> DataBuffer(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructor to create a DataBuffer object</div></div>",10015:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10015\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> DataBuffer(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructor to create a DataBuffer object given existing data as Bytes</div></div>",10016:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10016\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> DataBuffer(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ByteStream&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructor to create a DataBuffer given an existing ByteStream</div></div>",10017:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10017\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> ~DataBuffer()</div><div class=\"TTSummary\">Default destructor for the DataBuffer object</div></div>",10018:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10018\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> peekByte()</div><div class=\"TTSummary\">Gets the next byte from the buffer without moving the read position</div></div>",10019:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10019\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> skipBytes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">numBytesToSkip</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Moves the read pointer forward the requested number of bytes</div></div>",10020:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10020\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int8</span> read_int8()</div><div class=\"TTSummary\">Reads the next 1-byte signed integer from the buffer</div></div>",10021:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10021\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> read_uint8()</div><div class=\"TTSummary\">Reads the next 1-byte unsigned integer from the buffer</div></div>",10022:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10022\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> read_int16()</div><div class=\"TTSummary\">Reads the next 2-byte signed integer from the buffer</div></div>",10023:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10023\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> read_uint16()</div><div class=\"TTSummary\">Reads the next 2-byte unsigned integer from the buffer</div></div>",10024:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10024\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> read_uint32()</div><div class=\"TTSummary\">Reads the next 4-byte unsigned integer from the buffer</div></div>",10025:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10025\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> read_uint64()</div><div class=\"TTSummary\">Reads the next 8-byte unsigned integer from the buffer</div></div>",10026:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10026\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> read_float()</div><div class=\"TTSummary\">Reads the next 4-byte float from the buffer</div></div>",10027:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10027\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> read_double()</div><div class=\"TTSummary\">Reads the next 8-byte double from the buffer</div></div>",10028:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10028\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::<span class=\"SHKeyword\">string</span> read_string(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">length</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Reads a string of the specified length from the buffer</div></div>",10029:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10029\" class=\"NDPrototype NoParameterForm\">std::size_t size() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the amount of bytes in the DataBuffer</div></div>",10031:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10031\" class=\"NDPrototype NoParameterForm\">std::size_t appendPosition() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the append position of the buffer.</div></div>",10032:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10032\" class=\"NDPrototype NoParameterForm\">std::size_t readPosition() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the read position of the buffer.</div></div>",10033:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10033\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> moreToRead() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether or not there are more bytes to be read in the DataBuffer</div></div>",10034:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10034\" class=\"NDPrototype NoParameterForm\">std::size_t shiftExtraToStart()</div><div class=\"TTSummary\">Copies any unparsed data in the DataBuffer to the front of the buffer.&nbsp; Also resets the readPosition and moves the appendPosition to immediately after the data that was moved.</div></div>",10035:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10035\" class=\"NDPrototype NoParameterForm\">BufferWriter getBufferWriter()</div><div class=\"TTSummary\">Creates a BufferWriter object based on this DataBuffer.</div></div>",10036:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10036\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> resetBuffer()</div><div class=\"TTSummary\">Resets the append and read positions in the buffer back to 0.</div></div>",10037:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10037\" class=\"NDPrototype NoParameterForm\">Bytes bytesToRead() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a copy of the underlying bytes in this DataBuffer from the read position to the appendPosition.</div></div>",10038:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10038\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Bytes bytesToRead(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">startPos,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a copy of the underlying bytes in this DataBuffer from the given start position, for the given size.</div></div>"});