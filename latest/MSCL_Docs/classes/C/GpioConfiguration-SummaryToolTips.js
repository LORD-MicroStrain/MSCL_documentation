NDSummary.OnToolTipsLoaded("CClass:GpioConfiguration",{2210:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">GPIO Feature options. Determines how the pin will be used</div></div>",2217:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">GPIO Pin behavior</div></div>",2222:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">PPS Pin behavior</div></div>",2226:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Encoder Pin behavior</div></div>",2230:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Event Timestamp Pin behavior</div></div>",2235:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">UART Pin behavior Note: only one Transmit and one Receive pin can be configured per port pair (see documentation)</div></div>",2241:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">PinModes for the pinMode Bitfield</div></div>",2247:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2247\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> pinModeValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets or sets the underlying value for the pin mode bitfield</div></div>",2248:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2248\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GpioConfiguration fromCommandResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">responseValues,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">startIndex&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">[static] Build a GpioConfiguration object from the read command response &lt;MipFieldValues&gt;.</div></div>",2250:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A uint8 representing logical GPIO pin IDs</div></div>",2251:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A vector of GpioConfiguration::PinModes representing masked pin modes</div></div>",2252:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A map of uint behavior ID, GpioPinModeOptions pairs</div></div>",2253:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A map of GpioConfiguration::Feature, GpioBehaviorModes pairs</div></div>",2254:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A map of uint GpioPinId, GpioFeatureBehaviors pairs</div></div>",2255:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Event control modes DISABLED&nbsp; - 0x00 - Trigger is disabled ENABLED&nbsp; - 0x01 - Trigger is enabled TEST&nbsp; - 0x02 - Force the trigger into the active state TEST_PULSE - 0x03 - Force the trigger into the active state for one event cycle</div></div>"});