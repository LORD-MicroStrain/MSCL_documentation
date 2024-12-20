NDContentPage.OnToolTipsLoaded({92:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype92\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">RawBytePacket</div></div></div><div class=\"TTSummary\">A class that contains packet information about an Inertial packet</div></div>",272:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype272\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Connection</div></div></div><div class=\"TTSummary\">The Connection object that is used for communication.</div></div>",2944:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2944\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GenericMipCmdResponse</div></div></div><div class=\"TTSummary\">Represents the response to a GenericMipCommand.</div></div>",3201:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3201\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipNodeInfo</div></div></div><div class=\"TTSummary\">Contains basic information about a MipNode.</div></div>",3224:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3224\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipNode_Impl</div></div></div><div class=\"TTSummary\">Contains the implementation for an InertialNode.</div></div>",3418:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3418\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> deviceName(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">serial</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static function for creating the universal sensor name that should be used for SensorCloud.</div></div>",3429:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3429\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> serialNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the serial number of the MipNode (ie. &quot;6225-01319&quot;).</div></div>",3436:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3436\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> setToIdle()</div><div class=\"TTSummary\">Suspends streaming (if enabled) or wakes the device from sleep (if sleeping), putting the device in an idle mode.&nbsp; After this command is used, the resume command may be used to put the Node back into the mode it was previously in before setToIdle was called.</div></div>",3438:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3438\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> resume()</div><div class=\"TTSummary\">Places the Node back in the mode it was in before issuing the setToIdle command.&nbsp; If the setToIdle command was not issued, then the device is placed in default mode.</div></div>",3454:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3454\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipNodeFeatures</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by an InertialNode.</div></div>",3647:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3647\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipModel</div></div></div><div class=\"TTSummary\">Contains the model information of MIP devices.</div></div>",3678:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for all the different data classes of MIP data.</div></div>",4314:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A vector of Command enums.</div></div>",4466:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains an &lt;Command&gt; id and a BytesCollection vector to store the actual bytes to send to the device for that command.</div></div>",9897:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9897\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ByteStream</div></div></div><div class=\"TTSummary\">A stream of bytes that is used to easily store and retrieve data</div></div>",9973:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9973\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Version</div></div></div><div class=\"TTSummary\">Class that represents, and provides helper functions for, a Version number</div></div>",10303:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10303\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Timestamp</div></div></div><div class=\"TTSummary\">Represents a date/time object</div></div>",10468:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">typedef for a vector of bytes.</div></div>",10489:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The possible states a device can be in.</div></div>",10504:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10504\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NotSupported</div></div></div><div class=\"TTSummary\">A command/feature was attempted to be used that was not supported.</div></div>",10508:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10508\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NoData</div></div></div><div class=\"TTSummary\">There is no data available to be accessed</div></div>",10519:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10519\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_Communication</div></div></div><div class=\"TTSummary\">The exception for failing to communicate with a device.</div></div>",10530:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10530\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_Connection</div></div></div><div class=\"TTSummary\">The generic connection exception.</div></div>",10548:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10548\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_MipCmdFailed</div></div></div><div class=\"TTSummary\">The Inertial command has failed</div></div>",2693:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2693\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">InertialNode</div></div></div><div class=\"TTSummary\">A class representing a MicroStrain Inertial Node</div></div>",4698:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4698\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">RTKNode</div></div></div><div class=\"TTSummary\">A class representing a MicroStrain RTK Node</div></div>"});