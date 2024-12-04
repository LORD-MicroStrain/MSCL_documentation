NDSummary.OnToolTipsLoaded("CClass:MipNode",{1146:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1146\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipNode</div></div></div><div class=\"TTSummary\">Abstract base class for Inertial or RTK (MIP) devices</div></div>",1147:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1147\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> Bytes doCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">descriptorSet,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">cmdDescriptor,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">fieldData,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName\">ackNackResponse,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName\">dataResponse,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">responseDataDescriptor&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Note: This is an ADVANCED COMMAND. Most users will not need to use this.&nbsp; Allows sending custom data as a MIP packet to the device, and receiving custom data as a response.</div></div>",1148:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1148\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> deviceName(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">serial</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static function for creating the universal sensor name that should be used for SensorCloud.</div></div>",1149:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1149\" class=\"NDPrototype NoParameterForm\">Connection&amp; connection()</div><div class=\"TTSummary\">Gets the Connection object that this MipNode is using.</div></div>",1150:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1150\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> MipNodeFeatures&amp; features() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a reference to the MipNodeFeatures for this device.&nbsp; Note: This will be invalid when the MipNode is destroyed.</div></div>",1151:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1151\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> clearDeviceInfo()</div><div class=\"TTSummary\">Clears cached device info (ie fw version, model number, receiver info, etc.), forcing it to be re-read from the device the next time it is used.</div></div>",1152:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1152\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Timestamp&amp; lastCommunicationTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Timestamp for the last time MSCL communicated with the MipNode.</div></div>",1153:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1153\" class=\"NDPrototype NoParameterForm\">DeviceState lastDeviceState() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the last known DeviceState for the MipNode.&nbsp; This device state is updated by MSCL when data packets are received, as well as when operations are performed, such as setting a Node to idle.</div></div>",1154:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1154\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setLastDeviceState(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DeviceState&nbsp;</td><td class=\"PName last\">state</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Most users will not need this functionality.&nbsp; The device state defaults to unknown on connection but then automatically updates to streaming upon receiving data packets or idle when the set to idle command is sent.&nbsp; Setting this will not stop auto-detection - the manually set value will be overwritten when the value would otherwise be set.</div></div>",1155:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1155\" class=\"NDPrototype NoParameterForm\">Version firmwareVersion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the firmware Version of the MipNode.</div></div>",1156:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1156\" class=\"NDPrototype NoParameterForm\">MipModel model() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the MipModel of the MipNode.</div></div>",1157:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1157\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> modelName() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the model name of the MipNode (ie. &quot;3DM-GX3-45&quot;).</div></div>",1158:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1158\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> modelNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the model number of the MipNode (ie. &quot;6225-4220&quot;).</div></div>",1159:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1159\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> serialNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the serial number of the MipNode (ie. &quot;6225-01319&quot;).</div></div>",1160:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1160\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> lotNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the lot number of the MipNode (ie. &quot;I042Y&quot;).</div></div>",1161:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1161\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> deviceOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the device options of the MipNode (ie. &quot;5g, 300d/s&quot;).</div></div>",1162:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1162\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> timeout(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">timeout</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the timeout to use when waiting for responses from commands.</div></div>",1163:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1163\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> timeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the timeout to use when waiting for responses from commands.</div></div>",1164:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1164\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> name()</div><div class=\"TTSummary\">Gets the name of the MipNode. This is the universal sensor name that should be used for uploading to SensorCloud.&nbsp; This is the same as calling MipNode::deviceName.</div></div>",1165:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1165\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> ping()</div><div class=\"TTSummary\">Pings the Node to check for communication.&nbsp; Sends the &quot;Ping&quot; command to the device.</div></div>",1166:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1166\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> setToIdle()</div><div class=\"TTSummary\">Suspends streaming (if enabled) or wakes the device from sleep (if sleeping), putting the device in an idle mode.&nbsp; After this command is used, the resume command may be used to put the Node back into the mode it was previously in before setToIdle was called.</div></div>",1167:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1167\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> cyclePower()</div><div class=\"TTSummary\">Performs the &quot;Device Reset&quot; command.&nbsp; Note: This is essentially the same as unplugging and plugging the device back in.</div></div>",1168:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1168\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> resume()</div><div class=\"TTSummary\">Places the Node back in the mode it was in before issuing the setToIdle command.&nbsp; If the setToIdle command was not issued, then the device is placed in default mode.</div></div>",1169:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1169\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> getCommunicationMode() = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the current communication mode that the node is in.</div></div>",1170:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1170\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> setCommunicationMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">communicationMode</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Sets the communication mode for the node.&nbsp; Note: The node info will be reset when doing this and therefore will require being fetched again the next time it is requested.</div></div>",1171:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1171\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> saveSettingsAsStartup()</div><div class=\"TTSummary\">Save the current value of the specified settings commands as a startup setting.</div></div>",1172:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1172\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> saveSettingsAsStartup(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">MipCommands&nbsp;</td><td class=\"PName last\">cmdIds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Save the current value of the specified settings commands as a startup setting.</div></div>",1173:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1173\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> saveSettingsAsStartup(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipCommandParameters&nbsp;</td><td class=\"PName last\">cmdParams</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Save the current value of the specified settings commands as a startup setting.</div></div>",1174:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1174\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> loadStartupSettings()</div><div class=\"TTSummary\">Loads the saved startup settings onto the Node as its current settings.&nbsp; This function is useful if you have powered on the Node, made changes to its settings, and want to get back to its startup settings.</div></div>",1175:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1175\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> loadStartupSettings(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">MipCommands&nbsp;</td><td class=\"PName last\">cmdIds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Loads the saved startup settings onto the Node as its current settings.&nbsp; This function is useful if you have powered on the Node, made changes to its settings, and want to get back to its startup settings.</div></div>",1176:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1176\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> loadStartupSettings(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipCommandParameters&nbsp;</td><td class=\"PName last\">cmdParams</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Loads the saved startup settings onto the Node as its current settings.&nbsp; This function is useful if you have powered on the Node, made changes to its settings, and want to get back to its startup settings.</div></div>",1177:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1177\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> loadFactoryDefaultSettings()</div><div class=\"TTSummary\">Loads the factory default settings onto the Node as its current settings.</div></div>",1178:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1178\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> loadFactoryDefaultSettings(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">MipCommands&nbsp;</td><td class=\"PName last\">cmdIds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Loads the factory default settings onto the Node as its current settings.</div></div>",1179:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1179\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> loadFactoryDefaultSettings(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipCommandParameters&nbsp;</td><td class=\"PName last\">cmdParams</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Loads the factory default settings onto the Node as its current settings.</div></div>",1180:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1180\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setUARTBaudRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">baudRate,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">resetConnection&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the baud rate.&nbsp; The device can be unresponsive for as much as 250 ms following this command.&nbsp; Important: The connection to the port will be automatically closed and re-opened at the new baud rate unless resetConnection parameter is false.</div></div>",1181:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1181\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setUARTBaudRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">baudRate,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">portId,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">resetConnection&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the baud rate.&nbsp; The device can be unresponsive for as much as 250 ms following this command.&nbsp; Important: The connection to the port will be automatically closed and re-opened at the new baud rate unless resetConnection parameter is false.</div></div>",1182:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1182\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> getUARTBaudRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">portId&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">1</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the current baud rate for the inertial device.</div></div>",1183:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1183\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">RawBytePackets getRawBytePackets(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">maxPackets&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets up to the requested amount of raw byte packets that have been collected.</div></div>"});