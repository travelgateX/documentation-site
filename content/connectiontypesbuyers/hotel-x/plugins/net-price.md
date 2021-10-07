+++
title = "Commission"
pagetitle = "Commission"
description = "Convert Gross Prices into Net Prices."
icon = "fa-money"
weight = 3
alwaysopen = false
+++

CommissionX is a plugin that defines the contracted / expected commission in cases where the supplier is not able to send it via integration.

### What it does {#commissionX}

CommissionX is a plugin that defines the contracted / expected commission in cases where the supplier is not able to send it via integration. These commissions are defined through the plugin so as not to lose the options in which we do not know the type of price sent, since this information is established at contract level between client-supplier. Different commissions can be applied according to the different rules depending on the format that we will described next. The commission that is loaded in the FTP is interpreted like a **Gross** commission, that is, the commission or profit is included in the price. 

### How to use it

Use this plugin by adding it to the [settings](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/concepts/advancedconcepts/settings/) in your HotelX Search Query.

### Execution example
If you want to index by client tokens it is necessary to specify the client token as shown below, if the token is not specified, by default, the system will apply those rules that do not have client tokens.

```json
{
	"criteriaSearch": {
		"checkIn": "2019-10-23",
		"checkOut": "2019-10-24",
		"hotels": [
			"1"
		],
		"occupancies": [
			{
				"paxes": [
					{
						"age": 1
					},
					{
						"age": 30
					}
				]
			}
		],
		"language": "en",
		"nationality": "GB",
		"currency": "EUR",
		"market": "ES"
	},
	"settings": {
		"context": null,
		"client": "xtg",
		"auditTransactions": true,
		"testMode": true,
		"clientTokens": [
			"testClientTokens"
		],
		"plugins": []
	},
	"filter": {
		"access": {
			"includes": [
				"297"
			],
			"excludes": null
		}
	}
}
```

### Files needed to use this plugin

* [**Sequential Commission file format**](#comm_file) (**Mandatory**). If the columns **chainCodes,destinationCodes** are informed then it is mandatory to upload group file.

* [**Group file format**](#group_file) (**Optional**)

    * This file will be necessary in case you want to apply rules depending on a grouping of codes that depend on a [**context**](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/concepts/basicconcepts/supplier-access-client-context#context). For this case, it is necessary that you pass with the [**entity**](../overview#entityprocessed).

**Observations**

Although the group file is optional if this file is informed before the commission file the values will be used from the group file.

We read sequentially the commission file if the columns **chainCodes,destinationCodes** are informed then it is mandatory to upload group file to be able to read these values from the group file.

### Commission file (**Mandatory**) {#comm_file}

* **Encoding**: UTF-8
* **File Name**: [Context Source]\_sequential_commission.csv
* **Headers**:
    * _ruleId_  → rule identifier
    * _clientTokens_  → client token used for index the rule
    * _supplierCodes_  → supplier code
    * _notSupplierCodes_  → supplier code
    * _creationDateFrom_  → start creation date [**Date format**](#dateformat)
    * _creationDateTo_   → end creation date [**Date format**](#dateformat)
    * _checkInFrom_  → checkin date [**Date format**](#dateformat)
    * _checkInTo_  → checkout date [**Date format**](#dateformat)
    * _hotelCodes_  → hotel code
    * _nothotelCodes_  → hotel code
    * _chainsCodes_  → chain code
    * _notChainCodes_  → chain code
    * _destinationCodes_  → destination code
    * _notDestinationCodes_  → destination code
    * _percentage_  → commission value, decimal separator must be point (".") 
    * _force_  → (boolean value **true/false**)
        * **false value** (if the value is false, the rule will not be applied despite of matching all its conditions criteria if a commission is received from the supplier through the integration).
        * **true value** if the value is true, the rule will be applied if matching all its conditions criteria, regardless of a commission being received or not from the supplier through the integration).
        * **Example**  
    
        ```csv
        commission received,forced,result from supplier
        no,no,rule applied (if matching all its criteria conditions)
        no,yes,rule applied (if matching all its criteria conditions)
        yes,no,rule NOT applied regardless of matching all its criteria conditions
        yes,yes,rule applied (if matching all its criteria conditions)
        ```
       * **List of file fields** 
  
        |Field | Mandatory | Excluded fields* | Multi-value |
        |---|---|---|---|
        |ruleId| Yes | - | No |
        |clientTokens| No | - | No |
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
        *Excluded fields **Informed fields will be ignored**

* **Delimiter**:  Comma (“,”)
* **Separator for multiples codes in the same row**: Semicolon (";")
* **Directory**: /F[folder code]\_[unique code]/HotelX\_[unique code]/

#### Sample File

**Name**: XTG\_sequential_commission.csv

**Data** without client tokens:

**Simple value field**
```csv
ruleId,clientTokens,supplierCodes,notSupplierCodes,creationDateFrom,creationDateTo,checkInFrom,checkInTo,hotelCodes,notHotelCodes,chainCodes,notChainCodes,destinationCodes,notDestinationCodes,percentage,force
CE1,testClientTokens,DIN,,,,2018-04-01,2018-10-31,3846,,,,,,18.50,false
CE2,,DIN,,,,,,3846,,,,,,15.00,false
```

**Multivalue field**
```csv
ruleId,clientTokens,supplierCodes,notSupplierCodes,creationDateFrom,creationDateTo,checkInFrom,checkInTo,hotelCodes,notHotelCodes,chainCodes,notChainCodes,destinationCodes,notDestinationCodes,percentage,force
CE1,testClientTokens,DIN;HOB;JMB,,,,2018-04-01,2018-10-31,3846,,,,,,18.50,false
CE2,,DIN,,,,,,3846,,,,,,15.00,false
```

### Group file (**Optional**) {#group_file}

* **Encoding**: UTF-8 
* **File Name**: [Context Source]\_[Entity]\_group.csv
* **Headers**:
    * _key_ → [Entity](../overview#entityprocessed).
    * _hotelCodes_ → hotel code
    * _chainCodes_ → chain code
    * _destinationCodes_ → destination code
* **Delimiter**:  Comma (“,”) 
* **Directory**: /F[folder code]\Maps/HotelX\Hotel/

#### _Sample File_

**Name**: `XTG_hotel_group.csv`

**Data**:

**Hotel entity example**

```csv
key,chainCodes,destinationCodes
1,OHTEL,DNBFQ;BYWRS;BUJSY;BTENE;CGGSZ;CGUNN;COMERCIAL152
2,000-INDEP,3PR;BYQIW;GCNR;BUJSF;BTENB;CGGSZ;CGUNN;COMERCIAL76
```

#### **Possible values entity filename**

|Entity | chainCodes| destinationCodes| hotelCodes |
|---------|---|---|---|
|[hotel](../overview#hotel)| Yes | Yes | No |
|[destination](../overview#destination)| Yes | No | Yes |

#### **Date format** {#dateformat}
{{% notice warning %}}
Date format **yyyy-mm-dd** is mandatory
{{% /notice %}}