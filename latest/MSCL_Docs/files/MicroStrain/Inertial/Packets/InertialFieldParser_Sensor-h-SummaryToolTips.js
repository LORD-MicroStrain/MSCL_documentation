NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Packets/InertialFieldParser_Sensor.h",{1091:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1091\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_RawAccelVector</div></div></div><div class=\"TTSummary\">The Field Parser for raw accelerometer data</div></div>",1093:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1093\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipDataField&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">field,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">MipDataPoints&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">result</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div><div class=\"TTSummary\">Parses an MipDataField for MipDataPoints and stores them in the valid or invalid result vectors</div></div>",1094:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1094\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static bool</span> registerParser()</div><div class=\"TTSummary\">The static function that registers this parser with the list of parsers (called immediately)</div></div>",1096:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">The 2-byte field type (Descriptor ID + Field ID) for this parser</div></div>",1097:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">Whether this parser is registered. This will always be true. This is used to call registerParser() immediately</div></div>",1098:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1098\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_RawGyroVector</div></div></div><div class=\"TTSummary\">The field parser for raw gyro data</div></div>",1099:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1099\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_RawMagVector</div></div></div><div class=\"TTSummary\">The field parser for raw magnetometer data</div></div>",1100:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1100\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_ScaledAccelVector</div></div></div><div class=\"TTSummary\">The field parser for scaled accelerometer data</div></div>",1101:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1101\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_ScaledGyroVector</div></div></div><div class=\"TTSummary\">The field parser for scaled gyro data</div></div>",1102:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1102\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_ScaledMagVector</div></div></div><div class=\"TTSummary\">The field parser for scaled magnetometer data</div></div>",1103:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1103\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_DeltaThetaVector</div></div></div><div class=\"TTSummary\">The field parser for delta theta data</div></div>",1104:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1104\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_DeltaVelocityVector</div></div></div><div class=\"TTSummary\">The field parser for delta velocity data</div></div>",1105:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1105\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_OrientationMatrix</div></div></div><div class=\"TTSummary\">The field parser for orientation matrix data</div></div>",1106:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1106\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_Quaternion</div></div></div><div class=\"TTSummary\">The field parser for quaternion data</div></div>",1107:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1107\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_OrientationUpdateMatrix</div></div></div><div class=\"TTSummary\">The field parser for orientation matrix data</div></div>",1108:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1108\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_EulerAngles</div></div></div><div class=\"TTSummary\">The field parser for Euler Angles data</div></div>",1109:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1109\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_InternalTimestamp</div></div></div><div class=\"TTSummary\">The field parser for Internal Timestamp data</div></div>",1110:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1110\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_BeaconedTimestamp</div></div></div><div class=\"TTSummary\">The field parser for Beaconed Timestamp data</div></div>",1114:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1114\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_StabilizedMagVector</div></div></div><div class=\"TTSummary\">The field parser for Stabilized Mag Vector (North)</div></div>",1115:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1115\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_StabilizedAccelVector</div></div></div><div class=\"TTSummary\">The field parser for Stabilized Accel Vector (Up)</div></div>",1116:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1116\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_GpsCorrelationTimestamp</div></div></div><div class=\"TTSummary\">The field parser for GPS Correlation Timestamp</div></div>",1120:"<div class=\"NDToolTip TClass LC\"><div class=\"TTSummary\">The field parser for GPS Correlation Timestamp</div></div>",1124:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1124\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_ScaledAmbientPressure</div></div></div><div class=\"TTSummary\">The field parser for Scaled Ambient Pressure.</div></div>",1125:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1125\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_OverrangeStatus</div></div></div><div class=\"TTSummary\">The field parser for Overrange Status.</div></div>",1127:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1127\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipDataField&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">field,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">MipDataPoints&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">result</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div><div class=\"TTSummary\">Parses an MipDataField for MipDataPoints and stores them in the valid or invalid result vectors</div></div>",1128:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1128\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static bool</span> registerParser()</div><div class=\"TTSummary\">The static function that registers this parser with the list of parsers (called immediately)</div></div>",1130:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">The MipTypes::ChannelField for this parser</div></div>",1131:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">Whether this parser is registered. This will always be true.</div></div>",1132:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1132\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_RawAmbientPressure</div></div></div><div class=\"TTSummary\">The field parser for Raw Ambient Pressure.</div></div>",1133:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1133\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_OdometerData</div></div></div><div class=\"TTSummary\">The field parser for the Odometer Data field.</div></div>"});