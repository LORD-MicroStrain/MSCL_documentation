NDContentPage.OnToolTipsLoaded({6450:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6450\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">HistogramOptions</div></div></div><div class=\"TTSummary\">Contains all of the Histogram options that can be configured for a WirelessNode.</div></div>",6511:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6511\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FatigueOptions</div></div></div><div class=\"TTSummary\">Contains all of the fatigue options that can be configured for a WirelessNode.</div></div>",6549:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6549\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">EepromLocation</div></div></div><div class=\"TTSummary\">Represents a single Eeprom Location.</div></div>",6735:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6735\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ActivitySense</div></div></div><div class=\"TTSummary\">Contains all of the ActivitySense options that can be configured for a WirelessNode.&nbsp; Activity Sense is a power saving feature that allows a Node to be in a low-power state when no activity is suspected, and then immediately jump to its normal sampling state when a certain activity threshold is reached.</div></div>",6753:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Holds information (read from eeprom) about a WirelessNode.</div></div>",7072:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7072\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ChannelGroup</div></div></div><div class=\"TTSummary\">Represents a group of channels that have combined settings.</div></div>",7110:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7110\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by a WirelessNode.</div></div>",7208:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7208\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> TimeSpan minTimeBetweenBursts(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataMode&nbsp;</td><td></td><td class=\"PName last\">dataMode,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataFormat&nbsp;</td><td></td><td class=\"PName last\">dataFormat,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">rawChannels,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DerivedChannelMasks&nbsp;</td><td></td><td class=\"PName last\">derivedChannelMasks,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">rawSampleRate,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">sweepsPerBurst,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td></td><td class=\"PName last\">commProtocol</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the minimum time that can be assigned for a Burst Sync Sampling session.</div></div>",7222:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7222\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::WirelessSampleRates sampleRates(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">SamplingMode&nbsp;</td><td class=\"PName last\">samplingMode,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataCollectionMethod&nbsp;</td><td class=\"PName last\">dataCollectionMethod,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataMode&nbsp;</td><td class=\"PName last\">dataMode</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::WirelessSampleRates that are supported by this Node for the given sampling mode.</div></div>",7235:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7235\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual const</span> InputRanges inputRanges(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channels</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of InputRanges that are supported by this Node for the specified channel mask.</div></div>",7839:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of data collection methods that can be performed on the Node.</div></div>",7859:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of data formats that Nodes can be configured to send when sampling.</div></div>",7869:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of sampling modes the Node can be in.</div></div>",7876:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of default modes the Node can have.&nbsp; This is the mode the Node starts in, as well as the mode the node goes into after an inactivity timeout.</div></div>",7900:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the transmit powers that can be used for Wireless Devices.</div></div>",8031:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of channels on Wireless Nodes.</div></div>",8044:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the possible voltage input types</div></div>",8047:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the settling times used for thermocouple and voltage inputs on some Wireless Nodes.</div></div>",8060:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the Transducer types supported by some Wireless Nodes.</div></div>",8095:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The possible sample rates that are available for Wireless Nodes.</div></div>",8150:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The possible region codes for the device.</div></div>",8163:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The possible settings for ChannelGroups.</div></div>",8210:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The different modes a Fatigue Node can operate in.</div></div>",8217:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The filter options (used for anti-aliasing and low-pass filter)</div></div>",8257:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The channel frequency class filter options.</div></div>",8261:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The options available for configuring what happens when the storage limit is reached when logging to a Node.</div></div>",8264:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The options available for input range on supported Nodes.</div></div>",8401:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Data Modes.</div></div>",8406:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Derived Channel Categories for configuration.</div></div>",8420:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Communication Protocol types.</div></div>",8423:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Voltages.</div></div>",8433:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Sensor Output Modes.</div></div>",8445:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Types of delays that individual sensors can support.</div></div>",8450:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a map of &lt;DerivedChannelOption&gt; to ChannelMask pairs.</div></div>",8717:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype8717\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessChannel</div></div></div><div class=\"TTSummary\">Represents a channel on a WirelessNode. This can be used to gain information about the channel, view current settings that are applied, and update settings on the Node.</div></div>",8985:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype8985\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessNode</div></div></div><div class=\"TTSummary\">A class representing a MicroStrain wireless node</div></div>",9515:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9515\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ChannelMask</div></div></div><div class=\"TTSummary\">Represents the channel mask (active and inactive channels) for a WirelessNode.</div></div>",9873:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9873\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SampleRate</div></div></div><div class=\"TTSummary\">Represents a MicroStrain sample rate (rate at which data is sampling)</div></div>",10358:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10358\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">TimeSpan</div></div></div><div class=\"TTSummary\">Represents a range of time</div></div>",10490:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10490\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NotSupported</div></div></div><div class=\"TTSummary\">A command/feature was attempted to be used that was not supported.</div></div>",6766:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6766\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_wirelessImpactSensor</div></div></div><div class=\"TTSummary\">Contains information on features for the Wireless Impact nodes.</div></div>",6769:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6769\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_vlink_legacy</div></div></div><div class=\"TTSummary\">Contains information on features for the V-Link (legacy) node. Inherits from NodeFeatures.</div></div>",6775:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6775\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_vlink</div></div></div><div class=\"TTSummary\">Contains information on features for the V-Link node. Inherits from NodeFeatures.</div></div>",6787:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6787\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_torqueLink</div></div></div><div class=\"TTSummary\">Contains information on features for the SG-Link-Micro node. Inherits from NodeFeatures.</div></div>",6790:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6790\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_tclink6ch</div></div></div><div class=\"TTSummary\">Contains information on features for the TC-Link 6CH Node.</div></div>",6793:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6793\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_tclink3ch</div></div></div><div class=\"TTSummary\">Contains information on features for the TC-Link 3CH Node.</div></div>",6802:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6802\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_tclink1ch</div></div></div><div class=\"TTSummary\">Contains information on features for the TC-Link 1CH Node.</div></div>",6989:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6989\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_shmlink</div></div></div><div class=\"TTSummary\">Contains information on features for the SHM-Link node. Inherits from NodeFeatures.</div></div>",6992:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6992\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_shmlink2</div></div></div><div class=\"TTSummary\">Contains information on features for the SHM-Link 2 node. Inherits from NodeFeatures.</div></div>",6995:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6995\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_sglinkrgd</div></div></div><div class=\"TTSummary\">Contains information on features for the SG-Link node. Inherits from NodeFeatures.</div></div>",6998:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6998\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_sglinkoemNoXR</div></div></div><div class=\"TTSummary\">Contains information on features for the SG-Link-OEM node. Inherits from NodeFeatures.</div></div>",7001:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7001\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_sglinkoem</div></div></div><div class=\"TTSummary\">Contains information on features for the SG-Link-OEM node. Inherits from NodeFeatures.</div></div>",7004:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7004\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_sglinkoemHermetic</div></div></div><div class=\"TTSummary\">Contains information on features for the SG-Link-OEM node. Inherits from NodeFeatures.</div></div>",7010:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7010\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_sglinkMicro</div></div></div><div class=\"TTSummary\">Contains information on features for the SG-Link-Micro node. Inherits from NodeFeatures.</div></div>",7019:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7019\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_sglink</div></div></div><div class=\"TTSummary\">Contains information on features for the SG-Link node. Inherits from NodeFeatures.</div></div>",7022:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7022\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_rtdlink</div></div></div><div class=\"TTSummary\">Contains information on features for the RTD-Link Node.</div></div>",7028:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7028\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_glink2Internal</div></div></div><div class=\"TTSummary\">Contains information on features for the G-Link 2 (Internal Accels) nodes.</div></div>",7031:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7031\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_iepeLink</div></div></div><div class=\"TTSummary\">Contains information on features for the IEPE-Link.</div></div>",7034:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7034\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_glink2External</div></div></div><div class=\"TTSummary\">Contains information on features for the G-Link 2 (External Accel) nodes.</div></div>",7043:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7043\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_glink</div></div></div><div class=\"TTSummary\">Contains information on features for the G-Link nodes.</div></div>",7046:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7046\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_envlinkPro</div></div></div><div class=\"TTSummary\">Contains information on features for the ENV-Link Pro Node.</div></div>",7049:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7049\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_envlinkMini</div></div></div><div class=\"TTSummary\">Contains information on features for the ENV-Link Mini Node.</div></div>",7052:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7052\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_dvrtlink</div></div></div><div class=\"TTSummary\">Contains information on features for the DVRT-Link node. Inherits from NodeFeatures.</div></div>",7058:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7058\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_200series</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by a 200-series WirelessNode.&nbsp; Inherits from NodeFeatures.</div></div>"});