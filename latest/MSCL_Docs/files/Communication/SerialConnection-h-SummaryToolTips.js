NDSummary.OnToolTipsLoaded("File:Communication/SerialConnection.h",{86:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype86\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SerialConnection</div></div></div><div class=\"TTSummary\">A Connection_Impl derived class that represents a serial connection.</div></div>",88:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype88\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> SerialConnection(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">port,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">baudRate</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes the SerialConnection object.</div></div>",89:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype89\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> ~SerialConnection()</div><div class=\"TTSummary\">Destroys the SerialConnection object</div></div>",91:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype91\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> m_port</div><div class=\"TTSummary\">The string name of the port (ex. &quot;COM26&quot;)</div></div>",92:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype92\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_baudRate</div><div class=\"TTSummary\">The baud rate of the connection</div></div>",94:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype94\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> description()</div><div class=\"TTSummary\">Gets a description of the connection as a string</div></div>",95:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype95\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> port() <span class=\"SHKeyword\">const override</span></div><div class=\"TTSummary\">Gets a name of the connection port</div></div>",96:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype96\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> updateBaudRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">baudRate</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Updates the serial connection baud rate.&nbsp; Important: The connection to the port will be closed and re-opened at the new baud rate.</div></div>",97:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype97\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> establishConnection()</div><div class=\"TTSummary\">Initializes and opens the current connection</div></div>"});