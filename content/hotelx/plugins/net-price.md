+++
title = "Commission"
pagetitle = "Commission"
description = "Convert Gross Prices into Net Prices."
icon = "fa-money"
weight = 3
alwaysopen = false
+++

Net Price is an optional plugin and allows to net all the prices in an option.

* [**NetpriceX**](/hotelx/plugins/net-price#netpricex)

* [**CommissionX**](/hotelx/plugins/net-price#commissionX) (NetpriceX Extended funcionality)

## NetPriceX {#netpricex}

### Goals

This plugin receives an Option by parameter and returns an Option with all the prices with net value. **This plugin reads information of commissions from ftp**. It is mandatory to load at least supplier's commission file. Depending of the files in ftp, **this plugin can apply two different commission values over prices**.
Suppliers commission file specifies the commission applied to supplier’s prices. Hotel commission file specifies the commission applied to the specific hotel’s price. In the one hand, if no hotels commission file is loaded in ftp, it's applied the net price with the commission specified in commissions supplier's file. In other hand, if the hotel's commission file is loaded, this has preference over the supplier's file. These files have to meet the requirements listed below. In other cases, an error will be returned.

## Files needed to use this plugin

* [**Commission supplier file format**](/hotelx/plugins/format-files/commission_supplier/) (**Mandatory**)

* [**Commision hotel file format**](/hotelx/plugins/format-files/commission_netprice/) (**Optional**)

### Execution example

```
{

    "plugins": {

        "step": "RESPONSE_OPTION",

        "pluginsType": [

            {

                "type": "NET_PRICE",

                "name": "net_priceX"

            }

        ]

    }

}
```

## CommissionX {#commissionX}

### Goals

CommissionX is a plugin with an extended funcionality over **net price plugin** that allows to apply more complex bussines rules.
This plugin defines the contracted / expected commission in cases where the supplier is not able to send it via integration. These commissions are defined through the plugin so as not to lose the options in which we do not know the type of price sent, since this information is established at contract level between client-supplier. Different commissions can be applied according to the different rules depending on the format that we will describe next.

**Observation**

Although the group file is optional if this file is informed before the commission file the values will be used from the group file.

### Files needed to use this plugin

* [**Sequential Commission file format**](/hotelx/plugins/format-files/commission/) (**Mandatory**). If the columns **chainCodes,destinationCodes** are informed then it is mandatory to upload group file.

* [**Group file format**](/hotelx/plugins/format-files/group/) (**Optional**)

    * This file will be necessary in case you want to apply rules depending on a grouping of codes that depend on a [**context**](/hotelx/concepts/accesses-supplier-context/#context). For this case, it is necessary that you pass with the [**entity**](/hotelx/plugins/entity_table_file/).


### How we make it

We read sequentially the commission file if the columns **chainCodes,destinationCodes** are informed then it is mandatory to upload group file to be able to read these values from the group file.

#### **Possible values entity filename** {#entitygroup}

|Entity | chainCodes| destinationCodes| hotelCodes |
|---------|---|---|---|
|[hotel](/hotelx/plugins/entity_table_file#hotel)| Yes | Yes | No |
|[destination](/hotelx/plugins/entity_table_file#destination)| Yes | No | Yes |


### Execution example

```
{

    "plugins": {

        "step": "RESPONSE_OPTION",

        "pluginsType": [

            {

                "type": "NET_PRICE",

                "name": "commission"

            }

        ]

    }

}
```
