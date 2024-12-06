NDSummary.OnToolTipsLoaded("File:Communication/Connection.h",{367:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype367\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Connection</div></div></div><div class=\"TTSummary\">The Connection object that is used for communication.</div></div>",369:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of channels on Wireless Nodes.</div></div>",375:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype375\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Connection(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">shared_ptr&lt;Connection_Impl_Base&gt;&nbsp;</td><td class=\"PName last\">impl</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Connection object with the given implementation.&nbsp; Note: This constructor should not be used in most cases.&nbsp; Please use the static Serial, TcpIp, and UnixSocket functions.</div></div>",376:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype376\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Connection Serial(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">port,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">baudRate</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">A static function for creating a Connection object with a SerialConnection implementation.&nbsp; Use this function if you know the specific baud rate you want to connect at.&nbsp; A connection with the specified port will be established.</div></div>",377:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype377\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Connection Serial(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">port</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">A static function for creating a Connection object with a SerialConnection implementation, and attempting to automatically determine/use the baud rate by utilizing Devices::listPorts.&nbsp; A connection with the specified port will be established.</div></div>",378:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype378\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Connection TcpIp(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">serverAddress,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName\">serverPort,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">interfaceAddress&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHString\">&quot;&quot;</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">A static function for creating a Connection object with a TcpIpConnection implementation.&nbsp; A connection with the specified address/port will be established.</div></div>",379:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype379\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Connection WebSocket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">host,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">port</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">A static function for creating a Connection object with a WebSocketConnection or WebSocketSecureConnection implementation.&nbsp; A connection with the specified host/port will be established.&nbsp; Note: This requires the &quot;host&quot; string to be in the form &quot;wss://mscl.example.com&quot; (for a Secure Web Socket) or &quot;ws://mscl.example.com&quot; for a standard HTTP Web Socket</div></div>",380:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype380\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Connection UnixSocket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">path</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">A generator function for Connection objects with a UnixSocketConnection implementation (Unix builds only).&nbsp; A connection with the specified path will be established.</div></div>",382:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype382\" class=\"NDPrototype NoParameterForm\">std::shared_ptr&lt;Connection_Impl_Base&gt; m_impl</div><div class=\"TTSummary\">The Connection_Impl_Base that contains all the implementation logic for the Connection class.</div></div>",384:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype384\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> registerParser(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">function</span>&lt;<span class=\"SHKeyword\">void</span>(DataBuffer&amp;)&gt;&nbsp;</td><td class=\"PName last\">parseFunction</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Registers a function to handle the parsing of data when it is read in.</div></div>",385:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype385\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> unregisterParser()</div><div class=\"TTSummary\">Unregisters the function to handle the parsing of data when it is read in.</div></div>",386:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype386\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> write(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ByteStream&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Writes the specified bytes.</div></div>",387:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype387\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> throwIfError()</div><div class=\"TTSummary\">Throws an exception if a connection error has occurred.</div></div>",388:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype388\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> description()</div><div class=\"TTSummary\">Gets a description of the connection as a string.</div></div>",389:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype389\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> port()</div><div class=\"TTSummary\">Gets the port name of the connection if it exists.</div></div>",390:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype390\" class=\"NDPrototype NoParameterForm\">ConnectionType type()</div><div class=\"TTSummary\">Gets the ConnectionType of the connection.</div></div>",391:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype391\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> disconnect()</div><div class=\"TTSummary\">Closes the current connection.</div></div>",392:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype392\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> reconnect()</div><div class=\"TTSummary\">Reopens a connection that has been disconnected.</div></div>",393:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype393\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> write(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">bytes</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Writes the given bytes to the connection.</div></div>",394:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype394\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> writeStr(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">bytes</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Writes the given string (containing bytes) to the connection.</div></div>",395:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype395\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> clearBuffer()</div><div class=\"TTSummary\">Resets the read buffer.</div></div>",396:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype396\" class=\"NDPrototype NoParameterForm\">std::size_t byteReadPos() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the read position from the byte buffer.</div></div>",397:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype397\" class=\"NDPrototype NoParameterForm\">std::size_t byteAppendPos() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the append position from the byte buffer.</div></div>",398:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype398\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> rawByteMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Puts the connection into &quot;Raw Byte Mode.&quot;  &quot;Raw Byte Mode&quot; stops the data from being sent/parsed from any attached devices (BaseStation, InertialNode, etc.)&nbsp; and instead sends all data into a raw circular data buffer that can be accessed by calling getRawBytes on this Connection object.&nbsp; Disabling this mode will start sending all data back to the previous attached device, if still available.</div></div>",399:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype399\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> rawByteMode()</div><div class=\"TTSummary\">Checks if raw byte mode is enabled or disabled.</div></div>",400:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype400\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Bytes getRawBytes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">maxBytes&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">minBytes&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the raw bytes that are available that have been collected when the Connection is in &quot;Raw Byte Mode.&quot;&nbsp; If the Connection has not been put into &quot;Raw Byte Mode&quot; by calling rawByteMode, no data can be retrieved from this function.</div></div>",401:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype401\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::<span class=\"SHKeyword\">string</span> getRawBytesStr(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">maxBytes&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">minBytes&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the raw bytes that are available that have been collected when the Connection is in &quot;Raw Byte Mode&quot; as a string.&nbsp; If the Connection has not been put into &quot;Raw Byte Mode&quot; by calling rawByteMode, no data can be retrieved from this function.</div></div>",402:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype402\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Bytes getRawBytesWithPattern(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">pattern,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the raw bytes that are available that have been collected when the Connection is in &quot;Raw Byte Mode&quot;, if a byte pattern is found.&nbsp; If the Connection has not been put into &quot;Raw Byte Mode&quot; by calling rawByteMode, no data can be retrieved from this function.</div></div>",403:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype403\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> debugMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Puts the connection into &quot;Debug Mode.&quot;  &quot;Debug Mode&quot; adds an additional container that gets filled when any write or read operations occur.&nbsp; Once debug mode is enabled, you can access this data with the getDebugData function.&nbsp; This does not interfere with standard data collection.</div></div>",404:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype404\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> debugMode()</div><div class=\"TTSummary\">Checks if debug mode is enabled or disabled.</div></div>",405:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype405\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ConnectionDebugDataVec getDebugData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the ConnectionDebugData that have been collected when the Connection is in &quot;Debug Mode.&quot;&nbsp; If the Connection has not been put into &quot;Debug Mode&quot; by calling debugMode, no data can be retrieved from this function.</div></div>",406:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype406\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> updateBaudRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">baudRate</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Updates the serial connection baud rate. If this is not a serial connection, this function does nothing.&nbsp; Important: The connection to the port will be closed and re-opened at the new baud rate.</div></div>"});