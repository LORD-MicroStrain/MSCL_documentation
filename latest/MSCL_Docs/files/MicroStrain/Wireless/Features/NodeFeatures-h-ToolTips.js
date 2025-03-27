NDContentPage.OnToolTipsLoaded({6376:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6376\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">HistogramOptions</div></div></div><div class=\"TTSummary\">Contains all of the Histogram options that can be configured for a WirelessNode.</div></div>",6403:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6403\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FatigueOptions</div></div></div><div class=\"TTSummary\">Contains all of the fatigue options that can be configured for a WirelessNode.</div></div>",6475:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6475\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">EepromLocation</div></div></div><div class=\"TTSummary\">Represents a single Eeprom Location.</div></div>",6693:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6693\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ActivitySense</div></div></div><div class=\"TTSummary\">Contains all of the ActivitySense options that can be configured for a WirelessNode.&nbsp; Activity Sense is a power saving feature that allows a Node to be in a low-power state when no activity is suspected, and then immediately jump to its normal sampling state when a certain activity threshold is reached.</div></div>",6711:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Holds information (read from eeprom) about a WirelessNode.</div></div>",7066:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7066\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by a WirelessNode.</div></div>",7164:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7164\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> TimeSpan minTimeBetweenBursts(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataMode&nbsp;</td><td></td><td class=\"PName last\">dataMode,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataFormat&nbsp;</td><td></td><td class=\"PName last\">dataFormat,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">rawChannels,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DerivedChannelMasks&nbsp;</td><td></td><td class=\"PName last\">derivedChannelMasks,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">rawSampleRate,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">sweepsPerBurst,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td></td><td class=\"PName last\">commProtocol</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the minimum time that can be assigned for a Burst Sync Sampling session.</div></div>",7178:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7178\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::WirelessSampleRates sampleRates(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">SamplingMode&nbsp;</td><td class=\"PName last\">samplingMode,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataCollectionMethod&nbsp;</td><td class=\"PName last\">dataCollectionMethod,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataMode&nbsp;</td><td class=\"PName last\">dataMode</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::WirelessSampleRates that are supported by this Node for the given sampling mode.</div></div>",7191:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7191\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual const</span> InputRanges inputRanges(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channels</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of InputRanges that are supported by this Node for the specified channel mask.</div></div>",7222:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7222\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ChannelGroup</div></div></div><div class=\"TTSummary\">Represents a group of channels that have combined settings.</div></div>",7817:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of data collection methods that can be performed on the Node.</div></div>",7837:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of data formats that Nodes can be configured to send when sampling.</div></div>",7847:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of sampling modes the Node can be in.</div></div>",7854:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of default modes the Node can have.&nbsp; This is the mode the Node starts in, as well as the mode the node goes into after an inactivity timeout.</div></div>",7878:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the transmit powers that can be used for Wireless Devices.</div></div>",8009:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of channels on Wireless Nodes.</div></div>",8022:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the possible voltage input types</div></div>",8025:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the settling times used for thermocouple and voltage inputs on some Wireless Nodes.</div></div>",8038:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the Transducer types supported by some Wireless Nodes.</div></div>",8073:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The possible sample rates that are available for Wireless Nodes.</div></div>",8128:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The possible region codes for the device.</div></div>",8141:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The possible settings for ChannelGroups.</div></div>",8188:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The different modes a Fatigue Node can operate in.</div></div>",8195:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The filter options (used for anti-aliasing and low-pass filter)</div></div>",8235:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The channel frequency class filter options.</div></div>",8239:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The options available for configuring what happens when the storage limit is reached when logging to a Node.</div></div>",8242:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The options available for input range on supported Nodes.</div></div>",8379:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Data Modes.</div></div>",8384:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Derived Channel Categories for configuration.</div></div>",8398:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Communication Protocol types.</div></div>",8401:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Voltages.</div></div>",8411:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Sensor Output Modes.</div></div>",8423:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Types of delays that individual sensors can support.</div></div>",8428:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a map of &lt;DerivedChannelOption&gt; to ChannelMask pairs.</div></div>",8450:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype8450\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessNode</div></div></div><div class=\"TTSummary\">A class representing a MicroStrain wireless node</div></div>",8733:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype8733\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessChannel</div></div></div><div class=\"TTSummary\">Represents a channel on a WirelessNode. This can be used to gain information about the channel, view current settings that are applied, and update settings on the Node.</div></div>",9381:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9381\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ChannelMask</div></div></div><div class=\"TTSummary\">Represents the channel mask (active and inactive channels) for a WirelessNode.</div></div>",9761:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9761\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SampleRate</div></div></div><div class=\"TTSummary\">Represents a MicroStrain sample rate (rate at which data is sampling)</div></div>",10406:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10406\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">TimeSpan</div></div></div><div class=\"TTSummary\">Represents a range of time</div></div>",10483:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10483\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NotSupported</div></div></div><div class=\"TTSummary\">A command/feature was attempted to be used that was not supported.</div></div>",6724:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6724\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_wirelessImpactSensor</div></div></div><div class=\"TTSummary\">Contains information on features for the Wireless Impact nodes.</div></div>",6727:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6727\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_vlink_legacy</div></div></div><div class=\"TTSummary\">Contains information on features for the V-Link (legacy) node. Inherits from NodeFeatures.</div></div>",6733:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6733\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_vlink</div></div></div><div class=\"TTSummary\">Contains information on features for the V-Link node. Inherits from NodeFeatures.</div></div>",6745:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6745\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_torqueLink</div></div></div><div class=\"TTSummary\">Contains information on features for the SG-Link-Micro node. Inherits from NodeFeatures.</div></div>",6748:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6748\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_tclink6ch</div></div></div><div class=\"TTSummary\">Contains information on features for the TC-Link 6CH Node.</div></div>",6751:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6751\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_tclink3ch</div></div></div><div class=\"TTSummary\">Contains information on features for the TC-Link 3CH Node.</div></div>",6976:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6976\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_tclink1ch</div></div></div><div class=\"TTSummary\">Contains information on features for the TC-Link 1CH Node.</div></div>",6989:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6989\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_shmlink2</div></div></div><div class=\"TTSummary\">Contains information on features for the SHM-Link 2 node. Inherits from NodeFeatures.</div></div>",6992:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6992\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_shmlink</div></div></div><div class=\"TTSummary\">Contains information on features for the SHM-Link node. Inherits from NodeFeatures.</div></div>",6995:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6995\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_sglinkrgd</div></div></div><div class=\"TTSummary\">Contains information on features for the SG-Link node. Inherits from NodeFeatures.</div></div>",6998:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6998\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_sglinkoemNoXR</div></div></div><div class=\"TTSummary\">Contains information on features for the SG-Link-OEM node. Inherits from NodeFeatures.</div></div>",7001:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7001\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_sglinkoemHermetic</div></div></div><div class=\"TTSummary\">Contains information on features for the SG-Link-OEM node. Inherits from NodeFeatures.</div></div>",7004:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7004\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_sglinkoem</div></div></div><div class=\"TTSummary\">Contains information on features for the SG-Link-OEM node. Inherits from NodeFeatures.</div></div>",7007:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7007\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_sglinkMicro</div></div></div><div class=\"TTSummary\">Contains information on features for the SG-Link-Micro node. Inherits from NodeFeatures.</div></div>",7016:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7016\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_sglink</div></div></div><div class=\"TTSummary\">Contains information on features for the SG-Link node. Inherits from NodeFeatures.</div></div>",7022:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7022\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_rtdlink</div></div></div><div class=\"TTSummary\">Contains information on features for the RTD-Link Node.</div></div>",7028:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7028\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_iepeLink</div></div></div><div class=\"TTSummary\">Contains information on features for the IEPE-Link.</div></div>",7031:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7031\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_glink2Internal</div></div></div><div class=\"TTSummary\">Contains information on features for the G-Link 2 (Internal Accels) nodes.</div></div>",7034:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7034\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_glink2External</div></div></div><div class=\"TTSummary\">Contains information on features for the G-Link 2 (External Accel) nodes.</div></div>",7043:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7043\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_envlinkPro</div></div></div><div class=\"TTSummary\">Contains information on features for the ENV-Link Pro Node.</div></div>",7046:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7046\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_envlinkMini</div></div></div><div class=\"TTSummary\">Contains information on features for the ENV-Link Mini Node.</div></div>",7049:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7049\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_dvrtlink</div></div></div><div class=\"TTSummary\">Contains information on features for the DVRT-Link node. Inherits from NodeFeatures.</div></div>",7052:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7052\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_200series</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by a 200-series WirelessNode.&nbsp; Inherits from NodeFeatures.</div></div>",7219:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7219\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_glink</div></div></div><div class=\"TTSummary\">Contains information on features for the G-Link nodes.</div></div>"});