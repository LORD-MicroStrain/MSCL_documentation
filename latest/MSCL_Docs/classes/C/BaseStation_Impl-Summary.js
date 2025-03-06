NDFramePage.OnPageTitleLoaded("CClass:BaseStation_Impl","BaseStation_Impl");NDSummary.OnSummaryLoaded("CClass:BaseStation_Impl",[["C/C++","C"]],[["Classes","Class"],["Functions","Function"],["Groups","Group"],["Variables","Variable"]],[[9642,0,0,"BaseStation_Impl"],[9643,0,2,"Functions","Functions"],[9644,0,1,"BaseStation_Impl","BaseStation_Impl"],[9645,0,1,"~BaseStation_Impl","~BaseStation_Impl"],[9646,0,2,"Variables","Variables"],[9647,0,3,"m_connection","m_connection"],[9648,0,3,"m_packetCollector","m_packetCollector"],[9649,0,3,"m_responseCollector","m_responseCollector"],[9650,0,3,"m_rawBytePacketCollector","m_rawBytePacketCollector"],[9651,0,3,"m_parser","m_parser"],[9652,0,3,"m_baseCommandsTimeout","m_baseCommandsTimeout"],[9653,0,3,"m_nodeCommandsTimeout","m_nodeCommandsTimeout"],[9654,0,3,"m_frequency","m_frequency"],[9655,0,3,"m_commProtocol","m_commProtocol"],[9656,0,3,"m_eeprom","m_eeprom"],[9657,0,3,"m_eepromHelper","m_eepromHelper"],[9658,0,3,"m_features","m_features"],[9659,0,3,"m_protocolMutex","m_protocolMutex"],[9660,0,3,"m_protocol_lxrs","m_protocol_lxrs"],[9661,0,3,"m_protocol_lxrsPlus","m_protocol_lxrsPlus"],[9662,0,3,"m_lastCommTime","m_lastCommTime"],[9663,0,2,"Functions","Functions(2)"],[9664,0,1,"getTimeForBeacon","getTimeForBeacon"],[9665,0,1,"parseData","parseData"],[9666,0,1,"determineProtocols","determineProtocols"],[9667,0,1,"eeHelper","eeHelper"],[9668,0,1,"doCommand","doCommand"],[9669,0,1,"connection","connection"],[9670,0,1,"features","features"],[9671,0,1,"protocol","protocol"],[9672,0,1,"lastCommunicationTime","lastCommunicationTime"],[9673,0,1,"read","read"],[9674,0,1,"write","write"],[9675,0,1,"setReadWriteRetries","setReadWriteRetries"],[9676,0,1,"getReadWriteRetries","getReadWriteRetries"],[9677,0,1,"useEepromCache","useEepromCache"],[9678,0,1,"clearEepromCache","clearEepromCache"],[9679,0,1,"frequency","frequency"],[9680,0,1,"communicationProtocol","communicationProtocol"],[9681,0,1,"regionCode","regionCode"],[9682,0,1,"firmwareVersion","firmwareVersion"],[9683,0,1,"model","model"],[9684,0,1,"serial","serial"],[9685,0,1,"microcontroller","microcontroller"],[9686,0,1,"getData","getData"],[9687,0,1,"getRawBytePackets","getRawBytePackets"],[9688,0,1,"totalData","totalData"],[9689,0,1,"getNodeDiscoveries","getNodeDiscoveries"],[9690,0,1,"timeout","timeout"],[9691,0,1,"timeout","timeout(2)"],[9692,0,1,"ping","ping"],[9693,0,1,"readEeprom","readEeprom"],[9694,0,1,"readEeprom","readEeprom(2)"],[9695,0,1,"writeEeprom","writeEeprom"],[9696,0,1,"writeEeprom","writeEeprom(2)"],[9697,0,1,"enableBeacon","enableBeacon"],[9698,0,1,"enableBeacon","enableBeacon(2)"],[9699,0,1,"disableBeacon","disableBeacon"],[9700,0,1,"beaconStatus","beaconStatus"],[9701,0,1,"startRfSweepMode","startRfSweepMode"],[9702,0,1,"startRfSweepMode","startRfSweepMode(2)"],[9703,0,1,"cyclePower","cyclePower"],[9704,0,1,"resetRadio","resetRadio"],[9705,0,1,"changeFrequency","changeFrequency"],[9706,0,1,"verifyConfig","verifyConfig"],[9707,0,1,"applyConfig","applyConfig"],[9708,0,1,"getTransmitPower","getTransmitPower"],[9709,0,1,"getButtonLongPress","getButtonLongPress"],[9710,0,1,"getButtonShortPress","getButtonShortPress"],[9711,0,1,"getAnalogPairingEnabled","getAnalogPairingEnabled"],[9712,0,1,"getAnalogTimeoutTime","getAnalogTimeoutTime"],[9713,0,1,"getAnalogTimeoutVoltage","getAnalogTimeoutVoltage"],[9714,0,1,"getAnalogExceedanceEnabled","getAnalogExceedanceEnabled"],[9715,0,1,"getAnalogPair","getAnalogPair"],[9716,0,1,"doBaseCommand","doBaseCommand"],[9717,0,1,"doNodeCommand","doNodeCommand"],[9718,0,1,"protocol_ping_v1","protocol_ping_v1"],[9719,0,1,"protocol_ping_v2","protocol_ping_v2"],[9720,0,1,"protocol_hardReset_v2","protocol_hardReset_v2"],[9721,0,1,"protocol_softReset_v2","protocol_softReset_v2"],[9722,0,1,"protocol_read_v1","protocol_read_v1"],[9723,0,1,"protocol_read_v2","protocol_read_v2"],[9724,0,1,"protocol_write_v1","protocol_write_v1"],[9725,0,1,"protocol_write_v2","protocol_write_v2"],[9726,0,1,"protocol_enableBeacon_v1","protocol_enableBeacon_v1"],[9727,0,1,"protocol_enableBeacon_v2","protocol_enableBeacon_v2"],[9728,0,1,"protocol_beaconStatus_v1","protocol_beaconStatus_v1"],[9729,0,1,"protocol_startRfSweepMode_v1","protocol_startRfSweepMode_v1"],[9730,0,1,"protocol_node_pageDownload_v1","protocol_node_pageDownload_v1"],[9731,0,1,"protocol_node_datalogInfo_v1","protocol_node_datalogInfo_v1"],[9732,0,1,"protocol_node_getDatalogData_v1","protocol_node_getDatalogData_v1"],[9733,0,1,"protocol_node_longPing_v1","protocol_node_longPing_v1"],[9734,0,1,"protocol_node_hardReset_v2","protocol_node_hardReset_v2"],[9735,0,1,"protocol_node_softReset_v2","protocol_node_softReset_v2"],[9736,0,1,"protocol_node_sleep_v1","protocol_node_sleep_v1"],[9737,0,1,"protocol_node_sleep_v2","protocol_node_sleep_v2"],[9738,0,1,"protocol_node_setToIdle_v1","protocol_node_setToIdle_v1"],[9739,0,1,"protocol_node_setToIdle_v2","protocol_node_setToIdle_v2"],[9740,0,1,"protocol_node_readEeprom_v1","protocol_node_readEeprom_v1"],[9741,0,1,"protocol_node_readEeprom_v2","protocol_node_readEeprom_v2"],[9742,0,1,"protocol_node_writeEeprom_v1","protocol_node_writeEeprom_v1"],[9743,0,1,"protocol_node_writeEeprom_v2","protocol_node_writeEeprom_v2"],[9744,0,1,"protocol_node_autoBalance_v1","protocol_node_autoBalance_v1"],[9745,0,1,"protocol_node_autoBalance_v2","protocol_node_autoBalance_v2"],[9746,0,1,"protocol_node_autocal_shm_v1","protocol_node_autocal_shm_v1"],[9747,0,1,"protocol_node_autocal_shm201_v1","protocol_node_autocal_shm201_v1"],[9748,0,1,"protocol_node_autoshuntcal_v1","protocol_node_autoshuntcal_v1"],[9749,0,1,"protocol_node_getDiagnosticInfo_v1","protocol_node_getDiagnosticInfo_v1"],[9750,0,1,"protocol_node_erase_v1","protocol_node_erase_v1"],[9751,0,1,"protocol_node_erase_v2","protocol_node_erase_v2"],[9752,0,1,"protocol_node_startSync_v1","protocol_node_startSync_v1"],[9753,0,1,"protocol_node_startNonSync_v1","protocol_node_startNonSync_v1"],[9754,0,1,"protocol_node_startNonSync_v2","protocol_node_startNonSync_v2"],[9755,0,1,"protocol_node_batchEepromRead_v1","protocol_node_batchEepromRead_v1"],[9756,0,1,"protocol_node_testCommProtocol","protocol_node_testCommProtocol"],[9757,0,1,"protocol_node_poll","protocol_node_poll"],[9758,0,1,"node_ping","node_ping"],[9759,0,1,"node_hardReset","node_hardReset"],[9760,0,1,"node_softReset","node_softReset"],[9761,0,1,"node_sleep","node_sleep"],[9762,0,1,"node_setToIdle","node_setToIdle"],[9763,0,1,"node_readEeprom","node_readEeprom"],[9764,0,1,"node_writeEeprom","node_writeEeprom"],[9765,0,1,"node_pageDownload","node_pageDownload"],[9766,0,1,"node_batchEepromRead","node_batchEepromRead"],[9767,0,1,"node_getDatalogSessionInfo","node_getDatalogSessionInfo"],[9768,0,1,"node_getDatalogData","node_getDatalogData"],[9769,0,1,"node_erase","node_erase"],[9770,0,1,"node_startSyncSampling","node_startSyncSampling"],[9771,0,1,"node_startNonSyncSampling","node_startNonSyncSampling"],[9772,0,1,"node_armForDatalogging","node_armForDatalogging"],[9773,0,1,"node_triggerArmedDatalogging","node_triggerArmedDatalogging"],[9774,0,1,"node_autoBalance","node_autoBalance"],[9775,0,1,"node_autocal_shm","node_autocal_shm"],[9776,0,1,"node_autocal_shm201","node_autocal_shm201"],[9777,0,1,"node_autoShuntCal","node_autoShuntCal"],[9778,0,1,"node_readSingleSensor","node_readSingleSensor"],[9779,0,1,"node_getDiagnosticInfo","node_getDiagnosticInfo"],[9780,0,1,"node_testCommProtocol","node_testCommProtocol"],[9781,0,1,"node_poll","node_poll"],[9782,0,1,"node_autocal","node_autocal"]]);