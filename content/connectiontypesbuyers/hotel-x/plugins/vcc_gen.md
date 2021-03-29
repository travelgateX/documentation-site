+++
title = "Vcc Gen"
pagetitle = "Vcc Gen"
description = "Creates a virtual credit card at Book step"
icon = "fa-cog"
weight = 3
alwaysopen = false
+++

Vcc Gen is an optional plugin that adds the possibility to create a virtual credit card at Book step, in order to pay the reservation's import with it.

## Virtual Credit Card Generator (Vcc Gen) {#vccgen}

### Goals

The Vcc Gen plugin **creates a virtual credit card** with an activation and expiration date chosen by the client. The client must also send the token for the virtual credit card. The service will return the information of the newly created payment card  in the response, even if the Book step has failed. This information includes the holder name, credit card number, CVC, expiration date and the card type (for instance `VI`) **(TODO: list of available card types)**. It also returns the source or the supplier that has created this virtual credit card.

You can apply rules through the genvcc.csv configuration file, in order to use or not the a certain vcc, depending on the file configuration and the request parameters. _More details regarding configuration below_.

Loading a GenVcc is as easy as following the steps below:

## File Format

The file should be in the below format:

* **Encoding**: UTF-8
* **File Name**: [Context Source]\_sequential_genvcc.csv
* **Header Row**: IdRule,ClientToken,NoClientToken,Supplier,NoSupplier,Hotels,NotHotels,Access,NoAccess,CardType,VccAccess

* IdRule: Unique identifier of the rule. Used only for debug.  

* Criteria columns: 
   * ClientToken, NoClientToken: List of `clienttoken` separated by ';'
   * Supplier, NoSupplier: List of `supplier` codes separated by ';'
   * Hotels, NoHotels: List of `hotels` codes separated by ';'
   * Access, NoAccess: List of `access` codes separated by ';'

* Result columns: 
   * CardType: Card Type of the virtual credit card to be created
   * VccAccess: Virtual Credit Card access
    
    
    _You should bear in mind that this file is a collection of rules and we chose in every Book the first rule that matches the criteria sent in the Query. **You should specify the more restrictive rules on the top of the file.**
    If there is no value for any rule criteria row, it means that any value in the request matches this row. 
    It is important to indicate the contexts used in values on the rule criteria to improve rule matching._


* **Delimiter**:  Comma (",")

* **Directory**:  /F[folder code]_[unique code]/HotelX_[unique code]/

### Sample File

**Name**: `HOTELTEST_sequential_genvcc.csv`

**Sample Data**:

```csv
    IdRule,ClientToken,NoClientToken,Supplier,NoSupplier,Hotels,NotHotels,Access,NoAccess,CardType,VccAccess
    r1,,,,HOTELTEST;TESTPRV,,,,,CA,vccAccess1
    r2,,,supplier_test,,hotel1;hotel2,,access1;access2,,VI,vccAccess2
```

### Execution example

In order to use the plugin, we shoud send the following json in the query variables 

```json
		"plugins": [
			{
				"step": "REQUEST",
				"pluginsType": {
					"name": "genvcc",
					"type": "PRE_STEP",
					"parameters": [
						{
							"key": "activationDate",
							"value": "2020/05/22"
						},
						{
							"key": "expirationDate",
							"value": "2020/05/25"
						}
					]
				}
			}
		]
```

You should bear in mind that the parameters are **not mandatory**. In case those parameters were not specified, the **default values** would be:

* Default activation date: **same day as the Book** has been processed through HotelX
* Default expiration date: **one month later** after the **checkin** date of the hotel

To apply specific rule, we should add client token in our request
```json
"settings": {
		"context": null,
		"client": "xtg",
		"auditTransactions": true,
		"testMode": true,
		"clientTokens": [
			"testToken"
		],
		"plugins": [
            {
				"step": "REQUEST",
				"pluginsType": {
					"name": "genvcc",
					"type": "PRE_STEP",
					"parameters": [
						{
							"key": "activationDate",
							"value": "2020/05/22"
						}
					]
				}
			}
        ]
	},
```
