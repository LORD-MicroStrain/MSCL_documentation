NDSummary.OnToolTipsLoaded("CClass:AidingMeasurementVelocity",{4553:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4553\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AidingMeasurementVelocity</div></div></div><div class=\"TTSummary\">A class that represents velocity aiding measurement inputs. Extends AidingMeasurementInput.</div></div>",4555:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Bitmask for each velocity value in the valid flags.</div></div>",4563:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4563\" class=\"NDPrototype NoParameterForm\">Velocity m_velocity</div><div class=\"TTSummary\">The Velocity measurement</div></div>",4564:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4564\" class=\"NDPrototype NoParameterForm\">GeometricUncertainty m_unc</div><div class=\"TTSummary\">The uncertainty of the velocity measurement</div></div>",4566:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4566\" class=\"NDPrototype NoParameterForm\">AidingMeasurementVelocity() : AidingMeasurementInput()</div><div class=\"TTSummary\">Constructs an AidingMeasurementVelocity object with default values</div></div>",4567:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4567\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">AidingMeasurementVelocity(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">PositionVelocityReferenceFrame&nbsp;</td><td></td><td class=\"PName last\">referenceFrame,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">values</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs an AidingMeasurementVelocity object with the specified reference frame from the &lt;MipFieldValues&gt; parameter list returned from the device.</div></div>",4568:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4568\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parseMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">values</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Populates measurement values based on the &lt;MipFieldValues&gt; parameter list.</div></div>",4569:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4569\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> appendMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">values</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div><div class=\"TTSummary\">Appends the velocity measurement info to the provided &lt;MipFieldValues&gt; parameter list.</div></div>",4570:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4570\" class=\"NDPrototype NoParameterForm\">Velocity velocity() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Velocity measurement values.</div></div>",4571:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4571\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> velocity(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Velocity&nbsp;</td><td class=\"PName last\">vel</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Velocity measurement values.</div></div>",4572:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4572\" class=\"NDPrototype NoParameterForm\">GeometricUncertainty uncertainty() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the measurment uncertainty</div></div>",4573:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4573\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> uncertainty(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">GeometricUncertainty&nbsp;</td><td class=\"PName last\">uncertainty</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the measurement uncertainty.</div></div>",4574:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4574\" class=\"NDPrototype NoParameterForm\">PositionVelocityReferenceFrame referenceFrame() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the PositionVelocityReferenceFrame of this velocity measurement.</div></div>",4575:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4575\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> referenceFrame(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">PositionVelocityReferenceFrame&nbsp;</td><td class=\"PName last\">frame</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Set the PositionVelocityReferenceFrame of this measurement.</div></div>",4576:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4576\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> valid(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ValidFlags&nbsp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether the specified value is valid.</div></div>",4577:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4577\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> valid(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ValidFlags&nbsp;</td><td class=\"PName last\">val,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">valid</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the validity of the specified value.</div></div>"});