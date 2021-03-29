+++
title = "Channel Manager Typical Scenario"
pagetitle = "Channel Manager Typical Scenario"
description = "Typical Channel Manager workflow explained"
icon = "fa-sitemap" 
weight = 2
alwaysopen = false
isDirectory = false
+++

# Typical use case of message exchange flow between Channel Manager and Inventory can be resumed as:

## Synchronize Hotelier product:

1.  Channel Managers retrieve static inventory (Hotel/Rate Plans/Rooms) from
    Inventory using **HotelRatePlanInventoryRetrieve** in order to map
    hotelier inventory into their system.

2.  Channel Managers Push/Notif Rate Plan information to Inventory using
    **HotelRatePlanNotif** in order to synchronize hotelier rates.

3.  Channel Managers Push/Notif Availability information to Inventory using
    **HotelAvailNotif** in order to synchronize hotelier availability/allotment.


## Synchronize Bookings (Confirmations / Cancellations):

1.  Inventory can Push/Notify reservations and cancellations to Channel Managers using **HotelResNotif** and **CancelNotif**.

2.  Channel Managers can retrieve reservations using **HotelResRetrieve**.

3.  Use both systems as described above.


## Optionally, check if synchronization is correct:

1.  Channel Managers are able to retrieve dynamic rates using **HotelRatePlanRetrieve**.

2.  Channel Managers are able to retrieve availability using **HotelAvailRetrieve**.

