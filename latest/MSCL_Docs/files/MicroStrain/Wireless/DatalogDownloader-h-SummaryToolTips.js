NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/DatalogDownloader.h",{9336:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9336\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> sessionInfoUpdated</div><div class=\"TTSummary\">Indicates whether the session info has been updated since the last time &lt;getNextData&gt; was called.</div></div>",9337:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9337\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> calCoefficientsUpdated</div><div class=\"TTSummary\">Indicates whether calibration coefficients have been updates since the last time &lt;getNextData&gt; was called.</div></div>",9338:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9338\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> startOfTrigger</div><div class=\"TTSummary\">Whether the current data point is the start of a new trigger/session.</div></div>",9339:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9339\" class=\"NDPrototype NoParameterForm\">WirelessTypes::TriggerType triggerType</div><div class=\"TTSummary\">The WirelessTypes::TriggerType of the session.</div></div>",9340:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9340\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> numSweeps</div><div class=\"TTSummary\">The total number of sweeps that are in the session.</div></div>",9341:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9341\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> sessionIndex</div><div class=\"TTSummary\">The datalogging session index. This starts at 1 for the first session, and gets incremented for each additional session.</div></div>",9342:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9342\" class=\"NDPrototype NoParameterForm\">ChannelMask activeChannels</div><div class=\"TTSummary\">The ChannelMask for the session.</div></div>",9343:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9343\" class=\"NDPrototype NoParameterForm\">SampleRate sampleRate</div><div class=\"TTSummary\">The SampleRate for the session.</div></div>",9344:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9344\" class=\"NDPrototype NoParameterForm\">SampleRate derivedRate</div><div class=\"TTSummary\">The SampleRate of any derived data.</div></div>",9345:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9345\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> timeBetweenSweeps</div><div class=\"TTSummary\">The number of nanoseconds between each sweep, determined by the sample rate.</div></div>",9346:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9346\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> derivedTimeBetweenSweeps</div><div class=\"TTSummary\">The number of nanoseconds between each derived sweep, determined by the derived sample rate.</div></div>",9347:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9347\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DataType dataType</div><div class=\"TTSummary\">The WirelessTypes::DataType of the session.</div></div>",9348:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9348\" class=\"NDPrototype NoParameterForm\">ValueType valueType</div><div class=\"TTSummary\">The ValueType of the session.</div></div>",9349:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9349\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> userString</div><div class=\"TTSummary\">The user entered string of the session (if any).</div></div>",9350:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9350\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> timestamp</div><div class=\"TTSummary\">The starting timestamp for the session, in nanoseconds.</div></div>",9351:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9351\" class=\"NDPrototype NoParameterForm\">ChannelCalMap calCoefficients</div><div class=\"TTSummary\">A map of WirelessChannel::ChannelId to CalCoefficients.</div></div>",9352:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9352\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DatalogDownloader</div></div></div><div class=\"TTSummary\">Used to download logged data from a WirelessNode.</div></div>",9354:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9354\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> DatalogDownloader(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNode&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">node</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a DatalogDownloader object. Datalogging information will immediately be read from the Node.</div></div>",9355:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9355\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">DatalogDownloader(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNode&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">node,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">startAddress,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Advanced Constructor for creating a DatalogDownloader object with known parameters (not compatible with datalog version 1).&nbsp; Note: In most cases, you should use the standard DatalogDownloader constructor instead of this one, which will automatically determine the start and end positions for you.</div></div>",9362:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9362\" class=\"NDPrototype NoParameterForm\">WirelessNode m_node</div><div class=\"TTSummary\">The WirelessNode to download the data from.</div></div>",9363:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9363\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_foundFirstTrigger</div><div class=\"TTSummary\">Whether or not the first trigger has been found.</div></div>",9364:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9364\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_outOfMemory</div><div class=\"TTSummary\">Whether or not we requested data that is out of bounds of the memory.</div></div>",9365:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9365\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> m_sweepCount</div><div class=\"TTSummary\">The 0-based count indicating which sweep we are currently on in the data.</div></div>",9366:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9366\" class=\"NDPrototype NoParameterForm\">std::unique_ptr&lt;NodeMemory&gt; m_nodeMemory</div><div class=\"TTSummary\">The NodeMemory object to help with interacting with the Node\'s datalogging memory.</div></div>",9367:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9367\" class=\"NDPrototype NoParameterForm\">DatalogSessionInfo m_sessionInfo</div><div class=\"TTSummary\">The &lt;DatalogSessionInfo&gt; containing information about the current trigger session data.</div></div>",9368:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\">The version of the datalog download procedure to use.</div></div>",9369:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9369\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_isMathData</div><div class=\"TTSummary\">Whether the data to parse next is math data (true) or standard channel data (false).</div></div>",9370:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\">A vector of the &lt;WirelessDataPacket::AlgorithmMetaData&gt; for the current data section (gets updated each math block header).</div></div>",9372:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9372\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> parseTriggerHeader_v1()</div><div class=\"TTSummary\">Parses a (v1) trigger header from the current byte position. The current datalogging session info in this class is updated.</div></div>",9373:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9373\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> parseTriggerHeader_v2()</div><div class=\"TTSummary\">Parses a (v2) trigger header from the current byte position. The current datalogging session info in this class is updated.</div></div>",9374:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9374\" class=\"NDPrototype NoParameterForm\">LoggedDataSweep parseNextSweep()</div><div class=\"TTSummary\">Parses the next Raw Data Sweep from the current byte position.</div></div>",9375:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9375\" class=\"NDPrototype NoParameterForm\">LoggedDataSweep parseNextMathSweep()</div><div class=\"TTSummary\">Parses the next Math/Derived Data Sweep from the current byte position.</div></div>",9376:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9376\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> complete()</div><div class=\"TTSummary\">Checks if all of the data has been downloaded (no more data available).&nbsp; Note: This may be updated each time getNextData is called.</div></div>",9377:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9377\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> percentComplete() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the percent completion of the download.&nbsp; Note: This will be updated each time getNextData is called.</div></div>",9378:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9378\" class=\"NDPrototype NoParameterForm\">LoggedDataSweep getNextData()</div><div class=\"TTSummary\">Gets the next LoggedDataSweep that is logged to the Node.</div></div>",9379:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9379\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> metaDataUpdated() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the any of the meta data (sample rate, cal coefficients, etc) has been updated since the last call to getNextData.&nbsp; This will be true for a single LoggedDataSweep (after calling getNextData), signifying that you should interrogate all of the meta data on this DatalogDownloader object again to get updated information which may have changed.</div></div>",9380:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9380\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> calCoefficientsUpdated() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the calibration coefficients information has been updated since the last call to getNextData.&nbsp; This will be true for a single LoggedDataSweep (after calling getNextData).</div></div>",9381:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9381\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> startOfSession() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether a new datalogging session has been found (after calling getNextData). This will be true for a single LoggedDataSweep.&nbsp; Note: May be changed whenever metaDataUpdated returns true.</div></div>",9382:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9382\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> sessionIndex() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the index of the current datalogging session.&nbsp; Note: May be changed whenever startOfSession returns true.</div></div>",9383:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9383\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> SampleRate&amp; sampleRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the SampleRate of the current datalogging session.&nbsp; Note: May be changed whenever metaDataUpdated returns true.</div></div>",9384:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9384\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> std::<span class=\"SHKeyword\">string</span>&amp; userString() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the user entered string of the current datalogging session (if any).&nbsp; Note: A user string can only be provided with Armed Datalogging, which is a legacy sampling mode not supported on new products.&nbsp; Note: May be changed whenever metaDataUpdated returns true.</div></div>",9385:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9385\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> ChannelCalMap&amp; calCoefficients() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the &lt;ChannelCalMap&gt; of the current datalogging session.&nbsp; Note: May be changed whenever metaDataUpdated returns true.</div></div>"});