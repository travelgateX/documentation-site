+++
title = "Plugins"
pagetitle = "Plugins"
description = "Additional logic to your Connection"
icon = "fa-puzzle-piece"
weight = 6
alwaysopen = false
isDirectory = false
+++
[HotelX](/hotel-x/) `Plugins` are the _secret sauce_ of the [HotelX](/hotel-x/) API. They can be used to fully customize the request and response in any way you wish.

[HotelX](/hotel-x/) Plugins are a separate Go application, that get compiled into the main application and run natively in our servers.

Anyone can write a [HotelX](/hotel-x/) `Plugin`, and which `Plugins` get executed can be specified at the request level, or be configured by default.

Following is the list of `Plugins` TravelgateX has already developed.

{{%custom-children%}}
