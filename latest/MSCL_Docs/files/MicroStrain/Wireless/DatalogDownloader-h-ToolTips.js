NDContentPage.OnToolTipsLoaded({7763:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The types of data that can be transmitted in data packets.</div></div>",7834:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the different trigger types that can cause a datalogging session to be logged to a Wireless Node.</div></div>",8392:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype8392\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessNode</div></div></div><div class=\"TTSummary\">A class representing a MicroStrain wireless node</div></div>",9105:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9105\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeMemory</div></div></div><div class=\"TTSummary\">Provides easy access to the datalogging memory on a WirelessNode.</div></div>",9345:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9345\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">LoggedDataSweep</div></div></div><div class=\"TTSummary\">Represents 1 data sweep that was logged to a WirelessNode.</div></div>",9427:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9427\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ChannelMask</div></div></div><div class=\"TTSummary\">Represents the channel mask (active and inactive channels) for a WirelessNode.</div></div>",9445:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9445\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">CalCoefficients</div></div></div><div class=\"TTSummary\">Represents calibration coefficients that can be applied to a Wireless Node.</div></div>",9798:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9798\" class=\"NDPrototype NoParameterForm\">LoggedDataSweep getNextData()</div><div class=\"TTSummary\">Gets the next LoggedDataSweep that is logged to the Node.</div></div>",9799:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9799\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> metaDataUpdated() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the any of the meta data (sample rate, cal coefficients, etc) has been updated since the last call to getNextData.&nbsp; This will be true for a single LoggedDataSweep (after calling getNextData), signifying that you should interrogate all of the meta data on this DatalogDownloader object again to get updated information which may have changed.</div></div>",9801:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9801\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> startOfSession() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether a new datalogging session has been found (after calling getNextData). This will be true for a single LoggedDataSweep.&nbsp; Note: May be changed whenever metaDataUpdated returns true.</div></div>",9836:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9836\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SampleRate</div></div></div><div class=\"TTSummary\">Represents a MicroStrain sample rate (rate at which data is sampling)</div></div>",10412:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10412\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NotSupported</div></div></div><div class=\"TTSummary\">A command/feature was attempted to be used that was not supported.</div></div>",10416:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10416\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NoData</div></div></div><div class=\"TTSummary\">There is no data available to be accessed</div></div>",10431:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10431\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NodeCommunication</div></div></div><div class=\"TTSummary\">The exception for failing to communicate with a WirelessNode.</div></div>",10438:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10438\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_Connection</div></div></div><div class=\"TTSummary\">The generic connection exception.</div></div>"});