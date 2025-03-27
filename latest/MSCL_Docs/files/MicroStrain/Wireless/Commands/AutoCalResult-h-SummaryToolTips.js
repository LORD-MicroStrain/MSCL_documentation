NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/AutoCalResult.h",{5722:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5722\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AutoCalResult</div></div></div><div class=\"TTSummary\">Abstract base class for AutoCal result classes.</div></div>",5724:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5724\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalCompletionFlag completionFlag() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalCompletionFlag of the AutoCal operation result.</div></div>",5725:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5725\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">autoCalInfo</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Parses the auto cal info bytes sent in the successful response packet.</div></div>",5727:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5727\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalCompletionFlag m_completionFlag</div><div class=\"TTSummary\">The WirelessTypes::AutoCalCompletionFlag of the AutoCal operation.</div></div>",5728:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5728\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AutoCalResult_shmLink</div></div></div><div class=\"TTSummary\">Holds the result information from an autoCal_shmLink command.</div></div>",5730:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5730\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag m_errorFlagCh1</div><div class=\"TTSummary\">The WirelessTypes::AutoCalErrorFlag for the channel 1 strain sensor.</div></div>",5731:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5731\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag m_errorFlagCh2</div><div class=\"TTSummary\">The WirelessTypes::AutoCalErrorFlag for the channel 2 strain sensor.</div></div>",5732:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5732\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag m_errorFlagCh3</div><div class=\"TTSummary\">The WirelessTypes::AutoCalErrorFlag for the channel 3 strain sensor.</div></div>",5733:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5733\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offsetCh1</div><div class=\"TTSummary\">The offset applied for the channel 1 strain sensor.</div></div>",5734:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5734\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offsetCh2</div><div class=\"TTSummary\">The offset applied for the channel 2 strain sensor.</div></div>",5735:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5735\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offsetCh3</div><div class=\"TTSummary\">The offset applied for the channel 3 strain sensor.</div></div>",5736:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5736\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_temperature</div><div class=\"TTSummary\">The temperature at the time of calibration.</div></div>",5738:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5738\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag errorFlagCh1() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalErrorFlag for the channel 1 strain sensor.</div></div>",5739:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5739\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag errorFlagCh2() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalErrorFlag for the channel 2 strain sensor.</div></div>",5740:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5740\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag errorFlagCh3() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalErrorFlag for the channel 3 strain sensor.</div></div>",5741:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5741\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offsetCh1() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset applied for the channel 1 strain sensor.</div></div>",5742:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5742\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offsetCh2() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset applied for the channel 2 strain sensor.</div></div>",5743:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5743\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offsetCh3() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset applied for the channel 3 strain sensor.</div></div>",5744:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5744\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> temperature() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the temperature (in ?C) at the time of the calibration.</div></div>",5745:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5745\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">autoCalInfo</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">final</span></td></tr></table></div><div class=\"TTSummary\">Parses the auto cal info bytes for the shm-link.</div></div>",5746:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5746\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AutoCalResult_shmLink201</div></div></div><div class=\"TTSummary\">Holds the result information from an autoCal_shmLink201 command.</div></div>",5748:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5748\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag m_errorFlagCh1</div><div class=\"TTSummary\">The WirelessTypes::AutoCalErrorFlag for the channel 1 strain sensor.</div></div>",5749:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5749\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag m_errorFlagCh2</div><div class=\"TTSummary\">The WirelessTypes::AutoCalErrorFlag for the channel 2 strain sensor.</div></div>",5750:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5750\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag m_errorFlagCh3</div><div class=\"TTSummary\">The WirelessTypes::AutoCalErrorFlag for the channel 3 strain sensor.</div></div>",5751:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5751\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_slopeCh1</div><div class=\"TTSummary\">The slope applied for channel 1.</div></div>",5752:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5752\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offsetCh1</div><div class=\"TTSummary\">The offset applied for channel 1.</div></div>",5753:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5753\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_slopeCh2</div><div class=\"TTSummary\">The slope applied for channel 2.</div></div>",5754:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5754\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offsetCh2</div><div class=\"TTSummary\">The offset applied for channel 2.</div></div>",5755:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5755\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_slopeCh3</div><div class=\"TTSummary\">The slope applied for channel 3.</div></div>",5756:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5756\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offsetCh3</div><div class=\"TTSummary\">The offset applied for channel 3.</div></div>",5757:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5757\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_temperature</div><div class=\"TTSummary\">The temperature at the time of calibration.</div></div>",5759:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5759\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag errorFlagCh1() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalErrorFlag for the channel 1 strain sensor.</div></div>",5760:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5760\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag errorFlagCh2() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalErrorFlag for the channel 2 strain sensor.</div></div>",5761:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5761\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag errorFlagCh3() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalErrorFlag for the channel 3 strain sensor.</div></div>",5762:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5762\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> slopeCh1() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the slope applied for channel 1.</div></div>",5763:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5763\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offsetCh1() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset applied for channel 1.</div></div>",5764:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5764\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> slopeCh2() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the slope applied for channel 2.</div></div>",5765:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5765\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offsetCh2() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset applied for channel 2.</div></div>",5766:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5766\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> slopeCh3() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the slope applied for channel 3.</div></div>",5767:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5767\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offsetCh3() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset applied for channel 3.</div></div>",5768:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5768\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> temperature() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the temperature (in ?C) at the time of the calibration.</div></div>",5769:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5769\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">autoCalInfo</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">final</span></td></tr></table></div><div class=\"TTSummary\">Parses the auto cal info bytes for the shm-link.</div></div>",5770:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5770\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AutoShuntCalResult</div></div></div><div class=\"TTSummary\">Holds the result information from an autoCal_shunt command.</div></div>",5772:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5772\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag m_errorFlag</div><div class=\"TTSummary\">The WirelessTypes::AutoCalErrorFlag for the shunt calibration.</div></div>",5773:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5773\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_slope</div><div class=\"TTSummary\">The slope result of the shunt calibration.</div></div>",5774:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5774\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offset</div><div class=\"TTSummary\">The offset result of the shunt calibration</div></div>",5775:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5775\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_baseMedian</div><div class=\"TTSummary\">The median of the baseline data sampled during the shunt calibration.</div></div>",5776:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5776\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_baseMin</div><div class=\"TTSummary\">The minimum of the baseline data sampled during the shunt calibration.</div></div>",5777:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5777\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_baseMax</div><div class=\"TTSummary\">The maximum of the baseline data sampled during the shunt calibration.</div></div>",5778:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5778\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_shuntMedian</div><div class=\"TTSummary\">The median of the shunted data sampled during the shunt calibration.</div></div>",5779:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5779\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_shuntMin</div><div class=\"TTSummary\">The minimum of the shunted data sampled during the shunt calibration.</div></div>",5780:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5780\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_shuntMax</div><div class=\"TTSummary\">The maximum of the shunted data sampled during the shunt calibration.</div></div>",5782:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5782\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag errorFlag() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalErrorFlag for the shunt calibration.</div></div>",5783:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5783\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> slope() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the slope result of the shunt calibration.&nbsp; Note: This value was not applied to the Node. You will need to manually apply if desired.</div></div>",5784:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5784\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offset() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset result of the shunt calibration.&nbsp; Note: This value was not applied to the Node. You will need to manually apply if desired.</div></div>",5785:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5785\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> baseMedian() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the median of the baseline data sampled during the shunt calibration.</div></div>",5786:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5786\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> baseMin() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the minimum of the baseline data sampled during the shunt calibration.</div></div>",5787:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5787\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> baseMax() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the maximum of the baseline data sampled during the shunt calibration.</div></div>",5788:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5788\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> shuntMedian() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the median of the shunted data sampled during the shunt calibration.</div></div>",5789:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5789\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> shuntMin() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the minimum of the shunted data sampled during the shunt calibration.</div></div>",5790:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5790\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> shuntMax() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the maximum of the shunted data sampled during the shunt calibration.</div></div>",5791:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5791\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">autoCalInfo</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">final</span></td></tr></table></div><div class=\"TTSummary\">Parses the auto cal info bytes for the shm-link.</div></div>"});