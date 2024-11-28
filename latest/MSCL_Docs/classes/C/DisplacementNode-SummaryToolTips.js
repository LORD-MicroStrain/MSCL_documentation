NDSummary.OnToolTipsLoaded("CClass:DisplacementNode",{226:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype226\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DisplacementNode</div></div></div><div class=\"TTSummary\">A class representing a MicroStrain Displacement Node</div></div>",228:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype228\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> DisplacementNode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Connection&nbsp;</td><td class=\"PName last\">connection</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an DisplacementNode object.</div></div>",230:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype230\" class=\"NDPrototype NoParameterForm\">std::shared_ptr&lt;MipNode_Impl&gt; m_impl</div><div class=\"TTSummary\">The MipNode_Impl class that contains all the implementation logic for the DisplacementNode class.</div></div>",232:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype232\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> GenericMipCmdResponse doCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">GenericMipCommand::</td><td class=\"PType\">Response&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">response,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ByteStream&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">command,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName\">verifySupported&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Performs a generic Mip Command, sending the command bytes and waiting for the response.</div></div>",233:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype233\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> Bytes doCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">descriptorSet,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">cmdDescriptor,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">fieldData,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName\">ackNackResponse,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName\">dataResponse,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">responseDataDescriptor&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Note: This is an ADVANCED COMMAND. Most users will not need to use this.&nbsp; Allows sending custom data as a MIP packet to the device, and receiving custom data as a response.</div></div>",234:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype234\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> deviceName(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">serial</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static function for creating the universal sensor name that should be used for SensorCloud.</div></div>",235:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype235\" class=\"NDPrototype NoParameterForm\">Connection&amp; connection()</div><div class=\"TTSummary\">Gets the Connection object that this DisplacementNode is using.</div></div>",236:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype236\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> MipNodeFeatures&amp; features()</div><div class=\"TTSummary\">Gets a reference to the MipNodeFeatures for this device.&nbsp; Note: This will be invalid when the DisplacementNode is destroyed.</div></div>",237:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype237\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Timestamp&amp; lastCommunicationTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Timestamp for the last time MSCL communicated with the DisplacementNode.</div></div>",238:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype238\" class=\"NDPrototype NoParameterForm\">DeviceState lastDeviceState() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the last known DeviceState for the InertialNode.&nbsp; This device state is updated by MSCL when data packets are received, as well as when operations are performed, such as setting a Node to idle.</div></div>",239:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype239\" class=\"NDPrototype NoParameterForm\">Version firmwareVersion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the firmware Version of the DisplacementNode.</div></div>",240:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype240\" class=\"NDPrototype NoParameterForm\">DisplacementModels::NodeModel model() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the DisplacementModels::NodeModel of the DisplacementNode.</div></div>",241:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype241\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> modelName() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the model name of the DisplacementNode (ie. &quot;3DM-GX3-45&quot;).</div></div>",242:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype242\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> modelNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the model number of the DisplacementNode (ie. &quot;6225-4220&quot;).</div></div>",243:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype243\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> serialNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the serial number of the DisplacementNode (ie. &quot;6225-01319&quot;).</div></div>",244:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype244\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> lotNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the lot number of the DisplacementNode (ie. &quot;I042Y&quot;).</div></div>",245:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype245\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> deviceOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the device options of the DisplacementNode (ie. &quot;5g, 300d/s&quot;).</div></div>",246:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype246\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipDataPackets getDataPackets(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">maxPackets&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets up to the requested amount of data packets that have been collected.</div></div>",247:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype247\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> totalPackets()</div><div class=\"TTSummary\">Gets the total number of data packets that are currently in the buffer.</div></div>",248:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype248\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> timeout(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">timeout</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the timeout to use when waiting for responses from commands.</div></div>",249:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype249\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> timeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the timeout to use when waiting for responses from commands.</div></div>",250:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype250\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> name()</div><div class=\"TTSummary\">Gets the name of the DisplacementNode. This is the universal sensor name that should be used for uploading to SensorCloud.&nbsp; This is the same as calling DisplacementNode::deviceName.</div></div>",251:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype251\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> ping()</div><div class=\"TTSummary\">Pings the Node to check for communication.&nbsp; Sends the &quot;Ping&quot; command to the device.</div></div>",252:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype252\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> setToIdle()</div><div class=\"TTSummary\">Suspends streaming (if enabled) or wakes the device from sleep (if sleeping), putting the device in an idle mode.&nbsp; After this command is used, the resume command may be used to put the Node back into the mode it was previously in before setToIdle was called.</div></div>",253:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype253\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> cyclePower()</div><div class=\"TTSummary\">Performs the &quot;Device Reset&quot; command.&nbsp; Note: This is essentially the same as unplugging and plugging the device back in.</div></div>",254:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype254\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> resume()</div><div class=\"TTSummary\">Places the Node back in the mode it was in before issuing the setToIdle command.&nbsp; If the setToIdle command was not issued, then the device is placed in default mode.</div></div>",255:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype255\" class=\"NDPrototype NoParameterForm\">SampleRate getDisplacementOutputDataRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the output data rate for the displacement data.</div></div>",256:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype256\" class=\"NDPrototype NoParameterForm\">LinearEquation getAnalogToDisplacementCal() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Analog to Displacement calibration coefficients.</div></div>",257:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype257\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> setDeviceTime()</div><div class=\"TTSummary\">Seeds the device time with the current system time.&nbsp; This time will be reflected in the timestamp field that can come with data from the device.</div></div>",258:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype258\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setDeviceTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">nanoseconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Seeds the device time with a specific time.&nbsp; This time will be reflected in the timestamp field that can come with data from the device.</div></div>"});