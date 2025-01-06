NDSummary.OnToolTipsLoaded("CClass:MipNodeInfo",{3364:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3364\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipNodeInfo</div></div></div><div class=\"TTSummary\">Contains basic information about a MipNode.</div></div>",3366:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3366\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipNodeInfo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipNode_Impl&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">node</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipNodeInfo object.</div></div>",3367:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3367\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipNodeInfo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipDeviceInfo&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">info,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;<span class=\"SHKeyword\">uint16</span>&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">supportedDescriptors,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">map&lt;MipTypes::DataClass, SampleRates&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sampleRates,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">map&lt;MipTypes::DataClass, <span class=\"SHKeyword\">uint16</span>&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">baseRates</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipNodeInfo object.</div></div>",3369:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3369\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> MipNode_Impl* m_node</div><div class=\"TTSummary\">The MipNode_Impl to use for lazy loading of values.</div></div>",3370:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3370\" class=\"NDPrototype NoParameterForm\">Utils::Lazy&lt;MipDeviceInfo&gt; m_deviceInfo</div><div class=\"TTSummary\">The MipDeviceInfo of the Node (lazy loaded).</div></div>",3371:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3371\" class=\"NDPrototype NoParameterForm\">Utils::Lazy&lt;std::vector&lt;<span class=\"SHKeyword\">uint16</span>&gt;&gt; m_descriptors</div><div class=\"TTSummary\">A vector of descriptors supported by the Node (lazy loaded).</div></div>",3372:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3372\" class=\"NDPrototype NoParameterForm\">std::map&lt;MipTypes::DataClass, Utils::Lazy&lt;SampleRates&gt;&gt; m_sampleRates</div><div class=\"TTSummary\">Contains the sample rates for each MIP data set (lazy loaded).</div></div>",3373:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3373\" class=\"NDPrototype NoParameterForm\">std::map&lt;MipTypes::DataClass, Utils::Lazy&lt;<span class=\"SHKeyword\">uint16</span>&gt;&gt; m_baseRates</div><div class=\"TTSummary\">Contains the base rates for each MIP data set (lazy loaded).</div></div>",3374:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3374\" class=\"NDPrototype NoParameterForm\">Utils::Lazy&lt;GnssReceivers&gt; m_receiverInfo</div><div class=\"TTSummary\">The GnssReceiverInfo of the Node (lazy loaded).</div></div>",3375:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3375\" class=\"NDPrototype NoParameterForm\">Utils::Lazy&lt;EventSupportInfo&gt; m_eventActionInfo</div><div class=\"TTSummary\">The action EventSupportInfo supported by the Node (lazy loaded).</div></div>",3376:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3376\" class=\"NDPrototype NoParameterForm\">Utils::Lazy&lt;EventSupportInfo&gt; m_eventTriggerInfo</div><div class=\"TTSummary\">The trigger EventSupportInfo supported by the Node (lazy loaded).</div></div>",3377:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3377\" class=\"NDPrototype NoParameterForm\">Utils::Lazy&lt;SupportedSensorRanges&gt; m_sensorRanges</div><div class=\"TTSummary\">The SupportedSensorRanges of this device (lazy loaded).</div></div>",3379:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3379\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> MipDeviceInfo&amp; deviceInfo() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the MipDeviceInfo of the Node.</div></div>",3380:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3380\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> std::vector&lt;<span class=\"SHKeyword\">uint16</span>&gt;&amp; descriptors() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a vector of the descriptors supported by the Node.</div></div>",3381:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3381\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> SampleRates&amp; supportedSampleRates(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName last\">dataClass</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the SampleRates supported by the Node for the given MipTypes::DataClass.</div></div>",3382:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3382\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const uint16</span>&amp; baseDataRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName last\">dataClass</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the base data rate of the Node for the given MipTypes::DataClass.</div></div>",3383:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3383\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> GnssReceivers&amp; gnssReceiverInfo() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the GnssReceiverInfo for all supported receivers</div></div>",3384:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3384\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> EventSupportInfo&amp; eventActionInfo() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the EventSupportInfo of supported action types</div></div>",3385:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3385\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> EventSupportInfo&amp; eventTriggerInfo() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the EventSupportInfo of supported trigger types</div></div>",3386:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3386\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> SupportedSensorRanges&amp; supportedSensorRanges() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the SupportedSensorRanges for this device</div></div>"});