NDSummary.OnToolTipsLoaded("CClass:SyncSamplingFormulas",{9099:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9099\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">namespace</span> </div><div class=\"CPName\">SyncSamplingFormulas</div></div></div><div class=\"TTSummary\">Contains formulas for determining Sync Sampling configuration</div></div>",9106:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9106\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">double</span> bytesPerSecond(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sampleRate,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">numChs,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">bytesPerSample</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Calculates the number of bytes per second</div></div>",9107:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9107\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> maxBytesPerPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sampleRate,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName last\">lossless,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName last\">highBandwidth,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">syncFormulaVersion,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td></td><td class=\"PName last\">commProtocol</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Calculates the maximum number of bytes per packet</div></div>",9108:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9108\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> groupSize()</div><div class=\"TTSummary\">Calculates the group size</div></div>",9109:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9109\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> txPerGroup(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">bytesPerSecond,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">maxBytesPerPacket,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">groupSize</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Calculates the transmissions per group</div></div>",9110:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9110\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> txPerSecond(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">txPerGroup,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">groupSize</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Calculates the number of transmissions per second</div></div>",9111:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9111\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> slotSpacing(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td class=\"PName last\">protocol</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the slot spacing for the network</div></div>",9112:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9112\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> maxTdmaAddress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">txPerGroup,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">groupSize,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">legacyNwk,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td class=\"PName last\">protocol</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the maximum TDMA address that is allowed</div></div>",9113:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9113\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> percentBandwidth(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">txPerSecond,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">legacyNwk,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td class=\"PName last\">protocol</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Calculates the percent of bandwidth for a single node</div></div>",9114:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9114\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">double</span> sampleDuration(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">numSweeps,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sampleRate</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Calculates the sample duration for a given sample rate and number of sweeps</div></div>",9115:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9115\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> bytesPerSweep(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">bytesPerSample,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">numChs</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the total number of bytes per data sweep</div></div>",9116:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9116\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> checkSamplingDelay(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">SamplingMode&nbsp;</td><td></td><td class=\"PName last\">samplingMode,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sampleRate,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td></td><td class=\"PName last\">nodeModel</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Whether or not the sampling delay should be checked when finding slots in the Sync Sampling network</div></div>",9117:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9117\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> slotsBetweenTx(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">txPerGroup,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">groupSize</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Calculates the number of slots that need to be between each transmission</div></div>",9118:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9118\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> canHaveFirstSlot(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td class=\"PName last\">nodeModel,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">syncVersion</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks whether the node can be assigned slot 1 in the Sync Sampling network</div></div>",9119:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9119\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> totalBytesPerBurst(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">bytesPerSweep,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">numSweeps</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the total number of bytes per burst</div></div>",9120:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9120\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> maxBytesPerBurstPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">bytesPerSweep,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">lossless,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td class=\"PName last\">commProtocol</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the maximum number of bytes per packet</div></div>",9121:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9121\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> totalNeededBurstTx(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">totalBytesPerBurst,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">maxBurstBytesPerPacket</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Calculates the total needed transmissions for bursts</div></div>",9122:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9122\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> minTimeBetweenBursts(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">totalNeededTx,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">sampleDuration,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">lossless</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Calculates the minimum amount of time allowed between bursts</div></div>",9123:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9123\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">TimeSpan minTimeBetweenBursts(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">numRawBytesPerSweep,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">numDerivedBytesPerSweep,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> mscl::</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">rawSampleRate,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">sweepsPerBurst,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td></td><td class=\"PName last\">commProtocol</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Calculates the minimum amount of time allowed between bursts.</div></div>",9124:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9124\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> burstTxPerSecond(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">totalNeededTx,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">timeBetweenBursts,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">sampleDuration,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">lossless</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Calculates the burst transmissions per second</div></div>",9125:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9125\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> overheadFactor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName last\">lossless,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName last\">optimizeBandwidth,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName last\">diagnosticPacketEnabled,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sampleRate,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">syncFormulaVersion</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the overhead factor used in TDMA calculations.</div></div>"});