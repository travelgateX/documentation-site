---
title: Typical Exchange Message Scenario
keywords: hotel-push, messages, messages files, typical scenario
search: Hotel-Push - MessagesFiles - Typical Exchange Message Scenario
sidebar: mydoc_sidebar
permalink: /docs/hotel-push/messages-files/typical-scenario
---

Typical use case of message exchange flow between Providers and Sellers
can be resumed as:

1.  **Synchronize Hotelier product**:

    > 1.  Providers retrieve static inventory (Hotel/Rates/Rooms) from
    >     Seller using HotelRatePlanInventoryRetrieve in order to map
    >     Hotelier inventory into its system.
    > 2.  Providers Push/Notif Rate information to Seller using
    >     HotelRatePlanNotif in order to synchronize Hotelier rates.
    > 3.  Providers Push/Notif Availability information to Seller using
    >     HotelAvailNotif in order to synchronize Hotelier availability.

2.  **Synchronize Bookings (Confirmations / Cancellations):**

    > 1.  Sellers can Push/Notify reservations to Providers using
    >     Provider native specification (Specification should be
    >     provided to XMLTravelGate).
    > 2.  Providers can retrieve reservations using HotelRatePlanNotif.
    > 3.  Use both systems described above.

3.  **Optionally, check if synchronization is correct:**

    > 1.  Providers retrieve dynamic rates and availability using
    >     HotelRatePlanRetrieve and HotelAvailRetrieve.
    > 2.  Providers retrieve valuated availability using HotelAvail
    >     (Currently this functionality is available only in Seller's
    >     extranet)


