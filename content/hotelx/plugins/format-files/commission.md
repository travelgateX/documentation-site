+++
title = "Commission"
pagetitle = "Commission"
description = "Format commission file."
icon = "fa-file-text-o"
weight = 6
alwaysopen = false
+++

The commission file should be in the below format:

* **Encoding**: UTF-8
* **File Name**: 
    * [context](/hotelx/concepts/accesses-supplier-context/#context)
    * [sequential](/hotelx/plugins/entity_table_file/#sequential)
    * commission
* **Extension file**: csv
* **Headers**:
    * _ruleId_  → rule identifier
    * _supplierCodes_  → supplier code
    * _notSupplierCodes_  → supplier code
    * _creationDateFrom_  → start creation date
    * _creationDateTo_   → end creation date
    * _checkInFrom_  → checkin date
    * _checkInTo_  → checkout date
    * _hotelCodes_  → hotel code
    * _nothotelCodes_  → hotel code
    * _chainsCodes_  → chain code
    * _notChainCodes_  → chain code
    * _destinationCodes_  → destination code
    * _notDestinationCodes_  → destination code
    * _percentage_  → commission value, decimal separator must be point (".") 
    * _force_  → (boolean value **true/false**)
        * **false value** (if value is false the rule will not be applied despite of matching all its conditions criteria if a commission is received from the supplier trough the integration).
        * **true value** if value is true the rule will be applied if matching all its conditions criteria regardless of if a commission is received or not from the supplier trough the integration).
        * **Example**  
    
        ```csv
        commission received,forced,result from supplier
        no,no,rule applied (if matching all its criteria conditions)
        no,yes,rule applied (if matching all its criteria conditions)
        yes,no,rule NOT applied regardless of matching all its criteria conditions
        yes,yes,rule applied (if matching all its criteria conditions)
        ```
       * **List file fields** 
  
        |Field | Mandatory | Excluded fileds* | Multi-value |
        |---|---|---|---|
        |ruleId| Yes | - | No |
        |supplierCodes| Yes | notSupplierCodes | Yes |
        |notSupplierCodes| Yes | supplierCodes | Yes |
        |creationDateFrom| No | - | No |
        |creationDateTo| No | - | No |
        |checkInFrom| No | - | No |
        |checkInTo| No | - | No |
        |hotelCodes| No | nothotelCodes | Yes |
        |nothotelCodes| No | hotelCodes | Yes |
        |chainsCodes| No | notChainCodes | Yes |
        |notChainCodes| No | chainsCodes | Yes |
        |DestinationCodes| No | notDestinationCodes | Yes |
        |notDestinationCodes| No | DestinationCodes | Yes |
        |percentage| Yes | - | No |
        |force| Yes | - | No |
        *Excluded fileds **Informed field will be ignored**

* **Delimiter**:  Comma (“,”)
* **Separator for multiples codes in the same row**: Semicolon (";")
* **Directory**: /F[folder code]\_[unique code]/HotelX\_[unique code]/

#### Sample File

**Name**: context\_sequential_commission.csv

**Data**:

**Simple value field**
```csv
ruleId,supplierCodes,notSupplierCodes,creationDateFrom,creationDateTo,checkInFrom,checkInTo,hotelCodes,notHotelCodes,chainCodes,notChainCodes,destinationCodes,notDestinationCodes,percentage,force
CE1,DIN,,,,2018-04-01,2018-10-31,3846,,,,,,18.50,false
CE2,DIN,,,,,,3846,,,,,,15.00,false
```

**Multivalue field**
```csv
ruleId,supplierCodes,notSupplierCodes,creationDateFrom,creationDateTo,checkInFrom,checkInTo,hotelCodes,notHotelCodes,chainCodes,notChainCodes,destinationCodes,notDestinationCodes,percentage,force
CE1,DIN;HOB;JMB,,,,2018-04-01,2018-10-31,3846,,,,,,18.50,false
CE2,DIN,,,,,,3846,,,,,,15.00,false
```