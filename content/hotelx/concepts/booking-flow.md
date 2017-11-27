+++
title = "Booking Flow"
pagetitle = "Search. Quote. Book."
description = "Learn about Transactional Booking flow. Search, Quote and Confirm Reservation"
weight = 3
alwaysopen = false
+++

[Search](#search), [Quote](#quote) and [Book](#book) transactions must be executed sequentally in order to book hotel rooms in a Seller.

## Search
Performs an hotel availability search over 1 or more [Seller accesses](/admin/resources/common-resources/#accesses)

Depending Seller, search operations implitiy use supplier's cache.

### Operation
```json
{
  "query": {
    "search": {
      "hotel": {
      }
    }
  }
}
```

### PlayGround Samples
* [search](https://graphqlbin.com/JYRtB)


## Quote
Performs an hotel quote over an option returned in Search Response.

### Operation
```json
{
  "query": {
    "quote": {
      "hotel": {
      }
    }
  }
}
```

### PlayGround Samples
* [quote](https://graphqlbin.com/JYRtB)


## Book
Performs a book or reservation over an option returned in Quote Response

### Operation
```json
{
  "mutation": {
    "hotelBook": {
    }
  }
}
```

### PlayGround Samples
* [hotelBook](https://graphqlbin.com/JYRtB)
