NDSummary.OnToolTipsLoaded("CClass:NmeaMessageFormat",{1815:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1815\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NmeaMessageFormat</div></div></div><div class=\"TTSummary\">Defines a NMEA message format.</div></div>",1816:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">Maximum number of configurable NMEA messages</div></div>",1817:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">NMEA sentence type options</div></div>",1827:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">NMEA talker ID options</div></div>",1833:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">NMEA message output is limited to either the MAX_FREQUENCY or the source descriptor set base rate, whichever is lower.</div></div>",1834:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1834\" class=\"NDPrototype NoParameterForm\">NmeaMessageFormat()</div><div class=\"TTSummary\">Creates a NmeaMessageFormat object.</div></div>",1835:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1835\" class=\"NDPrototype NoParameterForm\">~NmeaMessageFormat()</div><div class=\"TTSummary\">Destructor for NmeaMessageFormat object.</div></div>",1836:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1836\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> sentenceType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SentenceType&nbsp;</td><td class=\"PName last\">type</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the NMEA SentenceType.</div></div>",1837:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1837\" class=\"NDPrototype NoParameterForm\">SentenceType sentenceType() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the NMEA SentenceType.</div></div>",1838:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1838\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> talkerId(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Talker&nbsp;</td><td class=\"PName last\">id</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the NMEA Talker ID.</div></div>",1839:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1839\" class=\"NDPrototype NoParameterForm\">Talker talkerId() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the NMEA Talker ID.</div></div>",1840:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1840\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> sourceDataClass(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName\">dataClass,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName\">baseRate&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the source MipTypes::DataClass</div></div>",1841:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1841\" class=\"NDPrototype NoParameterForm\">MipTypes::DataClass sourceDataClass() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the source MipTypes::DataClass</div></div>",1842:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1842\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> sampleRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SampleRate&nbsp;</td><td class=\"PName\">rate,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName\">baseRate&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the output sample rate. If baseRate is not specified, please use a SampleRate with RateType of decimation (SampleRate::Decimation(rateDecimation)) otherwise it will cannot be properly interpreted.</div></div>",1843:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1843\" class=\"NDPrototype NoParameterForm\">SampleRate sampleRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the configured output SampleRate</div></div>",1844:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1844\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> talkerIdRequired(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SentenceType&nbsp;</td><td class=\"PName last\">sentenceType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">[static] Checks whether a Talker ID is required for the specified SentenceType type.</div></div>",1845:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1845\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> dataClassSupported(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName last\">dataClass,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">SentenceType&nbsp;</td><td class=\"PName last\">sentenceType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">[static] Checks whether the specified MipTypes::DataClass is supported for the specified SentenceType type.</div></div>",1846:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1846\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MipTypes::MipDataClasses supportedDataClasses(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SentenceType&nbsp;</td><td class=\"PName last\">sentenceType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">[static] Returns a list of supported MipTypes::DataClass values for the specified SentenceType type.</div></div>",1847:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1847\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MipFieldValues toCommandParameters(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">NmeaMessageFormats&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">nmeaFormats</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">[static] Build &lt;MipFieldValues&gt; parameters (including count) from a vector of NmeaMessageFormat objects.</div></div>"});