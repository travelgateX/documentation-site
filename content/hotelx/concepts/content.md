+++
title = "Content"
pagetitle = "Content (Static Content)"
description = "Learn about how manage content data to manage in your site. Hotel, Boards, Categories..."
weight = 5
alwaysopen = false
+++

{{< graphiql-script queries="[{\"apikey\":\"q8ggxpoVDW76Kw918hwnnRvxlZmAP2QZ\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/aeb082e484710ebf6b7a4ec5173064cc/raw\",\"divname\":\"div_hotels\"},{\"apikey\":\"q8ggxpoVDW76Kw918hwnnRvxlZmAP2QZ\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/4737228c495b09566474fa2db38fc72d/raw\",\"divname\":\"div_destinations\"},{\"apikey\":\"q8ggxpoVDW76Kw918hwnnRvxlZmAP2QZ\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/519b4223de8b44cb20c5c33212c62654/raw\",\"divname\":\"div_boards\"},{\"apikey\":\"q8ggxpoVDW76Kw918hwnnRvxlZmAP2QZ\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/0815561e9c25ce49bc416dbc73f36388/raw\",\"divname\":\"div_rooms\"},{\"apikey\":\"q8ggxpoVDW76Kw918hwnnRvxlZmAP2QZ\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/aa1be23b8c9229c8363c142036afb1f5/raw\",\"divname\":\"div_categories\"}]" >}}
{{< graphiql-styles >}}

On this page you will learn how to manage content data in your site such as hotel, boards, categories, etc.

## Hotels

Hotels query returns a hotel list of one supplier's access. This entity contains static data about the hotel like code, name, location, information about the hotel information, etc... You can find all fields in the [graph](https://api.travelgatex.com/). You can get the hotels with hotel codes or with minimal destination codes. Also you can filter the result with the rank. There are mandatory and optional fields that allows filtering the hotels returned in the response. The full response is splitted by pages. By default, the maximum number of hotels returned in each page(response) is 1000, but it is allowed to request between 100 and 10000 hotels filling the field size in the criteria. In order to obtain the next page of hotels, only token field have to be provided. Input parameters are explained above.

### Criteria
**Mandatory fields**  
- access-> It represents the access for which you want to get the hotels information.  

**Optional fields**  
- hotelCodes-> it allows to filter by hotel codes  
- ranks-> it allows to filter by ranks  
- maxSize-> it allows to specify the number of elements per page  

### Token
The token allows to request the next page of hotels. The correct way of obtaining a multiple pages of hotels is mantain this field empty for the first execution and request the token field in the response graph. Then send other/s query/ies filling the token field in the input with the value returned in the previous response.

#### Playground Samples

* Hotels
{{< graphiql-tags tag="div_hotels" >}}

### Destinations

Destination query returns a list of static data about destinations for a supplier access. By default if you don’t set the destination codes are all the codes. Like than hotels you can get the other pages with the continuation token.

#### Playground Samples

* Destinations
{{< graphiql-tags tag="div_destinations" >}}

### Boards

Board static data returns a simple map of the boards that can be returned with its translation to other languages.

#### Playground Samples

* Boards
{{< graphiql-tags tag="div_boards" >}}

### Rooms

Room static data returns a simple map of the rooms that can be returned with its translation to other languages.

#### Playground Samples

* Rooms
{{< graphiql-tags tag="div_rooms" >}}

### Categories

Category static data returns a simple map of the categories that can be returned with its translation to other languages.

#### Playground Samples

* Categories
{{< graphiql-tags tag="div_categories" >}}
