NDSummary.OnToolTipsLoaded("CClass:NmeaMessageFormat",{1911:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1911\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NmeaMessageFormat</div></div></div><div class=\"TTSummary\">Defines a NMEA message format.</div></div>",1913:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">Maximum number of configurable NMEA messages</div></div>",1915:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">NMEA sentence type options</div></div>",1925:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">NMEA talker ID options</div></div>",1932:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">NMEA message output is limited to either the MAX_FREQUENCY or the source descriptor set base rate, whichever is lower.</div></div>",1934:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1934\" class=\"NDPrototype NoParameterForm\">SentenceType m_sentenceType</div><div class=\"TTSummary\">The NMEA SentenceType type.</div></div>",1935:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1935\" class=\"NDPrototype NoParameterForm\">Talker m_talkerId</div><div class=\"TTSummary\">The NMEA Talker ID.</div></div>",1936:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1936\" class=\"NDPrototype NoParameterForm\">MipTypes::DataClass m_sourceDescSet</div><div class=\"TTSummary\">The source descriptor set.</div></div>",1937:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1937\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_baseRate</div><div class=\"TTSummary\">Descriptor set base rate, updated with m_descSet</div></div>",1938:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1938\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_decimation</div><div class=\"TTSummary\">The decimation from the base rate of m_descSet.</div></div>",1940:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1940\" class=\"NDPrototype NoParameterForm\">NmeaMessageFormat()</div><div class=\"TTSummary\">Creates a NmeaMessageFormat object.</div></div>",1941:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1941\" class=\"NDPrototype NoParameterForm\">~NmeaMessageFormat()</div><div class=\"TTSummary\">Destructor for NmeaMessageFormat object.</div></div>",1942:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1942\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> sentenceType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SentenceType&nbsp;</td><td class=\"PName last\">type</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the NMEA SentenceType.</div></div>",1943:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1943\" class=\"NDPrototype NoParameterForm\">SentenceType sentenceType() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the NMEA SentenceType.</div></div>",1944:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1944\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> talkerId(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Talker&nbsp;</td><td class=\"PName last\">id</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the NMEA Talker ID.</div></div>",1945:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1945\" class=\"NDPrototype NoParameterForm\">Talker talkerId() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the NMEA Talker ID.</div></div>",1946:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1946\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> sourceDataClass(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName\">dataClass,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName\">baseRate&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the source MipTypes::DataClass</div></div>",1947:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1947\" class=\"NDPrototype NoParameterForm\">MipTypes::DataClass sourceDataClass() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the source MipTypes::DataClass</div></div>",1948:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1948\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> sampleRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SampleRate&nbsp;</td><td class=\"PName\">rate,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName\">baseRate&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the output sample rate. If baseRate is not specified, please use a SampleRate with RateType of decimation (SampleRate::Decimation(rateDecimation)) otherwise it will cannot be properly interpreted.</div></div>",1949:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1949\" class=\"NDPrototype NoParameterForm\">SampleRate sampleRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the configured output SampleRate</div></div>",1950:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1950\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> updateDecimation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">newBaseRate</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Update the decimation based on current data class and previous, new base rates.</div></div>",1951:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1951\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> talkerIdRequired(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SentenceType&nbsp;</td><td class=\"PName last\">sentenceType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">[static] Checks whether a Talker ID is required for the specified SentenceType type.</div></div>",1952:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1952\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> dataClassSupported(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName last\">dataClass,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">SentenceType&nbsp;</td><td class=\"PName last\">sentenceType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">[static] Checks whether the specified MipTypes::DataClass is supported for the specified SentenceType type.</div></div>",1953:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1953\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MipTypes::MipDataClasses supportedDataClasses(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SentenceType&nbsp;</td><td class=\"PName last\">sentenceType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">[static] Returns a list of supported MipTypes::DataClass values for the specified SentenceType type.</div></div>",1954:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1954\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> NmeaMessageFormats fromCommandResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">responseValues,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">startIndex&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">[static] Build NmeaMessageFormat objects from the read command response &lt;MipFieldValues&gt;.</div></div>",1955:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1955\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> baseRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">base</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Set base rate directly (usually done through sourceDataClass or sampleRate).</div></div>",1956:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1956\" class=\"NDPrototype NoParameterForm\">MipFieldValues toCommandParameters() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Generates command parameter MipFieldValues for single NmeaMessageFormat object.</div></div>",1957:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1957\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MipFieldValues toCommandParameters(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">NmeaMessageFormats&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">nmeaFormats</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">[static] Build &lt;MipFieldValues&gt; parameters (including count) from a vector of NmeaMessageFormat objects.</div></div>"});