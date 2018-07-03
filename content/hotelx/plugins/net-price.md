+++
title = "Net Price"
pagetitle = "Net Price"
description = "Convert Gross Prices into Net Prices."
icon = "fa-exchange"
weight = 3
alwaysopen = false
+++

Net Price is an optional plugin and allows to net all the prices in an option.

* [**NetpriceX**](/hotelx/plugins/net-price#netpricex)

* [**CommissionX**](/hotelx/plugins/net-price#commissionX)

## NetPriceX (future deprecation) {#netpricex}

This plugin receives an Option by parameter and returns an Option with all the prices with net value. This plugin reads information of commissions from ftp. Is mandatory to load at least, suppliers commission file. Depending of the files in ftp, this plugin can apply two different commission values over prices. Suppliers commission file specifies the commission applied to supplier’s prices. Hotel commission file specifies the commission applied to concrete hotel’s price. In one hand, if no hotels commission file is loaded in ftp, is applied net with the commission specified in commissions suppliers file. In other hand, if hotels commission file is loaded, this have preference over suppliers file. These files have to accomplish requirements below. In other cases, an error will be returned.

* [**Commission supplier file format**](/hotelx/plugins/format-files/net-price/commission_supplier/)

* [**Commision file format**](/hotelx/plugins/format-files/net-price/commission_old/)

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

Advanced Net Price is a functionality over **net price plugin** that allows to apply more complex bussines rules.

This plugin receives an Option by parameter and returns an Option with all the prices with net value. This plugin reads information of commissions from ftp. Is mandatory to load at least, commission file. Depending of the files in ftp,this plugin can apply two different commission values over prices. ommission file specifies the commission applied to supplier’s prices. Hotel commission file specifies the commission applied to concrete hotel’s price. In one hand, if no hotels commission file is loaded in ftp, is applied net with the commission specified in commissions suppliers file. In other hand, if hotels commission file is loaded, this have preference over suppliers file. These files have to accomplish requirements below. In other cases, an error will be returned.

* [**Group file format**](/hotelx/plugins/format-files/commission/group/)

* [**Commission file format**](/hotelx/plugins/format-files/commission/commission/)

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