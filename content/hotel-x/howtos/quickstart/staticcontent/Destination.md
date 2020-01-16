+++
title = "Destination"
pagetitle = "Destination"
description = "Learn about how to manage static content data in your site: Hotels, Boards, Categories..."
icon = "fa-street-view"
weight = 2
alwaysopen = false
+++

{{< graphiql-script queries="[{\"apikey\":\"64780338-49c8-4439-7c7d-d03c2033b145\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/aeb082e484710ebf6b7a4ec5173064cc/raw\",\"divname\":\"div_hotels\"},{\"apikey\":\"64780338-49c8-4439-7c7d-d03c2033b145\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/4737228c495b09566474fa2db38fc72d/raw\",\"divname\":\"div_destinations\"},{\"apikey\":\"64780338-49c8-4439-7c7d-d03c2033b145\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/519b4223de8b44cb20c5c33212c62654/raw\",\"divname\":\"div_boards\"},{\"apikey\":\"64780338-49c8-4439-7c7d-d03c2033b145\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/0815561e9c25ce49bc416dbc73f36388/raw\",\"divname\":\"div_rooms\"},{\"apikey\":\"64780338-49c8-4439-7c7d-d03c2033b145\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/aa1be23b8c9229c8363c142036afb1f5/raw\",\"divname\":\"div_categories\"}]" >}}
{{< graphiql-styles >}}


## Destinations

Destinations Query returns a list of static data about destinations for a supplier access. By default, if you don’t set any destination codes, you will receive all the codes. As it is the case with the Query Hotels, you will be able to receive subsequent pages of destinations by filling in the continuation token field. It is possible that you filter by language and you receive the texts only in the language specified by parameter in [DestinationData](/hotel-x/reference/objects/destinationdata/) /texts/languages.

#### Playground Samples

* Destinations
{{< graphiql-tags tag="div_destinations" >}}
