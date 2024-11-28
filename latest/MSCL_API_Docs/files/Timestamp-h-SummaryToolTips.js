NDSummary.OnToolTipsLoaded("File:Timestamp.h",{4499:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4499\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Timestamp</div></div></div><div class=\"TTSummary\">Represents a date/time object</div></div>",4500:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Epoch indicator: Unix, GPS.&nbsp; Timestamp class uses Unix epoch by default.</div></div>",4507:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4507\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> Timestamp(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName\">nanoseconds&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\">Epoch&nbsp;</td><td class=\"PName\">epoch&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">Epoch::UNIX</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Timestamp object based on the nanoseconds parameter</div></div>",4508:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4508\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Timestamp(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">year,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">month,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">day,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">hour,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">minute,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">second,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">milli</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Timestamp object from the given year, month, day, hour, minute, second, millisecond parameters</div></div>",4509:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4509\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> nanoseconds() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of nanoseconds since the specified epoch</div></div>",4510:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4510\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> seconds() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of seconds since the specified epoch</div></div>",4511:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4511\" class=\"NDPrototype NoParameterForm\">Epoch storedEpoch() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the epoch the source value is stored in. Regardless of stored epoch, the value can be read out in both Unix and GPS.</div></div>",4512:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4512\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> str() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a string representation of the Timestamp object in ISO 8601 Date/Time format.</div></div>",4513:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4513\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName\">nanosSinceEpoch,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">Epoch&nbsp;</td><td class=\"PName\">epoch&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">Epoch::UNIX</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Updates the Timestamp to the given number of nanoseconds since the unix epoch.</div></div>",4514:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4514\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> setTimeNow()</div><div class=\"TTSummary\">Sets the Timestamp object to the current system time in UTC</div></div>",4515:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4515\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> Timestamp timeNow()</div><div class=\"TTSummary\">Creates a timestamp using the current system time</div></div>",4516:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4516\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static void</span> setLeapSeconds(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">gpsLeapSeconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adjusts the hardcoded number of leap seconds since Jan 1 1980, used in converting GPS timestamps to UTC timestamps.&nbsp; Note: New releases of MSCL should be available when the leap seconds change. You can also adjust this value yourself to correct your current version of MSCL without updating.</div></div>",4517:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4517\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static uint8</span> getLeapSeconds()</div><div class=\"TTSummary\">Gets the current number of leap seconds since Jan 1 1980, used in converting GPS timestamps to UTC timestamps.</div></div>",4518:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4518\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static uint64</span> gpsTimeToUtcTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">timeOfWeek,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">weekNumber</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Converts the gps time into the UTC time in nanoseconds since the unix epoch.&nbsp; Note: this uses the value stored in &lt;Utils::gpsLeapSeconds&gt; in its conversion.</div></div>",4519:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4519\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static uint64</span> gpsTimeToUtcTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">gpsNanoseconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Converts the gps time into the UTC time in nanoseconds since the unix epoch.&nbsp; Note: this uses the value stored in &lt;Utils::gpsLeapSeconds&gt; in its conversion.</div></div>",4520:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4520\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static uint64</span> utcTimeToGpsTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">utcNanoseconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Converts the UTC time into the GPS time in nanoseconds since the unix epoch.&nbsp; Note: this uses the value stored in &lt;Utils::gpsLeapSeconds&gt; in its conversion.</div></div>"});