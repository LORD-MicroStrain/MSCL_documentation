NDContentPage.OnToolTipsLoaded({173:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype173\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> rawByteMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Puts the connection into &quot;Raw Byte Mode.&quot;  &quot;Raw Byte Mode&quot; stops the data from being sent/parsed from any attached devices (BaseStation, InertialNode, etc.)&nbsp; and instead sends all data into a raw circular data buffer that can be accessed by calling getRawBytes on this Connection object.&nbsp; Disabling this mode will start sending all data back to the previous attached device, if still available.</div></div>",174:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype174\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> getRawBytes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">bytes,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">maxBytes&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">minBytes&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Gets all of the raw bytes that are available that have been collected when the Connection is in &quot;Raw Byte Mode.&quot;&nbsp; If the Connection has not been put into &quot;Raw Byte Mode&quot; by calling rawByteMode, no data can be retrieved from this function.</div></div>",175:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype175\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> debugMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Puts the connection into &quot;Debug Mode.&quot;  &quot;Debug Mode Mode&quot; adds an additional container that gets filled when any write or read operations occur.&nbsp; Once debug mode is enabled, you can access this data with the getDebugData function.&nbsp; This does not interfere with standard data collection.</div></div>",176:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype176\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> getDebugData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ConnectionDebugDataVec&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">timeout</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Gets the ConnectionDebugData that have been collected when the Connection is in &quot;Debug Mode.&quot;&nbsp; If the Connection has not been put into &quot;Debug Mode&quot; by calling debugMode, no data can be retrieved from this function.</div></div>",227:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of channels on Wireless Nodes.</div></div>",265:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype265\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ConnectionDebugData</div></div></div><div class=\"TTSummary\">Holds data used when the Connection debug mode is enabled.</div></div>",10008:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10008\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DataBuffer</div></div></div><div class=\"TTSummary\">A buffer of bytes extending from the ByteStream class that is used for holding bytes read in from the connection</div></div>",10075:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10075\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ByteStream</div></div></div><div class=\"TTSummary\">A stream of bytes that is used to easily store and retrieve data</div></div>",10464:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10464\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_Connection</div></div></div><div class=\"TTSummary\">The generic connection exception.</div></div>",10540:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">typedef for a vector of bytes.</div></div>",178:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype178\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">template</span> &lt;typename Comm_Object&gt;</div><div class=\"CPName\">Connection_Impl</div></div></div><div class=\"TTSummary\">An Abstract Base Class for various connection types.&nbsp; This class uses a template for the Comm Object and contains default functionality for connection types.</div></div>"});