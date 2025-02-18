NDSummary.OnToolTipsLoaded("CClass:ShuntCalCmdInfo",{5236:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains data for the shunt AutoCal command.</div></div>",5238:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5238\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> useInternalShunt</div><div class=\"TTSummary\">Whether the Shunt Cal should use an internal shunt (true), or external shunt (false).&nbsp; When using an internal shunt, the process will usually take under 1 second to complete.&nbsp; When using an external shunt, the process will take about 30 seconds and involves the node being sampled without the shunt applied, followed by an LED change indicating to apply the shunt.&nbsp; Please see the product documentation for more information.</div></div>",5239:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5239\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> numActiveGauges</div><div class=\"TTSummary\">The number of active gauges for the Shunt Cal command.</div></div>",5240:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5240\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> gaugeResistance</div><div class=\"TTSummary\">The gauge resistance for the Shunt Cal command.</div></div>",5241:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5241\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> shuntResistance</div><div class=\"TTSummary\">The shunt resistance for the Shunt Cal command.</div></div>",5242:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5242\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> gaugeFactor</div><div class=\"TTSummary\">The gauge factor for the Shunt Cal command.</div></div>",5243:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5243\" class=\"NDPrototype NoParameterForm\">WirelessTypes::InputRange inputRange</div><div class=\"TTSummary\">The WirelessTypes::InputRange to use when performing the Shunt Cal command.</div></div>",5244:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5244\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> hardwareOffset</div><div class=\"TTSummary\">The hardware offset to use when performing the Shunt Cal command.</div></div>",5245:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\">The excitation voltage of the Node when performing the Shunt Cal command.&nbsp; Note: This will only be used if the Node supports excitation voltage configuration (see NodeFeatures::supportsExcitationVoltageConfig).</div></div>",5247:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5247\" class=\"NDPrototype NoParameterForm\">ShuntCalCmdInfo(): useInternalShunt(<span class=\"SHKeyword\">true</span>), numActiveGauges(<span class=\"SHNumber\">0</span>), gaugeResistance(<span class=\"SHNumber\">0</span>), shuntResistance(<span class=\"SHNumber\">0</span>), gaugeFactor(<span class=\"SHNumber\">0.0f</span>), inputRange(WirelessTypes::range_1mV), hardwareOffset(<span class=\"SHNumber\">0</span>), excitationVoltage(WirelessTypes::voltage_1500mV)</div><div class=\"TTSummary\">Creates a default constructed ShuntCalCmdInfo object.</div></div>"});