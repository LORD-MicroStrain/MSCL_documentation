NDSummary.OnToolTipsLoaded("File:MicroStrain/MIP/MipNodeFeatures.h",{265:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype265\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipNodeFeatures</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by an InertialNode.</div></div>",266:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype266\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> isChannelField(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">descriptor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if the uint16 descriptor value is a Channel field or not.</div></div>",267:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype267\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsCategory(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName last\">dataClass</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether or not a given MipTypes::DataClass is supported by the Node.</div></div>",268:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype268\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">commandId</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether or not the given MipTypes::Command is supported by the Node.</div></div>",269:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype269\" class=\"NDPrototype NoParameterForm\">MipTypes::MipCommands supportedCommands() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the supported MipTypes::MipCommands that are supported by the Node.</div></div>",270:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype270\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsChannelField(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelField&nbsp;</td><td class=\"PName last\">fieldId</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether or not the given MipTypes::ChannelField is supported by the Node.</div></div>",271:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype271\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipTypes::MipChannelFields filterSupportedChannelFields(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> MipTypes::</td><td class=\"PType\">MipChannelFields&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">fields</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether or not the MipTypes::ChannelField values in the specified list are supported by the Node and returns a list of those that are.</div></div>",272:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype272\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipTypes::MipChannelFields supportedChannelFields(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName\">dataClass&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">MipTypes::DataClass(<span class=\"SHNumber\">-1</span>)</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of the supported channel fields for a given MipTypes::DataClass.</div></div>",273:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype273\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> SampleRates&amp; supportedSampleRates(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName last\">dataClass</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of the supported sample rates for a given MipTypes::DataClass.</div></div>",274:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype274\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const uint16</span>&amp; baseDataRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName last\">dataClass</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the base data rate for a given MipTypes::DataClass.</div></div>",275:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype275\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> GnssReceivers&amp; gnssReceiverInfo() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of GnssReceiverInfo for supported GNSS receivers.</div></div>",276:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype276\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> GnssSources supportedGnssSources() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of &lt;InertialTypes::GNSS_Source&gt; for supported GNSS sources.</div></div>",277:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype277\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> SupportedSensorRanges&amp; supportedSensorRanges() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the SupportedSensorRanges for each configurable sensor type.</div></div>",278:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype278\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> SensorRanges supportedSensorRanges(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">SensorRange::</td><td class=\"PType\">Type&nbsp;</td><td class=\"PName last\">type</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the SupportedSensorRanges for the specified configurable sensor type.</div></div>",279:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype279\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> CommPortInfo getCommPortInfo() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of DeviceCommPort info objects for each comm port on the device.</div></div>",280:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype280\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> useLegacyIdsForEnableDataStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">true if the device uses Legacy IDs for the IMU/AHRS, GNSS, and EF data sets in the Enable Data Stream command (0x0C, 0x11)</div></div>",281:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype281\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> HeadingUpdateOptionsList supportedHeadingUpdateOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the supported heading update control options for this node.&nbsp; Command: Heading Aiding Source Control (0x0D,0x18)</div></div>",282:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype282\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> HeadingAlignmentMethod supportedHeadingAlignmentMethods() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the supported heading alignment methods for this node.&nbsp; Command: Navigation Filter Initialization (0x0D,0x52)</div></div>",283:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype283\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> StatusSelectors supportedStatusSelectors() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the supported device data status selectors for this node.</div></div>",284:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype284\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> EstimationControlOptions supportedEstimationControlOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets an object containing the estimation control options supported by this node.</div></div>",285:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype285\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> VehicleModeTypes supportedVehicleModeTypes() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the supported vehicle mode types for this node.</div></div>",286:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype286\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> AdaptiveMeasurementModes supportedAdaptiveMeasurementModes() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets an object containing the adaptive measurement modes supported by this node.</div></div>",287:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype287\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> AdaptiveFilterLevels supportedAdaptiveFilterLevels() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets an object containing the adaptive filtering levels supported by this node.</div></div>",288:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype288\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> AidingMeasurementSourceOptions supportedAidingMeasurementOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the aiding measurement sources supported by this device.</div></div>",289:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype289\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> PpsSourceOptions supportedPpsSourceOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the PPS source options supported by this device.</div></div>",290:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype290\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> std::vector&lt;GpioPinId&gt; supportedGpioPins() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the GPIO Pin IDs supported by this device.</div></div>",291:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype291\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> GpioPinModeOptions supportedGpioPinModes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">GpioConfiguration::</td><td class=\"PType\">Feature&nbsp;</td><td class=\"PName last\">feature,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">behavior</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the Pin Mode options supported by this device based on the selected feature and behavior.</div></div>",292:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype292\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> GpioBehaviorModes supportedGpioBehaviors(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">GpioConfiguration::</td><td class=\"PType\">Feature&nbsp;</td><td class=\"PName last\">feature,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">GpioPinId&nbsp;</td><td class=\"PName last\">pin</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the GPIO Behavior options supported by this device based on the selected feature.</div></div>",293:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype293\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> GpioFeatureBehaviors supportedGpioFeatures(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">GpioPinId&nbsp;</td><td class=\"PName last\">pin</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the GPIO Feature options supported by this device for the specified GPIO pin.</div></div>",294:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype294\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> GpioPinOptions supportedGpioConfigurations() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a map of supported GPIO configuration options for each supported pin</div></div>",295:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype295\" class=\"NDPrototype NoParameterForm\">GnssSignalConfigOptions supportedGnssSignalConfigurations() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets bitmask vectors of supported GnssSignalConfiguration for each constellation</div></div>",296:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Gets a vector of supported declination source options</div></div>",297:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Gets a vector of supported inclination source options</div></div>",298:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Gets a vector of supported magnetic magnitude source options</div></div>",299:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype299\" class=\"NDPrototype NoParameterForm\">MipTypes::ChannelFieldQualifiers supportedEventThresholdChannels() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the supported channel fields/qualifiers for event threshold configuration.</div></div>",300:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype300\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> EventSupportInfo supportedEventActionInfo() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets EventSupportInfo for event triggers and their types supported by the device.</div></div>",301:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype301\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> EventSupportInfo supportedEventTriggerInfo() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets EventSupportInfo for event actions and their types supported by the device.</div></div>",302:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype302\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const bool</span> supportsNorthCompensation() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether or not north compensation is supported by the Node.&nbsp; Only supported on devices with a magnetometer.</div></div>",303:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype303\" class=\"NDPrototype NoParameterForm\">MipTypes::MipChannelFields supportedLowPassFilterChannelFields() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the list of MipTypes::ChannelFields that the low-pass filter can be applied to for this device.</div></div>",304:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype304\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> maxMeasurementReferenceFrameId() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the maximum Measurement Reference Frame ID supported by this device. Supported ids are 1 through max ID.</div></div>"});