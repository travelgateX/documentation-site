+++
title = "Safety Margin"
pagetitle = "Safety Margin"
description = "Discards those options that have a commission higher than expected."
icon = "fa-money"
weight = 3
alwaysopen = false
+++

Safety Margin is an optional plugin that allows discarding options that have a commission **lower** than expected. The expected commission has to be loaded in safety-margin file, and is the commission over gross, in other words, the commission/profit is already included in the price.

### What it does {#safetymargin}

The safety margin plugin **discards those options that have a commission lower than expected.** By doing this, only options that have a commission over gross, equal or lower than those reported in the file will be returned.

Sequentially, the rules will be evaluated until a match is found, upon finding it, the process will be stopped and the commission will be evaluated. In the same way, if the rule is not found, the option will be validated.  

The matching process uses **client Tokens** filed, which identify the provided by the client and it is used to filter which business rules can be applied in the request sent.

### How to use it

Use this plugin by adding it to the [settings](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/concepts/advancedconcepts/settings/) in your HotelX Search Query.

### Execution example

```json
{
    "plugins": {
        "step": "RESPONSE_OPTION",
        "pluginsType": [
            {
                "type": "POST_STEP",
                "name": "safety_margin"
            }
        ]
    }
}
```

### Files needed to use this plugin

* [**Safety Margin file format**](#sm_file) (**Mandatory**)

* [**Net Compare file format**](#nc_file) (**Optional**)

### Safety Margin file (**Mandatory**) {#sm_file}

* **Encoding**: UTF-8
* **File Name**: [Context Source]\_sequential_safetymargin.csv
* **Headers**:
    * _ruleId_  → rule identifier
    * _clientTokens_  → client Tokens*
    * _supplierCodes_  → supplier code
    * _notSupplierCodes_  → supplier code
    * _creationDateFrom_  → start creation date [**Date format**](dateformat)
    * _creationDateTo_   → end creation date [**Date format**](#dateformat)
    * _checkInFrom_  → checkinfrom date [**Date format**](#dateformat)
    * _checkInTo_  → checkinto date [**Date format**](#dateformat)
    * _hotelCodes_  → hotel code
    * _nothotelCodes_  → hotel code
    * _chainsCodes_  → chain code
    * _notChainCodes_  → chain code
    * _destinationCodes_  → destination code
    * _notDestinationCodes_  → destination code
    * _percentage_  → commission value, decimal separator must be point (".")  

    **client tokens** Identifier provided by the client that serves to filter which business rules can be applied for the sent request.
    
       * **List file fields** 
  
        |Field | Mandatory | Excluded fileds* | Multi-value |
        |---|---|---|---|
        |ruleId| Yes | - | No |
        |clientTokens| Yes | - | Yes |
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
        *Excluded fileds **Informed field will be ignored**

* **Delimiter**:  Comma (“,”)
* **Separator for multiples codes in the same row**: Semicolon (";")
* **Directory**: /F[folder code]\_[unique code]/HotelX\_[unique code]/

#### Sample File

**Name**: `XTG_sequential_safetymargin.csv`

**Data**:

**Simple value field**
```csv
ruleId,clientTokens,supplierCodes,notSupplierCodes,creationDateFrom,creationDateTo,checkInFrom,checkInTo,hotelCodes,notHotelCodes,chainCodes,notChainCodes,destinationCodes,notDestinationCodes,percentage
CE1,XXX,DIN,,,,2018-04-01,2018-10-31,3846,,,,,,18.50
CE2,YYY,DIN,,,,,,3846,,,,,,15.00
```

**Multivalue field**
```csv
ruleId,clientTokens,supplierCodes,notSupplierCodes,creationDateFrom,creationDateTo,checkInFrom,checkInTo,hotelCodes,notHotelCodes,chainCodes,notChainCodes,destinationCodes,notDestinationCodes,percentage
CE1,XXX,DIN;HOB;JMB,,,,2018-04-01,2018-10-31,3846,,,,,,18.50
CE2,YYY,DIN,,,,,,3846,,,,,,15.00
```

### **Date format** {#dateformat}
{{% notice warning %}}
Date format **yyyy-mm-dd** is mandatory
{{% /notice %}}


### Net Compare file (**Optional**) {#nc_file}

The net compare file should be in the format below:

* **Encoding**: UTF-8
* **File Name**: [Context Source]\_sequential_netCompare.csv
* **Headers**:
    * _ruleId_  → rule identifier
    * _clientTokens_  → client Tokens*
    * _supplierCodes_  → supplier code
    * _notSupplierCodes_  → supplier code
    * _bookingDateFrom_  → booking date from [**Date format**](#dateformat)
    * _bookingDateTo_   → booking date to [**Date format**](#dateformat)
    * _startDateFrom_  → start date from [**Date format**](#dateformat)
    * _startDateTo_  → start date to [**Date format**](#dateformat)
    * _hotelCodes_  → hotel code
    * _nothotelCodes_  → hotel code
    * _chainsCodes_  → chain code
    * _notChainCodes_  → chain code
    * _destinationCodes_  → destination code
    * _notDestinationCodes_  → destination code
    * _percentage_  → commission value, decimal separator must be point (".") 
    * _amount_  → amount  

    **client tokens** Identifier provided by the client that is used to filter which business rules can be applied for the sent request.
    
       * **List file fields** 
  
        |Field | Mandatory | Excluded fields* | Multi-value |
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
        |percentage| Yes | amount | No |
        |amount| Yes | percentage | No |
        *Excluded fields **Informed field will be ignored**

* **Delimiter**:  Comma (“,”)
* **Separator for multiples codes in the same row**: Semicolon (";")
* **Directory**: /F[folder code]\_[unique code]/HotelX\_[unique code]/

#### Sample File

**Name**: `XTG_sequential_netCompare.csv`

**Data**:

**Simple value field**
```csv
ruleId,clientTokens,supplierCodes,notSupplierCodes,bookingDateFrom,bookingDateTo,startDateFrom,startDateTo,hotelCodes,notHotelCodes,chainCodes,notChainCodes,destinationCodes,notDestinationCodes,percentage,amount
2795,,SUN2,,2018-06-04,2018-06-17,,2018-12-31,,,,,,,-2,1
2796,,EPL,,2018-06-04,2018-06-17,,2018-12-31,,,,,,,-1,2
2327,,TEC,,,,,2019-04-30,59735,,,,,,-3,3
2429,,CFT,,,,,2019-04-30,,,,,,,2.5,
2193,,DIN,,,,,2018-12-31,16038,,,,,,-2,
1315,,CIM,,,,,2018-12-31,39088,,,,,,-2,
1272,,TEC,,,,,2018-12-31,40912,,,,,,-4,
1332,,DIN,,,,,2018-12-31,40371,,,,,,3.5,
1323,,SMD,,,,,2018-12-31,,,DCHOT,,,,-3,
2213,,GNA,,,,,2018-12-31,,,GHT,,,,-2.5,
2225,,PRS,,,,,2019-04-30,,,MEDIT,,,,-4,
1019,,MED,,,,,2019-04-30,,,MEDP,,,,-3,
1020,,SEN,,,,,2019-04-30,,,PLYHT,,,,-4.25,
```

**Multivalue field**
```csv
ruleId,clientTokens,supplierCodes,notSupplierCodes,bookingDateFrom,bookingDateTo,startDateFrom,startDateTo,hotelCodes,notHotelCodes,chainCodes,notChainCodes,destinationCodes,notDestinationCodes,percentage,amount
2795,,SUN2;DIN;HOB;JMB,,2018-06-04,2018-06-17,,2018-12-31,,,,,,,-2,1
2796,,EPL,,2018-06-04,2018-06-17,,2018-12-31,,,,,,,-1,2
2327,,TEC,,,,,2019-04-30,59735,,,,,,-3,3
2429,,CFT,,,,,2019-04-30,,,,,,,2.5,
2193,,DIN,,,,,2018-12-31,16038,,,,,,-2,
1315,,CIM,,,,,2018-12-31,39088,,,,,,-2,
1272,,TEC,,,,,2018-12-31,40912,,,,,,-4,
1332,,DIN,,,,,2018-12-31,40371,,,,,,3.5,
1323,,SMD,,,,,2018-12-31,,,DCHOT,,,,-3,
2213,,GNA,,,,,2018-12-31,,,GHT,,,,-2.5,
2225,,PRS,,,,,2019-04-30,,,MEDIT,,,,-4,
1019,,MED,,,,,2019-04-30,,,MEDP,,,,-3,
1020,,SEN,,,,,2019-04-30,,,PLYHT,,,,-4.25,
```

### **Date format** {#dateformat}
{{% notice warning %}}
Date format **yyyy-mm-dd** is mandatory
{{% /notice %}}
