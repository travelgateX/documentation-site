---
title: Price Charging Types
keywords: hotel-push, price charging types, types
search: Hotel-Push - Price Charging Types
sidebar: mydoc_sidebar
permalink: /docs/hotel-push/price-types
---

Three price charging types are allowed: price per Room, price per Pax
and prices per Occupancy. When more than one price is charged for the
same day, the lowest price will be returned as available price.

-   **Price per Room**

When a price is charged per Room means that **all occupancies** allowed
in the room will have the **same price**. If "AdditionalGuestAmount" are
charged for occupancies over the standard occupancy, they will be
applied.

Please, see section 7.4.3.2. HotelRatePlanNotif for calculation examples
and for charging specifications.

-   **Price per Pax**

When a price is charged per Pax means that the **price** is for the
**number of guests specified**.

If number of guests is equal or under the standard occupancy, the price
returned will be the same as the price charged. If number of guests is
over the standard occupancy, then price is calculated from the standard
occupancy price and the "AdditionalGuestAmount" charged.

Please, see section 7.4.3.2. HotelRatePlanNotif for calculation examples
and for charging specifications.

-   **Price per Occupancy**

When a price is charged per Occupancy means that this price will
**only** be available **for the specified occupancy**. No
"AdditionalGuestAmount" are applied.

Please, see section 7.4.3.2. HotelRatePlanNotif for calculation examples
and for charging specifications.


