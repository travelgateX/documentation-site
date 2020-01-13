+++
title = "Hotel"
pagetitle = "Hotel"
description = ""
icon = "fa-h-square"
weight = 1
alwaysopen = false
+++

{{< graphiql-script queries="[{\"apikey\":\"64780338-49c8-4439-7c7d-d03c2033b145\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/aeb082e484710ebf6b7a4ec5173064cc/raw\",\"divname\":\"div_hotels\"},{\"apikey\":\"64780338-49c8-4439-7c7d-d03c2033b145\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/4737228c495b09566474fa2db38fc72d/raw\",\"divname\":\"div_destinations\"},{\"apikey\":\"64780338-49c8-4439-7c7d-d03c2033b145\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/519b4223de8b44cb20c5c33212c62654/raw\",\"divname\":\"div_boards\"},{\"apikey\":\"64780338-49c8-4439-7c7d-d03c2033b145\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/0815561e9c25ce49bc416dbc73f36388/raw\",\"divname\":\"div_rooms\"},{\"apikey\":\"64780338-49c8-4439-7c7d-d03c2033b145\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/aa1be23b8c9229c8363c142036afb1f5/raw\",\"divname\":\"div_categories\"}]" >}}
{{< graphiql-styles >}}




## Hotels

Hotels Query returns a hotel list from one supplier's access. This entity contains static data about the hotel requested, such as code, name, location, and other information - You can find all these fields in the [graph](https://api.travelgatex.com/). You can receive hotels with hotel codes or with minimal destination codes, you can also filter the results based on rank. In this sense, note that there are mandatory and optional fields that allow filtering the hotels returned in the response. 
As for the response, the full response is split into pages: By default, the maximum number of hotels returned in each page (response) is 1000, but it allowes to request between 1 and 1000 hotels by filling in the field maxSize in the criteria. In order to obtain the next page of hotels, you need to fill in the token field, accordingly. Input parameters are explained above.

#### Criteria
**Mandatory fields**  
- access-> It represents the access for which you want to receive the hotels information.  

**Optional fields**  
- hotelCodes-> it allows to filter by hotel codes  
- ranks-> it allows to filter by ranks  
- maxSize-> it allows to specify the number of elements per page  

#### Token
The token allows to request the next page of hotels. The correct way of obtaining multiple pages of hotels is mantaining this field empty for the first execution, and request the token field in the response graph. Then, send subsequent queries filling in the token field with the value returned in the previous response.

#### Playground Samples

* Hotels
{{< graphiql-tags tag="div_hotels" >}}
