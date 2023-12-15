+++
title = "Booking Flow Messages"
pagetitle = "Booking Flow Messages"
description = "Booking Flow Messages"
icon = "fa-bed"
weight = 3
alwaysopen = false
isDirectory = false
+++

Providers can receive an instant API notification from TGX with HotelResNotif message for bookings and CancelNotif message for cancellations. If Provider doesn't allow push notifications to their system, it is possible to implement HotelResRetrieve messages in order to obtain a list of bookings from Inventory-X system.

{{% alert theme="info" %}}Please notice that card payments are only allowed if Provider implements HotelResNotif message{{% /alert %}}

{{%custom-children%}}
