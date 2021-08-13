+++
title = "Preference"
pagetitle = "Preference"
description = "To give preference to the options that match the preference rules."
icon = "fa-level-up"
weight = 3
alwaysopen = false
+++

Preference is an optional plugin and allows to offer options **preferentially** in relation to the rules informed by the client.

## Preference {#preference}

### Goals

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

## Files needed in order to use this plugin

* [**Preference file format**](/connectiontypesbuyers/hotel-x/plugins/format-files/preference/) (**Mandatory**)

### Execution example
```
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
