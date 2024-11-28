NDSummary.OnToolTipsLoaded("CClass:BufferWriter",{10106:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10106\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BufferWriter</div></div></div><div class=\"TTSummary\">Class used to interface with a DataBuffer and append data to it</div></div>",10108:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10108\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BufferWriter(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">buffer,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td></td><td class=\"PName last\">size,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">offset</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructor to create a BufferWriter object</div></div>",10110:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype10110\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span>* m_buffer</div><div class=\"TTSummary\">The buffer to write to, at the specific position to start writing data</div></div>",10111:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype10111\" class=\"NDPrototype NoParameterForm\">std::size_t m_size</div><div class=\"TTSummary\">The size available to write</div></div>",10112:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype10112\" class=\"NDPrototype NoParameterForm\">std::size_t* m_writeOffset</div><div class=\"TTSummary\">A pointer to the current position to start writing in the buffer</div></div>",10114:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10114\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span>* buffer()</div><div class=\"TTSummary\">Gets the buffer to write to</div></div>",10115:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10115\" class=\"NDPrototype NoParameterForm\">std::size_t size()</div><div class=\"TTSummary\">Gets the size of the buffer available to write</div></div>",10116:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10116\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> commit(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">numBytesAdded</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Commits a number of bytes that were added to the buffer by moving the current offset.</div></div>"});