+++
title = "Net Price"
pagetitle = "Net Price"
description = "Convert Gross Pricess into Net Prices."
icon = "fa-exchange"
weight = 4
alwaysopen = false
+++

Search by destinations is a feature to search by destinations codes, these codes will be converted to hotel codes, then merged with the hotel codes sent as criteria if any, and finally requested to suppliers. In order to achieve the destination to hotel conversion, a source must be specified in a plugin.

## Plugin

The conversion must be done at the 'REQUEST' step, either in type 'PRE_STEP' or 'POST_STEP'. The parameter with key "accessID" is mandatory and is the access used to convert destinations to hotel from its hotel list, which means that the hotel codes obtained are in the same context as the access.

```
{
    "plugins": {
        "step": "REQUEST",
        "pluginsType": [
            {
                "type": "POST_STEP",
                "name": "search_by_destination",
                "parameters": [
                    {
                        "key": "accessID",
                        "value": "x"
                    }
                ]
            }
        ]
    }
}