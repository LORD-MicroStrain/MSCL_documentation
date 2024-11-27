NDSummary.OnToolTipsLoaded("CClass:Connection_Impl",{312:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype312\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">template</span> &lt;typename Comm_Object&gt;</div><div class=\"CPName\">Connection_Impl</div></div></div><div class=\"TTSummary\">An Abstract Base Class for various connection types.&nbsp; This class uses a template for the Comm Object and contains default functionality for connection types.</div></div>",314:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype314\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> ~Connection_Impl()</div><div class=\"TTSummary\">Destroys the Connection_Impl object</div></div>",316:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype316\" class=\"NDPrototype NoParameterForm\">std::unique_ptr&lt; BoostCommunication&lt;Comm_Object&gt; &gt; m_comm</div><div class=\"TTSummary\">A BoostCommunication object used for actual read/write operations.</div></div>",317:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype317\" class=\"NDPrototype NoParameterForm\">std::unique_ptr&lt;boost::asio::io_context&gt; m_ioContext</div><div class=\"TTSummary\">The boost::asio::io_context object.</div></div>",318:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype318\" class=\"NDPrototype NoParameterForm\">std::unique_ptr&lt;Comm_Object&gt; m_ioPort</div><div class=\"TTSummary\">The actual boost communication object (ex. boost::asio::serial_port, tcp::socket, etc.)</div></div>",319:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype319\" class=\"NDPrototype NoParameterForm\">std::unique_ptr&lt;std::thread&gt; m_readThread</div><div class=\"TTSummary\">The thread used to run the operation of reading in bytes from the BaseStation.</div></div>",320:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype320\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_established</div><div class=\"TTSummary\">true if the connection has been established, false otherwise.</div></div>",321:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype321\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::<span class=\"SHKeyword\">function</span>&lt;<span class=\"SHKeyword\">void</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">DataBuffer&amp;</td></tr></table></td><td class=\"PAfterParameters\">)&gt; m_parseFunction</td></tr></table></div><div class=\"TTSummary\">The function to call to parse data that is read in.</div></div>",322:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype322\" class=\"NDPrototype NoParameterForm\">Connection::ConnectionType m_type</div><div class=\"TTSummary\">The Connection::ConnectionType of this connection.</div></div>",323:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype323\" class=\"NDPrototype NoParameterForm\">boost::circular_buffer_space_optimized&lt;<span class=\"SHKeyword\">uint8</span>&gt; m_rawByteBuffer</div><div class=\"TTSummary\">The circular buffer to store data when in &quot;Raw Byte Mode.&quot;</div></div>",324:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype324\" class=\"NDPrototype NoParameterForm\">boost::circular_buffer_space_optimized&lt;ConnectionDebugData&gt; m_debugDataBuffer</div><div class=\"TTSummary\">The circular buffer to store data when in &quot;Debug Mode.&quot;</div></div>",325:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype325\" class=\"NDPrototype NoParameterForm\">std::condition_variable m_rawByteBufferCondition</div><div class=\"TTSummary\">Allows the raw byte buffer to know when data has been added.</div></div>",326:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype326\" class=\"NDPrototype NoParameterForm\">std::condition_variable m_debugBufferCondition</div><div class=\"TTSummary\">Allows the debug data buffer to know when data has been added.</div></div>",327:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype327\" class=\"NDPrototype NoParameterForm\">mutable <span class=\"SHKeyword\">bool</span> m_connectionError</div><div class=\"TTSummary\">true if an error has occurred with the connection, false otherwise.</div></div>",328:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype328\" class=\"NDPrototype NoParameterForm\">mutable <span class=\"SHKeyword\">int</span> m_errorCode</div><div class=\"TTSummary\">The error code of the connection error, if there was a connection error.</div></div>",329:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype329\" class=\"NDPrototype NoParameterForm\">mutable std::<span class=\"SHKeyword\">string</span> m_errorMsg</div><div class=\"TTSummary\">The error message of the connection error, if there was a connection error.</div></div>",330:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype330\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_rawByteMode</div><div class=\"TTSummary\">true if the connection is in &quot;Raw Byte Mode&quot;, false otherwise.</div></div>",331:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype331\" class=\"NDPrototype NoParameterForm\">std::mutex m_rawDataMutex</div><div class=\"TTSummary\">The mutex used to access the &quot;Raw Byte Mode&quot; buffer.</div></div>",332:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype332\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_debugMode</div><div class=\"TTSummary\">true if the connection is in &quot;Debug Mode&quot;, false otherwise.</div></div>",333:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype333\" class=\"NDPrototype NoParameterForm\">std::mutex m_debugDataMutex</div><div class=\"TTSummary\">The mutex used to access the &quot;Debug Mode&quot; buffer.</div></div>",335:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype335\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> establishConnection() = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Initializes and opens the current connection.</div></div>",336:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype336\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> description() <span class=\"SHKeyword\">override</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets a description of the connection as a string.</div></div>",337:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype337\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> port() <span class=\"SHKeyword\">const override</span></div><div class=\"TTSummary\">Gets a name of the connection port if it exists.</div></div>",338:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype338\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> Connection::ConnectionType type() <span class=\"SHKeyword\">override</span></div><div class=\"TTSummary\">Gets the Connection::ConnectionType.</div></div>",339:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype339\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> disconnect() <span class=\"SHKeyword\">override</span></div><div class=\"TTSummary\">Closes the current connection.</div></div>",340:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype340\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> reconnect() <span class=\"SHKeyword\">override</span></div><div class=\"TTSummary\">Reopens a connection that has been disconnected.</div></div>",341:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype341\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> registerParser(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">function</span>&lt;<span class=\"SHKeyword\">void</span>(DataBuffer&amp;)&gt;&nbsp;</td><td class=\"PName last\">parseFunction</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">final</span></td></tr></table></div><div class=\"TTSummary\">Registers a function to handle the parsing of data when it is read in.</div></div>",342:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype342\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> unregisterParser() <span class=\"SHKeyword\">final</span></div><div class=\"TTSummary\">Unregisters the function to handle the parsing of data when it is read in.</div></div>",343:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype343\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> throwIfError() <span class=\"SHKeyword\">final</span></div><div class=\"TTSummary\">Throws an exception if a connection error has occurred.</div></div>",344:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype344\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> write(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ByteStream&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const final</span></td></tr></table></div><div class=\"TTSummary\">Writes bytes to the port via the BoostCommunication object.</div></div>",345:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype345\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> write(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">bytes</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const final</span></td></tr></table></div><div class=\"TTSummary\">Writes the given bytes to the port via the BoostCommunication object.</div></div>",346:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype346\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> clearBuffer() <span class=\"SHKeyword\">final</span></div><div class=\"TTSummary\">Clears the read buffer.</div></div>",347:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype347\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::size_t byteReadPos() <span class=\"SHKeyword\">const final</span></div><div class=\"TTSummary\">Gets the read position from the byte buffer.</div></div>",348:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype348\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::size_t byteAppendPos() <span class=\"SHKeyword\">const final</span></div><div class=\"TTSummary\">Gets the append position from the byte buffer.</div></div>",349:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype349\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> startIoThread()</div><div class=\"TTSummary\">Starts the main thread for reading in all the data and handling write commands</div></div>",350:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype350\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> stopIoThread()</div><div class=\"TTSummary\">Stops the main thread, canceling all reading and writing</div></div>",351:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype351\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> rawByteMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">final</span></td></tr></table></div><div class=\"TTSummary\">Puts the connection into &quot;Raw Byte Mode.&quot;  &quot;Raw Byte Mode&quot; stops the data from being sent/parsed from any attached devices (BaseStation, InertialNode, etc.)&nbsp; and instead sends all data into a raw circular data buffer that can be accessed by calling getRawBytes on this Connection object.&nbsp; Disabling this mode will start sending all data back to the previous attached device, if still available.</div></div>",352:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype352\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> rawByteMode() <span class=\"SHKeyword\">final</span></div><div class=\"TTSummary\">Checks if raw byte mode is enabled (true) or disabled (false)</div></div>",353:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype353\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> getRawBytes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">bytes,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">maxBytes&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">minBytes&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">final</span></td></tr></table></div><div class=\"TTSummary\">Gets all of the raw bytes that are available that have been collected when the Connection is in &quot;Raw Byte Mode.&quot;&nbsp; If the Connection has not been put into &quot;Raw Byte Mode&quot; by calling rawByteMode, no data can be retrieved from this function.</div></div>",354:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype354\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> debugMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">final</span></td></tr></table></div><div class=\"TTSummary\">Puts the connection into &quot;Debug Mode.&quot;  &quot;Debug Mode Mode&quot; adds an additional container that gets filled when any write or read operations occur.&nbsp; Once debug mode is enabled, you can access this data with the getDebugData function.&nbsp; This does not interfere with standard data collection.</div></div>",355:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype355\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> debugMode() <span class=\"SHKeyword\">final</span></div><div class=\"TTSummary\">Checks if debug mode is enabled (true) or disabled (false)</div></div>",356:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype356\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> getDebugData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ConnectionDebugDataVec&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">timeout</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">final</span></td></tr></table></div><div class=\"TTSummary\">Gets the ConnectionDebugData that have been collected when the Connection is in &quot;Debug Mode.&quot;&nbsp; If the Connection has not been put into &quot;Debug Mode&quot; by calling debugMode, no data can be retrieved from this function.</div></div>",357:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype357\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> collectRawData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">The function to be sent to the communication object to parse data for &quot;Raw Byte Mode.&quot;</div></div>",358:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype358\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> collectDebugData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName last\">isRead</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">The function to be sent to the communication object to parse data for &quot;Debug Mode.&quot;</div></div>"});