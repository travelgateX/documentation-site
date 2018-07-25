+++
title = "Safety Margin"
pagetitle = "Safety Margin"
description = "Discards those options that have a commission higher than expected."
icon = "fa-money"
weight = 3
alwaysopen = false
+++

Safety Margin is an optional plugin and allows discards those options that have a commission higher than expected.

## Margin safe {#safetymargin}

### Goals

The safety margin plugin **discards those options that have a commission higher than expected.** In this way, only those options that have a commission equal or less than those reported in the file will be returned.
Sequentially, the rules will be evaluated until a match is found, upon finding the process is stopped and the commission is evaluated, otherwise, if the rule is found, the option will be validated.  

The matching process uses **client Tokens** filed which identify the provided by the client and serves to filter which business rules can be applied for the sent request).

## Files needed to use this plugin

* [**Margin safe file format**](/hotelx/plugins/format-files/safety_margin/) (**Mandatory**)

### Execution example

```
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