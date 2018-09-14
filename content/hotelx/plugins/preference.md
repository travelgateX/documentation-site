+++
title = "Preference"
pagetitle = "Preference"
description = "Discards those options that have a commission higher than expected."
icon = "fa-level-up"
weight = 3
alwaysopen = false
+++

Preference is an optional plugin and allows to offer options **preferentially** in relation to the rules informed by the client.

## Preference {#preference}

### Goals

The preference plugin **offers those options that match with rule preferences reported.** By doing this, the options will be returned in a preferential way.

Sequentially, the rules will be evaluated until a match is found, upon finding it, the process will be stopped and the preference will be evaluated. In the same way, if the rule is not found, the option will be validated.  

The matching process uses **client Tokens** filed, which identify the provided by the client and it is used to filter which business rules can be applied in the request sent.

## Files needed in order to use this plugin

* [**Preference file format**](/hotelx/plugins/format-files/preference/) (**Mandatory**)

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
