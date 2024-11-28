NDSummary.OnToolTipsLoaded("CClass:ReadBufferSavePoint",{9895:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9895\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ReadBufferSavePoint</div></div></div><div class=\"TTSummary\">Acts as a save point so that bytes can be read out of a DataBuffer and the read point reverted</div></div>",9897:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9897\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ReadBufferSavePoint(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a ReadBufferSavePoint based on the DataBuffer passed in</div></div>",9898:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9898\" class=\"NDPrototype NoParameterForm\">~ReadBufferSavePoint()</div><div class=\"TTSummary\">Destroying a ReadBufferSavePoint object, reverting any uncommited data</div></div>",9900:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9900\" class=\"NDPrototype NoParameterForm\">DataBuffer* m_data</div><div class=\"TTSummary\">The DataBuffer of data to be accessed</div></div>",9901:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9901\" class=\"NDPrototype NoParameterForm\">std::size_t m_savePosition</div><div class=\"TTSummary\">The current save position in the DataBuffer</div></div>",9903:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9903\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> revert()</div><div class=\"TTSummary\">reverts the read position of the DataBuffer back to its saved position</div></div>",9904:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9904\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> commit()</div><div class=\"TTSummary\">commits all the currently read data so that it will not be reverted</div></div>"});