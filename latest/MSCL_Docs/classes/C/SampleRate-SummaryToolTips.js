NDSummary.OnToolTipsLoaded("CClass:SampleRate",{10129:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10129\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SampleRate</div></div></div><div class=\"TTSummary\">Represents a MicroStrain sample rate (rate at which data is sampling)</div></div>",10137:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10137\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">SampleRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">RateType&nbsp;</td><td class=\"PName last\">type,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">samples</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a sample rate with the given type and samples</div></div>",10138:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10138\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> str() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the string representation of the sample rate.&nbsp; Ex. 1Hz = &quot;1-hertz&quot;, 10kHz = &quot;10000-hertz&quot;, 1 per 10 seconds = &quot;10-seconds&quot;, 1 per 1 minute = &quot;60 seconds&quot;</div></div>",10139:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10139\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> prettyStr() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the string representation of the sample rate in a more human-readable format.&nbsp; Ex. 1Hz = &quot;1Hz&quot;, 10kHz = &quot;10kHz&quot;, 1 per 10 seconds = &quot;Every 10 sec&quot;, 1 per 1 minute = &quot;Every 1 min&quot;</div></div>",10140:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10140\" class=\"NDPrototype NoParameterForm\">TimeSpan samplePeriod() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the sample period (time between samples) as a TimeSpan for the current sample rate</div></div>",10141:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10141\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> samplesPerSecond() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of samples per second.</div></div>",10142:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10142\" class=\"NDPrototype NoParameterForm\">RateType rateType() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the sample rate type</div></div>",10143:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10143\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> samples() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of samples for the sample rate (or seconds if less than 1 Hz)</div></div>",10144:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10144\" class=\"NDPrototype NoParameterForm\">WirelessTypes::WirelessSampleRate toWirelessSampleRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::WirelessSampleRate enum for the current SampleRate.</div></div>",10145:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10145\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> toDecimation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">sampleRateBase</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the decimation for the current SampleRate.</div></div>",10146:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10146\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> SampleRate Hertz(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">samplesPerSecond</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SampleRate object from the given samples per second</div></div>",10147:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10147\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> SampleRate KiloHertz(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">kSamplesPerSecond</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SampleRate object from the given 1000 samples per second</div></div>",10148:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10148\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> SampleRate Seconds(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">secondsBetweenSamples</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SampleRate object from the given seconds between samples</div></div>",10149:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10149\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> SampleRate Event()</div><div class=\"TTSummary\">Creates a SampleRate object with the asynchronous/event type.</div></div>",10150:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10150\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> SampleRate Decimation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">rateDecimation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SampleRate object with the decimation type.</div></div>",10151:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10151\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> SampleRate FromWirelessEepromValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">WirelessSampleRate&nbsp;</td><td class=\"PName last\">eepromValue</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SampleRate object from the WirelessTypes::WirelessSampleRate value (the value that gets stored in eeprom).</div></div>",10152:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10152\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> SampleRate FromInertialRateDecimationInfo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">baseRate,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">rateDecimation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SampleRate object from the base rate and rate decimation value read from an inertial device</div></div>",10154:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype10154\" class=\"NDPrototype NoParameterForm\">RateType m_rateType</div><div class=\"TTSummary\">The type of the sample rate</div></div>",10155:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype10155\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_samples</div><div class=\"TTSummary\">Represents the number of samples.&nbsp; If the sample rate type is Hertz, m_samples represents the number of samples per second (256 = 256 Hz).&nbsp; If the sample rate type is Seconds, m_samples represents the number of seconds (60 = 1 per 60 seconds, 120 = 1 per 2 minutes).</div></div>",10157:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A typedef for a vector of SampleRate objects.</div></div>"});