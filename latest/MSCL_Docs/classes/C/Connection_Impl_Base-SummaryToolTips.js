NDSummary.OnToolTipsLoaded("CClass:Connection_Impl_Base",{159:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype159\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Connection_Impl_Base</div></div></div><div class=\"TTSummary\">An Abstract Base Class for various connection types.</div></div>",161:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype161\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> ~Connection_Impl_Base() = default</div><div class=\"TTSummary\">Destroys the Connection_Impl_Base object</div></div>",162:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype162\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> establishConnection() = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Initializes and opens the current connection.</div></div>",163:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype163\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> description() = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets a description of the connection as a string</div></div>",164:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype164\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> port() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets a name of the connection port if it exists</div></div>",165:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype165\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> Connection::ConnectionType type() = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the Connection::ConnectionType.</div></div>",166:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype166\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> disconnect() = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Closes the current connection.</div></div>",167:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype167\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> reconnect() = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Reopens a connection that has been disconnected.</div></div>",168:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype168\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> registerParser(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">function</span>&lt;<span class=\"SHKeyword\">void</span>(DataBuffer&amp;)&gt;&nbsp;</td><td class=\"PName last\">parseFunction</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Registers a function to handle the parsing of data when it is read in.</div></div>",169:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype169\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> unregisterParser() = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Unregisters the function to handle the parsing of data when it is read in</div></div>",170:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype170\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> throwIfError() = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Throws an exception if a connection error has occurred.</div></div>",171:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype171\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> write(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ByteStream&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Writes bytes to the port via the BoostCommunication object.</div></div>",172:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype172\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> write(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">bytes</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Writes the given bytes to the port via the BoostCommunication object.</div></div>",173:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype173\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> clearBuffer() = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Resets the read buffer.</div></div>",174:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype174\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::size_t byteReadPos() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the read position from the byte buffer.</div></div>",175:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype175\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::size_t byteAppendPos() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the append position from the byte buffer.</div></div>",176:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype176\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> rawByteMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Puts the connection into &quot;Raw Byte Mode.&quot;  &quot;Raw Byte Mode&quot; stops the data from being sent/parsed from any attached devices (BaseStation, InertialNode, etc.)&nbsp; and instead sends all data into a raw circular data buffer that can be accessed by calling getRawBytes on this Connection object.&nbsp; Disabling this mode will start sending all data back to the previous attached device, if still available.</div></div>",177:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype177\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> getRawBytes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">bytes,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">maxBytes&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">minBytes&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Gets all of the raw bytes that are available that have been collected when the Connection is in &quot;Raw Byte Mode.&quot;&nbsp; If the Connection has not been put into &quot;Raw Byte Mode&quot; by calling rawByteMode, no data can be retrieved from this function.</div></div>",178:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype178\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> debugMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Puts the connection into &quot;Debug Mode.&quot;  &quot;Debug Mode Mode&quot; adds an additional container that gets filled when any write or read operations occur.&nbsp; Once debug mode is enabled, you can access this data with the getDebugData function.&nbsp; This does not interfere with standard data collection.</div></div>",179:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype179\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> getDebugData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ConnectionDebugDataVec&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">timeout</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Gets the ConnectionDebugData that have been collected when the Connection is in &quot;Debug Mode.&quot;&nbsp; If the Connection has not been put into &quot;Debug Mode&quot; by calling debugMode, no data can be retrieved from this function.</div></div>",180:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype180\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> updateBaudRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">baudRate</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Updates the serial connection baud rate. If this is not a serial connection, this function does nothing.&nbsp; Important: The connection to the port will be closed and re-opened at the new baud rate.</div></div>"});