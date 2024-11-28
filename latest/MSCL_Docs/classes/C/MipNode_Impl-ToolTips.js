NDContentPage.OnToolTipsLoaded({62:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype62\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">RawBytePacketCollector</div></div></div><div class=\"TTSummary\">Class that sets/matches expected responses, and stores all the Inertial packets</div></div>",80:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype80\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">RawBytePacket</div></div></div><div class=\"TTSummary\">A class that contains packet information about an Inertial packet</div></div>",174:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype174\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Connection</div></div></div><div class=\"TTSummary\">The Connection object that is used for communication.</div></div>",1437:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1437\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GeometricVector</div></div></div><div class=\"TTSummary\">Defines a 3 dimensional, spatial vector.</div></div>",1450:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1450\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">PositionOffset</div></div></div><div class=\"TTSummary\">Represents a position offset (x, y, z).</div></div>",1478:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1478\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">EulerAngles</div></div></div><div class=\"TTSummary\">Represents generic Euler Angles (roll, pitch, yaw).</div></div>",1727:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1727\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">InertialNode</div></div></div><div class=\"TTSummary\">A class representing a MicroStrain Inertial Node</div></div>",1994:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains information retrieved from an Inertial GetDeviceInfo command.</div></div>",2036:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2036\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GenericMipCmdResponse</div></div></div><div class=\"TTSummary\">Represents the response to a GenericMipCommand.</div></div>",2116:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2116\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipPacketCollector</div></div></div><div class=\"TTSummary\">Class that sets/matches expected responses, and stores all the Inertial packets</div></div>",2215:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2215\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipDataPacket</div></div></div><div class=\"TTSummary\">A Mip Data Packet that contains both valid and invalid data from a MIP Device.</div></div>",2243:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2243\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmdId,</td></tr><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">FunctionSelector&nbsp;</td><td class=\"PName last\">fn</td></tr></table></td><td class=\"PAfterParameters\">) : m_commandId(cmdId), m_functionSelector(fn), m_responseExpected(fn == MipTypes::FunctionSelector::READ_BACK_CURRENT_SETTINGS)</td></tr></table></div><div class=\"TTSummary\">Constructor to build MIP command based on Command ID and function selector</div></div>",2257:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for all the different data classes of MIP data.</div></div>",2279:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums to represent different time categories.</div></div>",2282:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for all of the different MIP commands.</div></div>",2432:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for all of the different MIP Channel Field IDs.</div></div>",2891:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A vector of ChannelField enums.</div></div>",2892:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A vector of Command enums.</div></div>",3044:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains an &lt;Command&gt; id and a BytesCollection vector to store the actual bytes to send to the device for that command.</div></div>",3221:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Stores info related to device comm ports (id, type)</div></div>",3224:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available comm protocols that can be configured for UART ports NONE&nbsp; - 0x00000000 - Not set MIP_COMMANDS - 0x00000001 - MIP commands MIP_DATA&nbsp; - 0x00000002 - MIP data NMEA&nbsp; - 0x00000004 - NMEA RTCM&nbsp; - 0x00000008 - RTCM SPARTN&nbsp; - 0x00000010 - SPARTN ALL&nbsp; - 0x0000001F - All protocols</div></div>",3246:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">What type of information to retrieve</div></div>",3268:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3268\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SupportedSensorRanges</div></div></div><div class=\"TTSummary\">Structure to hold all info for looking up supported sensor ranges for a device</div></div>",3279:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3279\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipParser</div></div></div><div class=\"TTSummary\">Parsers all MIP data and stores it in a corresponding container</div></div>",3294:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3294\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipNodeInfo</div></div></div><div class=\"TTSummary\">Contains basic information about a MipNode.</div></div>",3317:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3317\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipNodeFeatures</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by an InertialNode.</div></div>",3423:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3423\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> setToIdle()</div><div class=\"TTSummary\">Suspends streaming (if enabled) or wakes the device from sleep (if sleeping), putting the device in an idle mode.&nbsp; After this command is used, the resume command may be used to put the Node back into the mode it was previously in before setToIdle was called.</div></div>",3425:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3425\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> resume()</div><div class=\"TTSummary\">Places the Node back in the mode it was in before issuing the setToIdle command.&nbsp; If the setToIdle command was not issues, then the device is placed in default mode.</div></div>",3531:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3531\" class=\"NDPrototype NoParameterForm\">FixedReferencePositionData getFixedReferencePosition() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the FixedReferencePositionData data for the specified command.</div></div>",3706:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3706\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipChannel</div></div></div><div class=\"TTSummary\">Represents a single &quot;channel&quot; or data descriptors that can make up an Inertial Device\'s message format</div></div>",3724:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Dictates whether GNSS source is all internal, external, or single internal.</div></div>",3954:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A string composing the RTCM message.</div></div>",4009:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4009\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Matrix_3x3</div></div></div><div class=\"TTSummary\">Defines a 3 by 3 matrix.</div></div>",4023:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4023\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">TimeUpdate</div></div></div><div class=\"TTSummary\">Contains time data for the GNSS_AssistTimeUpdate class.</div></div>",4034:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the data for the AngularRateZUPTControl and VelocityZUPTControl classes.</div></div>",4040:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the data for Set Reference Position command.</div></div>",4047:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the data for the SBASSettings class.</div></div>",4065:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the data for the InertialNode::setConstellationSettings API call.</div></div>",4070:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the data for the InertialNode::setLowPassFilterSettings API call.</div></div>",4077:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4077\" class=\"NDPrototype NoParameterForm\">mscl::MipTypes::ChannelField dataDescriptor</div><div class=\"TTSummary\">the data descriptor these settings apply to</div></div>",4086:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the data needed by the InertialNode::setComplementaryFilterSettings class.</div></div>",4132:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4132\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DeviceStatusData</div></div></div><div class=\"TTSummary\">Contains the data needed by the InertialNode::getBasicDeviceStatus method.</div></div>",4192:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the data needed by the InertialNode::sendExternalGNSSUpdate method.</div></div>",4208:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the possible sources of aiding heading updates to the Kalman filter.&nbsp; Some, all, or none of the options can be set as heading aids.</div></div>",4239:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Struct to hold values for the Filter Initialization Config command.</div></div>",4254:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the possible axis bitfield values.</div></div>",4269:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Controls which parameters are estimated by the Kalman Filter.&nbsp; Some, all, or none of the options can be set as estimation controls.</div></div>",9695:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9695\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SampleRate</div></div></div><div class=\"TTSummary\">Represents a MicroStrain sample rate (rate at which data is sampling)</div></div>",9749:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9749\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ResponseCollector</div></div></div><div class=\"TTSummary\">Stores all the expected command responses</div></div>",9829:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9829\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ByteStream</div></div></div><div class=\"TTSummary\">A stream of bytes that is used to easily store and retrieve data</div></div>",10105:"<div class=\"NDToolTip TSection LC\"><div class=\"TTSummary\">Used to easily read a container of bytes</div></div>",10117:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10117\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DataBuffer</div></div></div><div class=\"TTSummary\">A buffer of bytes extending from the ByteStream class that is used for holding bytes read in from the connection</div></div>",10158:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10158\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Version</div></div></div><div class=\"TTSummary\">Class that represents, and provides helper functions for, a Version number</div></div>",10275:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10275\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Timestamp</div></div></div><div class=\"TTSummary\">Represents a date/time object</div></div>",10367:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10367\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error</div></div></div><div class=\"TTSummary\">The generic MicroStrain exception (base class)</div></div>",10374:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10374\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NotSupported</div></div></div><div class=\"TTSummary\">A command/feature was attempted to be used that was not supported.</div></div>",10378:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10378\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NoData</div></div></div><div class=\"TTSummary\">There is no data available to be accessed</div></div>",10389:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10389\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_Communication</div></div></div><div class=\"TTSummary\">The exception for failing to communicate with a device.</div></div>",10400:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10400\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_Connection</div></div></div><div class=\"TTSummary\">The generic connection exception.</div></div>",10418:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10418\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_MipCmdFailed</div></div></div><div class=\"TTSummary\">The Inertial command has failed</div></div>",10451:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">typedef for a 2-byte unsigned integer.</div></div>",10453:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">typedef for an 8-byte unsigned integer.</div></div>",10483:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The possible states a device can be in.</div></div>"});