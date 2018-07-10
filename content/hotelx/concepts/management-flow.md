+++
title = "Management Flow"
pagetitle = ""
description = "Learn about Management Flow. Cancellations and Booking List"
icon = "fa-calendar-times-o"
weight = 4
alwaysopen = false
+++

On this page you will learn how to manage and control bookings and management flow. Managing operations can be used in order to operate above Seller's bookings.

## Cancellation

Performs a Seller [booking](/hotelx/quickstart/#cancel) cancellation.

### Operation

```json
{

  "mutation": {

    "hotelX": {

      "cancel": {

      }

    }

  }

}
```

### PlayGround Samples

* [cancel](https://graphqlbin.com/68LYhr) 


## Booking

Performs a seller booking list.

In this case you can search the bookings with references or by dates, the dates can be arrival dates or booking dates.


### Operation

```json
{

  "query": {

    "hotelX": {

      "booking": {

      }

    }

  }

}
```

### PlayGround Samples

* [booking](https://www.graphqlbin.com/0RvEU2) 
