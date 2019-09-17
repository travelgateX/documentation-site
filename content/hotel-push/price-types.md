---
title: Price Charging Types
keywords: hotel-push, price charging types, types
search: Hotel-Push - Price Charging Types
sidebar: mydoc_sidebar
icon : fa-money
aliases: [/legacy/docs/hotel-push/price-types]
permalink: /docs/hotel-push/price-types
---

Three price charging types are allowed: price per Room, price per Pax
and price per Occupancy. When more than one price is charged for the
same day, the lowest price will be returned as available price.

-   **Price per Room**

When a price is charged per Room, it means that **all occupancies** allowed
in the room will have the **same price**. If "AdditionalGuestAmount" are
charged for occupancies over the standard occupancy, they will be
applied.

Please, see section 7.4.3.2. HotelRatePlanNotif for calculation examples
and for charging specifications.

-   **Price per Pax**

When a price is charged per Pax, it means that the **price** is for the
**number of guests specified**.

If the number of guests is equal or below the standard occupancy, the price
returned will be the same as the price charged. If the number of guests is
over the standard occupancy, then the price is calculated from the standard
occupancy price and the "AdditionalGuestAmount" is charged.

Please, see section 7.4.3.2. HotelRatePlanNotif for calculation examples
and for charging specifications.

-   **Price per Occupancy**

When a price is charged per Occupancy, it means that this price will
**only** be available **for the specified occupancy**. No
"AdditionalGuestAmount" are applied.

Please, see section 7.4.3.2. HotelRatePlanNotif for calculation examples
and for charging specifications.


