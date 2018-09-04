+++
title = "Content"
pagetitle = "Content (Static Content)"
description = "Learn about how to manage content data in your site: Hotels, Boards, Categories..."
icon = "fa-list-alt"
weight = 5
alwaysopen = false
+++

{{< graphiql-script queries="[{\"apikey\":\"64780338-49c8-4439-7c7d-d03c2033b145\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/aeb082e484710ebf6b7a4ec5173064cc/raw\",\"divname\":\"div_hotels\"},{\"apikey\":\"64780338-49c8-4439-7c7d-d03c2033b145\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/4737228c495b09566474fa2db38fc72d/raw\",\"divname\":\"div_destinations\"},{\"apikey\":\"64780338-49c8-4439-7c7d-d03c2033b145\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/519b4223de8b44cb20c5c33212c62654/raw\",\"divname\":\"div_boards\"},{\"apikey\":\"64780338-49c8-4439-7c7d-d03c2033b145\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/0815561e9c25ce49bc416dbc73f36388/raw\",\"divname\":\"div_rooms\"},{\"apikey\":\"64780338-49c8-4439-7c7d-d03c2033b145\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/aa1be23b8c9229c8363c142036afb1f5/raw\",\"divname\":\"div_categories\"}]" >}}
{{< graphiql-styles >}}

On this page you will learn how to manage content data such as hotels, boards, categories, etc. in your site.

## Hotels

Hotels Query returns a hotel list from one supplier's access. This entity contains static data about the hotel requested, such as code, name, location, and other information - You can find all these fields in the [graph](https://api.travelgatex.com/). You can receive hotels with hotel codes or with minimal destination codes, you can also filter the results based on rank. In this sense, note that there are mandatory and optional fields that allow filtering the hotels returned in the response. 
As for the response, the full response is split into pages: By default, the maximum number of hotels returned in each page (response) is 1000, but it is allowed to request between 100 and 10000 hotels by filling in the field maxSize in the criteria. In order to obtain the next page of hotels, you need to fill in the token field, accordingly. Input parameters are explained above.

### Criteria
**Mandatory fields**  
- access-> It represents the access for which you want to receive the hotels information.  

**Optional fields**  
- hotelCodes-> it allows to filter by hotel codes  
- ranks-> it allows to filter by ranks  
- maxSize-> it allows to specify the number of elements per page  

### Token
The token allows to request the next page of hotels. The correct way of obtaining multiple pages of hotels is mantaining this field empty for the first execution, and request the token field in the response graph. Then, send subsequent queries filling in the token field with the value returned in the previous response.

#### Playground Samples

* Hotels
{{< graphiql-tags tag="div_hotels" >}}

### Destinations

Destinations Query returns a list of static data about destinations for a supplier access. By default, if you don’t set any destination codes, you will receive all the codes. As it is the case with the Query Hotels, you will be able to receive subsequent pages of destinations by filling in the continuation token field. It is possible that you filter by language and you receive the texts only in the language specified by parameter in [DestinationData](/hotelx/reference/objects/destinationdata/) /texts/languages.

#### Playground Samples

* Destinations
{{< graphiql-tags tag="div_destinations" >}}

### Boards

Boards Query returns a simple boards map that can include translations to other languages.

#### Playground Samples

* Boards
{{< graphiql-tags tag="div_boards" >}}

### Rooms

Rooms Query returns a simple rooms map that can include translations to other languages. You can search by room codes, if you don't introduce any room codes, you will receive all of them. The full response is split into pages. By default, the number of rooms in each page is 1000, however, you can choose the size with a value between 100 and 10000.

### Criteria
**Mandatory fields**  
- access-> It represents the access for which you want to receive the room description.  

**Optional fields**  
- roomCodes-> it allows to filter by room codes  
- maxSize-> it allows to specify the number of elements per page  

### Token
The token allows to request the next page of rooms. The correct way of obtaining multiple pages of rooms is mantaining this field empty for the first execution and request the token field in the response graph. Then, subsequent queries filling in the token field with the value returned in the previous response.

#### Playground Samples

* Rooms
{{< graphiql-tags tag="div_rooms" >}}

### Categories

Category static data returns a simple categories map that can include translations to other languages.

#### Playground Samples

* Categories
{{< graphiql-tags tag="div_categories" >}}
