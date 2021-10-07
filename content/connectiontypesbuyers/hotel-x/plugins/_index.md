+++
title = "Plugins"
pagetitle = "Plugins"
description = "Additional logic to your Connection"
icon = "fa-puzzle-piece"
weight = 6
alwaysopen = false
isDirectory = false
+++
 `Plugins` are the _secret sauce_ of the [HotelX](/hotel-x/) API. Think of plugins as features that will introduce at a **request** level all the business logic you normally would have had to implement on your side. These plugins can be used to fully customize the request and response in any way you wish, and can be added as your business grows and evolves. No need to aggregate responses now that you only have a few suppliers live? No problem. With Hotel-X, it's easy to add this feature once your business needs it.

[HotelX](/hotel-x/) Plugins are a separate Go application that get compiled into the main application and run natively in our servers. Plugins are specified at the request level, or be configured by default.

Below is the list of `Plugins` TravelgateX has already developed. Got a suggestion? Head to our [TGX Community](https://community.travelgatex.com/)

{{%custom-children%}}
