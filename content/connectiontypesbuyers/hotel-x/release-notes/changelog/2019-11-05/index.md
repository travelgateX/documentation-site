+++
title = "Changelog 2019-11-05"
pagetitle = "Changelog 2019-11-05"
description = "Contains an accurated, chronologically-ordered list of notable changes"
weight = 2
icon="fa-exchange"
svgicon="https://media.graphcms.com/7k0GtZyQn6QDcolRhnuQ"
alwaysopen = false
hidden = true
date = 2019-11-05
tags = ["products-changelog"]
+++

## 2020-02-26
{{% release-notes-container type="a"%}}
- Now the booking and cancel services allow the user to retrieve and cancel a book with the new field returned in book response `bookingID`. You can see more details of `bookingID` in the documentation [here](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/methods/reservationmanagement/booklist/).
{{% /release-notes-container %}}

## 2020-02-25
{{% release-notes-container type="a"%}}
- Added new field `bookingID` into `Reference` (book, booking and cancel). This bookingID will be useful for booking retrieving and cancelling.
- Added new field `bookingID` into `HotelCancelInput` (cancel).
- Added new field `bookingID` into `HotelCriteriaBookingInput` (booking).
{{% /release-notes-container %}}

## 2020-02-24
{{% release-notes-container type="a"%}}
- Added `deletedAt_in`, `deletedAt_not_in`, `deletedAt_lt`, `deletedAt_lte`, `deletedAt_lte`, `deletedAt_gt` and `deletedAt_gte` fields into `HotelXHotelFilterInput`.
{{% /release-notes-container %}}

## 2020-02-24
{{% release-notes-container type="f"%}}
- Internal changes. Added field features into optionid. Some options returned in Search were not able to be priced in Quote step since for HotelX these options were exactly the same. Now these options are treated as different thanks to the field features inside the optionid.
- The search options with `RateRulesType` `PUBLIC_SERVANT` and `UNEMPLOYED` will no longer be discarted.
{{% /release-notes-container %}}

## 2020-02-05
{{% release-notes-container type="a"%}}
- We've launched a new API called `Metadata`, which allow you to retrieve the supplier information and configuration. You can see the documentation [here](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/methods/staticcontent/metadata/). We have also introduced this API to our bookingflow, which allows us to block the invalid querys (those querys that does not match with the supplier configuration in the metadata) in order to optimize the traffic.
{{% /release-notes-container %}}

## 2020-02-05
{{% release-notes-container type="c"%}}
- Internal changes. Removed field optionsQuota from optionid.
- Now the plugin `Add Parameter` will also be able to replace the parameters that share the same key inside an specific configuration. You can see the documentation [here](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/plugins/add_parameterx/).
- Internal changes. Now the field market from optionid will contain all the markets related to the option, until now it was only prepared to return a single market.
{{% /release-notes-container %}}

## 2020-12-02
{{% release-notes-container type="c"%}}
- The `Board Mapping` has been changed into a separated functionality: it has to be explicitly requested in order to indicate HotelX to map the board codes. This also allow you to chose the context in which you want to map the codes.
{{% /release-notes-container %}}

## 2020-12-02
{{% release-notes-container type="a"%}}
- We've launched a new plugin called `Amenity Map` which allows the user to retrive amenities in the hotels service using another context different that supplier context. This functionality differs with other mappings because `mapping` has to be requested in query fields, not in plugin section. You can see the documentation [here](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/plugins/mapping/).
{{% /release-notes-container %}}

## 2019-11-28
{{% release-notes-container type="a"%}}
- Added new value `PAYX` to `PaymentType` enum (search).
- We've launched a new plugin called `Virtual Credit Card Generator` which adds the possibility to create a virtual credit card at Book step, in order to pay the reservation’s import with it. You can see the documentation [here](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/plugins/vcc/).

~~~json
{
    "plugins": {
			"step": "REQUEST",
			"pluginsType": [
				{
					"type": "PRE_STEP",
					"name": "genvcc",
					"parameters": [
						{
							"key": "activationDate",
							"value": "2020-05-22"
						},
						{
							"key": "expirationDate",
							"value": "2020-05-24"
						}
					]
				}
			]
		}
}
~~~

{{% /release-notes-container %}}

## 2019-11-27
{{% release-notes-container type="a"%}}
- We've launched a new plugin called `Market Group X` that allows the user to group the Search result by markets that share the same Options. You can see the documentation [here](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/plugins/markets_groups/).

~~~json
{
    "plugins": [
			{
				"step": "REQUEST_ACCESS",
				"pluginsType": [
					{
						"name": "market_groupX",
						"type": "MARKETS_GROUP"
					}
				]
			}
		]
}
~~~

{{% /release-notes-container %}}

## 2019-11-20
{{% release-notes-container type="a"%}}
- Added new field `code` into `Surcharge`.
{{% /release-notes-container %}}

## 2019-11-05
{{% release-notes-container type="a"%}}
- New fields keys in `Aggregation Plugin` ("binding" and "refundable"). More information about Aggregation Plugin [here](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/plugins/aggregation/). 

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
- Field `hotel` in Booking query. Now, this field indicates the locator provided by the hotel (just in case the supplier returns it).

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
