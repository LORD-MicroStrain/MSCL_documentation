NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Configuration/FatigueOptions.h",{6605:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6605\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SnCurveSegment</div></div></div><div class=\"TTSummary\">Represents a single segment of an SN-Curve.</div></div>",6607:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6607\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">SnCurveSegment(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">m,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">loga</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an SnCurveSegment.</div></div>",6609:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6609\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_m</div><div class=\"TTSummary\">The m value of the segment.</div></div>",6610:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6610\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_loga</div><div class=\"TTSummary\">The logA value of the segment.</div></div>",6612:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6612\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the m value of the segment.</div></div>",6613:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6613\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> m(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the m value of the segment.</div></div>",6614:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6614\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> logA() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the logA value of the segment.</div></div>",6615:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6615\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> logA(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the logA value of the segment.</div></div>",6617:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a map of angle IDs (uint8) to damage angles (float).</div></div>",6618:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a map of segment IDs (uint8) to SnCurveSegment objects.</div></div>",6619:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6619\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FatigueOptions</div></div></div><div class=\"TTSummary\">Contains all of the fatigue options that can be configured for a WirelessNode.</div></div>",6621:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6621\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_youngsModulus</div><div class=\"TTSummary\">The Young\'s Modulus value.</div></div>",6622:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6622\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_poissonsRatio</div><div class=\"TTSummary\">The Poisson\'s Ratio value.</div></div>",6623:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6623\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_peakValleyThreshold</div><div class=\"TTSummary\">The peak/valley threshold.</div></div>",6624:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6624\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_debugMode</div><div class=\"TTSummary\">Whether raw data is enabled or disabled.</div></div>",6625:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6625\" class=\"NDPrototype NoParameterForm\">DamageAngles m_damageAngles</div><div class=\"TTSummary\">The DamageAngles.</div></div>",6626:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6626\" class=\"NDPrototype NoParameterForm\">SnCurveSegments m_snCurveSegments</div><div class=\"TTSummary\">The SnCurveSegments.</div></div>",6627:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6627\" class=\"NDPrototype NoParameterForm\">WirelessTypes::FatigueMode m_fatigueMode</div><div class=\"TTSummary\">Whether distributed angle mode is enabled or disabled.</div></div>",6628:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6628\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> m_distMode_numAngles</div></div>",6629:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6629\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_distMode_lowerBound</div><div class=\"TTSummary\">The lower bound angle when using the distributed angle mode.</div></div>",6630:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6630\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_distMode_upperBound</div><div class=\"TTSummary\">The upper bound angle when using the distributed angle mode.</div></div>",6631:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6631\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_histogramEnable</div><div class=\"TTSummary\">Whether histograms are enabled or disabled.</div></div>",6633:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6633\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> youngsModulus() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Young\'s Modulus set in this options object.</div></div>",6634:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6634\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> youngsModulus(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Young\'s Modulus in this options object.</div></div>",6635:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6635\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> poissonsRatio() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Poisson\'s Ration set in this options object.</div></div>",6636:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6636\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> poissonsRatio(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Poisson\'s Ratio in this options object.</div></div>",6637:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6637\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> peakValleyThreshold() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Peak/Valley Threshold set in this options object.</div></div>",6638:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6638\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> peakValleyThreshold(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Peak/Valley Threshold in this options object.</div></div>",6639:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6639\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> debugMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the debug mode flag set in this options object.&nbsp; This determines whether raw angle data that builds the Histograms will be sent when sampling.</div></div>",6640:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6640\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> debugMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the debug mode flag in this options object.&nbsp; This determines whether raw angle data that builds the Histograms will be sent when sampling.</div></div>",6641:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6641\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> damageAngle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">angleId</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the damage angle set in this options object, for the given angle id (0-based).</div></div>",6642:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6642\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> DamageAngles&amp; damageAngles() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the DamageAngles container set in this options object.</div></div>",6643:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6643\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> damageAngle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">angleId,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">angle</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the damage angle in this options object, for the given angle id (0-based).&nbsp; The angle will be automatically converted to between 0 and 360 if it is out of range.</div></div>",6644:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6644\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> SnCurveSegment&amp; snCurveSegment(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">segmentId</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the SnCurveSegment set in this options object, for the given segment id (0-based).</div></div>",6645:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6645\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> SnCurveSegments&amp; snCurveSegments() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the SnCurveSegments container set in this options object.</div></div>",6646:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6646\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> snCurveSegment(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">segmentId,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SnCurveSegment&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">segment</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the SnCurveSegment in this options object, for the given segment id (0-based).</div></div>",6647:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6647\" class=\"NDPrototype NoParameterForm\">WirelessTypes::FatigueMode fatigueMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">The WirelessTypes::FatigueMode that is set in this options object.</div></div>",6648:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Sets whether distributed angle mode is enabled or disabled in this options object.&nbsp; Distributed Angle Mode allows the user to enable an even distribution of 4-16 angles.&nbsp; When in this mode, the standard damageAngles will not be used by the Node.</div></div>",6649:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6649\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> distributedAngleMode_numAngles() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current number of angles to use for distributed angle mode in this options object.&nbsp; Note: The Node will only use this if the fatigueMode is set to distributed angle mode.</div></div>",6650:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6650\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> distributedAngleMode_numAngles(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">numAngles</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the current number of angles to use for distributed angle mode in this options object.&nbsp; Note: Note: The Node will only use this if the fatigueMode is set to distributed angle mode.</div></div>",6651:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6651\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> distributedAngleMode_lowerBound() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current lower bound angle (in degrees) to use for distributed angle mode in this options object.&nbsp; Note: Note: The Node will only use this if the fatigueMode is set to distributed angle mode.</div></div>",6652:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6652\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> distributedAngleMode_lowerBound(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">angle</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the current lower bound angle to use for distributed angle mode in this options object.&nbsp; Note: Note: The Node will only use this if the fatigueMode is set to distributed angle mode.&nbsp; Note: The lower bound and upper bound angles must be at least 1 degree.</div></div>",6653:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6653\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> distributedAngleMode_upperBound() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current upper bound angle (in degrees) to use for distributed angle mode in this options object.&nbsp; Note: Note: The Node will only use this if the fatigueMode is set to distributed angle mode.</div></div>",6654:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6654\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> distributedAngleMode_upperBound(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">angle</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the current upper bound angle to use for distributed angle mode in this options object.&nbsp; Note: Note: The Node will only use this if the fatigueMode is set to distributed angle mode.&nbsp; Note: The lower bound and upper bound angles must be at least 1 degree.</div></div>",6655:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6655\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> histogramEnable() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether sending Histograms is enabled or disabled, in this options object.</div></div>",6656:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6656\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> histogramEnable(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets whether sending Histograms is enabled or disabled, in this options object.</div></div>"});