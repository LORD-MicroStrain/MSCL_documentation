NDSummary.OnToolTipsLoaded("CClass:Utils",{10182:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10182\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">namespace</span> </div><div class=\"CPName\">Utils</div></div></div><div class=\"TTSummary\">Contains many commonly used utility functions.&nbsp; Note: Communication with our devices (wireless and inertial) is done in Big Endian.</div></div>",10184:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The possible endians that a value can be in.</div></div>",10186:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10186\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> valueTypeSize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ValueType&nbsp;</td><td class=\"PName last\">type</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the size of the ValueType</div></div>",10187:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10187\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint8</span> msb(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the Most Significant Byte from the 2-Byte unsigned integer</div></div>",10188:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10188\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint8</span> lsb(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the Least Significant Byte from the 2-Byte unsigned integer</div></div>",10189:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10189\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint8</span> msNibble(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the Most Significant Nibble (4-bits) from the 1-Byte value</div></div>",10190:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10190\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint8</span> lsNibble(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the Least Significant Nibble (4-bits) from the 1-Byte value</div></div>",10191:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10191\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> split_int16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td></td><td class=\"PName\">value,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">low,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">high,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">Endianness&nbsp;</td><td></td><td class=\"PName\">endian&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">bigEndian</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Converts the 2-byte signed integer into its individual 2 bytes.</div></div>",10192:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10192\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int16</span> make_int16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">low,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">high,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">Endianness&nbsp;</td><td class=\"PName\">endian&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">bigEndian</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the 2-byte signed integer (in system endianness) from 2 individual bytes</div></div>",10193:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10193\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int32</span> make_int32(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">low,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">byte2,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">byte3,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">high,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">Endianness&nbsp;</td><td class=\"PName\">endian&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">bigEndian</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the 4-byte signed integer (in system endianness) from 4 individual bytes</div></div>",10194:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10194\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> split_uint16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName\">value,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">low,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">high,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">Endianness&nbsp;</td><td></td><td class=\"PName\">endian&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">bigEndian</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Converts the 2-byte unsigned integer into its individual 2 bytes.</div></div>",10195:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10195\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> make_uint16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">low,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">high,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">Endianness&nbsp;</td><td class=\"PName\">endian&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">bigEndian</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the 2-byte unsigned integer (in system endianness) from 2 individual bytes.&nbsp; Parameters: low - the low memory location byte high - the high memory location byte endian - The Endianness that the passed in bytes are in.&nbsp; ie. Big endian means low = msb, high = lsb. Little endian means low = lsb, high = msb</div></div>",10196:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10196\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> split_uint32(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">value,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">low,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">byte2,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">byte3,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">high,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">Endianness&nbsp;</td><td></td><td class=\"PName\">endian&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">bigEndian</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Converts the 4-byte unsigned integer into its 4 individual bytes.</div></div>",10197:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10197\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> split_uint64(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td></td><td class=\"PName\">value,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">low,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">byte2,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">byte3,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">byte4,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">byte5,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">byte6,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">byte7,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">high,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">Endianness&nbsp;</td><td></td><td class=\"PName\">endian&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">bigEndian</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Converts the 4-byte unsigned integer into its 4 individual bytes.</div></div>",10198:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10198\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> make_uint32(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">low,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">byte2,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">byte3,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">high,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">Endianness&nbsp;</td><td class=\"PName\">endian&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">bigEndian</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">gets the 4-byte unsigned integer from the 4 individual bytes</div></div>",10199:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10199\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint64</span> make_uint64(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">low,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">byte2,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">byte3,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">byte4,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">byte5,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">byte6,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">byte7,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">high,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">Endianness&nbsp;</td><td class=\"PName\">endian&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">bigEndian</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">gets the 8-byte unsigned integer from the 8 individual bytes</div></div>",10200:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10200\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> split_float(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td></td><td class=\"PName\">value,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">low,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">byte2,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">byte3,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">high,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">Endianness&nbsp;</td><td></td><td class=\"PName\">endian&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">bigEndian</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Converts the 4-byte float (in system endian) into its 4 individual bytes.</div></div>",10201:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10201\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> make_float(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">low,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">byte2,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">byte3,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">high,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">Endianness&nbsp;</td><td class=\"PName\">endian&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">bigEndian</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds a 4-byte float (in system endian) from 4 bytes given</div></div>",10202:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10202\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> split_double(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td></td><td class=\"PName\">value,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">low,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">byte2,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">byte3,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">byte4,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">byte5,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">byte6,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">byte7,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">high,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">Endianness&nbsp;</td><td></td><td class=\"PName\">endian&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">bigEndian</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Converts the 8-byte double (in system endian) into its 8 individual bytes.</div></div>",10203:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10203\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">double</span> make_double(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">low,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">byte2,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">byte3,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">byte4,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">byte5,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">byte6,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">byte7,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">high,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">Endianness&nbsp;</td><td class=\"PName\">endian&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">bigEndian</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds a 8-byte double (in system endian) from the bytes given.</div></div>",10204:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10204\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> getCurrentSystemTime()</div><div class=\"TTSummary\">Gets the current system time in nanoseconds since unix epoch</div></div>",10205:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10205\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> threadSleep(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">milli</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sleeps for a specified amount of milliseconds on the current thread.</div></div>",10206:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10206\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> round(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns the value that is nearest to the provided value to round. (ie. round(2.5) == 3, round(2.4) == 2)</div></div>",10207:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10207\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> floorBase2(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Rounds down to the nearest base 2 value</div></div>",10208:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10208\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> ceilBase2(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Rounds up to the nearest base 2 value</div></div>",10209:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10209\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">double</span> radiansToDegrees(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">angle</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Converts the radian angle to degrees.</div></div>",10210:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10210\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> removeChar(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">src,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">char</span>&nbsp;</td><td></td><td class=\"PName last\">charToRemove</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Removes all found instances of a char from a string.</div></div>",10211:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10211\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> removeStr(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">src,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">strToRemove</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Removes all found instances of a string from another string.</div></div>",10212:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10212\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> containsStr(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">src,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">containsThis</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks whether or not a string contains another string.</div></div>",10213:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10213\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> strTrimLeft(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">src</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Trims all whitespace from the left of a string.</div></div>",10214:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10214\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> strTrimRight(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">src</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Trims all whitespace from the right of a string.</div></div>",10215:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10215\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> strTrim(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">src</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Trims all whitespace from the left and right of a string.</div></div>",10216:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10216\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::vector&lt;std::<span class=\"SHKeyword\">string</span>&gt; regexFindAll(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">basicString,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">regex&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">pattern&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">std::regex(R<span class=\"SHString\">&quot;([^,]+)&quot;</span>)</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Finds all instances of the pattern.&nbsp; Pattern R&quot;([^,]+)&quot; is a comma delimiter</div></div>",10217:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10217\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::vector&lt;std::<span class=\"SHKeyword\">string</span>&gt; tokenize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">basicString,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">delimiter&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHString\">&quot;,&quot;</span>,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName\">includeEmpty&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Tokenize a string by some delimiter.</div></div>",10218:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10218\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> filterSensorcloudName(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">str</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Replaces characters that are not supported by SensorCloud with a \'-\' character.</div></div>",10219:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10219\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> normalizeAngle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">angle</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Normalizes an angle value to be between 0 and 360 degrees.</div></div>",10220:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10220\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">template</span>&lt;typename T&gt; <span class=\"SHKeyword\">bool</span> bitIsSet(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">T&nbsp;</td><td class=\"PName last\">value,</td></tr><tr><td class=\"PType first\">size_t&nbsp;</td><td class=\"PName last\">bitPos</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if a specific bit is set in the given value.</div></div>",10221:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10221\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">template</span>&lt;typename T&gt; <span class=\"SHKeyword\">void</span> setBit(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">T&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">value,</td></tr><tr><td class=\"PType first\">size_t&nbsp;</td><td></td><td class=\"PName last\">bitPos,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets a specific bit to on or off.</div></div>",10222:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10222\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">template</span>&lt;typename T&gt; <span class=\"SHKeyword\">bool</span> isNaN(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">T&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks whether the given value is NaN or not.</div></div>",10223:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10223\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">template</span>&lt;typename T&gt; <span class=\"SHKeyword\">void</span> checkBounds_min(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">T&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">value,</td></tr><tr><td class=\"PType first\">T&nbsp;</td><td></td><td class=\"PName last\">min</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks that a value is not below a minimum value. If the value is less than the min, the value is changed to that min value.</div></div>",10224:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10224\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">template</span>&lt;typename T&gt; <span class=\"SHKeyword\">void</span> checkBounds_max(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">T&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">value,</td></tr><tr><td class=\"PType first\">T&nbsp;</td><td></td><td class=\"PName last\">max</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks that a value is not above a maximum value. If the value is greater than the max, the value is changed to that max value.</div></div>",10225:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10225\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">template</span>&lt;typename Container, <span class=\"SHKeyword\">class</span> T&gt; <span class=\"SHKeyword\">void</span> eraseIf(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Container&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">c,</td></tr><tr><td class=\"PType first\">T&nbsp;</td><td class=\"PNamePrefix\">&amp;&amp;</td><td class=\"PName last\">t</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes a container (such as a vector) and removes elements from it if they don\'t match a certain predicate.</div></div>",10226:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10226\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">template</span>&lt;typename T&gt; std::<span class=\"SHKeyword\">string</span> toStr(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">T&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Performs a boost::lexical_cast from a value to an std::string</div></div>"});