+++
title = "Product Load Messages"
pagetitle = "Product Load Messages"
description = "Messages to load product"
icon = "fa-upload"
weight = 2
alwaysopen = false
isDirectory = false
+++

Providers need to implement HotelRatePlanNotif and HotelAvailNotif messages in order to synchronize hotelier rates and availability. Optionally Providers can read all the properties of their product loaded on our system using HotelAvailRetrieve and HotelRatePlanRetrieve messages.

{{% alert theme="info" %}}
You can find the authentication method for this messages [here](/connectiontypessellers/hotelpushsellers/api-reference/messages/set-up/authentication/)
{{% /alert %}}

{{%custom-children%}}
