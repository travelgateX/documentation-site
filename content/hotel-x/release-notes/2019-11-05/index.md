+++
title = "Changelog 2019-11-05"
pagetitle = "Changelog 2019-11-05"
description = "Contains an accurated, chronologically-ordered list of notable changes"
weight = 2
icon="fa-exchange"
svgicon="https://media.graphcms.com/7k0GtZyQn6QDcolRhnuQ"
alwaysopen = false
hidden = false
date = 2019-11-05
tags = ["products-changelog"]
+++

## 2019-11-05
{{% release-notes-container type="a"%}}
- New fields keys in Aggregation Plugin ("binding" and "refundable"). More information about Aggregation Plugin [here](https://docs.travelgatex.com/hotel-x/plugins/aggregation/). 

~~~json
{
    "plugins": {
        "step": "RESPONSE_OPTION/RESPONSE",
        "pluginsType": [
            {
                "type": "AGGREGATION",
                "name": "cheapest_price",
                "parameters": [
                    {
                        {"key": "primaryKey","value": "hotel,supplier,room,refundable,binding"}
                    }
                ]
            }
        ]
    }
}
~~~

{{% /release-notes-container %}}

{{% release-notes-container type="f"%}}
- Field "hotel" in Booking query. Now, this field indicates the locator provided by the hotel (just in case the supplier returns it).

~~~json
query {
  hotelX {
    booking(criteria: {
    accessCode: "422",
    language: "en",
    references: {
      currency: "EUR",
      hotelCode: "1",
      references: [
        {
          client: "Demo_Client",
          supplier: "HOTELTEST"
        }
      ]
    },
     typeSearch: REFERENCES},
			settings: {client:"Demo_Client", testMode: true}) 
    {
      bookings {
        reference {
          client
          hotel
          supplier
        }
      }
    }
  }
}
~~~

{{% /release-notes-container %}}

{{% release-notes-container type="f"%}}
- Internal improvements.

{{% /release-notes-container %}}