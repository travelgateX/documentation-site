+++
title = "Commission"
pagetitle = "Commission"
description = "Convert Gross Prices into Net Prices."
icon = "fa-money"
weight = 3
alwaysopen = false
+++

CommissionX is a plugin that defines the contracted / expected commission in cases where the supplier is not able to send it via integration.


## CommissionX {#commissionX} 

### Goals 

CommissionX is a plugin that defines the contracted / expected commission in cases where the supplier is not able to send it via integration. These commissions are defined through the plugin so as not to lose the options in which we do not know the type of price sent, since this information is established at contract level between client-supplier. Different commissions can be applied according to the different rules depending on the format that we will described next. The commission that is loaded in the FTP is interpreted like a **Gross** commission, that is, the commission or profit is included in the price. 

### Files needed to use this plugin

* [**Sequential Commission file format**](/hotelx/plugins/format-files/commission/) (**Mandatory**). If the columns **chainCodes,destinationCodes** are informed then it is mandatory to upload group file.

* [**Group file format**](/hotelx/plugins/format-files/group/) (**Optional**)

    * This file will be necessary in case you want to apply rules depending on a grouping of codes that depend on a [**context**](/hotelx/concepts/accesses-supplier-context/#context). For this case, it is necessary that you pass with the [**entity**](/hotelx/plugins/entity_table_file/).

**Observation**

Although the group file is optional if this file is informed before the commission file the values will be used from the group file.

### How we make it

We read sequentially the commission file if the columns **chainCodes,destinationCodes** are informed then it is mandatory to upload group file to be able to read these values from the group file.

#### **Possible values entity filename** {#entitygroup}

|Entity | chainCodes| destinationCodes| hotelCodes |
|---------|---|---|---|
|[hotel](/hotelx/plugins/entity_table_file#hotel)| Yes | Yes | No |
|[destination](/hotelx/plugins/entity_table_file#destination)| Yes | No | Yes |

### Execution example
if you want index by client tokens it is necessary to specify the client token as shown below, if the token is not specified, by default, the system will apply those rules that do not have client tokens.
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