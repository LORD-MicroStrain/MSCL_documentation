NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/AutoCalResult.h",{5630:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5630\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AutoCalResult</div></div></div><div class=\"TTSummary\">Abstract base class for AutoCal result classes.</div></div>",5632:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5632\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalCompletionFlag completionFlag() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalCompletionFlag of the AutoCal operation result.</div></div>",5633:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5633\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">autoCalInfo</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Parses the auto cal info bytes sent in the successful response packet.</div></div>",5635:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5635\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalCompletionFlag m_completionFlag</div><div class=\"TTSummary\">The WirelessTypes::AutoCalCompletionFlag of the AutoCal operation.</div></div>",5636:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5636\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AutoCalResult_shmLink</div></div></div><div class=\"TTSummary\">Holds the result information from an autoCal_shmLink command.</div></div>",5638:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5638\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag m_errorFlagCh1</div><div class=\"TTSummary\">The WirelessTypes::AutoCalErrorFlag for the channel 1 strain sensor.</div></div>",5639:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5639\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag m_errorFlagCh2</div><div class=\"TTSummary\">The WirelessTypes::AutoCalErrorFlag for the channel 2 strain sensor.</div></div>",5640:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5640\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag m_errorFlagCh3</div><div class=\"TTSummary\">The WirelessTypes::AutoCalErrorFlag for the channel 3 strain sensor.</div></div>",5641:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5641\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offsetCh1</div><div class=\"TTSummary\">The offset applied for the channel 1 strain sensor.</div></div>",5642:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5642\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offsetCh2</div><div class=\"TTSummary\">The offset applied for the channel 2 strain sensor.</div></div>",5643:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5643\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offsetCh3</div><div class=\"TTSummary\">The offset applied for the channel 3 strain sensor.</div></div>",5644:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5644\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_temperature</div><div class=\"TTSummary\">The temperature at the time of calibration.</div></div>",5646:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5646\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag errorFlagCh1() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalErrorFlag for the channel 1 strain sensor.</div></div>",5647:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5647\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag errorFlagCh2() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalErrorFlag for the channel 2 strain sensor.</div></div>",5648:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5648\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag errorFlagCh3() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalErrorFlag for the channel 3 strain sensor.</div></div>",5649:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5649\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offsetCh1() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset applied for the channel 1 strain sensor.</div></div>",5650:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5650\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offsetCh2() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset applied for the channel 2 strain sensor.</div></div>",5651:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5651\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offsetCh3() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset applied for the channel 3 strain sensor.</div></div>",5652:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5652\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> temperature() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the temperature (in ?C) at the time of the calibration.</div></div>",5653:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5653\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">autoCalInfo</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">final</span></td></tr></table></div><div class=\"TTSummary\">Parses the auto cal info bytes for the shm-link.</div></div>",5654:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5654\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AutoCalResult_shmLink201</div></div></div><div class=\"TTSummary\">Holds the result information from an autoCal_shmLink201 command.</div></div>",5656:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5656\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag m_errorFlagCh1</div><div class=\"TTSummary\">The WirelessTypes::AutoCalErrorFlag for the channel 1 strain sensor.</div></div>",5657:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5657\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag m_errorFlagCh2</div><div class=\"TTSummary\">The WirelessTypes::AutoCalErrorFlag for the channel 2 strain sensor.</div></div>",5658:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5658\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag m_errorFlagCh3</div><div class=\"TTSummary\">The WirelessTypes::AutoCalErrorFlag for the channel 3 strain sensor.</div></div>",5659:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5659\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_slopeCh1</div><div class=\"TTSummary\">The slope applied for channel 1.</div></div>",5660:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5660\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offsetCh1</div><div class=\"TTSummary\">The offset applied for channel 1.</div></div>",5661:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5661\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_slopeCh2</div><div class=\"TTSummary\">The slope applied for channel 2.</div></div>",5662:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5662\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offsetCh2</div><div class=\"TTSummary\">The offset applied for channel 2.</div></div>",5663:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5663\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_slopeCh3</div><div class=\"TTSummary\">The slope applied for channel 3.</div></div>",5664:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5664\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offsetCh3</div><div class=\"TTSummary\">The offset applied for channel 3.</div></div>",5665:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5665\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_temperature</div><div class=\"TTSummary\">The temperature at the time of calibration.</div></div>",5667:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5667\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag errorFlagCh1() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalErrorFlag for the channel 1 strain sensor.</div></div>",5668:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5668\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag errorFlagCh2() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalErrorFlag for the channel 2 strain sensor.</div></div>",5669:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5669\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag errorFlagCh3() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalErrorFlag for the channel 3 strain sensor.</div></div>",5670:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5670\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> slopeCh1() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the slope applied for channel 1.</div></div>",5671:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5671\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offsetCh1() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset applied for channel 1.</div></div>",5672:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5672\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> slopeCh2() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the slope applied for channel 2.</div></div>",5673:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5673\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offsetCh2() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset applied for channel 2.</div></div>",5674:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5674\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> slopeCh3() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the slope applied for channel 3.</div></div>",5675:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5675\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offsetCh3() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset applied for channel 3.</div></div>",5676:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5676\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> temperature() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the temperature (in ?C) at the time of the calibration.</div></div>",5677:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5677\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">autoCalInfo</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">final</span></td></tr></table></div><div class=\"TTSummary\">Parses the auto cal info bytes for the shm-link.</div></div>",5678:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5678\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AutoShuntCalResult</div></div></div><div class=\"TTSummary\">Holds the result information from an autoCal_shunt command.</div></div>",5680:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5680\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag m_errorFlag</div><div class=\"TTSummary\">The WirelessTypes::AutoCalErrorFlag for the shunt calibration.</div></div>",5681:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5681\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_slope</div><div class=\"TTSummary\">The slope result of the shunt calibration.</div></div>",5682:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5682\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offset</div><div class=\"TTSummary\">The offset result of the shunt calibration</div></div>",5683:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5683\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_baseMedian</div><div class=\"TTSummary\">The median of the baseline data sampled during the shunt calibration.</div></div>",5684:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5684\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_baseMin</div><div class=\"TTSummary\">The minimum of the baseline data sampled during the shunt calibration.</div></div>",5685:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5685\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_baseMax</div><div class=\"TTSummary\">The maximum of the baseline data sampled during the shunt calibration.</div></div>",5686:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5686\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_shuntMedian</div><div class=\"TTSummary\">The median of the shunted data sampled during the shunt calibration.</div></div>",5687:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5687\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_shuntMin</div><div class=\"TTSummary\">The minimum of the shunted data sampled during the shunt calibration.</div></div>",5688:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5688\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_shuntMax</div><div class=\"TTSummary\">The maximum of the shunted data sampled during the shunt calibration.</div></div>",5690:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5690\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag errorFlag() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalErrorFlag for the shunt calibration.</div></div>",5691:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5691\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> slope() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the slope result of the shunt calibration.&nbsp; Note: This value was not applied to the Node. You will need to manually apply if desired.</div></div>",5692:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5692\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offset() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset result of the shunt calibration.&nbsp; Note: This value was not applied to the Node. You will need to manually apply if desired.</div></div>",5693:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5693\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> baseMedian() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the median of the baseline data sampled during the shunt calibration.</div></div>",5694:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5694\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> baseMin() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the minimum of the baseline data sampled during the shunt calibration.</div></div>",5695:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5695\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> baseMax() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the maximum of the baseline data sampled during the shunt calibration.</div></div>",5696:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5696\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> shuntMedian() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the median of the shunted data sampled during the shunt calibration.</div></div>",5697:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5697\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> shuntMin() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the minimum of the shunted data sampled during the shunt calibration.</div></div>",5698:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5698\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> shuntMax() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the maximum of the shunted data sampled during the shunt calibration.</div></div>",5699:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5699\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">autoCalInfo</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">final</span></td></tr></table></div><div class=\"TTSummary\">Parses the auto cal info bytes for the shm-link.</div></div>"});