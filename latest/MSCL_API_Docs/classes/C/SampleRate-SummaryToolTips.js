NDSummary.OnToolTipsLoaded("CClass:SampleRate",{4448:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4448\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SampleRate</div></div></div><div class=\"TTSummary\">Represents a MicroStrain sample rate (rate at which data is sampling)</div></div>",4454:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4454\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">SampleRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">RateType&nbsp;</td><td class=\"PName last\">type,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">samples</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a sample rate with the given type and samples</div></div>",4455:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4455\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> str() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the string representation of the sample rate.&nbsp; Ex. 1Hz = &quot;1-hertz&quot;, 10kHz = &quot;10000-hertz&quot;, 1 per 10 seconds = &quot;10-seconds&quot;, 1 per 1 minute = &quot;60 seconds&quot;</div></div>",4456:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4456\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> prettyStr() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the string representation of the sample rate in a more human-readable format.&nbsp; Ex. 1Hz = &quot;1Hz&quot;, 10kHz = &quot;10kHz&quot;, 1 per 10 seconds = &quot;Every 10 sec&quot;, 1 per 1 minute = &quot;Every 1 min&quot;</div></div>",4457:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4457\" class=\"NDPrototype NoParameterForm\">TimeSpan samplePeriod() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the sample period (time between samples) as a TimeSpan for the current sample rate</div></div>",4458:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4458\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> samplesPerSecond() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of samples per second.</div></div>",4459:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4459\" class=\"NDPrototype NoParameterForm\">RateType rateType() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the sample rate type</div></div>",4460:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4460\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> samples() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of samples for the sample rate (or seconds if less than 1 Hz)</div></div>",4461:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4461\" class=\"NDPrototype NoParameterForm\">WirelessTypes::WirelessSampleRate toWirelessSampleRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::WirelessSampleRate enum for the current SampleRate.</div></div>",4462:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4462\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> toDecimation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">sampleRateBase</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the decimation for the current SampleRate.</div></div>",4463:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4463\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> SampleRate Hertz(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">samplesPerSecond</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SampleRate object from the given samples per second</div></div>",4464:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4464\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> SampleRate KiloHertz(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">kSamplesPerSecond</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SampleRate object from the given 1000 samples per second</div></div>",4465:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4465\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> SampleRate Seconds(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">secondsBetweenSamples</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SampleRate object from the given seconds between samples</div></div>",4466:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4466\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> SampleRate Event()</div><div class=\"TTSummary\">Creates a SampleRate object with the asynchronous/event type.</div></div>",4467:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4467\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> SampleRate Decimation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">rateDecimation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SampleRate object with the decimation type.</div></div>",4468:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4468\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> SampleRate FromWirelessEepromValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">WirelessSampleRate&nbsp;</td><td class=\"PName last\">eepromValue</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SampleRate object from the WirelessTypes::WirelessSampleRate value (the value that gets stored in eeprom).</div></div>",4469:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4469\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> SampleRate FromInertialRateDecimationInfo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">baseRate,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">rateDecimation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SampleRate object from the base rate and rate decimation value read from an inertial device</div></div>",4470:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A typedef for a vector of SampleRate objects.</div></div>"});