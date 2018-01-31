+++
title = "Management Flow"
pagetitle = ""
description = "Learn about Management Flow. Cancellations and Booking List"
weight = 4
alwaysopen = false
+++

On this page you will learn how to manage and control bookings and management flow. Managing operations can be used in order to operate above Seller's bookings.

## Cancellation

Performs a Seller [booking](/product/connectx/hotel/concepts/book-transactions/#book) cancellation.

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

Performs a Seller booking list or detail.

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
