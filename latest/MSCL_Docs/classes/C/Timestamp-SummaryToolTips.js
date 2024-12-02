NDSummary.OnToolTipsLoaded("CClass:Timestamp",{10294:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10294\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Timestamp</div></div></div><div class=\"TTSummary\">Represents a date/time object</div></div>",10296:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Epoch indicator: Unix, GPS.&nbsp; Timestamp class uses Unix epoch by default.</div></div>",10304:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10304\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> Timestamp(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName\">nanoseconds&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\">Epoch&nbsp;</td><td class=\"PName\">epoch&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">Epoch::UNIX</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Timestamp object based on the nanoseconds parameter</div></div>",10305:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10305\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Timestamp(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">year,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">month,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">day,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">hour,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">minute,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">second,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">milli</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Timestamp object from the given year, month, day, hour, minute, second, millisecond parameters</div></div>",10307:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype10307\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> m_nanoseconds</div><div class=\"TTSummary\">The number of nanoseconds since the m_epoch epoch</div></div>",10308:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype10308\" class=\"NDPrototype NoParameterForm\">Epoch m_epoch</div><div class=\"TTSummary\">The epoch the nanosecond count is stored in.&nbsp; This is to avoid loss of precision during conversion when the source value is GPS time, converting to and from Unix</div></div>",10309:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype10309\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static uint8</span> s_gpsLeapSeconds</div><div class=\"TTSummary\">The (hardcoded) number of leap seconds since Jan 1 1980, used in converting GPS timestamps to UTC timestamps.</div></div>",10311:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Gets the TimeSpan representing the distance (always positive) between two Timestamps.</div></div>",10312:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Equal operator for comparing Timestamps.</div></div>",10313:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Not Equal operator for comparing Timestamps.</div></div>",10314:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Less Than operator for comparing Timestamps.</div></div>",10315:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Less Than or Equal To operator for comparing Timestamps.</div></div>",10316:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Greater Than operator for comparing Timestamps.</div></div>",10317:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Greater Than or Equal To operator for comparing Timestamps.</div></div>",10319:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10319\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> nanoseconds() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of nanoseconds since the specified epoch</div></div>",10320:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10320\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> seconds() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of seconds since the specified epoch</div></div>",10321:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10321\" class=\"NDPrototype NoParameterForm\">Epoch storedEpoch() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the epoch the source value is stored in. Regardless of stored epoch, the value can be read out in both Unix and GPS.</div></div>",10322:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10322\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> str() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a string representation of the Timestamp object in ISO 8601 Date/Time format.</div></div>",10323:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10323\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName\">nanosSinceEpoch,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">Epoch&nbsp;</td><td class=\"PName\">epoch&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">Epoch::UNIX</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Updates the Timestamp to the given number of nanoseconds since the unix epoch.</div></div>",10324:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10324\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> setTimeNow()</div><div class=\"TTSummary\">Sets the Timestamp object to the current system time in UTC</div></div>",10325:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10325\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> Timestamp timeNow()</div><div class=\"TTSummary\">Creates a timestamp using the current system time</div></div>",10326:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10326\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static void</span> setLeapSeconds(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">gpsLeapSeconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adjusts the hardcoded number of leap seconds since Jan 1 1980, used in converting GPS timestamps to UTC timestamps.&nbsp; Note: New releases of MSCL should be available when the leap seconds change. You can also adjust this value yourself to correct your current version of MSCL without updating.</div></div>",10327:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10327\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static uint8</span> getLeapSeconds()</div><div class=\"TTSummary\">Gets the current number of leap seconds since Jan 1 1980, used in converting GPS timestamps to UTC timestamps.</div></div>",10328:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10328\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static uint64</span> gpsTimeToUtcTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">timeOfWeek,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">weekNumber</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Converts the gps time into the UTC time in nanoseconds since the unix epoch.&nbsp; Note: this uses the value stored in &lt;Utils::gpsLeapSeconds&gt; in its conversion.</div></div>",10329:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10329\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static uint64</span> gpsTimeToUtcTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">gpsNanoseconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Converts the gps time into the UTC time in nanoseconds since the unix epoch.&nbsp; Note: this uses the value stored in &lt;Utils::gpsLeapSeconds&gt; in its conversion.</div></div>",10330:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10330\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static uint64</span> utcTimeToGpsTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">utcNanoseconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Converts the UTC time into the GPS time in nanoseconds since the unix epoch.&nbsp; Note: this uses the value stored in &lt;Utils::gpsLeapSeconds&gt; in its conversion.</div></div>"});