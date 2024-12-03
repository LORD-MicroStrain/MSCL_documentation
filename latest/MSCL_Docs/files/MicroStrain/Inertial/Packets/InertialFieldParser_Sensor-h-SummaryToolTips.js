NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Packets/InertialFieldParser_Sensor.h",{1135:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1135\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_RawAccelVector</div></div></div><div class=\"TTSummary\">The Field Parser for raw accelerometer data</div></div>",1137:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1137\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipDataField&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">field,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">MipDataPoints&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">result</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div><div class=\"TTSummary\">Parses an MipDataField for MipDataPoints and stores them in the valid or invalid result vectors</div></div>",1138:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1138\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static bool</span> registerParser()</div><div class=\"TTSummary\">The static function that registers this parser with the list of parsers (called immediately)</div></div>",1140:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">The 2-byte field type (Descriptor ID + Field ID) for this parser</div></div>",1141:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">Whether this parser is registered. This will always be true. This is used to call registerParser() immediately</div></div>",1142:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1142\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_RawGyroVector</div></div></div><div class=\"TTSummary\">The field parser for raw gyro data</div></div>",1143:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1143\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_RawMagVector</div></div></div><div class=\"TTSummary\">The field parser for raw magnetometer data</div></div>",1144:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1144\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_ScaledAccelVector</div></div></div><div class=\"TTSummary\">The field parser for scaled accelerometer data</div></div>",1145:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1145\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_ScaledGyroVector</div></div></div><div class=\"TTSummary\">The field parser for scaled gyro data</div></div>",1146:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1146\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_ScaledMagVector</div></div></div><div class=\"TTSummary\">The field parser for scaled magnetometer data</div></div>",1147:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1147\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_DeltaThetaVector</div></div></div><div class=\"TTSummary\">The field parser for delta theta data</div></div>",1148:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1148\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_DeltaVelocityVector</div></div></div><div class=\"TTSummary\">The field parser for delta velocity data</div></div>",1149:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1149\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_OrientationMatrix</div></div></div><div class=\"TTSummary\">The field parser for orientation matrix data</div></div>",1150:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1150\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_Quaternion</div></div></div><div class=\"TTSummary\">The field parser for quaternion data</div></div>",1151:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1151\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_OrientationUpdateMatrix</div></div></div><div class=\"TTSummary\">The field parser for orientation matrix data</div></div>",1152:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1152\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_EulerAngles</div></div></div><div class=\"TTSummary\">The field parser for Euler Angles data</div></div>",1153:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1153\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_InternalTimestamp</div></div></div><div class=\"TTSummary\">The field parser for Internal Timestamp data</div></div>",1154:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1154\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_BeaconedTimestamp</div></div></div><div class=\"TTSummary\">The field parser for Beaconed Timestamp data</div></div>",1158:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1158\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_StabilizedMagVector</div></div></div><div class=\"TTSummary\">The field parser for Stabilized Mag Vector (North)</div></div>",1159:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1159\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_StabilizedAccelVector</div></div></div><div class=\"TTSummary\">The field parser for Stabilized Accel Vector (Up)</div></div>",1160:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1160\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_GpsCorrelationTimestamp</div></div></div><div class=\"TTSummary\">The field parser for GPS Correlation Timestamp</div></div>",1164:"<div class=\"NDToolTip TClass LC\"><div class=\"TTSummary\">The field parser for GPS Correlation Timestamp</div></div>",1168:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1168\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_ScaledAmbientPressure</div></div></div><div class=\"TTSummary\">The field parser for Scaled Ambient Pressure.</div></div>",1169:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1169\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_OverrangeStatus</div></div></div><div class=\"TTSummary\">The field parser for Overrange Status.</div></div>",1171:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1171\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipDataField&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">field,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">MipDataPoints&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">result</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div><div class=\"TTSummary\">Parses an MipDataField for MipDataPoints and stores them in the valid or invalid result vectors</div></div>",1172:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1172\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static bool</span> registerParser()</div><div class=\"TTSummary\">The static function that registers this parser with the list of parsers (called immediately)</div></div>",1174:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">The MipTypes::ChannelField for this parser</div></div>",1175:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">Whether this parser is registered. This will always be true.</div></div>",1176:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1176\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_RawAmbientPressure</div></div></div><div class=\"TTSummary\">The field parser for Raw Ambient Pressure.</div></div>",1177:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1177\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_OdometerData</div></div></div><div class=\"TTSummary\">The field parser for the Odometer Data field.</div></div>"});