+++
title = "Search by destination"
pagetitle = "Search by destination"
description = "Enables search query to request per destinations by converting destination codes to hotel codes"
icon = "fa-globe"
weight = 4
alwaysopen = false
+++ 

Search by destination is a feature to search by destinations codes in the Search query. To use it, codes must be sent in 'CriteriaSearch'. Destination codes will be converted to hotel codes, then merged with the hotel codes sent in criteria if any, and finally the request will be sent to the supplier. In order to achieve the destination to hotel conversion, a source must be specified in a plugin.

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
```

