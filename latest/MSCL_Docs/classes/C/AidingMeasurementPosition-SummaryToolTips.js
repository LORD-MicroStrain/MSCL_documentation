NDSummary.OnToolTipsLoaded("CClass:AidingMeasurementPosition",{4011:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4011\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AidingMeasurementPosition</div></div></div><div class=\"TTSummary\">A class that represents position aiding measurement inputs. Extends AidingMeasurementInput.</div></div>",4013:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Bitmask for each position value in the valid flags.</div></div>",4022:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4022\" class=\"NDPrototype NoParameterForm\">Position m_position</div><div class=\"TTSummary\">Position measurement value.&nbsp; Also indicates reference frame.</div></div>",4023:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4023\" class=\"NDPrototype NoParameterForm\">GeometricUncertainty m_unc</div><div class=\"TTSummary\">Uncertainties of the position measurements.</div></div>",4025:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4025\" class=\"NDPrototype NoParameterForm\">AidingMeasurementPosition() : AidingMeasurementInput()</div><div class=\"TTSummary\">Constructs an AidingMeasurementPosition object with default values.</div></div>",4026:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4026\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">AidingMeasurementPosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">PositionVelocityReferenceFrame&nbsp;</td><td></td><td class=\"PName last\">referenceFrame,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">values</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs an AidingMeasurementPosition object with the specified reference frame from the &lt;MipFieldValues&gt; parameter list returned from the device.</div></div>",4027:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4027\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parseMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">values</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Populates measurement values based on the &lt;MipFieldValues&gt; parameter list.</div></div>",4028:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4028\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> appendMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">values</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div><div class=\"TTSummary\">Appends the position measurement info to the provided &lt;MipFieldValues&gt; parameter list.</div></div>",4029:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4029\" class=\"NDPrototype NoParameterForm\">Position position() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the Position measurement.</div></div>",4030:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4030\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> position(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Position&nbsp;</td><td class=\"PName last\">pos</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Set the Position measurement.</div></div>",4031:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4031\" class=\"NDPrototype NoParameterForm\">GeometricUncertainty uncertainty() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the measurment uncertainty</div></div>",4032:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4032\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> uncertainty(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">GeometricUncertainty&nbsp;</td><td class=\"PName last\">uncertainty</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the measurement uncertainty.</div></div>",4033:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4033\" class=\"NDPrototype NoParameterForm\">PositionVelocityReferenceFrame referenceFrame() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the PositionVelocityReferenceFrame of this position measurement.</div></div>",4034:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4034\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> referenceFrame(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">PositionVelocityReferenceFrame&nbsp;</td><td class=\"PName last\">frame</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Set the PositionVelocityReferenceFrame of this measurement.</div></div>",4035:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4035\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> valid(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ValidFlags&nbsp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether the specified value is valid.</div></div>",4036:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4036\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> valid(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ValidFlags&nbsp;</td><td class=\"PName last\">val,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">valid</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the validity of the specified value.</div></div>"});