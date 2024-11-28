NDSummary.OnToolTipsLoaded("File:MicroStrain/DataPoint.h",{9831:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a map of uint32 to int16 values.</div></div>",9832:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9832\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DataPoint</div></div></div><div class=\"TTSummary\">Base class representing common functionality between Wireless and Inertial data points</div></div>",9834:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available channel properties that can be stored with the WirelessDataPoint.</div></div>",9838:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a map of ChannelPropertyId to Value pairs.</div></div>",9840:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9840\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">DataPoint(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">ValueType&nbsp;</td><td></td><td class=\"PName\">type,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">anyType&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">value,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelProperties&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">channelProperties&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">ChannelProperties()</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a DataPoint object</div></div>",9842:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9842\" class=\"NDPrototype NoParameterForm\">ChannelProperties m_channelProperties</div><div class=\"TTSummary\">The ChannelProperties associated with the data point (if any).</div></div>",9844:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9844\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> Value&amp; channelProperty(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelPropertyId&nbsp;</td><td class=\"PName last\">id</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the channel property for the specified ChannelPropertyId associated with the data point.</div></div>",9845:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9845\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Vector as_Vector() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a Vector object</div></div>",9846:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9846\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Matrix as_Matrix() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a Matrix object</div></div>",9847:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9847\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Timestamp as_Timestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a Timestamp object</div></div>",9848:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9848\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Bytes as_Bytes() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a Bytes object (vector of uint8).</div></div>",9849:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9849\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> StructuralHealth as_StructuralHealth() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a StructuralHealth object.</div></div>",9850:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9850\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> RfSweep as_RfSweep() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as an RfSweep.</div></div>",9851:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9851\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> as_string() <span class=\"SHKeyword\">const override</span></div><div class=\"TTSummary\">Gets the data value as a string</div></div>"});