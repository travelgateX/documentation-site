+++
title = "Messages"
pagetitle = "Messages"
description = "Inventory Content Service messages"
weight = 1
icon="fa-file-code-o"
alwaysopen = false
isDirectory = false
+++

## Global Details

In this section you can find the methods you need to implement to receive the content set up in Inventory:

* [Emails](#emails)


</br>

### Protocol and Headers

All requests are expected to be standard HTTP POST requests in which the POST body is the request JSON and the Content-Type header is set to ``"application/json"``.

### Settings:

All the requests have to be the following structure in order to authenticate in our system:

```json
{
    "settings": {
        "supplier": "INVENTORY SUPPLIER CODE",
        "client": "BUYER INVENTORY CODE",
        "authentication": {
            "userName": "***********",
            "password": "***********"
        },
        "timeout": "00:00:15"
    }
}
```

| **Element**	                  | **Rel** | **Type** | **Description**					                                             |
| :---------------------------- | :-----: | :------: | --------------------------------------------------------------------- |
| settings  	| 1 	    |		       | 						                                                 |
| settings/supplier  	| 1 	    |	 	String       | The inventory supplier code that you want to get the information. |
| settings/client  	| 1 	    |	 	String       | Your inventory client code. |
| settings/authentication  	| 1 	    |	 	       | |
| settings/authentication/userName  	| 1 	    |	String 	       | Your inventory user name.|
| settings/authentication/password  	| 1 	    |	String 	       | Your inventory password.|
| settings/timeout 	| 1 	    |	Time	       | The maximum time ("HH:MM:ss") that you will wait for our response.|


</br>


## Emails

In order to get all the emails set up in your hotels you can make a request to https://inventory-client.travelgate.com/emails

### Request
```json
{
    "criteria": {
        "hotels": [
            "HotelCode1",
            "HotelCode2"
        ]
    },
    "settings": {
        "supplier": "INVENTORY SUPPLIER CODE",
        "client": "BUYER INVENTORY CODE",
        "authentication": {
            "userName": "***********",
            "password": "***********"
        },
        "timeout": "00:00:15"
    }
}
```

| **Element**	                  | **Rel** | **Type** | **Description**					                                             |
| :---------------------------- | :-----: | :------: | --------------------------------------------------------------------- |
| criteria  	| 1 	    |		       | 						                                                 |
| criteria/hotels  	| 1 	    |	 Array String       | List of the hotel codes that you want to retrieve the emails information. |

</br>

### Response

```json
{
    "hotels": [
        {
            "code": "HotelCode1",
            "name": "Hotel One Name",
            "isActive": true,
            "mustSendNotification": true,
            "email": "hotel1@email.es",
            "emailNotification": "hotel1@email.es",
            "emailNotificationCC": "CarbonCopy@email.es",
            "emailNotificationInfo": "FromAddress@email.es"
        },
        {
            "code": "HotelCode2",
            "name": "Hotel Two Name",
            "isActive": true,
            "mustSendNotification": true,
            "email": "hotel2@email.es",
            "emailNotification": "hotel2@email.es",
            "emailNotificationCC": "CarbonCopy@email.es",
            "emailNotificationInfo": "FromAddress@email.es"
        }
    ]
}
```

| **Element**	                  | **Rel** | **Type** | **Description**					                                             |
| :---------------------------- | :-----: | :------: | --------------------------------------------------------------------- |
| hotels  	| 1 	    |		Array      | 						                                                 |
| hotels/code 	| 1 	    |	 String       | Hotel's Inventory code |
| hotels/name 	| 1 	    |	 String       | Hotel's name |
| hotels/isActive 	| 1 	    |	 Boolean       | The hotel is active (true) or not (false) in your Inventory. |
| hotels/mustSendNotification 	| 1 	    |	 Boolean       | Inventory system has to send an email notification or not.|
| hotels/email 	| 1 	    |	 Boolean       | Default list of emails between commas for this hotel.|
| hotels/emailNotification 	| 1 	    |	 String       | List of emails between commas where Inventory system send the notifications for the present hotel.|
| hotels/emailNotificationCC 	| 1 	    |	 String       | List of emails between commas where Inventory system send a carbon copy email of the notification for the present hotel.|
| hotels/emailNotificationInfo 	| 1 	    |	 String       | List of emails between commas that Inventory system use as email from address in the notifications.|

</br>

## Error response

When request provides any error, the response should look like:

```json
{
    "adviseMessages": [
        {
            "code": "BadRequest",
            "level": "Error",
            "description": "The Timeout field is required."
        }
    ]
}
```
</br>


| **Element**	                  | **Rel** | **Type** | **Description**					                                             |
| :---------------------------- | :-----: | :------: | --------------------------------------------------------------------- |
| adviseMessages | 1 | Array| |
| adviseMessages/code | 1 | String | Error code [(Check this table)](../codelists)|
| adviseMessages/level| 1 | String | The posible values are Warning, Error, Info |
| adviseMessages/description | 1 | String | Brief description of the error |

{{%custom-children%}}

