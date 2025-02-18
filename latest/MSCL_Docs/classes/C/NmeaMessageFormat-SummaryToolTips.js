NDSummary.OnToolTipsLoaded("CClass:NmeaMessageFormat",{1709:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1709\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NmeaMessageFormat</div></div></div><div class=\"TTSummary\">Defines a NMEA message format.</div></div>",1711:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">Maximum number of configurable NMEA messages</div></div>",1713:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">NMEA sentence type options</div></div>",1723:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">NMEA talker ID options</div></div>",1730:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">NMEA message output is limited to either the MAX_FREQUENCY or the source descriptor set base rate, whichever is lower.</div></div>",1732:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1732\" class=\"NDPrototype NoParameterForm\">SentenceType m_sentenceType</div><div class=\"TTSummary\">The NMEA SentenceType type.</div></div>",1733:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1733\" class=\"NDPrototype NoParameterForm\">Talker m_talkerId</div><div class=\"TTSummary\">The NMEA Talker ID.</div></div>",1734:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1734\" class=\"NDPrototype NoParameterForm\">MipTypes::DataClass m_sourceDescSet</div><div class=\"TTSummary\">The source descriptor set.</div></div>",1735:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1735\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_baseRate</div><div class=\"TTSummary\">Descriptor set base rate, updated with m_descSet</div></div>",1736:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1736\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_decimation</div><div class=\"TTSummary\">The decimation from the base rate of m_descSet.</div></div>",1738:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1738\" class=\"NDPrototype NoParameterForm\">NmeaMessageFormat()</div><div class=\"TTSummary\">Creates a NmeaMessageFormat object.</div></div>",1739:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1739\" class=\"NDPrototype NoParameterForm\">~NmeaMessageFormat()</div><div class=\"TTSummary\">Destructor for NmeaMessageFormat object.</div></div>",1740:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1740\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> sentenceType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SentenceType&nbsp;</td><td class=\"PName last\">type</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the NMEA SentenceType.</div></div>",1741:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1741\" class=\"NDPrototype NoParameterForm\">SentenceType sentenceType() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the NMEA SentenceType.</div></div>",1742:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1742\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> talkerId(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Talker&nbsp;</td><td class=\"PName last\">id</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the NMEA Talker ID.</div></div>",1743:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1743\" class=\"NDPrototype NoParameterForm\">Talker talkerId() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the NMEA Talker ID.</div></div>",1744:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1744\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> sourceDataClass(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName\">dataClass,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName\">baseRate&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the source MipTypes::DataClass</div></div>",1745:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1745\" class=\"NDPrototype NoParameterForm\">MipTypes::DataClass sourceDataClass() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the source MipTypes::DataClass</div></div>",1746:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1746\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> sampleRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SampleRate&nbsp;</td><td class=\"PName\">rate,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName\">baseRate&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the output sample rate. If baseRate is not specified, please use a SampleRate with RateType of decimation (SampleRate::Decimation(rateDecimation)) otherwise it will cannot be properly interpreted.</div></div>",1747:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1747\" class=\"NDPrototype NoParameterForm\">SampleRate sampleRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the configured output SampleRate</div></div>",1748:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1748\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> updateDecimation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">newBaseRate</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Update the decimation based on current data class and previous, new base rates.</div></div>",1749:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1749\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> talkerIdRequired(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SentenceType&nbsp;</td><td class=\"PName last\">sentenceType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">[static] Checks whether a Talker ID is required for the specified SentenceType type.</div></div>",1750:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1750\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> dataClassSupported(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName last\">dataClass,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">SentenceType&nbsp;</td><td class=\"PName last\">sentenceType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">[static] Checks whether the specified MipTypes::DataClass is supported for the specified SentenceType type.</div></div>",1751:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1751\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MipTypes::MipDataClasses supportedDataClasses(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SentenceType&nbsp;</td><td class=\"PName last\">sentenceType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">[static] Returns a list of supported MipTypes::DataClass values for the specified SentenceType type.</div></div>",1752:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1752\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> NmeaMessageFormats fromCommandResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">responseValues,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">startIndex&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">[static] Build NmeaMessageFormat objects from the read command response &lt;MipFieldValues&gt;.</div></div>",1753:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1753\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> baseRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">base</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Set base rate directly (usually done through sourceDataClass or sampleRate).</div></div>",1754:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1754\" class=\"NDPrototype NoParameterForm\">MipFieldValues toCommandParameters() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Generates command parameter MipFieldValues for single NmeaMessageFormat object.</div></div>",1755:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1755\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MipFieldValues toCommandParameters(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">NmeaMessageFormats&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">nmeaFormats</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">[static] Build &lt;MipFieldValues&gt; parameters (including count) from a vector of NmeaMessageFormat objects.</div></div>"});