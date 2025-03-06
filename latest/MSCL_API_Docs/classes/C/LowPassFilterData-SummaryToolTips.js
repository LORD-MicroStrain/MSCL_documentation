NDSummary.OnToolTipsLoaded("CClass:LowPassFilterData",{526:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the data for the InertialNode::setLowPassFilterSettings API call.</div></div>",527:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enum for the different data descriptors.</div></div>",528:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype528\" class=\"NDPrototype NoParameterForm\">LowPassFilterData() : dataDescriptor(mscl::MipTypes::ChannelField::CH_FIELD_SENSOR_SCALED_ACCEL_VEC), manualFilterBandwidthConfig(SET_TO_HALF_REPORTING_RATE), applyLowPassFilter(<span class=\"SHKeyword\">true</span>), cutoffFrequency(<span class=\"SHNumber\">0</span>)</div></div>",529:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype529\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">LowPassFilterData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">mscl::MipTypes::</td><td class=\"PType\">ChannelField&nbsp;</td><td class=\"PName last\">descriptor</td></tr></table></td><td class=\"PAfterParameters\">) : dataDescriptor(descriptor), manualFilterBandwidthConfig(SET_TO_HALF_REPORTING_RATE), applyLowPassFilter(<span class=\"SHKeyword\">true</span>), cutoffFrequency(<span class=\"SHNumber\">0</span>)</td></tr></table></div></div>",530:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype530\" class=\"NDPrototype NoParameterForm\">mscl::MipTypes::ChannelField dataDescriptor</div><div class=\"TTSummary\">the data descriptor these settings apply to</div></div>",531:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype531\" class=\"NDPrototype NoParameterForm\">ManualFilterBandwidthConfig manualFilterBandwidthConfig</div><div class=\"TTSummary\">The ManualFilterBandwidthConfig to use.</div></div>",532:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype532\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> applyLowPassFilter</div><div class=\"TTSummary\">applies low-pass filter if set to true.</div></div>",533:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype533\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> cutoffFrequency</div><div class=\"TTSummary\">Sets the cutoff frequency, only if manualFilterBandwidthConfig == USER_SPECIFIED_CUTOFF_FREQ</div></div>",534:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype534\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static uint8</span> getDataDescriptorForCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">mscl::MipTypes::</td><td class=\"PType\">ChannelField&nbsp;</td><td class=\"PName last\">descriptor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Formats the given MipTypes::ChannelField data descriptor to be written to a &lt;ByteStream&gt; command.</div></div>",535:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype535\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> mscl::MipTypes::ChannelField getDataDescriptorFromUint8(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">descriptor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the MipTypes::ChannelField data descriptor represented by the given uint8 descriptor.</div></div>",536:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A vector of LowPassFilterData objects</div></div>"});