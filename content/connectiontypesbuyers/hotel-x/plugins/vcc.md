+++
title = "Virtual Credit Card"
pagetitle = "Virtual Credit Card"
description = "Allows the creation or cancellation of virtual credit card"
icon = "fa-cog"
weight = 3
alwaysopen = false
+++

Vcc is an optional plugin that adds the possibility to:
</br>
- **Create a virtual credit card**: Generate a virtual credit card during the booking operation, allowing payment of the reservation amount using this card. ([VccGen](#what-does-vccgen))
</br>
- **Cancel a virtual credit card**: Cancel a virtual credit card as part of the cancellation operation. ([VccCan](#what-does-vcccan))

### What does VccGen?

The Vcc Gen plugin empowers clients to **generate virtual credit cards** featuring activation and expiration dates of their choosing. Notably, this service delivers information on the newly created payment card via the 'paymentCard' (deprecated) and 'paymentInfo' fields, even in cases where the booking step may have encountered issues. This information encompasses details such as the cardholder's name, credit card number, CVC, expiration date, and the [card type](#list-of-available-card-types) (for instance `VI`). Additionally, it provides insights into the source or supplier responsible for the creation of this virtual credit card.

You can apply rules using the 'genvcc.csv' rules file to determine whether or not to utilize a specific VCC. This decision is based on the rules defined within the file and the parameters specified in the request. [More details about rule's file](#file-format).

### How to use it

Use this plugin by adding it to the [settings](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/concepts/advancedconcepts/settings/) in your HotelX Operation.

### Execution example

To utilize the plugin, you need to send the following JSON within the query variables:

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
						},
						{
							"key" : "useGross",
							"value" : "true"
						}
					]
				}
			}
		]
```
**<u>Parameters</u>**

| **Key**   	   | **Value**        |   **Format**        |**Description**            | **Default Value (if not sent)** | **Mandatory** |
|------------------|------------------|---------------------|--------------------------------------------------------------------------------|------------------|----------|
| activationDate   | Date string             |  yyyy/MM/dd         | Represents the date when the virtual credit card will be activated             | **Same day as the book** | NO
| expirationDate   | Date string			  |  yyyy/MM/dd         | Represents the date when the virtual credit card will expire                   | **One month after check in** | NO
| useGross         | Boolean string         |  true or false      | Allows to choose the origin of the card amount. The option's gross or the net. | **Net option's value** | NO

### What does VccCan?

The VccCan plugin is responsible for **cancelling a virtual credit card** identified by the `id` returned in the book response. The service will return the status of the payment card inside status field (in paymentCard (deprecated) and paymentInfo fields). This plugin should be utilized exclusively within the 'Cancel' operation, contingent on the successful completion of the booking cancellation.

To specify the virtual credit card to be used for cancellation, a rule that returns an access key will be employed, utilizing the same rule file as 'VccGen.' You can establish rules within the 'genvcc.csv' rule file to determine the utilization of a particular VCC based on rules within the file and request parameters. [More details about rule's file](#file-format).

### How to use it

Use this plugin by adding it to the [settings](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/concepts/advancedconcepts/settings/) in your HotelX Operation.

### Execution example

In order to use the plugin, we shoud send the following json in the query variables 

```json
		"plugins": [
			{
				"step": "RESPONSE",
				"pluginsType": {
					"name": "canvcc",
					"type": "PRE_STEP",
					"parameters": [
						{
							"key": "id",
							"value": "virtualCreditCardID"
						}
					]
				}
			}
		]
```
**<u>Parameters</u>**

| **Key**   	   | **Value**        |   **Format**        |**Description**                 											     | **Default Value**| **Mandatory**|
|------------------|------------------|---------------------|--------------------------------------------------------------------------------|------------------|---------|
| id   			   | string           |  no format          | The id of the virtual credit card that you want to cancel             		 | No default value | YES     |
</br>
In addition to send the plugin in the request you need to load a file with your rules that will used to match that rules depending on criteria.

## File Format

The file should be in the below format:

* **Encoding**: UTF-8
* **Directory**:  /F[folder code]_[unique code]/HotelX_[unique code]/ 
* **File Name**: [Context Source]\_sequential_genvcc.csv
* **Header Row**: IdRule,ClientToken,NoClientToken,Supplier,NoSupplier,Hotels,NotHotels,Access,NoAccess,CardType,VccAccess
* **Column Delimiter**:  Comma (",")
* **In Column value separator**: Semicolon (";")
* **Columns:**
  </br>

| **Value**          | **Description**                 | **Type** |
|-----------|---------------------------|--------------|
| IdRule        		| Rule's identifier                            |Identification|
| ClientTokens       | List of `ClientTokens` allowed for this rule    |Criteria|
| NotClientTokens    | List of `ClientTokens` **not** allowed for this rule | Criteria|
| Suppliers        	| List of hotel `Suppliers` allowed for this rule | Criteria|
| NotSuppliers       | List of hotel `Suppliers` **not** allowed for this rule|Criteria|                  
| Hotels        		| List of `hotels` for this rule which codes are in **Context_Source** context|Criteria|
| NotHotels        	| List of `hotels` **not** allowed for this rule which codes are in **Context_Source** context |Criteria|
| Access        		| `Access` that will be selected if this rule is matched to generate/cancel card | Result|
| CardType        	| `CardType` that will be used to generate the virtual credit card [(see allowed card types)](#list-of-available-card-types)                 | Result|
</br>
    
<u>Three points about the rules need to be clarified:</u>  
- Rule's file is a collection of rules and we choose in every Book the first rule that matches the criteria sent in the Query. **You should specify the more restrictive rules on the top of the file.**</br>
- If there is no value for any rule criteria row, it means that any value in the request matches this row. </br>
- It is important to indicate the context used in values on the rule criteria to match the rule. An hotel code in supplier context will not match a file with buyer's context codes.
  
</br>
For the two possible operations, GenVcc and CanVcc, you can choose one concrete rule that will be applied to select access anr/or card type(that only in genVcc case).
</br>
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

### Sample File

**Name**: `HOTELTEST_sequential_genvcc.csv`

**Sample Data**:

```csv
    IdRule,ClientToken,NoClientToken,Supplier,NoSupplier,Hotels,NotHotels,Access,NoAccess,CardType,VccAccess
    r1,,,,HOTELTEST;TESTPRV,,,,,CA,vccAccess1
    r2,,,supplier_test,,hotel1;hotel2,,access1;access2,,VI,vccAccess2
```
## List of available card types
| **Codes** | **Names**                 |
|-----------|---------------------------|
| VI        | Visa                      |
| AX        | American Express          |
| BC        | BC Card                   |
| CA        | MasterCard                |
| CB        | Carte Blanche             |
| CU        | China Union Pay           |
| DS        | Discover                  |
| DC        | Diners Club               |
| T         | Carta Si                  |
| R         | Carte Bleue               |
| N         | Dankort                   |
| L         | Delta                     |
| E         | Electron                  |
| JC        | Japan Credit Bureau       |
| TO        | Maestro                   |
| S         | Switch                    |
| EC        | Electronic Cash           |
| EU        | EuroCard                  |
| TP        | Universal air travel card |
| OP        | Optima                    |
| ER        | Air Canada/RnRoute        |
| XS        | Access                    |
| O         | Others                    |