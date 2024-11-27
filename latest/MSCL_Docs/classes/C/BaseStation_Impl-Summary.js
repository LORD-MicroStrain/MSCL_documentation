NDFramePage.OnPageTitleLoaded("CClass:BaseStation_Impl","BaseStation_Impl");NDSummary.OnSummaryLoaded("CClass:BaseStation_Impl",[["C/C++","C"]],[["Classes","Class"],["Functions","Function"],["Groups","Group"],["Variables","Variable"]],[[9382,0,0,"BaseStation_Impl"],[9383,0,2,"Functions","Functions"],[9384,0,1,"BaseStation_Impl","BaseStation_Impl"],[9385,0,1,"~BaseStation_Impl","~BaseStation_Impl"],[9386,0,2,"Variables","Variables"],[9387,0,3,"m_connection","m_connection"],[9388,0,3,"m_packetCollector","m_packetCollector"],[9389,0,3,"m_responseCollector","m_responseCollector"],[9390,0,3,"m_rawBytePacketCollector","m_rawBytePacketCollector"],[9391,0,3,"m_parser","m_parser"],[9392,0,3,"m_baseCommandsTimeout","m_baseCommandsTimeout"],[9393,0,3,"m_nodeCommandsTimeout","m_nodeCommandsTimeout"],[9394,0,3,"m_frequency","m_frequency"],[9395,0,3,"m_commProtocol","m_commProtocol"],[9396,0,3,"m_eeprom","m_eeprom"],[9397,0,3,"m_eepromHelper","m_eepromHelper"],[9398,0,3,"m_features","m_features"],[9399,0,3,"m_protocolMutex","m_protocolMutex"],[9400,0,3,"m_protocol_lxrs","m_protocol_lxrs"],[9401,0,3,"m_protocol_lxrsPlus","m_protocol_lxrsPlus"],[9402,0,3,"m_lastCommTime","m_lastCommTime"],[9403,0,2,"Functions","Functions(2)"],[9404,0,1,"getTimeForBeacon","getTimeForBeacon"],[9405,0,1,"parseData","parseData"],[9406,0,1,"determineProtocols","determineProtocols"],[9407,0,1,"eeHelper","eeHelper"],[9408,0,1,"doCommand","doCommand"],[9409,0,1,"connection","connection"],[9410,0,1,"features","features"],[9411,0,1,"protocol","protocol"],[9412,0,1,"lastCommunicationTime","lastCommunicationTime"],[9413,0,1,"read","read"],[9414,0,1,"write","write"],[9415,0,1,"setReadWriteRetries","setReadWriteRetries"],[9416,0,1,"getReadWriteRetries","getReadWriteRetries"],[9417,0,1,"useEepromCache","useEepromCache"],[9418,0,1,"clearEepromCache","clearEepromCache"],[9419,0,1,"frequency","frequency"],[9420,0,1,"communicationProtocol","communicationProtocol"],[9421,0,1,"regionCode","regionCode"],[9422,0,1,"firmwareVersion","firmwareVersion"],[9423,0,1,"model","model"],[9424,0,1,"serial","serial"],[9425,0,1,"microcontroller","microcontroller"],[9426,0,1,"getData","getData"],[9427,0,1,"getRawBytePackets","getRawBytePackets"],[9428,0,1,"totalData","totalData"],[9429,0,1,"getNodeDiscoveries","getNodeDiscoveries"],[9430,0,1,"timeout","timeout"],[9431,0,1,"timeout","timeout(2)"],[9432,0,1,"ping","ping"],[9433,0,1,"readEeprom","readEeprom"],[9434,0,1,"readEeprom","readEeprom(2)"],[9435,0,1,"writeEeprom","writeEeprom"],[9436,0,1,"writeEeprom","writeEeprom(2)"],[9437,0,1,"enableBeacon","enableBeacon"],[9438,0,1,"enableBeacon","enableBeacon(2)"],[9439,0,1,"disableBeacon","disableBeacon"],[9440,0,1,"beaconStatus","beaconStatus"],[9441,0,1,"startRfSweepMode","startRfSweepMode"],[9442,0,1,"startRfSweepMode","startRfSweepMode(2)"],[9443,0,1,"cyclePower","cyclePower"],[9444,0,1,"resetRadio","resetRadio"],[9445,0,1,"changeFrequency","changeFrequency"],[9446,0,1,"verifyConfig","verifyConfig"],[9447,0,1,"applyConfig","applyConfig"],[9448,0,1,"getTransmitPower","getTransmitPower"],[9449,0,1,"getButtonLongPress","getButtonLongPress"],[9450,0,1,"getButtonShortPress","getButtonShortPress"],[9451,0,1,"getAnalogPairingEnabled","getAnalogPairingEnabled"],[9452,0,1,"getAnalogTimeoutTime","getAnalogTimeoutTime"],[9453,0,1,"getAnalogTimeoutVoltage","getAnalogTimeoutVoltage"],[9454,0,1,"getAnalogExceedanceEnabled","getAnalogExceedanceEnabled"],[9455,0,1,"getAnalogPair","getAnalogPair"],[9456,0,1,"doBaseCommand","doBaseCommand"],[9457,0,1,"doNodeCommand","doNodeCommand"],[9458,0,1,"protocol_ping_v1","protocol_ping_v1"],[9459,0,1,"protocol_ping_v2","protocol_ping_v2"],[9460,0,1,"protocol_hardReset_v2","protocol_hardReset_v2"],[9461,0,1,"protocol_softReset_v2","protocol_softReset_v2"],[9462,0,1,"protocol_read_v1","protocol_read_v1"],[9463,0,1,"protocol_read_v2","protocol_read_v2"],[9464,0,1,"protocol_write_v1","protocol_write_v1"],[9465,0,1,"protocol_write_v2","protocol_write_v2"],[9466,0,1,"protocol_enableBeacon_v1","protocol_enableBeacon_v1"],[9467,0,1,"protocol_enableBeacon_v2","protocol_enableBeacon_v2"],[9468,0,1,"protocol_beaconStatus_v1","protocol_beaconStatus_v1"],[9469,0,1,"protocol_startRfSweepMode_v1","protocol_startRfSweepMode_v1"],[9470,0,1,"protocol_node_pageDownload_v1","protocol_node_pageDownload_v1"],[9471,0,1,"protocol_node_datalogInfo_v1","protocol_node_datalogInfo_v1"],[9472,0,1,"protocol_node_getDatalogData_v1","protocol_node_getDatalogData_v1"],[9473,0,1,"protocol_node_longPing_v1","protocol_node_longPing_v1"],[9474,0,1,"protocol_node_hardReset_v2","protocol_node_hardReset_v2"],[9475,0,1,"protocol_node_softReset_v2","protocol_node_softReset_v2"],[9476,0,1,"protocol_node_sleep_v1","protocol_node_sleep_v1"],[9477,0,1,"protocol_node_sleep_v2","protocol_node_sleep_v2"],[9478,0,1,"protocol_node_setToIdle_v1","protocol_node_setToIdle_v1"],[9479,0,1,"protocol_node_setToIdle_v2","protocol_node_setToIdle_v2"],[9480,0,1,"protocol_node_readEeprom_v1","protocol_node_readEeprom_v1"],[9481,0,1,"protocol_node_readEeprom_v2","protocol_node_readEeprom_v2"],[9482,0,1,"protocol_node_writeEeprom_v1","protocol_node_writeEeprom_v1"],[9483,0,1,"protocol_node_writeEeprom_v2","protocol_node_writeEeprom_v2"],[9484,0,1,"protocol_node_autoBalance_v1","protocol_node_autoBalance_v1"],[9485,0,1,"protocol_node_autoBalance_v2","protocol_node_autoBalance_v2"],[9486,0,1,"protocol_node_autocal_shm_v1","protocol_node_autocal_shm_v1"],[9487,0,1,"protocol_node_autocal_shm201_v1","protocol_node_autocal_shm201_v1"],[9488,0,1,"protocol_node_autoshuntcal_v1","protocol_node_autoshuntcal_v1"],[9489,0,1,"protocol_node_getDiagnosticInfo_v1","protocol_node_getDiagnosticInfo_v1"],[9490,0,1,"protocol_node_erase_v1","protocol_node_erase_v1"],[9491,0,1,"protocol_node_erase_v2","protocol_node_erase_v2"],[9492,0,1,"protocol_node_startSync_v1","protocol_node_startSync_v1"],[9493,0,1,"protocol_node_startNonSync_v1","protocol_node_startNonSync_v1"],[9494,0,1,"protocol_node_startNonSync_v2","protocol_node_startNonSync_v2"],[9495,0,1,"protocol_node_batchEepromRead_v1","protocol_node_batchEepromRead_v1"],[9496,0,1,"protocol_node_testCommProtocol","protocol_node_testCommProtocol"],[9497,0,1,"protocol_node_poll","protocol_node_poll"],[9498,0,1,"node_ping","node_ping"],[9499,0,1,"node_hardReset","node_hardReset"],[9500,0,1,"node_softReset","node_softReset"],[9501,0,1,"node_sleep","node_sleep"],[9502,0,1,"node_setToIdle","node_setToIdle"],[9503,0,1,"node_readEeprom","node_readEeprom"],[9504,0,1,"node_writeEeprom","node_writeEeprom"],[9505,0,1,"node_pageDownload","node_pageDownload"],[9506,0,1,"node_batchEepromRead","node_batchEepromRead"],[9507,0,1,"node_getDatalogSessionInfo","node_getDatalogSessionInfo"],[9508,0,1,"node_getDatalogData","node_getDatalogData"],[9509,0,1,"node_erase","node_erase"],[9510,0,1,"node_startSyncSampling","node_startSyncSampling"],[9511,0,1,"node_startNonSyncSampling","node_startNonSyncSampling"],[9512,0,1,"node_armForDatalogging","node_armForDatalogging"],[9513,0,1,"node_triggerArmedDatalogging","node_triggerArmedDatalogging"],[9514,0,1,"node_autoBalance","node_autoBalance"],[9515,0,1,"node_autocal_shm","node_autocal_shm"],[9516,0,1,"node_autocal_shm201","node_autocal_shm201"],[9517,0,1,"node_autoShuntCal","node_autoShuntCal"],[9518,0,1,"node_readSingleSensor","node_readSingleSensor"],[9519,0,1,"node_getDiagnosticInfo","node_getDiagnosticInfo"],[9520,0,1,"node_testCommProtocol","node_testCommProtocol"],[9521,0,1,"node_poll","node_poll"],[9522,0,1,"node_autocal","node_autocal"]]);