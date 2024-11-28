NDSummary.OnToolTipsLoaded("File:MicroStrain/DataBuffer.h",{9945:"<div class=\"NDToolTip TSection LC\"><div class=\"TTSummary\">Used to easily read a container of bytes</div></div>",9946:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9946\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BufferWriter</div></div></div><div class=\"TTSummary\">Class used to interface with a DataBuffer and append data to it</div></div>",9948:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9948\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BufferWriter(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">buffer,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td></td><td class=\"PName last\">size,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">offset</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructor to create a BufferWriter object</div></div>",9950:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9950\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span>* m_buffer</div><div class=\"TTSummary\">The buffer to write to, at the specific position to start writing data</div></div>",9951:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9951\" class=\"NDPrototype NoParameterForm\">std::size_t m_size</div><div class=\"TTSummary\">The size available to write</div></div>",9952:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9952\" class=\"NDPrototype NoParameterForm\">std::size_t* m_writeOffset</div><div class=\"TTSummary\">A pointer to the current position to start writing in the buffer</div></div>",9954:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9954\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span>* buffer()</div><div class=\"TTSummary\">Gets the buffer to write to</div></div>",9955:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9955\" class=\"NDPrototype NoParameterForm\">std::size_t size()</div><div class=\"TTSummary\">Gets the size of the buffer available to write</div></div>",9956:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9956\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> commit(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">numBytesAdded</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Commits a number of bytes that were added to the buffer by moving the current offset.</div></div>",9957:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9957\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DataBuffer</div></div></div><div class=\"TTSummary\">A buffer of bytes extending from the ByteStream class that is used for holding bytes read in from the connection</div></div>",9959:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9959\" class=\"NDPrototype NoParameterForm\">ByteStream m_data</div><div class=\"TTSummary\">The underlying ByteStream that holds the data</div></div>",9960:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9960\" class=\"NDPrototype NoParameterForm\">std::size_t m_appendPosition</div><div class=\"TTSummary\">The current position to use when appending data to the buffer</div></div>",9961:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9961\" class=\"NDPrototype NoParameterForm\">std::size_t m_readPosition</div><div class=\"TTSummary\">The current position in the buffer for reading data</div></div>",9963:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9963\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> DataBuffer(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructor to create a DataBuffer object</div></div>",9964:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9964\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> DataBuffer(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructor to create a DataBuffer object given existing data as Bytes</div></div>",9965:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9965\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> DataBuffer(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ByteStream&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructor to create a DataBuffer given an existing ByteStream</div></div>",9966:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9966\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> ~DataBuffer()</div><div class=\"TTSummary\">Default destructor for the DataBuffer object</div></div>",9967:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9967\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> peekByte()</div><div class=\"TTSummary\">Gets the next byte from the buffer without moving the read position</div></div>",9968:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9968\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> skipBytes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">numBytesToSkip</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Moves the read pointer forward the requested number of bytes</div></div>",9969:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9969\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int8</span> read_int8()</div><div class=\"TTSummary\">Reads the next 1-byte signed integer from the buffer</div></div>",9970:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9970\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> read_uint8()</div><div class=\"TTSummary\">Reads the next 1-byte unsigned integer from the buffer</div></div>",9971:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9971\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> read_int16()</div><div class=\"TTSummary\">Reads the next 2-byte signed integer from the buffer</div></div>",9972:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9972\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> read_uint16()</div><div class=\"TTSummary\">Reads the next 2-byte unsigned integer from the buffer</div></div>",9973:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9973\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> read_uint32()</div><div class=\"TTSummary\">Reads the next 4-byte unsigned integer from the buffer</div></div>",9974:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9974\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> read_uint64()</div><div class=\"TTSummary\">Reads the next 8-byte unsigned integer from the buffer</div></div>",9975:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9975\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> read_float()</div><div class=\"TTSummary\">Reads the next 4-byte float from the buffer</div></div>",9976:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9976\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> read_double()</div><div class=\"TTSummary\">Reads the next 8-byte double from the buffer</div></div>",9977:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9977\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::<span class=\"SHKeyword\">string</span> read_string(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">length</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Reads a string of the specified length from the buffer</div></div>",9978:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9978\" class=\"NDPrototype NoParameterForm\">std::size_t size() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the amount of bytes in the DataBuffer</div></div>",9980:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9980\" class=\"NDPrototype NoParameterForm\">std::size_t appendPosition() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the append position of the buffer.</div></div>",9981:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9981\" class=\"NDPrototype NoParameterForm\">std::size_t readPosition() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the read position of the buffer.</div></div>",9982:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9982\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> moreToRead() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether or not there are more bytes to be read in the DataBuffer</div></div>",9983:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9983\" class=\"NDPrototype NoParameterForm\">std::size_t shiftExtraToStart()</div><div class=\"TTSummary\">Copies any unparsed data in the DataBuffer to the front of the buffer.&nbsp; Also resets the readPosition and moves the appendPosition to immediately after the data that was moved.</div></div>",9984:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9984\" class=\"NDPrototype NoParameterForm\">BufferWriter getBufferWriter()</div><div class=\"TTSummary\">Creates a BufferWriter object based on this DataBuffer.</div></div>",9985:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9985\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> resetBuffer()</div><div class=\"TTSummary\">Resets the append and read positions in the buffer back to 0.</div></div>",9986:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9986\" class=\"NDPrototype NoParameterForm\">Bytes bytesToRead() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a copy of the underlying bytes in this DataBuffer from the read position to the appendPosition.</div></div>",9987:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9987\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Bytes bytesToRead(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">startPos,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a copy of the underlying bytes in this DataBuffer from the given start position, for the given size.</div></div>",9988:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9988\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ReadBufferSavePoint</div></div></div><div class=\"TTSummary\">Acts as a save point so that bytes can be read out of a DataBuffer and the read point reverted</div></div>",9990:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9990\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ReadBufferSavePoint(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a ReadBufferSavePoint based on the DataBuffer passed in</div></div>",9991:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9991\" class=\"NDPrototype NoParameterForm\">~ReadBufferSavePoint()</div><div class=\"TTSummary\">Destroying a ReadBufferSavePoint object, reverting any uncommited data</div></div>",9993:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9993\" class=\"NDPrototype NoParameterForm\">DataBuffer* m_data</div><div class=\"TTSummary\">The DataBuffer of data to be accessed</div></div>",9994:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9994\" class=\"NDPrototype NoParameterForm\">std::size_t m_savePosition</div><div class=\"TTSummary\">The current save position in the DataBuffer</div></div>",9996:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9996\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> revert()</div><div class=\"TTSummary\">reverts the read position of the DataBuffer back to its saved position</div></div>",9997:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9997\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> commit()</div><div class=\"TTSummary\">commits all the currently read data so that it will not be reverted</div></div>"});