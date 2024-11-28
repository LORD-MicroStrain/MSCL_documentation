NDSummary.OnToolTipsLoaded("CClass:AidingMeasurementInput",{5001:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5001\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AidingMeasurementInput</div></div></div><div class=\"TTSummary\">Base class for commanded aiding measurement types for command set 0x13 Aiding Measurement inputs</div></div>",5003:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Response mode options for Aiding Measurement inputs (command set 0x13).</div></div>",5007:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5007\" class=\"NDPrototype NoParameterForm\">Timestamp m_timestamp</div><div class=\"TTSummary\">The Timestamp of this measurement.</div></div>",5008:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5008\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> m_frameId</div><div class=\"TTSummary\">The ID of the aiding frame for this measurement.</div></div>",5009:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5009\" class=\"NDPrototype NoParameterForm\">Bitfield m_validFlags</div><div class=\"TTSummary\">The Bitfield valid flags of this measurement.</div></div>",5011:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5011\" class=\"NDPrototype NoParameterForm\">AidingMeasurementInput() : m_timestamp(<span class=\"SHNumber\">0</span>), m_frameId(<span class=\"SHNumber\">0</span>), m_validFlags(<span class=\"SHNumber\">0xFFFF</span>)</div><div class=\"TTSummary\">Constructs an AidingMeasurementInput object with default values</div></div>",5012:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5012\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">AidingMeasurementInput(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">values</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs and AidingMeasurementInput object from the provided &lt;MipFieldValues&gt; read from the device.</div></div>",5013:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5013\" class=\"NDPrototype NoParameterForm\">~AidingMeasurementInput()</div></div>",5014:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5014\" class=\"NDPrototype NoParameterForm\">MipFieldValues toMipFieldValues() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this object to a &lt;MipFieldValues&gt; parameter list.</div></div>",5015:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5015\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parseMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">values</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Populates this object from a MipFieldValues parameter list.</div></div>",5016:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5016\" class=\"NDPrototype NoParameterForm\">Timestamp timestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the timestamp of this measurement.</div></div>",5017:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5017\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> timestamp(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Timestamp&nbsp;</td><td class=\"PName last\">ts</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Set the timestamp of this measurement.</div></div>",5018:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5018\" class=\"NDPrototype NoParameterForm\">Timestamp::Epoch timebase() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the timebase/epoch for the timestamp of this measurement.&nbsp; Note: read from the Timestamp object. timestamp().storedEpoch() returns the same result.</div></div>",5019:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5019\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> frameId() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the aiding frame ID of this measurement.</div></div>",5020:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5020\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> frameId(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">id</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Set the aiding frame ID of this measurement.</div></div>",5021:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5021\" class=\"NDPrototype NoParameterForm\">Bitfield validFlags() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the valid flags of this measurement.</div></div>",5022:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5022\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> validFlags(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Bitfield&nbsp;</td><td class=\"PName last\">flags</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Set the valid flags for this measurement.</div></div>"});