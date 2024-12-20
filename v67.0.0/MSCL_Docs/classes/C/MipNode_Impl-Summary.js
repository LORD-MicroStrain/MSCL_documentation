NDFramePage.OnPageTitleLoaded("CClass:MipNode_Impl","MipNode_Impl");NDSummary.OnSummaryLoaded("CClass:MipNode_Impl",[["C/C++","C"]],[["Classes","Class"],["Constants","Constant"],["Functions","Function"],["Groups","Group"],["Variables","Variable"]],[[3224,0,0,"MipNode_Impl"],[3225,0,3,"Constants","Constants"],[3226,0,1,"COMMANDS_DEFAULT_TIMEOUT","COMMANDS_DEFAULT_TIMEOUT"],[3227,0,3,"Functions","Functions"],[3228,0,2,"MipNode_Impl","MipNode_Impl"],[3229,0,2,"~InertialNode","~InertialNode"],[3230,0,3,"Variables","Variables"],[3231,0,4,"m_connection","m_connection"],[3232,0,4,"m_packetCollector","m_packetCollector"],[3233,0,4,"m_responseCollector","m_responseCollector"],[3234,0,4,"m_rawBytePacketCollector","m_rawBytePacketCollector"],[3235,0,4,"m_parser","m_parser"],[3236,0,4,"m_commandsTimeout","m_commandsTimeout"],[3237,0,4,"m_features","m_features"],[3238,0,4,"m_sensorRateBase","m_sensorRateBase"],[3239,0,4,"m_gnssRateBase","m_gnssRateBase"],[3240,0,4,"m_sensorRateBase","m_sensorRateBase(2)"],[3241,0,4,"m_lastCommTime","m_lastCommTime"],[3242,0,4,"m_lastDeviceState","m_lastDeviceState"],[3243,0,3,"Functions","Functions(2)"],[3244,0,2,"parseData","parseData"],[3245,0,2,"info","info"],[3246,0,2,"onDataPacketAdded","onDataPacketAdded"],[3247,0,2,"buildMipCommandBytes","buildMipCommandBytes"],[3248,0,2,"doCommand","doCommand"],[3249,0,2,"features","features"],[3250,0,2,"connection","connection"],[3251,0,2,"lastCommunicationTime","lastCommunicationTime"],[3252,0,2,"lastDeviceState","lastDeviceState"],[3253,0,2,"setLastDeviceState","setLastDeviceState"],[3254,0,2,"resetNodeInfo","resetNodeInfo"],[3255,0,2,"firmwareVersion","firmwareVersion"],[3256,0,2,"modelName","modelName"],[3257,0,2,"modelNumber","modelNumber"],[3258,0,2,"serialNumber","serialNumber"],[3259,0,2,"lotNumber","lotNumber"],[3260,0,2,"deviceOptions","deviceOptions"],[3261,0,2,"supportedSampleRates","supportedSampleRates"],[3262,0,2,"getDataPackets","getDataPackets"],[3263,0,2,"getRawBytePackets","getRawBytePackets"],[3264,0,2,"totalPackets","totalPackets"],[3265,0,2,"timeout","timeout"],[3266,0,2,"timeout","timeout(2)"],[3267,0,2,"getDeviceInfo","getDeviceInfo"],[3268,0,2,"getGnssReceiverInfo","getGnssReceiverInfo"],[3269,0,2,"getSupportedSensorRanges","getSupportedSensorRanges"],[3270,0,2,"getDescriptorSets","getDescriptorSets"],[3271,0,2,"getRequiredParameterDefaults","getRequiredParameterDefaults"],[3272,0,2,"getRequiredParameterDefaults","getRequiredParameterDefaults(2)"],[3273,0,2,"getReservedWriteValues","getReservedWriteValues"],[3274,0,2,"getReservedWriteValues","getReservedWriteValues(2)"],[3275,0,2,"getConfigCommandBytes","getConfigCommandBytes"],[3276,0,2,"getEventInfo","getEventInfo"],[3277,0,2,"sendCommandBytes","sendCommandBytes"],[3278,0,2,"sendCommandBytes","sendCommandBytes(2)"],[3279,0,2,"ping","ping"],[3280,0,2,"setToIdle","setToIdle"],[3281,0,2,"cyclePower","cyclePower"],[3282,0,2,"resume","resume"],[3283,0,2,"saveSettingsAsStartup","saveSettingsAsStartup"],[3284,0,2,"loadStartupSettings","loadStartupSettings"],[3285,0,2,"loadFactoryDefaultSettings","loadFactoryDefaultSettings"],[3286,0,2,"pollData","pollData"],[3287,0,2,"getDataRateBase","getDataRateBase"],[3288,0,2,"getMessageFormat","getMessageFormat"],[3289,0,2,"setMessageFormat","setMessageFormat"],[3290,0,2,"saveMessageFormat","saveMessageFormat"],[3291,0,2,"getInterfaceControl","getInterfaceControl"],[3292,0,2,"setInterfaceControl","setInterfaceControl"],[3293,0,2,"setInterfaceControl","setInterfaceControl(2)"],[3294,0,2,"getCommunicationMode","getCommunicationMode"],[3295,0,2,"setCommunicationMode","setCommunicationMode"],[3296,0,2,"isDataStreamEnabled","isDataStreamEnabled"],[3297,0,2,"enableDataStream","enableDataStream"],[3298,0,2,"resetFilter","resetFilter"],[3299,0,2,"getAutoInitialization","getAutoInitialization"],[3300,0,2,"setAutoInitialization","setAutoInitialization"],[3301,0,2,"getAltitudeAid","getAltitudeAid"],[3302,0,2,"setAltitudeAid","setAltitudeAid"],[3303,0,2,"getPitchRollAid","getPitchRollAid"],[3304,0,2,"setPitchRollAid","setPitchRollAid"],[3305,0,2,"setVelocityZUPT","setVelocityZUPT"],[3306,0,2,"tareOrientation","tareOrientation"],[3307,0,2,"getVelocityZUPT","getVelocityZUPT"],[3308,0,2,"setAngularRateZUPT","setAngularRateZUPT"],[3309,0,2,"getAngularRateZUPT","getAngularRateZUPT"],[3310,0,2,"cmdedVelZUPT","cmdedVelZUPT"],[3311,0,2,"cmdedAngRateZUPT","cmdedAngRateZUPT"],[3312,0,2,"setInitialAttitude","setInitialAttitude"],[3313,0,2,"setInitialHeading","setInitialHeading"],[3314,0,2,"getInitialFilterConfiguration","getInitialFilterConfiguration"],[3315,0,2,"setInitialFilterConfiguration","setInitialFilterConfiguration"],[3316,0,2,"getSensorToVehicleRotation","getSensorToVehicleRotation"],[3317,0,2,"setSensorToVehicleRotation","setSensorToVehicleRotation"],[3318,0,2,"getSensorToVehicleOffset","getSensorToVehicleOffset"],[3319,0,2,"setSensorToVehicleRotation","setSensorToVehicleRotation(2)"],[3320,0,2,"getAntennaOffset","getAntennaOffset"],[3321,0,2,"setAntennaOffset","setAntennaOffset"],[3322,0,2,"getGNSSAssistedFixControl","getGNSSAssistedFixControl"],[3323,0,2,"setGNSSAssistedFixControl","setGNSSAssistedFixControl"],[3324,0,2,"getGNSSAssistTimeUpdate","getGNSSAssistTimeUpdate"],[3325,0,2,"setGNSSAssistTimeUpdate","setGNSSAssistTimeUpdate"],[3326,0,2,"getGPSTimeUpdateWeeks","getGPSTimeUpdateWeeks"],[3327,0,2,"getGPSTimeUpdateSeconds","getGPSTimeUpdateSeconds"],[3328,0,2,"setGPSTimeUpdate","setGPSTimeUpdate"],[3329,0,2,"setConstellationSettings","setConstellationSettings"],[3330,0,2,"getConstellationSettings","getConstellationSettings"],[3331,0,2,"setSBASSettings","setSBASSettings"],[3332,0,2,"getSBASSettings","getSBASSettings"],[3333,0,2,"setAccelerometerBias","setAccelerometerBias"],[3334,0,2,"getAccelerometerBias","getAccelerometerBias"],[3335,0,2,"setGyroBias","setGyroBias"],[3336,0,2,"getGyroBias","getGyroBias"],[3337,0,2,"captureGyroBias","captureGyroBias"],[3338,0,2,"findMagnetometerCaptureAutoCalibration","findMagnetometerCaptureAutoCalibration"],[3339,0,2,"saveMagnetometerCaptureAutoCalibration","saveMagnetometerCaptureAutoCalibration"],[3340,0,2,"setMagnetometerSoftIronMatrix","setMagnetometerSoftIronMatrix"],[3341,0,2,"getMagnetometerSoftIronMatrix","getMagnetometerSoftIronMatrix"],[3342,0,2,"setMagnetometerHardIronOffset","setMagnetometerHardIronOffset"],[3343,0,2,"setMagnetometerHardIronOffset","setMagnetometerHardIronOffset(2)"],[3344,0,2,"setConingAndScullingEnable","setConingAndScullingEnable"],[3345,0,2,"getConingAndScullingEnable","getConingAndScullingEnable"],[3346,0,2,"setUARTBaudRate","setUARTBaudRate"],[3347,0,2,"setUARTBaudRate","setUARTBaudRate(2)"],[3348,0,2,"getUARTBaudRate","getUARTBaudRate"],[3349,0,2,"setLowPassFilterSettings","setLowPassFilterSettings"],[3350,0,2,"getLowPassFilterSettings","getLowPassFilterSettings"],[3351,0,2,"setComplementaryFilterSettings","setComplementaryFilterSettings"],[3352,0,2,"getComplementaryFilterSettings","getComplementaryFilterSettings"],[3353,0,2,"getBasicDeviceStatus","getBasicDeviceStatus"],[3354,0,2,"getDiagnosticDeviceStatus","getDiagnosticDeviceStatus"],[3355,0,2,"sendRawRTCM_2_3Message","sendRawRTCM_2_3Message"],[3356,0,2,"setVehicleDynamicsMode","setVehicleDynamicsMode"],[3357,0,2,"getVehicleDynamicsMode","getVehicleDynamicsMode"],[3358,0,2,"setEstimationControlFlags","setEstimationControlFlags"],[3359,0,2,"getEstimationControlFlags","getEstimationControlFlags"],[3360,0,2,"setInclinationSource","setInclinationSource"],[3361,0,2,"getInclinationSource","getInclinationSource"],[3362,0,2,"setDeclinationSource","setDeclinationSource"],[3363,0,2,"getDeclinationSource","getDeclinationSource"],[3364,0,2,"setMagneticFieldMagnitudeSource","setMagneticFieldMagnitudeSource"],[3365,0,2,"getMagneticFieldMagnitudeSource","getMagneticFieldMagnitudeSource"],[3366,0,2,"setEstimationControlFlags","setEstimationControlFlags(2)"],[3367,0,2,"getEstimationControlFlags","getEstimationControlFlags(2)"],[3368,0,2,"sendExternalGNSSUpdate","sendExternalGNSSUpdate"],[3369,0,2,"setHeadingUpdateControl","setHeadingUpdateControl"],[3370,0,2,"getHeadingUpdateControl","getHeadingUpdateControl"],[3371,0,2,"setAdaptiveMeasurement","setAdaptiveMeasurement"],[3372,0,2,"getAdaptiveMeasurement","getAdaptiveMeasurement"],[3373,0,2,"setSignalConditioningSettings","setSignalConditioningSettings"],[3374,0,2,"getSignalConditioningSettings","getSignalConditioningSettings"],[3375,0,2,"setGeometricVectors","setGeometricVectors"],[3376,0,2,"getGeometricVectors","getGeometricVectors"],[3377,0,2,"setUint8s","setUint8s"],[3378,0,2,"getUint8s","getUint8s"],[3379,0,2,"getUint8s","getUint8s(2)"],[3380,0,2,"setUint16s","setUint16s"],[3381,0,2,"getUint16s","getUint16s"],[3382,0,2,"getUint16s","getUint16s(2)"],[3383,0,2,"setFloats","setFloats"],[3384,0,2,"getFloats","getFloats"],[3385,0,2,"setMatrix3x3s","setMatrix3x3s"],[3386,0,2,"getMatrix3x3s","getMatrix3x3s"],[3387,0,2,"setFixedReferencePosition","setFixedReferencePosition"],[3388,0,2,"FixedReferencePositionData","FixedReferencePositionData"],[3389,0,2,"sendExternalHeadingUpdate","sendExternalHeadingUpdate"],[3390,0,2,"sendExternalHeadingUpdate","sendExternalHeadingUpdate(2)"],[3391,0,2,"setDeviceTime","setDeviceTime"],[3392,0,2,"setDeviceTime","setDeviceTime(2)"],[3393,0,2,"getDeviceStatusFlags","getDeviceStatusFlags"],[3394,0,2,"getActivationCode","getActivationCode"],[3395,0,2,"get","get"],[3396,0,2,"get","get(2)"],[3397,0,2,"get_RawResponseData","get_RawResponseData"],[3398,0,2,"set","set"],[3399,0,2,"saveAsStartup","saveAsStartup"],[3400,0,2,"saveAsStartup","saveAsStartup(2)"],[3401,0,2,"loadStartup","loadStartup"],[3402,0,2,"loadStartup","loadStartup(2)"],[3403,0,2,"loadDefault","loadDefault"],[3404,0,2,"loadDefault","loadDefault(2)"],[3405,0,2,"run","run"],[3406,0,2,"run","run(2)"],[3407,0,2,"SendCommand","SendCommand"],[3408,0,2,"processMipCommandBytes","processMipCommandBytes"]]);