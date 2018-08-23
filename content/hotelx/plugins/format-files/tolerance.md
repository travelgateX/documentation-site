+++
title = "Tolerance"
pagetitle = "Tolerance"
description = "Format tolerance file."
icon = "fa-file-text-o"
weight = 9
alwaysopen = false
+++

The preference file should be in the below format:

* **Encoding**: UTF-8
* **File Name**: 
    * [context](/hotelx/concepts/accesses-supplier-context/#context)
    * [sequential](/hotelx/plugins/entity_table_file/#sequential)
    * tolerance
* **Extension file**: csv
* **Headers**:
    * _ruleId_  → rule identifier
    * _clientTokens_  → client Tokens*
    * _supplierCodes_  → supplier code
    * _notSupplierCodes_  → supplier code
    * _bookingDateFrom_  → booking date from
    * _bookingDateTo_   → booking date to
    * _startDateFrom_  → start date from
    * _startDateTo_  → start date to
    * _hotelCodes_  → hotel code
    * _nothotelCodes_  → hotel code
    * _chainsCodes_  → chain code
    * _notChainCodes_  → chain code
    * _destinationCodes_  → destination code
    * _notDestinationCodes_  → destination code
    * _percentage_  → commission value, decimal separator must be point (".") 
    * _filter_competitors_  → filter competitors  

    **client tokens** Identifier provided by the client that serves to filter which business rules can be applied for the sent request.
    
       * **List file fields** 
  
        |Field | Mandatory | Excluded fileds* | Multi-value |
        |---|---|---|---|
        |ruleId| Yes | - | No |
        |clientTokens| Yes | - | Yes |
        |supplierCodes| Yes | notSupplierCodes | Yes |
        |notSupplierCodes| Yes | supplierCodes | Yes |
        |bookingDateFrom| No | - | No |
        |bookingDateTo| No | - | No |
        |startDateFrom| No | - | No |
        |startDateTo| No | - | No |
        |hotelCodes| No | nothotelCodes | Yes |
        |nothotelCodes| No | hotelCodes | Yes |
        |chainsCodes| No | notChainCodes | Yes |
        |notChainCodes| No | chainsCodes | Yes |
        |DestinationCodes| No | notDestinationCodes | Yes |
        |notDestinationCodes| No | DestinationCodes | Yes |
        |percentage| Yes | - | No |
        |filter_competitors| Yes | - | Yes |
        *Excluded fileds **Informed field will be ignored**

* **Delimiter**:  Comma (“,”)
* **Separator for multiples codes in the same row**: Semicolon (";")
* **Directory**: /F[folder code]\_[unique code]/HotelX\_[unique code]/

#### Sample File

**Name**: context\_sequential_tolerance.csv

**Data**:

**Simple value field**
```csv
ruleId,clientTokens,supplierCodes,notSupplierCodes,bookingDateFrom,bookingDateTo,startDateFrom,startDateTo,hotelCodes,notHotelCodes,chainCodes,notChainCodes,destinationCodes,notDestinationCodes,percentage,filter_competitors
CE1,XXX,DIN,,,,2018-04-01,2018-10-31,3846,,,,,,18.50,AA
CE2,YYY,DIN,,,,,,3846,,,,,,15.00,BB
```

**Multivalue field**
```csv
ruleId,clientTokens,supplierCodes,notSupplierCodes,bookingDateFrom,bookingDateTo,startDateFrom,startDateTo,hotelCodes,notHotelCodes,chainCodes,notChainCodes,destinationCodes,notDestinationCodes,percentage,filter_competitors
CE1,XXX,DIN;HOB;JMB,,,,2018-04-01,2018-10-31,3846,,,,,,18.50,XX
CE2,YYY,DIN,,,,,,3846,,,,,,15.00,XX;VV
```