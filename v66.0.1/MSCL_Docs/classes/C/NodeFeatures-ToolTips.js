NDContentPage.OnToolTipsLoaded({6533:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6533\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">HistogramOptions</div></div></div><div class=\"TTSummary\">Contains all of the Histogram options that can be configured for a WirelessNode.</div></div>",6594:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6594\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FatigueOptions</div></div></div><div class=\"TTSummary\">Contains all of the fatigue options that can be configured for a WirelessNode.</div></div>",6654:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6654\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">EepromLocation</div></div></div><div class=\"TTSummary\">Represents a single Eeprom Location.</div></div>",6872:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6872\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ActivitySense</div></div></div><div class=\"TTSummary\">Contains all of the ActivitySense options that can be configured for a WirelessNode.&nbsp; Activity Sense is a power saving feature that allows a Node to be in a low-power state when no activity is suspected, and then immediately jump to its normal sampling state when a certain activity threshold is reached.</div></div>",6890:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Holds information (read from eeprom) about a WirelessNode.</div></div>",7035:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7035\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ChannelGroup</div></div></div><div class=\"TTSummary\">Represents a group of channels that have combined settings.</div></div>",7592:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of data collection methods that can be performed on the Node.</div></div>",7612:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of data formats that Nodes can be configured to send when sampling.</div></div>",7622:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of sampling modes the Node can be in.</div></div>",7629:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of default modes the Node can have.&nbsp; This is the mode the Node starts in, as well as the mode the node goes into after an inactivity timeout.</div></div>",7653:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the transmit powers that can be used for Wireless Devices.</div></div>",7784:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of channels on Wireless Nodes.</div></div>",7797:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the possible voltage input types</div></div>",7800:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the settling times used for thermocouple and voltage inputs on some Wireless Nodes.</div></div>",7813:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the Transducer types supported by some Wireless Nodes.</div></div>",7848:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The possible sample rates that are available for Wireless Nodes.</div></div>",7903:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The possible region codes for the device.</div></div>",7916:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The possible settings for ChannelGroups.</div></div>",7963:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The different modes a Fatigue Node can operate in.</div></div>",7970:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The filter options (used for anti-aliasing and low-pass filter)</div></div>",8010:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The channel frequency class filter options.</div></div>",8014:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The options available for configuring what happens when the storage limit is reached when logging to a Node.</div></div>",8017:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The options available for input range on supported Nodes.</div></div>",8154:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Data Modes.</div></div>",8159:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Derived Channel Categories for configuration.</div></div>",8173:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Communication Protocol types.</div></div>",8176:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Voltages.</div></div>",8186:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Sensor Output Modes.</div></div>",8198:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Types of delays that individual sensors can support.</div></div>",8203:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a map of &lt;DerivedChannelOption&gt; to ChannelMask pairs.</div></div>",8403:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype8403\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by a WirelessNode.</div></div>",8501:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8501\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> TimeSpan minTimeBetweenBursts(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataMode&nbsp;</td><td></td><td class=\"PName last\">dataMode,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataFormat&nbsp;</td><td></td><td class=\"PName last\">dataFormat,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">rawChannels,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DerivedChannelMasks&nbsp;</td><td></td><td class=\"PName last\">derivedChannelMasks,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">rawSampleRate,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">sweepsPerBurst,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td></td><td class=\"PName last\">commProtocol</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the minimum time that can be assigned for a Burst Sync Sampling session.</div></div>",8515:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8515\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::WirelessSampleRates sampleRates(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">SamplingMode&nbsp;</td><td class=\"PName last\">samplingMode,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataCollectionMethod&nbsp;</td><td class=\"PName last\">dataCollectionMethod,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataMode&nbsp;</td><td class=\"PName last\">dataMode</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::WirelessSampleRates that are supported by this Node for the given sampling mode.</div></div>",8528:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8528\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual const</span> InputRanges inputRanges(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channels</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of InputRanges that are supported by this Node for the specified channel mask.</div></div>",8567:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype8567\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessChannel</div></div></div><div class=\"TTSummary\">Represents a channel on a WirelessNode. This can be used to gain information about the channel, view current settings that are applied, and update settings on the Node.</div></div>",8879:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype8879\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessNode</div></div></div><div class=\"TTSummary\">A class representing a MicroStrain wireless node</div></div>",9439:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9439\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ChannelMask</div></div></div><div class=\"TTSummary\">Represents the channel mask (active and inactive channels) for a WirelessNode.</div></div>",9797:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9797\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SampleRate</div></div></div><div class=\"TTSummary\">Represents a MicroStrain sample rate (rate at which data is sampling)</div></div>",10313:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10313\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">TimeSpan</div></div></div><div class=\"TTSummary\">Represents a range of time</div></div>",10381:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10381\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NotSupported</div></div></div><div class=\"TTSummary\">A command/feature was attempted to be used that was not supported.</div></div>",6903:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6903\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_vlink_legacy</div></div></div><div class=\"TTSummary\">Contains information on features for the V-Link (legacy) node. Inherits from NodeFeatures.</div></div>",6906:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6906\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_wirelessImpactSensor</div></div></div><div class=\"TTSummary\">Contains information on features for the Wireless Impact nodes.</div></div>",6912:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6912\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_vlink</div></div></div><div class=\"TTSummary\">Contains information on features for the V-Link node. Inherits from NodeFeatures.</div></div>",6924:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6924\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_torqueLink</div></div></div><div class=\"TTSummary\">Contains information on features for the SG-Link-Micro node. Inherits from NodeFeatures.</div></div>",6927:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6927\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_tclink6ch</div></div></div><div class=\"TTSummary\">Contains information on features for the TC-Link 6CH Node.</div></div>",6930:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6930\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_tclink3ch</div></div></div><div class=\"TTSummary\">Contains information on features for the TC-Link 3CH Node.</div></div>",6939:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6939\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_tclink1ch</div></div></div><div class=\"TTSummary\">Contains information on features for the TC-Link 1CH Node.</div></div>",6952:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6952\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_shmlink2</div></div></div><div class=\"TTSummary\">Contains information on features for the SHM-Link 2 node. Inherits from NodeFeatures.</div></div>",6955:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6955\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_shmlink</div></div></div><div class=\"TTSummary\">Contains information on features for the SHM-Link node. Inherits from NodeFeatures.</div></div>",6958:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6958\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_sglinkrgd</div></div></div><div class=\"TTSummary\">Contains information on features for the SG-Link node. Inherits from NodeFeatures.</div></div>",6961:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6961\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_sglinkoemHermetic</div></div></div><div class=\"TTSummary\">Contains information on features for the SG-Link-OEM node. Inherits from NodeFeatures.</div></div>",6964:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6964\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_sglinkoemNoXR</div></div></div><div class=\"TTSummary\">Contains information on features for the SG-Link-OEM node. Inherits from NodeFeatures.</div></div>",6967:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6967\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_sglinkoem</div></div></div><div class=\"TTSummary\">Contains information on features for the SG-Link-OEM node. Inherits from NodeFeatures.</div></div>",6970:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6970\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_sglinkMicro</div></div></div><div class=\"TTSummary\">Contains information on features for the SG-Link-Micro node. Inherits from NodeFeatures.</div></div>",6976:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6976\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_sglink</div></div></div><div class=\"TTSummary\">Contains information on features for the SG-Link node. Inherits from NodeFeatures.</div></div>",6985:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6985\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_rtdlink</div></div></div><div class=\"TTSummary\">Contains information on features for the RTD-Link Node.</div></div>",6991:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6991\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_iepeLink</div></div></div><div class=\"TTSummary\">Contains information on features for the IEPE-Link.</div></div>",6994:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6994\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_glink2Internal</div></div></div><div class=\"TTSummary\">Contains information on features for the G-Link 2 (Internal Accels) nodes.</div></div>",6997:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6997\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_glink2External</div></div></div><div class=\"TTSummary\">Contains information on features for the G-Link 2 (External Accel) nodes.</div></div>",7003:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7003\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_glink</div></div></div><div class=\"TTSummary\">Contains information on features for the G-Link nodes.</div></div>",7009:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7009\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_envlinkPro</div></div></div><div class=\"TTSummary\">Contains information on features for the ENV-Link Pro Node.</div></div>",7012:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7012\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_dvrtlink</div></div></div><div class=\"TTSummary\">Contains information on features for the DVRT-Link node. Inherits from NodeFeatures.</div></div>",7015:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7015\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_envlinkMini</div></div></div><div class=\"TTSummary\">Contains information on features for the ENV-Link Mini Node.</div></div>",7021:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7021\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_200series</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by a 200-series WirelessNode.&nbsp; Inherits from NodeFeatures.</div></div>"});