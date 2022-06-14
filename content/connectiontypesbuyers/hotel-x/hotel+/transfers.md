+++
title = "Transfers"
pagetitle = "Transfers"
description = "Add Transfer options back and forth the Hotel from nearby Airports"
icon = "fa-cog"
weight = 3
alwaysopen = false
+++

Hotel + Transfers lets you add transfer options from hotel nearby airports with minimum effort. 

## What it does? {#transfers}

We use the Hotel geolocation to identify nearby airports, look for available transfers with our providers and return them in the [Quote](connectiontypesbuyers/hotel-x/methods/bookingflow/quote/) response, within the graphql extensions section.

## How to use it?

As a Buyer, you'll need to be connected to our latest API, [Hotel-X](connectiontypesbuyers/hotel-x/). From there, in just a few steps you can start booking one-way or round-trip transfers as an added value to your hotel offering.

1. **Activate** Servantrip Transfers in your organization.
2. Start a **Hotel Search as you normally would**.
3. When you make a **Hotel Quote**, you will receive a **list of available transfers** back and forth to the selected hotel from nearby airports, without changes in the Hotel Quote request.
4. In **Hotel Book** we need the **Transfer Option Identifier**, returned in step (3), plus the flight number and contact details (email and phone) to successfully complete the book.

>The reason the final client's contact details are mandatory is so that the transfer company can be aware of any changes to the booking

## Workflow example

>This workflow assumes that you have previously activated the Hotel+Transfer feature.

### Quote

You don’t have to add anything to your current structure. We will use the hotel geolocation to identify nearby airports as well as the check-in and check-out dates for arrival and departure respectively, and also the number of guests will determine the passengers to transfer.

Within the current hotel information, you will find a list of transfer options which includes information about the pick-up and drop-off locations, images, vehicle types, price, cancellation policies, paxes and baggage limits.

Every transfer option comes with an OptionId that uniquely identifies the product. This identifier will be required to book a transfer in the book step.

This is the response structure (removed data information for brevity):


```json
{
  "data": {...},
  "extensions": {
    "appStore": {
      "apps": [
        {
          "code": "ServantripTransfersApp",
          "schema": "AppSchemaTransferSearch",
          "data": {
            "language": "en",
            "country": "GB",
            "locations": [
              {
                "code": "ChIJAQAAANAxQg0R786FD-old24",
                "name": "(MAD) Madrid-Barajas Adolfo Suárez Airport (MAD), Avenida de la Hispanidad, Madrid, Spain"
              },
              {
                "code": "GhIJ9X8O8-U1REARL_Dce7ikDcA",
                "name": "CITYMAD DELUXE GRAN VIA"
              }
            ],
            "transfers": [
              {
                "pickupCode": "ChIJAQAAANAxQg0R786FD-old24",
                "dropoffCode": "GhIJ9X8O8-U1REARL_Dce7ikDcA",
                "name": "Private Standard Sedan",
                "image": "https://media.servantrip.com/resources/img/Transfer-Sedan.png",
                "vehicle": "VW Passat, Skoda Octavia or similar",
                "options": [
                  {
                    "optionId": "VkZVNE5sbHFTbWxOUkVVelRtcFJkRTVxWkdwYVV6QXdUVVJqTkV4VWJHMVpla1YwV21wTmQwOUVUVEZhVjFFMVRsZEthbGg2UVhSUFZFazBUMVJCZDFKRWEzZFBWVWswV0hwRmQwMUVSVDA9fDUyLjk1fDIwMjItMDctMjBUMDA6MDA6MDAuMDAwMDAwMCswMjowMA==",
                    "price": {
                      "currency": "EUR",
                      "net": 52.95
                    },
                    "tags": [
                      "private",
                      "meet_greet",
                      "direct_ride",
                      "refundable",
                      "no_weelchair_adapted",
                      "no_green_friendly"
                    ],
                    "paxLimit": 3,
                    "baggage": [
                      {
                        "type": "standard_suitcase",
                        "quantity": 2
                      }
                    ],
                    "cancelPolicy": {
                      "refundable": true,
                      "cancelPenalties": [
                        {
                          "deadline": "2022-07-19T00:00:00+02:00",
                          "penaltyType": "percentage",
                          "amount": 100
                        }
                      ]
                    }
                  },
                  {
                    "optionId": "VkZVNE5sbHFTbWxOUkVVelRtcFJkRTVxWkdwYVV6QXdUVVJqTkV4VWJHMVpla1YwV21wTmQwOUVUVEZhVjFFMVRsZEthbGg2UVhSTlZGWkhUMFZaTkU5VlVrSlNhMDB6V0hwRmQwMUVSVDA9fDM3LjU5fDIwMjItMDctMjBUMDA6MDA6MDAuMDAwMDAwMCswMjowMA==",
                    "price": {
                      "currency": "EUR",
                      "net": 37.59
                    },
                    "tags": [
                      "private",
                      "direct_ride",
                      "refundable",
                      "no_weelchair_adapted",
                      "no_green_friendly",
                      "meet_greet"
                    ],
                    "paxLimit": 8,
                    "baggage": [
                      {
                        "type": "standard_suitcase",
                        "quantity": 8
                      }
                    ],
                    "cancelPolicy": {
                      "refundable": true,
                      "cancelPenalties": [
                        {
                          "deadline": "2022-07-19T00:00:00+02:00",
                          "penaltyType": "percentage",
                          "amount": 100
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "pickupCode": "ChIJAQAAANAxQg0R786FD-old24",
                "dropoffCode": "GhIJ9X8O8-U1REARL_Dce7ikDcA",
                "name": "Private Economy",
                "image": "https://media.servantrip.com/resources/img/Economy.png",
                "vehicle": "Toyota Prius or similar",
                "options": [
                  {
                    "optionId": "VkZVNE5sbHFTbWxOUkVVelRtcFJkRTVxWkdwYVV6QXdUVVJqTkV4VWJHMVpla1YwV21wTmQwOUVUVEZhVjFFMVRsZEthbGg2UVhSUFZFazBUMVJCZDFKRWEzZFBWVWswV0hwRmQwMUVTVDA9fDYxLjM1fDIwMjItMDctMjBUMDA6MDA6MDAuMDAwMDAwMCswMjowMA==",
                    "price": {
                      "currency": "EUR",
                      "net": 61.35
                    },
                    "tags": [
                      "private",
                      "meet_greet",
                      "direct_ride",
                      "refundable",
                      "no_weelchair_adapted",
                      "no_green_friendly"
                    ],
                    "paxLimit": 3,
                    "baggage": [
                      {
                        "type": "standard_suitcase",
                        "quantity": 2
                      }
                    ],
                    "cancelPolicy": {
                      "refundable": true,
                      "cancelPenalties": [
                        {
                          "deadline": "2022-07-19T00:00:00+02:00",
                          "penaltyType": "percentage",
                          "amount": 100
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  }
}
```

### Book

Once you have selected the required transfer options you need to include the corresponding option identifiers into the Book Mutation.

Within the HotelXMutation.Book there is a property called **AppInput** which lets you add information required to confirm the service.

For example, to book a round-trip transfer you must specify two appInputs, one for arrival and another one for departure.

The request is as follows:


```json

```

### Status

If you need to retrieve the booked transfer information you can use the Booking List Query sending the reference of every transfer previously booked.

Within the HotelCriteriaBookingInput you will find an AppInput property which lets you include the Transfer Booking Identifiers.

```json

```

### Cancel


```json

```
