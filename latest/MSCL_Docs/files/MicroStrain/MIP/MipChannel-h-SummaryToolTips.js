NDSummary.OnToolTipsLoaded("File:MicroStrain/MIP/MipChannel.h",{3472:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3472\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipChannel</div></div></div><div class=\"TTSummary\">Represents a single &quot;channel&quot; or data descriptors that can make up an Inertial Device\'s message format</div></div>",3474:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3474\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipChannel(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelField&nbsp;</td><td></td><td class=\"PName last\">channelField,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sampleRate</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipChannel object.</div></div>",3476:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3476\" class=\"NDPrototype NoParameterForm\">MipTypes::ChannelField m_channelField</div><div class=\"TTSummary\">The MipTypes::ChannelField for this channel.</div></div>",3477:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3477\" class=\"NDPrototype NoParameterForm\">SampleRate m_sampleRate</div><div class=\"TTSummary\">The SampleRate of the inertial channel.</div></div>",3479:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3479\" class=\"NDPrototype NoParameterForm\">MipTypes::ChannelField channelField() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the MipTypes::ChannelField for this channel.</div></div>",3480:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3480\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> SampleRate&amp; sampleRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the SampleRate set for this channel.</div></div>",3481:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3481\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> rateDecimation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">sampleRateBase</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the rate decimation that is used to determine the sample rate (sample rate = sampleratebase / rate decimation).</div></div>",3482:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3482\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> fieldDescriptor() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the field descriptor byte of the Inertial Channel.</div></div>",3483:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3483\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> descriptorSet() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the descriptor set byte of the Inertial Channel.</div></div>",3485:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">typedef for a vector of MipChannel objects</div></div>"});