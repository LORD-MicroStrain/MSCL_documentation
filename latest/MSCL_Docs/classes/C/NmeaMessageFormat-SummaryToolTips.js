NDSummary.OnToolTipsLoaded("CClass:NmeaMessageFormat",{2000:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2000\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NmeaMessageFormat</div></div></div><div class=\"TTSummary\">Defines a NMEA message format.</div></div>",2002:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">Maximum number of configurable NMEA messages</div></div>",2004:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">NMEA sentence type options</div></div>",2014:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">NMEA talker ID options</div></div>",2021:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">NMEA message output is limited to either the MAX_FREQUENCY or the source descriptor set base rate, whichever is lower.</div></div>",2023:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2023\" class=\"NDPrototype NoParameterForm\">SentenceType m_sentenceType</div><div class=\"TTSummary\">The NMEA SentenceType type.</div></div>",2024:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2024\" class=\"NDPrototype NoParameterForm\">Talker m_talkerId</div><div class=\"TTSummary\">The NMEA Talker ID.</div></div>",2025:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2025\" class=\"NDPrototype NoParameterForm\">MipTypes::DataClass m_sourceDescSet</div><div class=\"TTSummary\">The source descriptor set.</div></div>",2026:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2026\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_baseRate</div><div class=\"TTSummary\">Descriptor set base rate, updated with m_descSet</div></div>",2027:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2027\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_decimation</div><div class=\"TTSummary\">The decimation from the base rate of m_descSet.</div></div>",2029:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2029\" class=\"NDPrototype NoParameterForm\">NmeaMessageFormat()</div><div class=\"TTSummary\">Creates a NmeaMessageFormat object.</div></div>",2030:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2030\" class=\"NDPrototype NoParameterForm\">~NmeaMessageFormat()</div><div class=\"TTSummary\">Destructor for NmeaMessageFormat object.</div></div>",2031:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2031\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> sentenceType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SentenceType&nbsp;</td><td class=\"PName last\">type</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the NMEA SentenceType.</div></div>",2032:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2032\" class=\"NDPrototype NoParameterForm\">SentenceType sentenceType() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the NMEA SentenceType.</div></div>",2033:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2033\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> talkerId(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Talker&nbsp;</td><td class=\"PName last\">id</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the NMEA Talker ID.</div></div>",2034:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2034\" class=\"NDPrototype NoParameterForm\">Talker talkerId() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the NMEA Talker ID.</div></div>",2035:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2035\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> sourceDataClass(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName\">dataClass,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName\">baseRate&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the source MipTypes::DataClass</div></div>",2036:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2036\" class=\"NDPrototype NoParameterForm\">MipTypes::DataClass sourceDataClass() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the source MipTypes::DataClass</div></div>",2037:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2037\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> sampleRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SampleRate&nbsp;</td><td class=\"PName\">rate,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName\">baseRate&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the output sample rate. If baseRate is not specified, please use a SampleRate with RateType of decimation (SampleRate::Decimation(rateDecimation)) otherwise it will cannot be properly interpreted.</div></div>",2038:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2038\" class=\"NDPrototype NoParameterForm\">SampleRate sampleRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the configured output SampleRate</div></div>",2039:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2039\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> updateDecimation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">newBaseRate</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Update the decimation based on current data class and previous, new base rates.</div></div>",2040:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2040\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> talkerIdRequired(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SentenceType&nbsp;</td><td class=\"PName last\">sentenceType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">[static] Checks whether a Talker ID is required for the specified SentenceType type.</div></div>",2041:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2041\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> dataClassSupported(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName last\">dataClass,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">SentenceType&nbsp;</td><td class=\"PName last\">sentenceType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">[static] Checks whether the specified MipTypes::DataClass is supported for the specified SentenceType type.</div></div>",2042:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2042\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MipTypes::MipDataClasses supportedDataClasses(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SentenceType&nbsp;</td><td class=\"PName last\">sentenceType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">[static] Returns a list of supported MipTypes::DataClass values for the specified SentenceType type.</div></div>",2043:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2043\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> NmeaMessageFormats fromCommandResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">responseValues,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">startIndex&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">[static] Build NmeaMessageFormat objects from the read command response &lt;MipFieldValues&gt;.</div></div>",2044:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2044\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> baseRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">base</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Set base rate directly (usually done through sourceDataClass or sampleRate).</div></div>",2045:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2045\" class=\"NDPrototype NoParameterForm\">MipFieldValues toCommandParameters() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Generates command parameter MipFieldValues for single NmeaMessageFormat object.</div></div>",2046:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2046\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MipFieldValues toCommandParameters(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">NmeaMessageFormats&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">nmeaFormats</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">[static] Build &lt;MipFieldValues&gt; parameters (including count) from a vector of NmeaMessageFormat objects.</div></div>"});