NDSummary.OnToolTipsLoaded("CClass:BoostCommunication",{286:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype286\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">template</span> &lt;typename IO_Object&gt;</div><div class=\"CPName\">BoostCommunication</div></div></div><div class=\"TTSummary\">The BoostCommunication object that is used for actual read/write communication for all Connection objects</div></div>",288:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype288\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BoostCommunication(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">unique_ptr&lt;boost::asio::io_context&gt;&nbsp;</td><td class=\"PName last\">io_context,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">unique_ptr&lt;IO_Object&gt;&nbsp;</td><td class=\"PName last\">ioObj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes the BoostCommunication object</div></div>",289:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype289\" class=\"NDPrototype NoParameterForm\">~BoostCommunication()</div><div class=\"TTSummary\">Destroys the BoostCommunication object</div></div>",291:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype291\" class=\"NDPrototype NoParameterForm\">std::unique_ptr&lt;IO_Object&gt; m_ioObject</div><div class=\"TTSummary\">Boost io_object used to communicate (serial_port, ip::tcp::socket, etc.)</div></div>",292:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype292\" class=\"NDPrototype NoParameterForm\">std::unique_ptr&lt;boost::asio::io_context&gt; m_ioContext</div><div class=\"TTSummary\">Boost io_context needed in communication</div></div>",293:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype293\" class=\"NDPrototype NoParameterForm\">DataBuffer m_readBuffer</div><div class=\"TTSummary\">The DataBuffer to hold all the bytes read in</div></div>",294:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype294\" class=\"NDPrototype NoParameterForm\">BufferWriter m_bufferWriter</div><div class=\"TTSummary\">The BufferWriter used to write bytes to the DataBuffer</div></div>",295:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype295\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::<span class=\"SHKeyword\">function</span>&lt;<span class=\"SHKeyword\">void</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">DataBuffer&amp;</td></tr></table></td><td class=\"PAfterParameters\">)&gt; m_parseDataFunction</td></tr></table></div><div class=\"TTSummary\">The function to send all the read in data to. If null, the data will be thrown out.</div></div>",296:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype296\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::<span class=\"SHKeyword\">function</span>&lt;<span class=\"SHKeyword\">void</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">const Bytes&amp;,&nbsp;</td></tr><tr><td class=\"PName first last\">bool</td></tr></table></td><td class=\"PAfterParameters\">)&gt; m_debugDataFunction</td></tr></table></div><div class=\"TTSummary\">The function to send a copy of the data to for debug logging. If null, the data will not be sent to it.</div></div>",297:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype297\" class=\"NDPrototype NoParameterForm\">std::recursive_mutex m_parseFunctionMutex</div><div class=\"TTSummary\">The mutex used to access/change the parse data function.</div></div>",299:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype299\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> write(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;<span class=\"SHKeyword\">uint8</span>&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Uses boost to write bytes to the io_object. Blocks until the write completes</div></div>",300:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype300\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> clearBuffer()</div><div class=\"TTSummary\">Clears the read buffer.</div></div>",301:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype301\" class=\"NDPrototype NoParameterForm\">std::size_t byteReadPos() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the read position from the byte buffer.</div></div>",302:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype302\" class=\"NDPrototype NoParameterForm\">std::size_t byteAppendPos() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the append position from the byte buffer.</div></div>",303:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype303\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> startReadLoop()</div><div class=\"TTSummary\">Starts the main read loop that reads in all data using boost</div></div>",304:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype304\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> readSome()</div><div class=\"TTSummary\">Performs the actual port read of bytes.</div></div>",305:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype305\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> readLoopHandler(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> boost::system::</td><td class=\"PType\">error_code&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">error,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td></td><td class=\"PName last\">bytes_transferred</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">The read handler for the read loop, called when data comes in or the read operation has been canceled</div></div>",306:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype306\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> stopIoService()</div><div class=\"TTSummary\">Stops the current boost::asio::io_context so no more reads or writes will happen</div></div>",307:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype307\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> stopIoServiceError(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">errorCode</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Stops the current boost::asio::io_context due to an error</div></div>",308:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype308\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setParseFunction(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">function</span>&lt;<span class=\"SHKeyword\">void</span>(DataBuffer&amp;)&gt;&nbsp;</td><td class=\"PName last\">fn</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the function to be called when data is read in.</div></div>",309:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype309\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> enableDebugMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">function</span>&lt;<span class=\"SHKeyword\">void</span>(<span class=\"SHKeyword\">const</span> Bytes&amp;, <span class=\"SHKeyword\">bool</span>)&gt;&nbsp;</td><td class=\"PName last\">fn</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Enables debug mode by setting the debug parsing function.</div></div>",310:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype310\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> disableDebugMode()</div><div class=\"TTSummary\">Disables debug mode.</div></div>"});