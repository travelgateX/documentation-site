+++
title = "Market Group X"
pagetitle = "Market Group X"
description = "Groups the Search result by markets that share the same product"
icon = "fa-cog"
weight = 3
alwaysopen = false
+++

Market Group X is an optional plugin that allows the user to group the Search result by markets that share the same Options.

## Market Group X {#market_groupX}

### Goals

The Market Group X plugin groups the input markets from Search depending on the agrupations you've decided before hand (with a configuration file. _More details regarding configuration below_.). In order to be able to use the plugin, you'll have to decide which markets to join for which supplier. This way the Search will only process as much transactions as groups has been formed by the plugin, since all of the markets of a same group, would return the same options.

You'll have for instance a configuration file with two market groups "ES", "EN" and "FR", "DE", "IT" for the supplier AAA. You'ld then be launching a Search query with the markets "ES", "EN", "DE", "PT", "IT". As the "ES"-"EN" markets share a same group in the configuration file, we'll only be requesting to AAA supplier one query, instead of two. The same would happen with "DE" and "IT". With the plugin we will be running only 3 querys:

* ES-EN
* DE-IT
* PT

instead of 5.

Following the same example case, in the response you'll find the search options with the following market groups: "ES", "EN" and "FR", "DE", "IT".

The main goal we're seeking with this plugin is allow the client the possibility to configure the markets as he may find it suits better their supplier connections. The plugin also reduces the transactions processed through our system and to your connected suppliers, which may also improve the response time in some cases.

Loading a Market Group X configuration file is as easy as following the steps below:

## File Format

The file should be in the below format:

* **Encoding**: UTF-8
* **File Name**: markets_groups.csv
* **Header Row**: Supplier,Markets,Other

    * Supplier: Identifier of the supplier (supplier code). 
    * Markets: List of groups of `market`. Each group will be separated by ';' and each market will be separated by '#'.
    * Other: There will be a value `true` or `false`. If the value set is `true`, the Search input markets (`HotelCriteriaSearchInput`) not found in this configuration file, will be joined together and we will launch a query to the provider searching for options in this markets. If the value is `false`, these markets will be discarted.


* **Delimiter**:  Comma (",")

* **Directory**:  /F[folder code]_[unique code]/HotelX_[unique code]/

### Sample File

**Name**: `markets_groups.csv`

**Sample Data**:

```csv
    Supplier,Markets,Other
    ABR,ES#EN#IT;FR#DE,false
    ATH,ES#EN;FR#DE,false
    BAR,ES#EN;FR#DE,false
    BSEA,ES#EN;FR#DE#IT,false
    CAN,ES;EN#IT#FR#DE,false
    ELB,ES#EN#IT;FR#DE,false
    HOTELTEST,FR#ES;EN#DE,true
```

### Execution example

In order to use the plugin, we shoud send the following json in the query variables 

```json
		"plugins": [
			{
				"step": "REQUEST_ACCESS",
				"pluginsType": {
					"name": "market_groupX",
					"type": "MARKETS_GROUP"
				}
			}
		]
```