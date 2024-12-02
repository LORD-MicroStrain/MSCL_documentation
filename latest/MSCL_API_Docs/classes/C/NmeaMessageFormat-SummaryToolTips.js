NDSummary.OnToolTipsLoaded("CClass:NmeaMessageFormat",{4199:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4199\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NmeaMessageFormat</div></div></div><div class=\"TTSummary\">Defines a NMEA message format.</div></div>",4200:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">Maximum number of configurable NMEA messages</div></div>",4201:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">NMEA sentence type options</div></div>",4211:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">NMEA talker ID options</div></div>",4217:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">NMEA message output is limited to either the MAX_FREQUENCY or the source descriptor set base rate, whichever is lower.</div></div>",4218:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4218\" class=\"NDPrototype NoParameterForm\">NmeaMessageFormat()</div><div class=\"TTSummary\">Creates a NmeaMessageFormat object.</div></div>",4219:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4219\" class=\"NDPrototype NoParameterForm\">~NmeaMessageFormat()</div><div class=\"TTSummary\">Destructor for NmeaMessageFormat object.</div></div>",4220:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4220\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> sentenceType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SentenceType&nbsp;</td><td class=\"PName last\">type</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the NMEA SentenceType.</div></div>",4221:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4221\" class=\"NDPrototype NoParameterForm\">SentenceType sentenceType() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the NMEA SentenceType.</div></div>",4222:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4222\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> talkerId(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Talker&nbsp;</td><td class=\"PName last\">id</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the NMEA Talker ID.</div></div>",4223:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4223\" class=\"NDPrototype NoParameterForm\">Talker talkerId() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the NMEA Talker ID.</div></div>",4224:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4224\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> sourceDataClass(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName\">dataClass,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName\">baseRate&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the source MipTypes::DataClass</div></div>",4225:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4225\" class=\"NDPrototype NoParameterForm\">MipTypes::DataClass sourceDataClass() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the source MipTypes::DataClass</div></div>",4226:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4226\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> sampleRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SampleRate&nbsp;</td><td class=\"PName\">rate,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName\">baseRate&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the output sample rate. If baseRate is not specified, please use a SampleRate with RateType of decimation (SampleRate::Decimation(rateDecimation)) otherwise it will cannot be properly interpreted.</div></div>",4227:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4227\" class=\"NDPrototype NoParameterForm\">SampleRate sampleRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the configured output SampleRate</div></div>",4228:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4228\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> talkerIdRequired(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SentenceType&nbsp;</td><td class=\"PName last\">sentenceType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">[static] Checks whether a Talker ID is required for the specified SentenceType type.</div></div>",4229:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4229\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> dataClassSupported(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName last\">dataClass,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">SentenceType&nbsp;</td><td class=\"PName last\">sentenceType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">[static] Checks whether the specified MipTypes::DataClass is supported for the specified SentenceType type.</div></div>",4230:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4230\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MipTypes::MipDataClasses supportedDataClasses(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SentenceType&nbsp;</td><td class=\"PName last\">sentenceType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">[static] Returns a list of supported MipTypes::DataClass values for the specified SentenceType type.</div></div>",4231:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4231\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MipFieldValues toCommandParameters(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">NmeaMessageFormats&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">nmeaFormats</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">[static] Build &lt;MipFieldValues&gt; parameters (including count) from a vector of NmeaMessageFormat objects.</div></div>"});