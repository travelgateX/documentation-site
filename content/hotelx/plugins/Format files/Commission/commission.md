+++
title = "Commission files format"
pagetitle = "Commission files format"
description = "Format commission file."
icon = "fa-exchange"
weight = 3
alwaysopen = false
+++

The commission file should be in the below format:

* **Encoding**: UTF-8
* **File Name**: 
    * [**Context**](/hotelx/concepts/accesses-supplier-context/#context)
    * [**Sequential**](/hotelx/plugins/entities/entity_table#sequential)
    * commission
* **Extension file**: csv
* **Headers**:
    * _ruleId_
    * _supplierCodes_
    * _notSupplierCodes_
    * _creationDateFrom_
    * _createionDateTo_ 
    * _checkInFrom_
    * _hotelCodes_
    * _nothotelCodes_
    * _chainsCodes_
    * _notChainCodes_
    * _destinationCodes_
    * _notDestinationCodes_
    * _percentage_
    * _force_
* **Delimiter**:  Comma (“,”) 
* **Directory**: /F[folder code]\_[unique code]/HotelX\_[unique code]/

#### Sample File

**Name**: context\sequential_commission.csv

**Data**:

```csv
ruleId,supplierCodes,notSupplierCodes,creationDateFrom,creationDateTo,checkInFrom,checkInTo,hotelCodes,notHotelCodes,chainCodes,notChainCodes,destinationCodes,notDestinationCodes,percentage,force
CE1,DIN,,,,2018-04-01,2018-10-31,3846,,,,,,18.50,false
CE2,DIN,,,,,,3846,,,,,,15.00,false
```