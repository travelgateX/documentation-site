+++
title = "Typical Scenarios"
pagetitle = "Typical Scenarios"
description = "Workflow explained in short"
icon = "fa-sitemap" 
weight = 2
alwaysopen = false
isDirectory = false
+++

# Typical use case of message exchange flow between Providers and Sellers can be resumed as:

1.  **Synchronize Hotelier product**:

    > 1.  Providers retrieve static inventory (Hotel/Rate Plans/Rooms) from
    >     Seller using HotelRatePlanInventoryRetrieve in order to map
    >     Hotelier inventory into their system.
    > 2.  Providers Push/Notif Rate Plan information to Seller using
    >     HotelRatePlanNotif in order to synchronize Hotelier rates.
    > 3.  Providers Push/Notif Availability information to Seller using
    >     HotelAvailNotif in order to synchronize Hotelier availability.

2.  **Synchronize Bookings (Confirmations / Cancellations):**

    > 1.  Sellers can Push/Notify reservations to Providers using
    >     Provider native specification (Specification should be
    >     provided to TravelgateX).
    > 2.  Providers can retrieve reservations using HotelResRetrieve.
    > 3.  Use both systems as described above.

3.  **Optionally, check if synchronization is correct:**

    > 1.  Providers retrieve dynamic rates and availability using
    >     HotelRatePlanRetrieve and HotelAvailRetrieve.
    > 2.  Providers retrieve valuated availability using HotelAvail
    >     (Currently, this functionality is available only in the Seller's
    >     extranet).


