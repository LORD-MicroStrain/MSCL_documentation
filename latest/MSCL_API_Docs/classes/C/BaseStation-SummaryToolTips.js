NDSummary.OnToolTipsLoaded("CClass:BaseStation",{4472:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4472\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStation</div></div></div><div class=\"TTSummary\">Represents a MicroStrain Base Station object</div></div>",4478:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4478\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> BaseStation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Connection&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">connection</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a BaseStation object.&nbsp; Note: this will use a default timeout of BASE_COMMANDS_DEFAULT_TIMEOUT for serial connections and a default timeout of &lt;ETHERNET_BASE_COMMANDS_DEFAULT_TIMEOUT&gt; for ethernet/websocket connections</div></div>",4479:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4479\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> BaseStation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Connection&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">connection,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td></td><td class=\"PName last\">baseTimeout</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a BaseStation object.</div></div>",4480:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4480\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> BaseStation Mock(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationInfo&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">info</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static function to create a Mock BaseStation (won\'t actually talk to a physical device).</div></div>",4481:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4481\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> BaseStation Mock()</div><div class=\"TTSummary\">Static function to create a Mock BaseStation (won\'t actually talk to a physical device) using the following default info: Firmware version: 5.0 Model: WSDA-Base 104 USB Region: USA asppVersion_LXRS: 1.7 asppVersion_LXRS+: 3.0</div></div>",4482:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4482\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> deviceName(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">serial</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static function for creating the universal basestation name that should be used for SensorCloud.</div></div>",4483:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4483\" class=\"NDPrototype NoParameterForm\">Connection&amp; connection() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Connection object that this BaseStation is using.</div></div>",4484:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4484\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> BaseStationFeatures&amp; features() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a reference to the BaseStationFeatures for this BaseStation.&nbsp; Note: This will be invalid when the BaseStation is destroyed.</div></div>",4485:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4485\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Timestamp&amp; lastCommunicationTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Timestamp for the last time MSCL communicated with the BaseStation.&nbsp; Note: EEPROM reads using the cache, and data collection, will not update this timestamp.</div></div>",4486:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4486\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> readWriteRetries(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">numRetries</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the number of retry attempts for reading and writing config options on the BaseStation.&nbsp; By default, the number of retries is 0.&nbsp; Note:&nbsp; The timeout that is set per command will be per read and write attempt, meaning this retry number is multiplied by the timeout for your overall timeout.</div></div>",4487:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4487\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> readWriteRetries() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of retry attempts for reading and writing config options on the BaseStation.&nbsp; By default, the number of retries is 0.&nbsp; Note:&nbsp; The timeout that is set per command will be per read and write attempt, meaning this retry number is multiplied by the timeout for your overall timeout.</div></div>",4488:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4488\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> useEepromCache(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">useCache</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets whether or not to utilize the eeprom cache when configuring this BaseStation (enabled by default). This can be enabled/disabled at any time.&nbsp; It is highly recommended to have eeprom caching be enabled.&nbsp; Note:&nbsp; The eeprom cache stores the last known value that was written to / read from the BaseStation for each eeprom location. If this is enabled, any reads will get the last known value from the cache if it exists, and any writes will not write to the BaseStation if the value attempting to be written is the same as that stored in the cache. Caching of these values will still be performed if this is disabled, however, read and write operations will then always reach out to the actual device.</div></div>",4489:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4489\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> clearEepromCache()</div><div class=\"TTSummary\">Clears the eeprom cache for this BaseStation.</div></div>",4490:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4490\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency frequency() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::Frequency representing the radio frequency of this BaseStation.</div></div>",4491:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4491\" class=\"NDPrototype NoParameterForm\">WirelessTypes::CommProtocol communicationProtocol() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::CommProtocol that the BaseStation is currently set to use.</div></div>",4492:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4492\" class=\"NDPrototype NoParameterForm\">Version firmwareVersion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the firmware version of the BaseStation.</div></div>",4493:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4493\" class=\"NDPrototype NoParameterForm\">WirelessModels::BaseModel model() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the model of the BaseStation.</div></div>",4494:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4494\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> serial() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the serial number of the BaseStation.</div></div>",4495:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4495\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> name() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the name of the BaseStation. This is the universal basestation name that should be used for SensorCloud.&nbsp; This is the same as calling BaseStation::deviceName.</div></div>",4496:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4496\" class=\"NDPrototype NoParameterForm\">WirelessTypes::MicroControllerType microcontroller() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the microcontroller of the BaseStation.</div></div>",4497:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4497\" class=\"NDPrototype NoParameterForm\">WirelessTypes::RegionCode regionCode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the region code currently set on the BaseStation.</div></div>",4498:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4498\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">DataSweeps getData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">maxSweeps&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets up to the requested amount of DataSweeps of sampled data that was collected by this BaseStation.</div></div>",4499:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4499\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> totalData()</div><div class=\"TTSummary\">Gets the number of DataSweeps that are currently in the data buffer.</div></div>",4500:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4500\" class=\"NDPrototype NoParameterForm\">NodeDiscoveries getNodeDiscoveries()</div><div class=\"TTSummary\">Gets the group of Node Discoveries that were collected by this base station.&nbsp; Calling this function clears out the Node Discovery buffer, so successively calling this will give you new Node Discoveries.</div></div>",4501:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4501\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> timeout(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">timeout</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the timeout to use when waiting for responses from commands.&nbsp; This timeout is used directly for BaseStation commands, while some additional time is added for Node commands.&nbsp; Note: Some commands have a minimum timeout that will override this if set lower than the minimum.</div></div>",4502:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4502\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> timeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current timeout to use when waiting for responses from base station commands.&nbsp; This timeout is used directly for BaseStation commands, while some additional time is added for Node commands.&nbsp; Note: Some commands have a minimum timeout that will override this if set lower than the minimum.</div></div>",4503:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4503\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> ping()</div><div class=\"TTSummary\">Pings the base station</div></div>",4504:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4504\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> readEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">eepromAddress</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads a specific EEPROM address on the Base Station.&nbsp; If the value stored in the eeprom cache is still valid, this will be returned instead.</div></div>",4505:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4505\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> writeEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">eepromAddress,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the specified value to a specific EEPROM address on the Base Station.&nbsp; If successful, the cache will be updated with the changed value as well.</div></div>",4506:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4506\" class=\"NDPrototype NoParameterForm\">Timestamp enableBeacon()</div><div class=\"TTSummary\">Enables the beacon on the base station using the system time (UTC) as its starting timestamp.</div></div>",4507:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4507\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Timestamp enableBeacon(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">utcTime</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Enables the beacon on the base station using the given UTC timestamp.</div></div>",4508:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4508\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> disableBeacon()</div><div class=\"TTSummary\">Disables the beacon on the base station.</div></div>",4509:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4509\" class=\"NDPrototype NoParameterForm\">BeaconStatus beaconStatus()</div><div class=\"TTSummary\">Gets the BeaconStatus of the beacon on the base station.</div></div>",4510:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4510\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> startRfSweepMode()</div><div class=\"TTSummary\">Starts the BaseStation in a fixed RF Sweep Mode, which will sweep over all the supported operating frequencies of the BaseStation.&nbsp; Note: To exit this Mode, send any command to the BaseStation (such as ping).</div></div>",4511:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4511\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> startRfSweepMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">minFreq,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">maxFreq,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">interval,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName\">options</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Starts the BaseStation in a custom RF Sweep Mode across the provided frequencies.&nbsp; Note: To exit this Mode, send any command to the BaseStation (such as ping).</div></div>",4512:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4512\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> cyclePower(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">checkComm</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Cycles the power on the base station.</div></div>",4513:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4513\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> resetRadio()</div><div class=\"TTSummary\">Resets the radio on the base station.</div></div>",4514:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4514\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> changeFrequency(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td class=\"PName last\">frequency</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Changes the radio frequency of the base station.</div></div>",4515:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4515\" class=\"NDPrototype NoParameterForm\">mscl::SetToIdleStatus broadcastSetToIdle()</div><div class=\"TTSummary\">Broadcasts the Set to Idle command (will be heard by all nodes on the BaseStation\'s frequency).</div></div>",4516:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4516\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> verifyConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationConfig&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">config,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ConfigIssues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">outIssues</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether the settings in the given BaseStationConfig are ok to be written to the BaseStation.&nbsp; Options that are set will also be validated against each other. If an option that needs to be validated isn\'t currently set, it will be read from the BaseStation.</div></div>",4517:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4517\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> applyConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationConfig&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">config</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Applies a BaseStationConfig to the Node.&nbsp; Note: This applies all options that have been set in the BaseStationConfig.&nbsp; Before applying, the options will be validated. It is recommended that you perform this validation yourself first by using verifyConfig.</div></div>",4518:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4518\" class=\"NDPrototype NoParameterForm\">WirelessTypes::TransmitPower getTransmitPower() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the WirelessTypes::TransmitPower that is currently set on the BaseStation.</div></div>",4519:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4519\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationButton getButtonLongPress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">buttonNumber</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the button settings for a long press action that are currently set on the BaseStation.</div></div>",4520:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4520\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationButton getButtonShortPress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">buttonNumber</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the button settings for a short press action that are currently set on the BaseStation.</div></div>",4521:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4521\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> getAnalogPairingEnabled() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the Analog Pairing enabled/disabled setting that is currently set on the BaseStation.&nbsp; If this is disabled, all other analog pairing settings will be disabled.</div></div>",4522:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4522\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> getAnalogTimeoutTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the Analog Timeout Time in seconds that is currently set on the BaseStation.</div></div>",4523:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4523\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> getAnalogTimeoutVoltage() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the Analog Timeout Voltage that is currently set on the BaseStation.</div></div>",4524:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4524\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> getAnalogExceedanceEnabled() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the Analog Exceedance enabled/disabled setting that is currently set on the BaseStation.</div></div>",4525:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4525\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationAnalogPair getAnalogPair(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">portNumber</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the BaseStationAnalogPair for the specified port number that is currently set on the BaseStation.</div></div>",4526:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4526\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">RawBytePackets getRawBytePackets(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">maxPackets&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets up to the requested amount of raw byte packets that have been collected.</div></div>"});