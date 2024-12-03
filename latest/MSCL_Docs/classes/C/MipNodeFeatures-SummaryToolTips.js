NDSummary.OnToolTipsLoaded("CClass:MipNodeFeatures",{3187:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3187\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipNodeFeatures</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by an InertialNode.</div></div>",3189:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3189\" class=\"NDPrototype NoParameterForm\">mutable std::unique_ptr&lt;MipNodeInfo&gt; m_nodeInfo</div><div class=\"TTSummary\">The MipNodeInfo object that gives access to information of the Node</div></div>",3191:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3191\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipNodeFeatures(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipNode_Impl&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">node</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipNodeFeatures object.</div></div>",3193:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3193\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> MipNode_Impl* m_node</div><div class=\"TTSummary\">The MipNode_Impl to use for lazy loading of values.</div></div>",3195:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3195\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> MipNodeInfo&amp; nodeInfo() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the basic device info (serial, model, fw version, etc.).</div></div>",3196:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3196\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> resetNodeInfo()</div><div class=\"TTSummary\">Clears cached info read from device (ie fw version, receiver info, etc.).</div></div>",3197:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3197\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::unique_ptr&lt;MipNodeFeatures&gt; create(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipNode_Impl&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">node</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds and returns a MipNodeFeatures pointer.</div></div>",3198:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3198\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> isChannelField(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">descriptor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if the uint16 descriptor value is a Channel field or not.</div></div>",3199:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3199\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsCategory(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName last\">dataClass</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether or not a given MipTypes::DataClass is supported by the Node.</div></div>",3200:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3200\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">commandId</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether or not the given MipTypes::Command is supported by the Node.</div></div>",3201:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3201\" class=\"NDPrototype NoParameterForm\">MipTypes::MipCommands supportedCommands() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the supported MipTypes::MipCommands that are supported by the Node.</div></div>",3202:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3202\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsChannelField(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelField&nbsp;</td><td class=\"PName last\">fieldId</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether or not the given MipTypes::ChannelField is supported by the Node.</div></div>",3203:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3203\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipTypes::MipChannelFields filterSupportedChannelFields(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> MipTypes::</td><td class=\"PType\">MipChannelFields&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">fields</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether or not the MipTypes::ChannelField values in the specified list are supported by the Node and returns a list of those that are.</div></div>",3204:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3204\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipTypes::MipChannelFields supportedChannelFields(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName\">dataClass&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">MipTypes::DataClass(<span class=\"SHNumber\">-1</span>)</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of the supported channel fields for a given MipTypes::DataClass.</div></div>",3205:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3205\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> SampleRates&amp; supportedSampleRates(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName last\">dataClass</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of the supported sample rates for a given MipTypes::DataClass.</div></div>",3206:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3206\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const uint16</span>&amp; baseDataRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName last\">dataClass</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the base data rate for a given MipTypes::DataClass.</div></div>",3207:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3207\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> GnssReceivers&amp; gnssReceiverInfo() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of GnssReceiverInfo for supported GNSS receivers.</div></div>",3208:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3208\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> GnssSources supportedGnssSources() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of &lt;InertialTypes::GNSS_Source&gt; for supported GNSS sources.</div></div>",3209:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3209\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> SupportedSensorRanges&amp; supportedSensorRanges() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the SupportedSensorRanges for each configurable sensor type.</div></div>",3210:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3210\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> SensorRanges supportedSensorRanges(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">SensorRange::</td><td class=\"PType\">Type&nbsp;</td><td class=\"PName last\">type</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the SupportedSensorRanges for the specified configurable sensor type.</div></div>",3211:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3211\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> CommPortInfo getCommPortInfo() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of DeviceCommPort info objects for each comm port on the device.</div></div>",3212:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3212\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> useLegacyIdsForEnableDataStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">true if the device uses Legacy IDs for the IMU/AHRS, GNSS, and EF data sets in the Enable Data Stream command (0x0C, 0x11)</div></div>",3213:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3213\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> HeadingUpdateOptionsList supportedHeadingUpdateOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the supported heading update control options for this node.&nbsp; Command: Heading Aiding Source Control (0x0D,0x18)</div></div>",3214:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3214\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> HeadingAlignmentMethod supportedHeadingAlignmentMethods() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the supported heading alignment methods for this node.&nbsp; Command: Navigation Filter Initialization (0x0D,0x52)</div></div>",3215:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3215\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> StatusSelectors supportedStatusSelectors() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the supported device data status selectors for this node.</div></div>",3216:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3216\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> EstimationControlOptions supportedEstimationControlOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets an object containing the estimation control options supported by this node.</div></div>",3217:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3217\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> VehicleModeTypes supportedVehicleModeTypes() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the supported vehicle mode types for this node.</div></div>",3218:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3218\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> AdaptiveMeasurementModes supportedAdaptiveMeasurementModes() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets an object containing the adaptive measurement modes supported by this node.</div></div>",3219:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3219\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> AdaptiveFilterLevels supportedAdaptiveFilterLevels() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets an object containing the adaptive filtering levels supported by this node.</div></div>",3220:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3220\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> AidingMeasurementSourceOptions supportedAidingMeasurementOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the aiding measurement sources supported by this device.</div></div>",3221:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3221\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> PpsSourceOptions supportedPpsSourceOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the PPS source options supported by this device.</div></div>",3222:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3222\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> std::vector&lt;GpioPinId&gt; supportedGpioPins() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the GPIO Pin IDs supported by this device.</div></div>",3223:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3223\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> GpioPinModeOptions supportedGpioPinModes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">GpioConfiguration::</td><td class=\"PType\">Feature&nbsp;</td><td class=\"PName last\">feature,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">behavior</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the Pin Mode options supported by this device based on the selected feature and behavior.</div></div>",3224:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3224\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> GpioBehaviorModes supportedGpioBehaviors(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">GpioConfiguration::</td><td class=\"PType\">Feature&nbsp;</td><td class=\"PName last\">feature,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">GpioPinId&nbsp;</td><td class=\"PName last\">pin</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the GPIO Behavior options supported by this device based on the selected feature.</div></div>",3225:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3225\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> GpioFeatureBehaviors supportedGpioFeatures(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">GpioPinId&nbsp;</td><td class=\"PName last\">pin</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the GPIO Feature options supported by this device for the specified GPIO pin.</div></div>",3226:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3226\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> GpioPinOptions supportedGpioConfigurations() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a map of supported GPIO configuration options for each supported pin</div></div>",3227:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3227\" class=\"NDPrototype NoParameterForm\">GnssSignalConfigOptions supportedGnssSignalConfigurations() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets bitmask vectors of supported GnssSignalConfiguration for each constellation</div></div>",3228:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Gets a vector of supported declination source options</div></div>",3229:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Gets a vector of supported inclination source options</div></div>",3230:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Gets a vector of supported magnetic magnitude source options</div></div>",3231:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3231\" class=\"NDPrototype NoParameterForm\">MipTypes::ChannelFieldQualifiers supportedEventThresholdChannels() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the supported channel fields/qualifiers for event threshold configuration.</div></div>",3232:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3232\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> EventSupportInfo supportedEventActionInfo() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets EventSupportInfo for event triggers and their types supported by the device.</div></div>",3233:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3233\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> EventSupportInfo supportedEventTriggerInfo() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets EventSupportInfo for event actions and their types supported by the device.</div></div>",3234:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3234\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const bool</span> supportsNorthCompensation() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether or not north compensation is supported by the Node.&nbsp; Only supported on devices with a magnetometer.</div></div>",3235:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3235\" class=\"NDPrototype NoParameterForm\">MipTypes::MipChannelFields supportedLowPassFilterChannelFields() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the list of MipTypes::ChannelFields that the low-pass filter can be applied to for this device.</div></div>",3236:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3236\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> maxMeasurementReferenceFrameId() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the maximum Measurement Reference Frame ID supported by this device. Supported ids are 1 through max ID.</div></div>"});