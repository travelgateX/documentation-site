+++
title = "Management Flow"
description = "Learn about Management Flow. Cancellations and Booking List"
weight = 4
alwaysopen = false
+++

Manage operations can be used in order to operate above supplier's bookings.

## Cancel
Performs a supplier [booking](/product/connectx/hotel/concepts/book-transactions/#book) cancellation.

### Operation
```json
{
  "mutation": {
    "hotelCancel": {
      }
    }
  }
}
```

### PlayGround Samples
* [hotelCancel](https://graphqlbin.com/JYRtB)


## Booking
Performs a supplier booking list or detail.

### Operation
```json
{
  "query": {
    "booking": {
      "hotel": {
      }
    }
  }
}
```

### PlayGround Samples
* [booking](https://graphqlbin.com/JYRtB)
