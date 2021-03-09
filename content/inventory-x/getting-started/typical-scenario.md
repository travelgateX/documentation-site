+++
title = "Typical Scenarios"
pagetitle = "Typical Scenarios"
description = "Typical workflow explained"
icon = "fa-sitemap" 
weight = 2
alwaysopen = false
isDirectory = false
+++

# Typical use case of message exchange flow between Providers and Sellers can be resumed as:

## Synchronize Hotelier product:

1.  Providers retrieve static inventory (Hotel/Rate Plans/Rooms) from
    Seller using **HotelRatePlanInventoryRetrieve** in order to map
    Hotelier inventory into their system.

2.  Providers Push/Notif Rate Plan information to Seller using
    **HotelRatePlanNotif** in order to synchronize Hotelier rates.

3.  Providers Push/Notif Availability information to Seller using
    **HotelAvailNotif** in order to synchronize Hotelier availability.

## Synchronize Bookings (Confirmations / Cancellations):

1.  XTG can Push/Notify reservations and cancellations to Providers using **HotelResNotif** and **CancelNotif**.

2.  Providers can retrieve reservations using **HotelResRetrieve**.

3.  Use both systems as described above.

## Optionally, check if synchronization is correct:

1.  Providers retrieve dynamic rates using **HotelRatePlanRetrieve**.

2.  Providers retrieve availability using **HotelAvailRetrieve**.

