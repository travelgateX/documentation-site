+++
title = "Booking Persistence"
pagetitle = "Booking Persistence"
description = "This plugin allows to store and avoid duplicated bookings"
icon = "fa-database"
weight = 3
alwaysopen = false
+++

Booking Persistence is a plugin that allows clients to store bookings.

### What it does

Booking Persistence allows clients to store their bookings and avoid to duplicate them. Two bookings with the same client reference are considered **duplicated bookings**. With this plugin all the bookings of an organization will be unique (by clientReference). All the bookings will also be stored until the day after the checkout at the hotel.
This plugin can only be executed in **book** service.
An application/communication error during booking process will store a persistent booking with **UNKNOWN** status.
In the following bookings with same client reference, the same response will be returned. In these cases, we don't send a request to the provider and the booking is read from database.
This plugin is used for storing and retrieving the bookings. This two processes are executed transparently for the client in the booking process.
If the booking returned is a retrieved booking, the application will show a warning like this:

```json
{
  "data": {
    "hotelX": {
      "book": {
        "auditData": null,
        "booking": {
          "price": null,
          "quotePrice": null,
          "status": "BookingStatus",
          "remarks": null,
          "reference": {
            "client": "clientReference",
            "supplier": "supplierReference"
          },
          "holder": null,
          "hotel": null
        },
        "errors": null,
        "warnings": [
          {
            "code": "FETCHED_BOOKING",
            "type": "PLUGIN_WARNING",
            "description": "booking obtained by a retry"
          }
        ]
      }
    }
  }
}
```

### How to use it

Use this plugin by adding it to the [settings](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/concepts/advancedconcepts/settings/) in your HotelX Search Query.

### Workflow
![Booking Persistence Squema](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/plugins/images/BookingPersistence.png)

### Execution example

```graphql
mutation ($input: HotelBookInput!, $settings: HotelSettingsInput) {
  hotelX {
    book(input: $input, settings: $settings) {
      auditData {
        transactions {
          request
          response
        }
      }
      booking {
        price {
          currency
          net
          gross
          binding
          exchange {
            currency
            rate
          }
          markups {
            channel
            currency
            binding
            net
            gross
            exchange {
              currency
              rate
            }
            rules {
              id
              name
              type
              value
            }
          }
        }
        quotePrice {
          currency
          net
          gross
          binding
        }
        status
        remarks
        reference {
          client
          supplier
        }
        holder {
          name
          surname
        }
        hotel {
          start
          end
          hotelCode
          hotelName
          boardCode
          occupancies {
            id
            paxes {
              age
            }
          }
          rooms {
            code
            description
            occupancyRefId
            price {
              currency
              net
              gross
              binding
            }
          }
        }
      }
      errors {
        code
        type
        description
      }
      warnings {
        code
        type
        description
      }
    }
  }
}

```

```json
{
	"input": {
		"optionRefId": "optionID",
		"clientReference": "clientReference",
		"holder": {
			"name": "Name1",
			"surname": "Surname1"
		},
		"paymentCard": {
			"cardType": "VI",
			"holder": {
				"name": "Name1",
				"surname": "Surname1"
			},
			"number": "41111111111111111",
			"CVC": "778",
			"expire": {
				"month": 10,
				"year": 22
			}
		},
		"rooms": [
			{
				"occupancyRefId": 1,
				"paxes": [
					{
						"name": "Name1",
						"surname": "Surname1",
						"age": 1
					},
					{
						"name": "Name2",
						"surname": "Surname2",
						"age": 30
					}
				]
			}
		]
	},
	"settings": {
		"plugins": {
			"step": "REQUEST",
			"pluginsType": [
				{
					"name": "booking_detail_persistence",
					"type": "POST_STEP"
				}
			]
		},
		"client": "client",
		"auditTransactions": true,
		"timeout": 100000
	}
}
```

### File format

No files are needed in order to use this plugin.