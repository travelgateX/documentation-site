+++
title = "Search by destination"
pagetitle = "Search by destination"
description = "Enables search query to request per destinations by converting destination codes to hotel codes"
icon = "fa-globe"
weight = 4
alwaysopen = false
+++ 

{{< graphiql-script queries="[{\"apikey\":\"64780338-49c8-4439-7c7d-d03c2033b145\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/74a01699ccc7f7a8f043f6583e64fcde/raw\",\"divname\":\"div_admin_destinations\"},{\"apikey\":\"64780338-49c8-4439-7c7d-d03c2033b145\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/f820c0508f7d47432eaad34823d426e0/raw\",\"divname\":\"div_searchbydestinations\"}]" >}}
{{< graphiql-styles >}}

Search by destination is a feature to search by destinations codes in the Search query. To use it, codes must be sent in 'CriteriaSearch'. Destination codes will be converted to hotel codes, then merged with the hotel codes sent in criteria if any, and finally the request will be sent to the supplier. In order to achieve the destination to hotel conversion, a source must be specified in a plugin.

## Plugin

The conversion must be done at the 'REQUEST' step, either in type 'PRE_STEP' or 'POST_STEP'. The parameter with key "accessID" is mandatory and is the access used to convert destinations to hotel from its hotel list, which means that the hotel codes obtained are in the same context as the access.

**Query get hotels & destination** [Get hotels & destinations](/hotelx/plugins/search_by_destination#destinations)

 **Query execute plugin search by destination** [Plugin search by destination](/hotelx/plugins/search_by_destination#pluginsearchbydestinations)

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

## Example query destinations & hotels by access {#destinations}
 First of all, you need to know destinations by access.
 {{< graphiql-tags tag="div_admin_destinations" >}}
 ## Example query with execution plugin search by destinations {#pluginsearchbydestinations}
 {{< graphiql-tags tag="div_searchbydestinations" >}}