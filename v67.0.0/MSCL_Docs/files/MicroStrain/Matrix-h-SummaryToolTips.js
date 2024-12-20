NDSummary.OnToolTipsLoaded("File:MicroStrain/Matrix.h",{9787:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9787\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Matrix</div></div></div><div class=\"TTSummary\">Represents a Matrix of values (varying size)</div></div>",9789:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9789\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Matrix(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">rows,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">columns,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ValueType&nbsp;</td><td></td><td class=\"PName last\">storedAs,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ByteStream&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Matrix object given its size and data</div></div>",9791:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9791\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_numRows</div><div class=\"TTSummary\">The number of rows in the Matrix</div></div>",9792:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9792\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_numColumns</div><div class=\"TTSummary\">The number of columns in the Matrix</div></div>",9793:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9793\" class=\"NDPrototype NoParameterForm\">ValueType m_valuesType</div><div class=\"TTSummary\">How each value within the Matrix is stored</div></div>",9794:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\">The size of each values\' type within the Matrix</div></div>",9795:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9795\" class=\"NDPrototype NoParameterForm\">ByteStream m_data</div><div class=\"TTSummary\">A vector of vectors making the matrix that contains all the data values</div></div>",9797:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9797\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> getBytePos(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">row,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">col</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the byte position to read in data from the m_data ByteStream</div></div>",9798:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9798\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> checkIndex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">row,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">col</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks that the given row and column indices (0-based) are within range, throwing an exception if not</div></div>",9799:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9799\" class=\"NDPrototype NoParameterForm\">ValueType valuesType() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets how each value within the Matrix is stored</div></div>",9800:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9800\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> rows() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of rows in the Matrix</div></div>",9801:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9801\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> columns() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of columns in the Matrix</div></div>",9802:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9802\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">double</span> as_doubleAt(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">row,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">column</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the value stored at the given row and column (0-based), as an 8-byte double</div></div>",9803:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9803\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> as_floatAt(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">row,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">column</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the value stored at the given row and column (0-based), as a 4-byte float</div></div>",9804:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9804\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> as_uint16At(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">row,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">column</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the value stored at the given row and column (0-based), as a 2-byte unsigned integer</div></div>",9805:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9805\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint8</span> as_uint8At(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">row,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">column</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the value stored at the given row and column (0-based), as a 1-byte uint8</div></div>",9806:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9806\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> str() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates a string from the Matrix</div></div>"});