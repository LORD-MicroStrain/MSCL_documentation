NDSummary.OnToolTipsLoaded("File:MicroStrain/MIP/MipNodeInfo.h",{4126:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4126\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipNodeInfo</div></div></div><div class=\"TTSummary\">Contains basic information about a MipNode.</div></div>",4128:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4128\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipNodeInfo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipNode_Impl&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">node</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipNodeInfo object.</div></div>",4129:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4129\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipNodeInfo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipDeviceInfo&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">info,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;<span class=\"SHKeyword\">uint16</span>&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">supportedDescriptors,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">map&lt;MipTypes::DataClass, SampleRates&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sampleRates,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">map&lt;MipTypes::DataClass, <span class=\"SHKeyword\">uint16</span>&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">baseRates</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipNodeInfo object.</div></div>",4131:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4131\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> MipNode_Impl* m_node</div><div class=\"TTSummary\">The MipNode_Impl to use for lazy loading of values.</div></div>",4132:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4132\" class=\"NDPrototype NoParameterForm\">Utils::Lazy&lt;MipDeviceInfo&gt; m_deviceInfo</div><div class=\"TTSummary\">The MipDeviceInfo of the Node (lazy loaded).</div></div>",4133:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4133\" class=\"NDPrototype NoParameterForm\">Utils::Lazy&lt;std::vector&lt;<span class=\"SHKeyword\">uint16</span>&gt;&gt; m_descriptors</div><div class=\"TTSummary\">A vector of descriptors supported by the Node (lazy loaded).</div></div>",4134:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4134\" class=\"NDPrototype NoParameterForm\">std::map&lt;MipTypes::DataClass, Utils::Lazy&lt;SampleRates&gt;&gt; m_sampleRates</div><div class=\"TTSummary\">Contains the sample rates for each MIP data set (lazy loaded).</div></div>",4135:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4135\" class=\"NDPrototype NoParameterForm\">std::map&lt;MipTypes::DataClass, Utils::Lazy&lt;<span class=\"SHKeyword\">uint16</span>&gt;&gt; m_baseRates</div><div class=\"TTSummary\">Contains the base rates for each MIP data set (lazy loaded).</div></div>",4136:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4136\" class=\"NDPrototype NoParameterForm\">Utils::Lazy&lt;GnssReceivers&gt; m_receiverInfo</div><div class=\"TTSummary\">The GnssReceiverInfo of the Node (lazy loaded).</div></div>",4137:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4137\" class=\"NDPrototype NoParameterForm\">Utils::Lazy&lt;EventSupportInfo&gt; m_eventActionInfo</div><div class=\"TTSummary\">The action EventSupportInfo supported by the Node (lazy loaded).</div></div>",4138:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4138\" class=\"NDPrototype NoParameterForm\">Utils::Lazy&lt;EventSupportInfo&gt; m_eventTriggerInfo</div><div class=\"TTSummary\">The trigger EventSupportInfo supported by the Node (lazy loaded).</div></div>",4139:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4139\" class=\"NDPrototype NoParameterForm\">Utils::Lazy&lt;SupportedSensorRanges&gt; m_sensorRanges</div><div class=\"TTSummary\">The SupportedSensorRanges of this device (lazy loaded).</div></div>",4141:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4141\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> MipDeviceInfo&amp; deviceInfo() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the MipDeviceInfo of the Node.</div></div>",4142:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4142\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> std::vector&lt;<span class=\"SHKeyword\">uint16</span>&gt;&amp; descriptors() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a vector of the descriptors supported by the Node.</div></div>",4143:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4143\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> SampleRates&amp; supportedSampleRates(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName last\">dataClass</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the SampleRates supported by the Node for the given MipTypes::DataClass.</div></div>",4144:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4144\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const uint16</span>&amp; baseDataRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName last\">dataClass</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the base data rate of the Node for the given MipTypes::DataClass.</div></div>",4145:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4145\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> GnssReceivers&amp; gnssReceiverInfo() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the GnssReceiverInfo for all supported receivers</div></div>",4146:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4146\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> EventSupportInfo&amp; eventActionInfo() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the EventSupportInfo of supported action types</div></div>",4147:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4147\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> EventSupportInfo&amp; eventTriggerInfo() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the EventSupportInfo of supported trigger types</div></div>",4148:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4148\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> SupportedSensorRanges&amp; supportedSensorRanges() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the SupportedSensorRanges for this device</div></div>"});