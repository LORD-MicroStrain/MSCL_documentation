NDSummary.OnToolTipsLoaded("File:MicroStrain/MIP/MipChannel.h",{4601:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4601\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipChannel</div></div></div><div class=\"TTSummary\">Represents a single &quot;channel&quot; or data descriptors that can make up an Inertial Device\'s message format</div></div>",4603:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4603\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipChannel(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelField&nbsp;</td><td></td><td class=\"PName last\">channelField,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sampleRate</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipChannel object.</div></div>",4605:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4605\" class=\"NDPrototype NoParameterForm\">MipTypes::ChannelField m_channelField</div><div class=\"TTSummary\">The MipTypes::ChannelField for this channel.</div></div>",4606:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4606\" class=\"NDPrototype NoParameterForm\">SampleRate m_sampleRate</div><div class=\"TTSummary\">The SampleRate of the inertial channel.</div></div>",4608:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4608\" class=\"NDPrototype NoParameterForm\">MipTypes::ChannelField channelField() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the MipTypes::ChannelField for this channel.</div></div>",4609:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4609\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> SampleRate&amp; sampleRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the SampleRate set for this channel.</div></div>",4610:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4610\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> rateDecimation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">sampleRateBase</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the rate decimation that is used to determine the sample rate (sample rate = sampleratebase / rate decimation).</div></div>",4611:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4611\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> fieldDescriptor() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the field descriptor byte of the Inertial Channel.</div></div>",4612:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4612\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> descriptorSet() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the descriptor set byte of the Inertial Channel.</div></div>",4614:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">typedef for a vector of MipChannel objects</div></div>"});