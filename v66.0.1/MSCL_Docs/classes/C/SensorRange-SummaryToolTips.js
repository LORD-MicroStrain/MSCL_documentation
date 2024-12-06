NDSummary.OnToolTipsLoaded("CClass:SensorRange",{4113:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4113\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SensorRange</div></div></div><div class=\"TTSummary\">An object representing a configurable sensor range option</div></div>",4115:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Sensor and unit identifiers for configurable Sensor Range command (0x0C,0x52) ALL&nbsp; - 0x00 - All (save as startup, load startup, reset to default only) ACCEL_MS2&nbsp; - 0x01 - Accelerometer in m/s^2 GYRO_DPS&nbsp; - 0x02 - Gyroscope in degrees per second MAG_MG&nbsp; - 0x03 - Magnetometer in mG PRESSURE_HPA - 0x04 - Pressure in hPa</div></div>",4117:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4117\" class=\"NDPrototype NoParameterForm\">Type m_type</div><div class=\"TTSummary\">The SensorRange::Type of this range</div></div>",4118:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4118\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_range</div><div class=\"TTSummary\">This will only be set and valid if read from SupportedSensorRanges object Default: -1 (invalid)</div></div>",4119:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4119\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> m_id</div><div class=\"TTSummary\">The index ID of this range according to device manual</div></div>",4121:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4121\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">SensorRange(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName\">rangeType,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">index,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName\">rangeValue&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">-1.0f</span></td></tr></table></td><td class=\"PAfterParameters\">) : m_type(rangeType), m_range(rangeValue), m_id(index)</td></tr></table></div><div class=\"TTSummary\">Construct a SensorRange object with specified range This object should not be constructed directly by users</div></div>",4122:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4122\" class=\"NDPrototype NoParameterForm\">Type type() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">The SensorRange::Type of this range</div></div>",4123:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4123\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> range() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">This will only be set and valid if read from SupportedSensorRanges object</div></div>",4124:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4124\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> id() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">The index ID of this range according to device manual</div></div>",4126:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A vector of SensorRange values</div></div>",4127:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A collection of SensorRange::Type values mapped to associated SensorRange objects</div></div>"});