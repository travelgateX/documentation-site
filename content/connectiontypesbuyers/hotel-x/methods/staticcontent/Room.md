+++
title = "Room"
pagetitle = "Room"
description = "Learn about how to manage static content data in your site: Hotels, Boards, Categories..."
icon = "fa-bed"
weight = 3
alwaysopen = false
+++

{{< graphiql-script queries="[{\"apikey\":\"8626cf56-e364-4fd1-4fe0-311e23ac6355\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/aeb082e484710ebf6b7a4ec5173064cc/raw\",\"divname\":\"div_hotels\"},{\"apikey\":\"5067eb7a-6020-4621-79d3-1c5cd8c1d27b\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/4737228c495b09566474fa2db38fc72d/raw\",\"divname\":\"div_destinations\"},{\"apikey\":\"5067eb7a-6020-4621-79d3-1c5cd8c1d27b\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/519b4223de8b44cb20c5c33212c62654/raw\",\"divname\":\"div_boards\"},{\"apikey\":\"5067eb7a-6020-4621-79d3-1c5cd8c1d27b\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/0815561e9c25ce49bc416dbc73f36388/raw\",\"divname\":\"div_rooms\"},{\"apikey\":\"5067eb7a-6020-4621-79d3-1c5cd8c1d27b\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/aa1be23b8c9229c8363c142036afb1f5/raw\",\"divname\":\"div_categories\"}]" >}}
{{< graphiql-styles >}}


## Rooms

Rooms Query returns a simple rooms map that can include translations to other languages. You can search by room codes, if you don't introduce any room codes, you will receive all of them. The full response is split into pages. By default, the number of rooms in each page is 1000, however, you can choose the size with a value between 100 and 10000.

Have in mind the response object roomData is shared with Hotels Query but not necessarily it will share the same data. For example with Hotels Query you may recieve "amenities" in roomData whereas in Rooms Query you'll not.

#### Criteria
**Mandatory fields**  
- access-> It represents the access for which you want to receive the room description.  

**Optional fields**  
- roomCodes-> it allows to filter by room codes  
- maxSize-> it allows to specify the number of elements per page  

#### Token
The token allows to request the next page of rooms. The correct way of obtaining multiple pages of rooms is mantaining this field empty for the first execution and request the token field in the response graph. Then, subsequent queries filling in the token field with the value returned in the previous response.

#### Playground Samples

* Rooms
{{< graphiql-tags tag="div_rooms" >}}

## Categories

Category static data returns a simple categories map that can include translations to other languages.

#### Playground Samples

* Categories
{{< graphiql-tags tag="div_categories" >}}
