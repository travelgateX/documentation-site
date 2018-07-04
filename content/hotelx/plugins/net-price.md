+++
title = "Commission"
pagetitle = "Commission"
description = "Convert Gross Prices into Net Prices."
icon = "fa-exchange"
weight = 3
alwaysopen = false
+++

Net Price is an optional plugin and allows to net all the prices in an option.

* [**NetpriceX**](/hotelx/plugins/net-price#netpricex)

* [**CommissionX**](/hotelx/plugins/net-price#commissionX) (NetpriceX Extended funcionality)

## NetPriceX (future deprecation) {#netpricex}

This plugin receives an Option by parameter and returns an Option with all the prices with net value. This plugin reads information of commissions from ftp. Is mandatory to load at least, suppliers commission file. Depending of the files in ftp, this plugin can apply two different commission values over prices. Suppliers commission file specifies the commission applied to supplier’s prices. Hotel commission file specifies the commission applied to concrete hotel’s price. In one hand, if no hotels commission file is loaded in ftp, is applied net with the commission specified in commissions suppliers file. In other hand, if hotels commission file is loaded, this have preference over suppliers file. These files have to accomplish requirements below. In other cases, an error will be returned.

## Files needed to use this plugin

* [**Commission supplier file format**](/hotelx/plugins/format-files/net-price/commission_supplier/) (**Mandatory**)

* [**Commision hotel file format**](/hotelx/plugins/format-files/net-price/commission_old/) (**Optional**)

### Execution example

```
{

    "plugins": {

        "step": "RESPONSE\_OPTION",

        "pluginsType": [

            {

                "type": "CURRENCY\_CONVERSION"

                "name": "net\_priceX"

            }

        ]

    }

}
```

## CommissionX {#commissionX}

CommissionX is a plugin with an extended funcionality over **net price plugin** that allows to apply more complex bussines rules.

This plugin receives an Option by parameter and returns an Option with all the prices with net value. This plugin reads information of commissions from ftp. Is mandatory to load at least, commission file. Depending of the files in ftp,this plugin can apply two different commission values over prices. ommission file specifies the commission applied to supplier’s prices. Hotel commission file specifies the commission applied to concrete hotel’s price. In one hand, if no hotels commission file is loaded in ftp, is applied net with the commission specified in commissions suppliers file. In other hand, if hotels commission file is loaded, this have preference over suppliers file. These files have to accomplish requirements below. In other cases, an error will be returned.

**Observation**

Although the group file is optional if this file is informed before the commission file the values will be used from the group file.

## Files needed to use this plugin

* [**Group file format**](/hotelx/plugins/format-files/group/group/) (**Optional**)

* [**Commission file format**](/hotelx/plugins/format-files/commission/commission/) (**Mandatory**)

### Execution example

```
{

    "plugins": {

        "step": "RESPONSE\_OPTION",

        "pluginsType": [

            {

                "type": "CURRENCY\_CONVERSION"

                "name": "net\_priceX"

            }

        ]

    }

}
```