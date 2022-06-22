+++
title = "Transfers"
pagetitle = "Transfers"
description = "Add Transfer options back and forth the Hotel from nearby Airports"
icon = "fa-cog"
weight = 3
alwaysopen = false
+++

This solution lets you add transfer options from hotels and nearby airports to your hotel shopping flow with minimum effort.

## What does it do? {#transfers}

We use the Hotel geolocation to identify nearby airports, look for available transfers with our connected providers and return them in the [Quote](/connectiontypesbuyers/hotel-x/methods/bookingflow/quote/) response, within the GraphQL Extensions section.

## How to implement it?

As a Buyer, you'll need to be connected to our latest API, [Hotel-X](/connectiontypesbuyers/hotel-x/). From there, in just a few steps you can start booking one-way or round-trip transfers as an added value to your hotel offering.

1. Obtain your development and/or production **API Key** from Servantrip and share it with us.
2. Start a **Hotel Search as you normally would**.
3. Without changes in the **Hotel Quote** request, you will receive a **list of available transfers** back and forth to the selected hotel from nearby airports.
4. In **Hotel Book** we need the **Transfer Option Identifier**, returned in step (3), plus the flight number and contact details (email and phone) to successfully complete the booking process.


{{% alert theme="info" %}}
The reason the final client's contact details are mandatory is so that the transfer company can be aware of any changes to the booking.
{{% /alert %}}

## Workflow example

{{% alert theme="info" %}}
This workflow assumes that you have previously activated the Hotel+Transfer feature.
{{% /alert %}}

### Search
No changes are required in this step.

### Quote

You don’t have to add anything to your current structure as we will use the hotel geolocation to identify nearby airports as well as the check-in and check-out dates for arrival and departure respectively, and also the number of guests will determine the passengers to transfer.

Within the current hotel information, you will find a list of transfer options which includes information about the pick-up and drop-off locations, images, vehicle types, price, cancellation policies, paxes and baggage limits. This information is in the GraphQL Extensions section of the response.

Every transfer option comes with an OptionId that uniquely identifies the product. This identifier will be required to book a transfer in the book step.

This is the response structure (removed data information for brevity):

```json
{
  "data": {},
  "extensions": {
    "appStore": {
      "apps": [{
          "code": "ProviderTransfersApp",
          "schema": "AppSchemaTransferSearch",
          "data": {
            "language": "en",
            "country": "GB",
            "locations": [{
                "code": "ChIJAQAAANAxQg0R786FD-old24",
                "name": "(MAD) Madrid-Barajas Adolfo Suárez Airport (MAD), Avenida de la Hispanidad, Madrid, Spain"
              }, {
                "code": "GhIJzt-EQgQ0REARJAFqatlaDcA",
                "name": "Claridge Madrid"
              }
            ],
            "transfers": [{
                "pickupCode": "ChIJAQAAANAxQg0R786FD-old24",
                "dropoffCode": "GhIJzt-EQgQ0REARJAFqatlaDcA",
                "name": "Shared Shuttle Transfer",
                "image": "https://media.imagebank.com/resources/img/shared.png",
                "vehicle": "Mercedes Sprinter, Volkswagen Transporter or similar",
                "options": [{
                    "optionId": "VkZVNE5rNXRTVEJhYWxGNVdsUkZkRTVVWXpGYWFUQXdUbXBuZDB4VWF6UlBWMVYwV1dwQmVWbDZWbTFQUjBVeldWZE5lRmg2UVhSUk1FVXhVa1ZaZWsxRVRrVlBWRWt3V0hwRmQwMUVSVDA9fDQyLjY4fDIwMjItMDctMTVUMDA6MDA6MDAuMDAwMDAwMCswMjowMA==",
                    "price": {
                      "currency": "EUR",
                      "net": 42.68
                    },
                    "tags": ["shared", "meet_point", "stops_in_between", "refundable", "no_weelchair_adapted", "no_green_friendly"],
                    "paxLimit": 99,
                    "baggage": [{
                        "type": "standard_suitcase",
                        "quantity": 3
                      }
                    ],
                    "cancelPolicy": {
                      "refundable": true,
                      "cancelPenalties": [{
                          "deadline": "2022-07-14T00:00:00+02:00",
                          "penaltyType": "percentage",
                          "amount": 100.0
                        }
                      ]
                    }
                  }, {
                    "optionId": "VkZVNE5rNXRTVEJhYWxGNVdsUkZkRTVVWXpGYWFUQXdUbXBuZDB4VWF6UlBWMVYwV1dwQmVWbDZWbTFQUjBVeldWZE5lRmg2UVhSVFJVcElWV3BSTUZGVVFrVlNhazE0V0hwRmQwMUVSVDA9fDQ3Ljc0fDIwMjItMDctMTVUMDA6MDA6MDAuMDAwMDAwMCswMjowMA==",
                    "price": {
                      "currency": "EUR",
                      "net": 47.74
                    },
                    "tags": ["meet_point", "direct_ride", "refundable", "no_weelchair_adapted", "shared", "green_friendly"],
                    "paxLimit": 99,
                    "baggage": [{
                        "type": "standard_suitcase",
                        "quantity": 3
                      }
                    ],
                    "cancelPolicy": {
                      "refundable": true,
                      "cancelPenalties": [{
                          "deadline": "2022-07-14T00:00:00+02:00",
                          "penaltyType": "percentage",
                          "amount": 100.0
                        }
                      ]
                    }
                  }
                ]
              }, {
                "pickupCode": "ChIJAQAAANAxQg0R786FD-old24",
                "dropoffCode": "GhIJzt-EQgQ0REARJAFqatlaDcA",
                "name": "Private Standard SUV",
                "image": "https://media.imagebank.com/resources/img/SUV_Standard.png",
                "vehicle": "Ford Eco Sport or similar",
                "options": [{
                    "optionId": "VkZVNE5rNXRTVEJhYWxGNVdsUkZkRTVVWXpGYWFUQXdUbXBuZDB4VWF6UlBWMVYwV1dwQmVWbDZWbTFQUjBVeldWZE5lRmg2UVhSTlZGWkhUMFZaTkU5VlVrSlNhMDB6V0hwRmQwMUVTVDA9fDIxOS43OHwyMDIyLTA3LTE1VDAwOjAwOjAwLjAwMDAwMDArMDI6MDA=",
                    "price": {
                      "currency": "EUR",
                      "net": 219.78
                    },
                    "tags": ["private", "direct_ride", "refundable", "no_weelchair_adapted", "no_green_friendly", "meet_greet"],
                    "paxLimit": 4,
                    "baggage": [{
                        "type": "standard_suitcase",
                        "quantity": 4
                      }
                    ],
                    "cancelPolicy": {
                      "refundable": true,
                      "cancelPenalties": [{
                          "deadline": "2022-07-14T00:00:00+02:00",
                          "penaltyType": "percentage",
                          "amount": 100.0
                        }
                      ]
                    }
                  }
                ]
              }, {
                "pickupCode": "ChIJAQAAANAxQg0R786FD-old24",
                "dropoffCode": "GhIJzt-EQgQ0REARJAFqatlaDcA",
                "name": "Private Business SUV ",
                "image": "https://media.imagebank.com/resources/img/SUV_business.png",
                "vehicle": "Toyota RAV4 or similar",
                "options": [{
                    "optionId": "VkZVNE5rNXRTVEJhYWxGNVdsUkZkRTVVWXpGYWFUQXdUbXBuZDB4VWF6UlBWMVYwV1dwQmVWbDZWbTFQUjBVeldWZE5lRmg2UVhSTlZGWkhUMFZaTkU5VlVrSlNhMDB6V0hwRmQwMUVXVDA9fDI2Ny40OXwyMDIyLTA3LTE1VDAwOjAwOjAwLjAwMDAwMDArMDI6MDA=",
                    "price": {
                      "currency": "EUR",
                      "net": 267.49
                    },
                    "tags": ["private", "direct_ride", "refundable", "no_weelchair_adapted", "no_green_friendly", "meet_greet"],
                    "paxLimit": 4,
                    "baggage": [{
                        "type": "standard_suitcase",
                        "quantity": 4
                      }
                    ],
                    "cancelPolicy": {
                      "refundable": true,
                      "cancelPenalties": [{
                          "deadline": "2022-07-14T00:00:00+02:00",
                          "penaltyType": "percentage",
                          "amount": 100.0
                        }
                      ]
                    }
                  }
                ]
              }, {
                "pickupCode": "GhIJzt-EQgQ0REARJAFqatlaDcA",
                "dropoffCode": "ChIJAQAAANAxQg0R786FD-old24",
                "name": "Private Standard SUV",
                "image": "https://media.imagebank.com/resources/img/SUV_Standard.png",
                "vehicle": "Ford Eco Sport or similar",
                "options": [{
                    "optionId": "VkZWTk5rNXRTVEJhYWxGNVdsUkZkRTVVWXpGYWFUQXdUbXBuZDB4VWF6UlBWMVYwV1dwQmVWbDZWbTFQUjBVeldWZE5lRmg2UlhSTlZGWkhUMFZaTkU5VlVrSlNhMDB6V0hwRmQwMUVTVDA9fDE3NC40OXwyMDIyLTA3LTE5VDIxOjAwOjAwLjAwMDAwMDArMDI6MDA=",
                    "price": {
                      "currency": "EUR",
                      "net": 174.49
                    },
                    "tags": ["private", "direct_ride", "refundable", "no_weelchair_adapted", "no_green_friendly", "meet_greet"],
                    "paxLimit": 4,
                    "baggage": [{
                        "type": "standard_suitcase",
                        "quantity": 4
                      }
                    ],
                    "cancelPolicy": {
                      "refundable": true,
                      "cancelPenalties": [{
                          "deadline": "2022-07-18T21:00:00+02:00",
                          "penaltyType": "percentage",
                          "amount": 100.0
                        }
                      ]
                    }
                  }
                ]
              }, {
                "pickupCode": "GhIJzt-EQgQ0REARJAFqatlaDcA",
                "dropoffCode": "ChIJAQAAANAxQg0R786FD-old24",
                "name": "Private Minibus",
                "image": "https://media.imagebank.com/resources/img/Minibus.png",
                "vehicle": "Medium size bus",
                "options": [{
                    "optionId": "VkZWTk5rNXRTVEJhYWxGNVdsUkZkRTVVWXpGYWFUQXdUbXBuZDB4VWF6UlBWMVYwV1dwQmVWbDZWbTFQUjBVeldWZE5lRmg2UlhSTlZGWkhUMFZaTkU5VlVrSlNhMDB6V0hwRmQwMUVVVDA9fDE3NC40OXwyMDIyLTA3LTE5VDIxOjAwOjAwLjAwMDAwMDArMDI6MDA=",
                    "price": {
                      "currency": "EUR",
                      "net": 174.49
                    },
                    "tags": ["private", "direct_ride", "refundable", "no_weelchair_adapted", "no_green_friendly", "meet_greet"],
                    "paxLimit": 16,
                    "baggage": [{
                        "type": "standard_suitcase",
                        "quantity": 16
                      }
                    ],
                    "cancelPolicy": {
                      "refundable": true,
                      "cancelPenalties": [{
                          "deadline": "2022-07-18T21:00:00+02:00",
                          "penaltyType": "percentage",
                          "amount": 100.0
                        }
                      ]
                    }
                  }, {
                    "optionId": "VkZWTk5rNXRTVEJhYWxGNVdsUkZkRTVVWXpGYWFUQXdUbXBuZDB4VWF6UlBWMVYwV1dwQmVWbDZWbTFQUjBVeldWZE5lRmg2UlhSUk1FVXhVa1ZaZWsxRVRrVlBWRWt3V0hwRmQwMUVZejA9fDE2NC42MXwyMDIyLTA3LTE5VDIxOjAwOjAwLjAwMDAwMDArMDI6MDA=",
                    "price": {
                      "currency": "EUR",
                      "net": 164.61
                    },
                    "tags": ["private", "meet_greet", "direct_ride", "refundable", "no_weelchair_adapted", "no_green_friendly"],
                    "paxLimit": 16,
                    "baggage": [{
                        "type": "standard_suitcase",
                        "quantity": 16
                      }
                    ],
                    "cancelPolicy": {
                      "refundable": true,
                      "cancelPenalties": [{
                          "deadline": "2022-07-18T21:00:00+02:00",
                          "penaltyType": "percentage",
                          "amount": 100.0
                        }
                      ]
                    }
                  }
                ]
              }, {
                "pickupCode": "GhIJzt-EQgQ0REARJAFqatlaDcA",
                "dropoffCode": "ChIJW4P2yGM2Qg0RzCE_hCcBIKg",
                "name": "Private Premium Sedan",
                "image": "https://media.imagebank.com/resources/img/Transfer-Premium.png",
                "vehicle": "Mercedes S class, Audi A8 or similar",
                "options": [{
                    "optionId": "VkZWTk5rNXRTVEJhYWxGNVdsUkZkRTVVWXpGYWFUQXdUbXBuZDB4VWF6UlBWMVYwV1dwQmVWbDZWbTFQUjBVeldWZE5lRmg2VFhSTlZGWkhUMFZaTkU5VlVrSlNhMDB6V0hwRmQwMUVaejA9fDE5LjQ1fDIwMjItMDctMjBUMDA6MDA6MDAuMDAwMDAwMCswMjowMA==",
                    "price": {
                      "currency": "EUR",
                      "net": 19.45
                    },
                    "tags": ["private", "direct_ride", "refundable", "no_weelchair_adapted", "no_green_friendly", "meet_greet"],
                    "paxLimit": 6,
                    "baggage": [{
                        "type": "standard_suitcase",
                        "quantity": 5
                      }
                    ],
                    "cancelPolicy": {
                      "refundable": true,
                      "cancelPenalties": [{
                          "deadline": "2022-07-19T00:00:00+02:00",
                          "penaltyType": "percentage",
                          "amount": 100.0
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

Once you have selected the required transfer options you need to include the corresponding option identifiers in the Book Mutation.

Within the HotelXMutation.Book there is a property called [**AppsInput**](/connectiontypesbuyers/hotel-x/reference/inputobjects/appsinput/) which lets you add information required to confirm the service.

For example, to book a round-trip transfer you must specify two appsInput, one for arrival and another one for departure.

This is an example of the variable structure:

```json
{
  "appsInput": [{
      "where": {
        "code": "TransfersApp"
      },
      "data": {
        "parameters": [{
            "key": "OptionId",
            "value": "VkZVNE5rNXRTVEJhYWxGNVdsUkZkRTVVWXpGYWFUQXdUbXBuZDB4VWF6UlBWMVYwV1dwQmVWbDZWbTFQUjBVeldWZE5lRmg2UVhSTlZGWkhUMFZaTkU5VlVrSlNhMDB6V0hwRmQwMUVTVDA9fDIxOS43OHwyMDIyLTA3LTE1VDAwOjAwOjAwLjAwMDAwMDArMDI6MDA="
          }, {
            "key": "FlightNumber",
            "value": "IB475"
          }
        ]
      }
    }, {
      "where": {
        "code": "TransfersApp"
      },
      "data": {
        "parameters": [{
            "key": "OptionId",
            "value": "VkZWTk5rNXRTVEJhYWxGNVdsUkZkRTVVWXpGYWFUQXdUbXBuZDB4VWF6UlBWMVYwV1dwQmVWbDZWbTFQUjBVeldWZE5lRmg2UlhSTlZGWkhUMFZaTkU5VlVrSlNhMDB6V0hwRmQwMUVTVDA9fDE3NC40OXwyMDIyLTA3LTE5VDIxOjAwOjAwLjAwMDAwMDArMDI6MDA="
          }, {
            "key": "FlightNumber",
            "value": "IB473"
          }
        ]
      }
    }
  ]
}
```

Additionally, in order to book Hotel + transfer, it is necessary to include all the [**holder's**](/connectiontypesbuyers/hotel-x/reference/inputobjects/holderInput/) information:

```json
{
  "holder": {
    "name": "John",
    "surname": "Doe",
    "contactInfo": {
      "phone": {
        "countryCode": "+34",
        "number": "123456789"
      },
      "email": "john@doe.com"
    }
  }
}
```

A successful response looks like this:

```json
{
  "data": {},
  "extensions": {
    "appStore": {
      "apps": [{
          "code": "ProviderTransfersApp",
          "schema": "AppSchemaTransferBook",
          "data": {
            "status": "ok",
            "reference": {
              "bookingId": "EAFF6E46"
            },
            "holder": {
              "name": "John",
              "surname": "Doe",
              "email": "john@doe.com",
              "phone": {
                "countryCode": "+34",
                "number": "123456789"
              }
            },
            "transfers": [{
                "pickupWhen": "2022-07-15T00:00:00",
                "pickupLocation": "(MAD) Madrid-Barajas Adolfo Suárez Airport (MAD), Avenida de la Hispanidad, Madrid, Spain",
                "dropoffLocation": "Claridge Madrid",
                "options": [{
                    "contact": {
                      "Emergency Phone": "+34 911 23 34 92"
                    },
                    "instructions": "After collecting your luggage, please make your way to the arrival hall using any of the available exits. Your name will be displayed on a TransferProvider sign. In case you cannot find your driver please contact him directly using the mobile number sent to you via SMS or use our Self Service Centre. Your driver will start waiting for you 550 minutes after flight arrival. The included free waiting time from then onward is 45 minutes.",
                    "optionId": null,
                    "provider": {
                      "name": "TransferProvider",
                      "image": "https://media.imagebank.com/resources/img/providers/logos/providerlogo_15F8F89DAFC7.png"
                    },
                    "price": {
                      "currency": "EUR",
                      "net": 219.78
                    },
                    "tags": ["private", "direct_ride", "refundable", "no_weelchair_adapted", "no_green_friendly", "meet_greet"],
                    "paxLimit": 0,
                    "baggage": [{
                        "type": "standard_suitcase",
                        "quantity": 4
                      }
                    ],
                    "cancelPolicy": {
                      "refundable": true,
                      "cancelPenalties": [{
                          "deadline": "2022-07-14T00:00:00+02:00",
                          "penaltyType": "percentage",
                          "amount": 100.0
                        }
                      ]
                    }
                  }
                ],
                "pickupCode": "ChIJAQAAANAxQg0R786FD-old24",
                "dropoffCode": "GhIJzt-EQgQ0REARJAFqatlaDcA",
                "name": "Private Standard SUV",
                "image": "https://media.imagebank.com/resources/img/SUV_Standard.png",
                "vehicle": "Ford Eco Sport or similar"
              }, {
                "pickupWhen": "2022-07-19T00:00:00",
                "pickupLocation": "Claridge Madrid",
                "dropoffLocation": "(MAD) Madrid-Barajas Adolfo Suárez Airport (MAD), Avenida de la Hispanidad, Madrid, Spain",
                "options": [{
                    "contact": {
                      "Emergency Phone": "+34 911 23 34 92"
                    },
                    "instructions": "The driver will wait for you in front of the building that you have indicated as your pick-up point. In case you cannot find your driver, please contact him directly using the mobile number sent to you via SMS or use our Self Service Centre.",
                    "optionId": null,
                    "provider": {
                      "name": "TransferProvider",
                      "image": "https://media.imagebank.com/resources/img/providers/logos/providerlogo_15F8F89DAFC7.png"
                    },
                    "price": {
                      "currency": "EUR",
                      "net": 174.49
                    },
                    "tags": ["private", "direct_ride", "refundable", "no_weelchair_adapted", "no_green_friendly", "meet_greet"],
                    "paxLimit": 0,
                    "baggage": [{
                        "type": "standard_suitcase",
                        "quantity": 4
                      }
                    ],
                    "cancelPolicy": {
                      "refundable": true,
                      "cancelPenalties": [{
                          "deadline": "2022-07-18T00:00:00+02:00",
                          "penaltyType": "percentage",
                          "amount": 100.0
                        }
                      ]
                    }
                  }
                ],
                "pickupCode": "GhIJzt-EQgQ0REARJAFqatlaDcA",
                "dropoffCode": "ChIJAQAAANAxQg0R786FD-old24",
                "name": "Private Standard SUV",
                "image": "https://media.imagebank.com/resources/img/SUV_Standard.png",
                "vehicle": "Ford Eco Sport or similar"
              }
            ]
          }
        }
      ]
    }
  }
}

```

### Booking

If you need to retrieve the booked transfer information you can use the Booking List Query sending the reference of every transfer previously booked.

The [**AppsInput**](/connectiontypesbuyers/hotel-x/reference/inputobjects/appsinput/) property lets you include the Transfer Booking Identifiers using variables as follows:

```json
{
  "appsInput": [
    {
      "where": {
        "code": "TransfersApp"
      },
      "data": {
        "parameters": [
          {
            "key": "BookingId",
            "value": "EAFF6E46"
          }
        ]
      }
    }
  ]
}
```

>The response structure is the same as the book response.

### Cancel

To cancel a transfer book use the following structure including **BookingId** and **CancelReason**.

```json
{
  "appsInput": [
    {
      "where": {
        "code": "TransfersApp"
      },
      "data": {
        "parameters": [
          {
            "key": "BookingId",
            "value": "EAFF6E46"
          },
          {
            "key": "CancelReason",
            "value": "I will travel on other dates."
          }
        ]
      }
    }
  ]
}
```

>The response structure is the same as the book response.

You can see that status has the value "cancelled".