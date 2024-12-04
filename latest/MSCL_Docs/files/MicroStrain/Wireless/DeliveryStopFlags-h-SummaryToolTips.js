NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/DeliveryStopFlags.h",{9317:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9317\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DeliveryStopFlags</div></div></div><div class=\"TTSummary\">The delivery stop flags indicate which stops on the pipeline act on the application data</div></div>",9319:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9319\" class=\"NDPrototype NoParameterForm\">DeliveryStopFlags()</div><div class=\"TTSummary\">Initializes a DeliveryStopFlags object</div></div>",9320:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9320\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">DeliveryStopFlags(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">pc,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">appBoard,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">linkBoard,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">baseStation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes a DeliveryStopFlags object given specific values</div></div>",9322:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9322\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> pc: <span class=\"SHNumber\">1</span></div><div class=\"TTSummary\">A stop flag representing the pc</div></div>",9323:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9323\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> appBoard: <span class=\"SHNumber\">1</span></div><div class=\"TTSummary\">A stop flag representing the appBoard</div></div>",9324:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9324\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> linkBoard: <span class=\"SHNumber\">1</span></div><div class=\"TTSummary\">A stop flag representing the linkBoard</div></div>",9325:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9325\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> baseStation: <span class=\"SHNumber\">1</span></div><div class=\"TTSummary\">A stop flag representing the baseStation</div></div>",9327:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Checks that two DeliveryStopFlags objects are equal</div></div>",9328:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Checks that two DeliveryStopFlags objects are not equal</div></div>",9330:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9330\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> compare(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">DeliveryStopFlags&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">src</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks that two DeliveryStopFlags are identical</div></div>",9331:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9331\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> DeliveryStopFlags fromInvertedByte(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">dsf</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets all the stop flags based on the inverted (ASPP v1) byte value passed in</div></div>",9332:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9332\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> DeliveryStopFlags fromByte(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">dsf</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets all the stop flags based on the byte value passed in</div></div>",9333:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9333\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> toInvertedByte() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the inverted (ASPP v1) delivery stop flag byte value based on the current stop flags set</div></div>",9334:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9334\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> toByte() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the delivery stop flag byte value based on the current stop flags set</div></div>"});