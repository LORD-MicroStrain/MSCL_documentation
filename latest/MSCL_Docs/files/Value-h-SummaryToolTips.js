NDSummary.OnToolTipsLoaded("File:Value.h",{10051:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10051\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Value</div></div></div><div class=\"TTSummary\">Represents a single value that can be stored/accessed in multiple ways.</div></div>",10053:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10053\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Value(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">ValueType&nbsp;</td><td></td><td class=\"PName last\">type,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">anyType&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Value object</div></div>",10054:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10054\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Value BOOL(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static helper function for making a Value object from a bool.</div></div>",10055:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10055\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Value UINT8(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static helper function for making a Value object from a uint8.</div></div>",10056:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10056\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Value UINT16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static helper function for making a Value object from a uint16.</div></div>",10057:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10057\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Value UINT32(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static helper function for making a Value object from a uint32.</div></div>",10058:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10058\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Value UINT64(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static helper function for making a Value object from a uint64.</div></div>",10059:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10059\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Value INT8(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int8</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static helper function for making a Value object from an int8.</div></div>",10060:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10060\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Value FLOAT(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static helper function for making a Value object from a float.</div></div>",10061:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10061\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Value DOUBLE(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static helper function for making a Value object from a double.</div></div>",10063:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype10063\" class=\"NDPrototype NoParameterForm\">anyType m_value</div><div class=\"TTSummary\">Holds the actual value as an anyType</div></div>",10064:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype10064\" class=\"NDPrototype NoParameterForm\">ValueType m_storedAs</div><div class=\"TTSummary\">The type that the value is stored as.&nbsp; This type should be inspected to determine how to read the m_value member</div></div>",10066:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10066\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> ValueType storedAs() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ValueType that the data value is stored as. This type should be inspected to determine how to read the data value.</div></div>",10067:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10067\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual float</span> as_float() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a 4-byte float</div></div>",10068:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10068\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual double</span> as_double() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as an 8-byte double</div></div>",10069:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10069\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> as_uint8() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a 1-byte unsigned integer</div></div>",10070:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10070\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint16</span> as_uint16() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a 2-byte unsigned integer</div></div>",10071:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10071\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint32</span> as_uint32() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a 4-byte unsigned integer</div></div>",10072:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10072\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint64</span> as_uint64() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a 8-byte unsigned integer</div></div>",10073:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10073\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual int8</span> as_int8() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a 1-byte signed integer</div></div>",10074:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10074\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual short</span> as_int16() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a 2-byte signed integer</div></div>",10075:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10075\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual int</span> as_int32() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a 4-byte signed integer</div></div>",10076:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Gets the data value as a 1-byte boolean</div></div>",10077:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10077\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> ChannelMask as_ChannelMask() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a ChannelMask object.</div></div>",10078:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10078\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> as_string() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a string</div></div>"});