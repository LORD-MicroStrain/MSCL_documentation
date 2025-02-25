NDFramePage.OnPageTitleLoaded("CClass:BaseStation_Impl","BaseStation_Impl");NDSummary.OnSummaryLoaded("CClass:BaseStation_Impl",[["C/C++","C"]],[["Classes","Class"],["Functions","Function"],["Groups","Group"],["Variables","Variable"]],[[9612,0,0,"BaseStation_Impl"],[9613,0,2,"Functions","Functions"],[9614,0,1,"BaseStation_Impl","BaseStation_Impl"],[9615,0,1,"~BaseStation_Impl","~BaseStation_Impl"],[9616,0,2,"Variables","Variables"],[9617,0,3,"m_connection","m_connection"],[9618,0,3,"m_packetCollector","m_packetCollector"],[9619,0,3,"m_responseCollector","m_responseCollector"],[9620,0,3,"m_rawBytePacketCollector","m_rawBytePacketCollector"],[9621,0,3,"m_parser","m_parser"],[9622,0,3,"m_baseCommandsTimeout","m_baseCommandsTimeout"],[9623,0,3,"m_nodeCommandsTimeout","m_nodeCommandsTimeout"],[9624,0,3,"m_frequency","m_frequency"],[9625,0,3,"m_commProtocol","m_commProtocol"],[9626,0,3,"m_eeprom","m_eeprom"],[9627,0,3,"m_eepromHelper","m_eepromHelper"],[9628,0,3,"m_features","m_features"],[9629,0,3,"m_protocolMutex","m_protocolMutex"],[9630,0,3,"m_protocol_lxrs","m_protocol_lxrs"],[9631,0,3,"m_protocol_lxrsPlus","m_protocol_lxrsPlus"],[9632,0,3,"m_lastCommTime","m_lastCommTime"],[9633,0,2,"Functions","Functions(2)"],[9634,0,1,"getTimeForBeacon","getTimeForBeacon"],[9635,0,1,"parseData","parseData"],[9636,0,1,"determineProtocols","determineProtocols"],[9637,0,1,"eeHelper","eeHelper"],[9638,0,1,"doCommand","doCommand"],[9639,0,1,"connection","connection"],[9640,0,1,"features","features"],[9641,0,1,"protocol","protocol"],[9642,0,1,"lastCommunicationTime","lastCommunicationTime"],[9643,0,1,"read","read"],[9644,0,1,"write","write"],[9645,0,1,"setReadWriteRetries","setReadWriteRetries"],[9646,0,1,"getReadWriteRetries","getReadWriteRetries"],[9647,0,1,"useEepromCache","useEepromCache"],[9648,0,1,"clearEepromCache","clearEepromCache"],[9649,0,1,"frequency","frequency"],[9650,0,1,"communicationProtocol","communicationProtocol"],[9651,0,1,"regionCode","regionCode"],[9652,0,1,"firmwareVersion","firmwareVersion"],[9653,0,1,"model","model"],[9654,0,1,"serial","serial"],[9655,0,1,"microcontroller","microcontroller"],[9656,0,1,"getData","getData"],[9657,0,1,"getRawBytePackets","getRawBytePackets"],[9658,0,1,"totalData","totalData"],[9659,0,1,"getNodeDiscoveries","getNodeDiscoveries"],[9660,0,1,"timeout","timeout"],[9661,0,1,"timeout","timeout(2)"],[9662,0,1,"ping","ping"],[9663,0,1,"readEeprom","readEeprom"],[9664,0,1,"readEeprom","readEeprom(2)"],[9665,0,1,"writeEeprom","writeEeprom"],[9666,0,1,"writeEeprom","writeEeprom(2)"],[9667,0,1,"enableBeacon","enableBeacon"],[9668,0,1,"enableBeacon","enableBeacon(2)"],[9669,0,1,"disableBeacon","disableBeacon"],[9670,0,1,"beaconStatus","beaconStatus"],[9671,0,1,"startRfSweepMode","startRfSweepMode"],[9672,0,1,"startRfSweepMode","startRfSweepMode(2)"],[9673,0,1,"cyclePower","cyclePower"],[9674,0,1,"resetRadio","resetRadio"],[9675,0,1,"changeFrequency","changeFrequency"],[9676,0,1,"verifyConfig","verifyConfig"],[9677,0,1,"applyConfig","applyConfig"],[9678,0,1,"getTransmitPower","getTransmitPower"],[9679,0,1,"getButtonLongPress","getButtonLongPress"],[9680,0,1,"getButtonShortPress","getButtonShortPress"],[9681,0,1,"getAnalogPairingEnabled","getAnalogPairingEnabled"],[9682,0,1,"getAnalogTimeoutTime","getAnalogTimeoutTime"],[9683,0,1,"getAnalogTimeoutVoltage","getAnalogTimeoutVoltage"],[9684,0,1,"getAnalogExceedanceEnabled","getAnalogExceedanceEnabled"],[9685,0,1,"getAnalogPair","getAnalogPair"],[9686,0,1,"doBaseCommand","doBaseCommand"],[9687,0,1,"doNodeCommand","doNodeCommand"],[9688,0,1,"protocol_ping_v1","protocol_ping_v1"],[9689,0,1,"protocol_ping_v2","protocol_ping_v2"],[9690,0,1,"protocol_hardReset_v2","protocol_hardReset_v2"],[9691,0,1,"protocol_softReset_v2","protocol_softReset_v2"],[9692,0,1,"protocol_read_v1","protocol_read_v1"],[9693,0,1,"protocol_read_v2","protocol_read_v2"],[9694,0,1,"protocol_write_v1","protocol_write_v1"],[9695,0,1,"protocol_write_v2","protocol_write_v2"],[9696,0,1,"protocol_enableBeacon_v1","protocol_enableBeacon_v1"],[9697,0,1,"protocol_enableBeacon_v2","protocol_enableBeacon_v2"],[9698,0,1,"protocol_beaconStatus_v1","protocol_beaconStatus_v1"],[9699,0,1,"protocol_startRfSweepMode_v1","protocol_startRfSweepMode_v1"],[9700,0,1,"protocol_node_pageDownload_v1","protocol_node_pageDownload_v1"],[9701,0,1,"protocol_node_datalogInfo_v1","protocol_node_datalogInfo_v1"],[9702,0,1,"protocol_node_getDatalogData_v1","protocol_node_getDatalogData_v1"],[9703,0,1,"protocol_node_longPing_v1","protocol_node_longPing_v1"],[9704,0,1,"protocol_node_hardReset_v2","protocol_node_hardReset_v2"],[9705,0,1,"protocol_node_softReset_v2","protocol_node_softReset_v2"],[9706,0,1,"protocol_node_sleep_v1","protocol_node_sleep_v1"],[9707,0,1,"protocol_node_sleep_v2","protocol_node_sleep_v2"],[9708,0,1,"protocol_node_setToIdle_v1","protocol_node_setToIdle_v1"],[9709,0,1,"protocol_node_setToIdle_v2","protocol_node_setToIdle_v2"],[9710,0,1,"protocol_node_readEeprom_v1","protocol_node_readEeprom_v1"],[9711,0,1,"protocol_node_readEeprom_v2","protocol_node_readEeprom_v2"],[9712,0,1,"protocol_node_writeEeprom_v1","protocol_node_writeEeprom_v1"],[9713,0,1,"protocol_node_writeEeprom_v2","protocol_node_writeEeprom_v2"],[9714,0,1,"protocol_node_autoBalance_v1","protocol_node_autoBalance_v1"],[9715,0,1,"protocol_node_autoBalance_v2","protocol_node_autoBalance_v2"],[9716,0,1,"protocol_node_autocal_shm_v1","protocol_node_autocal_shm_v1"],[9717,0,1,"protocol_node_autocal_shm201_v1","protocol_node_autocal_shm201_v1"],[9718,0,1,"protocol_node_autoshuntcal_v1","protocol_node_autoshuntcal_v1"],[9719,0,1,"protocol_node_getDiagnosticInfo_v1","protocol_node_getDiagnosticInfo_v1"],[9720,0,1,"protocol_node_erase_v1","protocol_node_erase_v1"],[9721,0,1,"protocol_node_erase_v2","protocol_node_erase_v2"],[9722,0,1,"protocol_node_startSync_v1","protocol_node_startSync_v1"],[9723,0,1,"protocol_node_startNonSync_v1","protocol_node_startNonSync_v1"],[9724,0,1,"protocol_node_startNonSync_v2","protocol_node_startNonSync_v2"],[9725,0,1,"protocol_node_batchEepromRead_v1","protocol_node_batchEepromRead_v1"],[9726,0,1,"protocol_node_testCommProtocol","protocol_node_testCommProtocol"],[9727,0,1,"protocol_node_poll","protocol_node_poll"],[9728,0,1,"node_ping","node_ping"],[9729,0,1,"node_hardReset","node_hardReset"],[9730,0,1,"node_softReset","node_softReset"],[9731,0,1,"node_sleep","node_sleep"],[9732,0,1,"node_setToIdle","node_setToIdle"],[9733,0,1,"node_readEeprom","node_readEeprom"],[9734,0,1,"node_writeEeprom","node_writeEeprom"],[9735,0,1,"node_pageDownload","node_pageDownload"],[9736,0,1,"node_batchEepromRead","node_batchEepromRead"],[9737,0,1,"node_getDatalogSessionInfo","node_getDatalogSessionInfo"],[9738,0,1,"node_getDatalogData","node_getDatalogData"],[9739,0,1,"node_erase","node_erase"],[9740,0,1,"node_startSyncSampling","node_startSyncSampling"],[9741,0,1,"node_startNonSyncSampling","node_startNonSyncSampling"],[9742,0,1,"node_armForDatalogging","node_armForDatalogging"],[9743,0,1,"node_triggerArmedDatalogging","node_triggerArmedDatalogging"],[9744,0,1,"node_autoBalance","node_autoBalance"],[9745,0,1,"node_autocal_shm","node_autocal_shm"],[9746,0,1,"node_autocal_shm201","node_autocal_shm201"],[9747,0,1,"node_autoShuntCal","node_autoShuntCal"],[9748,0,1,"node_readSingleSensor","node_readSingleSensor"],[9749,0,1,"node_getDiagnosticInfo","node_getDiagnosticInfo"],[9750,0,1,"node_testCommProtocol","node_testCommProtocol"],[9751,0,1,"node_poll","node_poll"],[9752,0,1,"node_autocal","node_autocal"]]);