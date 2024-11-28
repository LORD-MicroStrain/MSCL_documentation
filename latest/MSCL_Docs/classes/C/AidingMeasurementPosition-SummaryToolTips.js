NDSummary.OnToolTipsLoaded("CClass:AidingMeasurementPosition",{5023:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5023\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AidingMeasurementPosition</div></div></div><div class=\"TTSummary\">A class that represents position aiding measurement inputs. Extends AidingMeasurementInput.</div></div>",5025:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Bitmask for each position value in the valid flags.</div></div>",5034:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5034\" class=\"NDPrototype NoParameterForm\">Position m_position</div><div class=\"TTSummary\">Position measurement value.&nbsp; Also indicates reference frame.</div></div>",5035:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5035\" class=\"NDPrototype NoParameterForm\">GeometricUncertainty m_unc</div><div class=\"TTSummary\">Uncertainties of the position measurements.</div></div>",5037:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5037\" class=\"NDPrototype NoParameterForm\">AidingMeasurementPosition() : AidingMeasurementInput()</div><div class=\"TTSummary\">Constructs an AidingMeasurementPosition object with default values.</div></div>",5038:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5038\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">AidingMeasurementPosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">PositionVelocityReferenceFrame&nbsp;</td><td></td><td class=\"PName last\">referenceFrame,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">values</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs an AidingMeasurementPosition object with the specified reference frame from the &lt;MipFieldValues&gt; parameter list returned from the device.</div></div>",5039:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5039\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parseMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">values</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Populates measurement values based on the &lt;MipFieldValues&gt; parameter list.</div></div>",5040:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5040\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> appendMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">values</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div><div class=\"TTSummary\">Appends the position measurement info to the provided &lt;MipFieldValues&gt; parameter list.</div></div>",5041:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5041\" class=\"NDPrototype NoParameterForm\">Position position() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the Position measurement.</div></div>",5042:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5042\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> position(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Position&nbsp;</td><td class=\"PName last\">pos</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Set the Position measurement.</div></div>",5043:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5043\" class=\"NDPrototype NoParameterForm\">GeometricUncertainty uncertainty() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the measurment uncertainty</div></div>",5044:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5044\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> uncertainty(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">GeometricUncertainty&nbsp;</td><td class=\"PName last\">uncertainty</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the measurement uncertainty.</div></div>",5045:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5045\" class=\"NDPrototype NoParameterForm\">PositionVelocityReferenceFrame referenceFrame() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the PositionVelocityReferenceFrame of this position measurement.</div></div>",5046:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5046\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> referenceFrame(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">PositionVelocityReferenceFrame&nbsp;</td><td class=\"PName last\">frame</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Set the PositionVelocityReferenceFrame of this measurement.</div></div>",5047:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5047\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> valid(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ValidFlags&nbsp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether the specified value is valid.</div></div>",5048:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5048\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> valid(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ValidFlags&nbsp;</td><td class=\"PName last\">val,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">valid</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the validity of the specified value.</div></div>"});