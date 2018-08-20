+++
title = "Safety Margin"
pagetitle = "Safety Margin"
description = "Discards those options that have a commission higher than expected."
icon = "fa-money"
weight = 3
alwaysopen = false
+++

Safety Margin is an optional plugin and allows discarding those options that have a commission higher than expected.

## Margin safe {#safetymargin}

### Goals

The safety margin plugin **discards those options that have a commission higher than expected.** By doing this, only those options that have a commission equal or lower than those reported in the file will be returned.
Sequentially, the rules will be evaluated until a match is found, upon finding it, the process will be stopped and the commission will be evaluated. In the same way, if the rule is not found, the option will be validated.  

The matching process uses **client Tokens** filed, which identify the provided by the client and it is used to filter which business rules can be applied in the request sent.

## Files needed in order to use this plugin

* [**Margin safe file format**](/hotelx/plugins/format-files/safety_margin/) (**Mandatory**)

### Execution example



{

    "plugins": {

        "step": "RESPONSE_OPTION",

        "pluginsType": [

            {

                "type": "POST_STEP"

                "name": "safety_margin"

            }

        ]

    }

}
```
