NDSummary.OnToolTipsLoaded("File:Exceptions.h",{10496:"<div class=\"NDToolTip TSection LC\"><div class=\"TTSummary\">Contains all the MicroStrain custom exceptions that can be thrown in MSCL</div></div>",10497:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10497\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error</div></div></div><div class=\"TTSummary\">The generic MicroStrain exception (base class)</div></div>",10499:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype10499\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> m_description</div><div class=\"TTSummary\">the description of the error to be thrown, default value of &quot;The MSCL has thrown an exception.&quot;</div></div>",10501:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10501\" class=\"NDPrototype NoParameterForm\">Error() : m_description(<span class=\"SHString\">&quot;MSCL has thrown an exception.&quot;</span>)</div><div class=\"TTSummary\">Initializes the Error object with the default description</div></div>",10502:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10502\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">) : m_description(description)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error object with a custom description</div></div>",10503:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10503\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const char</span>* what () <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">overriding the default std::exception what() function, gets the description of the thrown exception</div></div>",10504:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10504\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NotSupported</div></div></div><div class=\"TTSummary\">A command/feature was attempted to be used that was not supported.</div></div>",10506:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10506\" class=\"NDPrototype NoParameterForm\">Error_NotSupported(): Error(<span class=\"SHString\">&quot;This feature is not supported.&quot;</span>)</div><div class=\"TTSummary\">Initializes the Error_NotSupported object with a default description</div></div>",10507:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10507\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_NotSupported(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">) : Error(description)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_NotSupported object with a custom description</div></div>",10508:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10508\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NoData</div></div></div><div class=\"TTSummary\">There is no data available to be accessed</div></div>",10510:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10510\" class=\"NDPrototype NoParameterForm\">Error_NoData(): Error(<span class=\"SHString\">&quot;No data is available.&quot;</span>)</div><div class=\"TTSummary\">Initializes the Error_NoData object with a default description</div></div>",10511:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10511\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_NoData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">): Error(description)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_NoData object with a custom description</div></div>",10512:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10512\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_BadDataType</div></div></div><div class=\"TTSummary\">Data of one type was accessed as another type (simple_any)</div></div>",10514:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10514\" class=\"NDPrototype NoParameterForm\">Error_BadDataType() : Error(<span class=\"SHString\">&quot;Data was accessed using the wrong data type.&quot;</span>)</div><div class=\"TTSummary\">Intializes the Error_BadDataType object with a default description</div></div>",10515:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10515\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_UnknownSampleRate</div></div></div><div class=\"TTSummary\">The sample rate is invalid or unknown for the given device</div></div>",10517:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10517\" class=\"NDPrototype NoParameterForm\">Error_UnknownSampleRate() : Error(<span class=\"SHString\">&quot;Unknown Sample Rate.&quot;</span>)</div><div class=\"TTSummary\">Initializes the Error_UnknownSampleRate object with a default description</div></div>",10518:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10518\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_UnknownSampleRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">) : Error(description)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_UnknownSampleRate object with a custom description</div></div>",10519:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10519\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_Communication</div></div></div><div class=\"TTSummary\">The exception for failing to communicate with a device.</div></div>",10521:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10521\" class=\"NDPrototype NoParameterForm\">Error_Communication() : Error(<span class=\"SHString\">&quot;Failed to communicate with the device.&quot;</span>)</div><div class=\"TTSummary\">Initializes the Error_Communication object.</div></div>",10522:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10522\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_Communication(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">) : Error(description)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_Communication object.</div></div>",10523:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10523\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NodeCommunication</div></div></div><div class=\"TTSummary\">The exception for failing to communicate with a WirelessNode.</div></div>",10525:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype10525\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address of the WirelessNode that failed to communicate.</div></div>",10527:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10527\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_NodeCommunication(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">): Error_Communication(<span class=\"SHString\">&quot;Failed to communicate with the Wireless Node.&quot;</span>), m_nodeAddress(nodeAddress)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_NodeCommunication object.</div></div>",10528:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10528\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_NodeCommunication(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td></td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">): Error_Communication(description), m_nodeAddress(nodeAddress)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_NodeCommunication object.</div></div>",10529:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10529\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> NodeAddress nodeAddress() <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">gets the node address of the WirelessNode that failed to communicate</div></div>",10530:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10530\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_Connection</div></div></div><div class=\"TTSummary\">The generic connection exception.</div></div>",10532:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype10532\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int</span> m_code</div><div class=\"TTSummary\">the exception error code (system error codes)</div></div>",10534:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10534\" class=\"NDPrototype NoParameterForm\">Error_Connection(): Error(<span class=\"SHString\">&quot;Connection error.&quot;</span>), m_code(<span class=\"SHNumber\">-1</span>)</div><div class=\"TTSummary\">Initializes the Error_Connection object, sets the error code to a default of -1</div></div>",10535:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10535\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_Connection(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">code</td></tr></table></td><td class=\"PAfterParameters\">): Error(<span class=\"SHString\">&quot;Connection error.&quot;</span>), m_code(code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_Connection object</div></div>",10536:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10536\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_Connection(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">): Error(description), m_code(<span class=\"SHNumber\">-1</span>)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_Connection object</div></div>",10537:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10537\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_Connection(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">code</td></tr></table></td><td class=\"PAfterParameters\">): Error(description), m_code(code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_Connection object</div></div>",10538:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10538\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const int</span> code() <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">gets the exception error code (system error codes, or -1 by default)</div></div>",10539:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10539\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InvalidSerialPort</div></div></div><div class=\"TTSummary\">There was an error with the specified COM Port.</div></div>",10541:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10541\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_InvalidSerialPort(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">code</td></tr></table></td><td class=\"PAfterParameters\">): Error_Connection(<span class=\"SHString\">&quot;Invalid Com Port.&quot;</span>, code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_InvalidSerialPort object</div></div>",10542:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10542\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InvalidTcpServer</div></div></div><div class=\"TTSummary\">There was an error with the specified TCP/IP Server.</div></div>",10544:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10544\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_InvalidTcpServer(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">code,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">message</td></tr></table></td><td class=\"PAfterParameters\">): Error_Connection(<span class=\"SHString\">&quot;Invalid TCP/IP Server: &quot;</span> + message, code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_InvalidTcpServer object</div></div>",10545:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10545\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InvalidUnixSocket</div></div></div><div class=\"TTSummary\">There was an error with the specified Unix Socket.</div></div>",10547:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10547\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_InvalidUnixSocket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">code,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">message</td></tr></table></td><td class=\"PAfterParameters\">): Error_Connection(<span class=\"SHString\">&quot;Invalid Unix Socket: &quot;</span> + message, code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_InvalidUnixSocket object</div></div>",10548:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10548\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_MipCmdFailed</div></div></div><div class=\"TTSummary\">The Inertial command has failed</div></div>",10550:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype10550\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int</span> m_code</div><div class=\"TTSummary\">the exception error code (NACK error code)</div></div>",10552:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10552\" class=\"NDPrototype NoParameterForm\">Error_MipCmdFailed() : Error(<span class=\"SHString\">&quot;The Inertial command has failed.&quot;</span>), m_code(<span class=\"SHNumber\">-1</span>)</div><div class=\"TTSummary\">Initializes the Error_MipCmdFailed object, sets the error code to a default of -1</div></div>",10553:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10553\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_MipCmdFailed(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">) : Error(description), m_code(<span class=\"SHNumber\">-1</span>)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_MipCmdFailed object, sets the error code to a default of -1</div></div>",10554:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10554\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_MipCmdFailed(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">code</td></tr></table></td><td class=\"PAfterParameters\">): Error(<span class=\"SHString\">&quot;The Inertial command has failed.&quot;</span>), m_code(code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_MipCmdFailed object</div></div>",10555:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10555\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const int</span> code() <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">gets the exception error code</div></div>",10556:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10556\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InvalidConfig</div></div></div><div class=\"TTSummary\">The Configuration is invalid.</div></div>",10558:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype10558\" class=\"NDPrototype NoParameterForm\">ConfigIssues m_issues</div><div class=\"TTSummary\">The ConfigIssues that caused the invalid configuration exception.</div></div>",10560:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10560\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_InvalidConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ConfigIssues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">issues</td></tr></table></td><td class=\"PAfterParameters\">): Error(<span class=\"SHString\">&quot;Invalid Configuration:&quot;</span>), m_issues(issues)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_InvalidConfig object</div></div>",10561:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10561\" class=\"NDPrototype NoParameterForm\">ConfigIssues issues() <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">Gets the ConfigIssues that caused the invalid configuration exception.</div></div>",10562:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10562\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InvalidNodeConfig</div></div></div><div class=\"TTSummary\">The Configuration for a WirelessNode is invalid.</div></div>",10564:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype10564\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address of the WirelessNode that the exception pertains to.</div></div>",10566:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10566\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_InvalidNodeConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ConfigIssues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">issues,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td></td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">) : Error_InvalidConfig(issues), m_nodeAddress(nodeAddress)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_InvalidNodeConfig object</div></div>",10567:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10567\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> NodeAddress nodeAddress() <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">Gets the node address of the Node that this exception pertains to.</div></div>"});