+++
title = "Preference"
pagetitle = "Preference"
description = "To give preference to the options that match the preference rules."
icon = "fa-level-up"
weight = 3
alwaysopen = false
+++

Preference is an optional plugin and allows to offer options **preferentially** in relation to the rules informed by the client.

### What it does {#preference}

The preference plugin **Gives preference to the options that match the preference rules** By doing this, the options will be returned in a preferential way.

Sequentially, the rules will be evaluated until a match is found, upon finding it, the process will be stopped and the preference will be evaluated. In the same way, if the rule is not found, the option will be validated.  

The matching process uses **client Tokens** filed, which identify the provided by the client and it is used to filter which business rules can be applied in the request sent.

## Preference plugin workflow

We'll try to explain the basics concepts of a preference plugin workflow:

1. First starts getting all the args set by the client in the query, like options, parameters (primaryKey among others), client tokens, etc.
2. Gets the rules stored in database which will establish which options will be added or discarted based on several factors as % of tolerance of the price, options status, hotelcodes, supplier, etc.
3. Then builds a **group function** which will help to clasify the options slice in n different groups based on the primary key established in the query by the client and the rules stored in the data base (ftp preference file).
4. Now sorts the options in price order (from cheap to expensive).
5. Go over each option and group them by primary key index. However not all the options will be filled in these aggrupations. This is where the rules come into play.
6. To determine if an option will be discarted or not we have to check the **group function** which does the following:
	6.1. If it is the first option in the pk index, this option will be automatically added
	6.2. If the rule says that the competitors has to be discarted, all the options of that pk index will be discarted except for the first (the cheapest)
	6.3. If it isnt the first option and there aren't any rule that matches the option, this option will be discarted
	6.4. If it isnt the first option and the price is higher than the tolerance % established in the rules for that pk index, the option will also be discarted
7. With the resulting options grouped by pk indexes, finally collects all of them and return them to the service process which has used the plugin.

### How to use it

Use this plugin by adding it to the [settings](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/concepts/advancedconcepts/settings/) in your HotelX Search Query.

### Execution example
```json
{
    "step": "RESPONSE",
    "pluginsType": [{
        "name": "preference",
        "type": "POST_STEP",
        "parameters": [{
            "key": "primaryKey",
            "value": "hotel,currency"
        }, {
            "key": "optionsPerKey",
            "value": "4"
        }]
    }]
}
```

{{% notice tip %}}
Possible values in **"key":"primaryKey"** are **supplier, hotel, market, board, payment, room, promotion, supplement, surcharges, rateRules or/and cancelPolicy**
{{% /notice %}}

### Example of use

**Percentage = 1, Supplier A: 126 €, Supplier B: 125 €**

126 - 126 * 0.01 = 124,74 <= 125 €, then the selected one is **supplier A**

**Percentage = 1, Supplier A: 128 €, Supplier B: 125 €**

128 - 128 * 0.01 = 126.72> 125 €, then the selected one is **supplier B**

### File format

* **Encoding**: UTF-8
* **File Name**: [Context Source]\_sequential_preference.csv
* **Extension file**: csv
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
    * _status_  → option status (OK, RQ)  
    * _notStatus_  → option status (OK, RQ)  
    * _percentage_  → commission value, decimal separator must be point (".") 
    * _filter_competitors_  → filter competitors  

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
        |status| No | notStatus | Yes |
        |notStatus| No | status | Yes |
        |percentage| Yes | - | No |
        |filter_competitors| Yes | - | Yes |
        *Excluded fields **Informed field will be ignored**

* **Delimiter**:  Comma (“,”)
* **Separator for multiple codes in the same row**: Semicolon (";")
* **Directory**: /F[folder code]\_[unique code]/HotelX\_[unique code]/

#### Sample File

**Name**: `XTG_sequential_preference.csv`

**Data**:

**Simple value field**
```csv
ruleId,clientTokens,supplierCodes,notSupplierCodes,bookingDateFrom,bookingDateTo,startDateFrom,startDateTo,hotelCodes,notHotelCodes,chainCodes,notChainCodes,destinationCodes,notDestinationCodes,percentage,filter_competitors
T1,,RIU,,,,,,,,,,,,999.00,TRUE
T3,,BAR,,,,,,,,,,,,999.00,FALSE
T4,,SEN,,,,,,,,,,,,999.00,FALSE
T7,,RHO,,,,,,,,,,,,10.0,FALSE
T9,subcanal-EROSKI_B2B,INT,,,,,,,,,,,BTEMX,5.0,TRUE
```

**Multivalue field**
```csv
ruleId,clientTokens,supplierCodes,notSupplierCodes,bookingDateFrom,bookingDateTo,startDateFrom,startDateTo,hotelCodes,notHotelCodes,chainCodes,notChainCodes,destinationCodes,notDestinationCodes,percentage,filter_competitors, status
T1,,RIU,,,,,,,,,,,,RQ;OK,,999.00,TRUE
T3,,BAR,,,,,,,,,,,,RQ,,999.00,FALSE
T4,,SEN,,,,,,,,,,,,RQ,,999.00,FALSE
T7,,RHO,,,,,,,,,,,,RQ,,10.0,FALSE
T9,subcanal-EROSKI_B2B,INT,,,,,,,,,,,RQ,,BTEMX,5.0,TRUE
T10,,GTA;HOBV2;TOU,,,,,,,,,,RQ;OK,,ACDMS,,5.5,FALSE
```

### **Date format** {#dateformat}
{{% notice warning %}}
Date format **yyyy-mm-dd** is mandatory
{{% /notice %}}


