{
"title": "Quote",
"pagetitle": "Booking process - Quote",
"description": "How to valuate an availability option",
"icon": "fa-exchange",
"weight": 4,
"alwaysopen": false,
"default_ak": "64780338-49c8-4439-7c7d-d03c2033b145",
"default_user": "",
"gists": [
    {
        "n":"1 Room",
        "g":"666b32bc15f794d941a0549f56576994",
        "o":["graphiql"],
        "u":"tgx-bot",
        "ak":"64780338-49c8-4439-7c7d-d03c2033b145"
    }, 
    {
        "n":"2 Rooms",
        "g":"22146f0cf8f73939e0a55c0274def86c",
        "o":["graphiql"],
        "u":"tgx-bot",
        "ak":"64780338-49c8-4439-7c7d-d03c2033b145"
    }
        ]
}

Quote is an operation used to assess and valuate the rate before the actual booking. It returns the same information as the Search response for a hotel rate with up-to-date price, along with additional information regarding the rate: rate breakdown and cancellation policies.

## Advanced criteria
It explains different parameters that can be set up in the request (it indicates which ones are mandatory)

- **optionRefId**: Identifier of the option chosen in Search. Mandatory
- **language**: Language to be used in the request

## How to request 
Here you can find 2 examples of how to valuate an availability option, one for 1 room and the other one for multi-room. </br>

{{% graphiql-tabs %}}

666b32bc15f794d941a0549f56576994
Please, bear in mind that you should place on _optionRefId_ field the value from the **_id_** field of the option you want to valuate from availability.
/666b32bc15f794d941a0549f56576994

22146f0cf8f73939e0a55c0274def86c
Please, bear in mind that you should place on _optionRefId_ field the value from the **_id_** field of the option you want to valuate from availability.
/22146f0cf8f73939e0a55c0274def86c

{{% /graphiql-tabs %}}

{{< graphiql-styles >}}
{{% graphiql-script-tabs %}}

## Please, bear in mind

{{% alert theme="danger" %}}
Please, bear in mind that there are some **mandatory data** you should include at this step:

-  <u>__Cancellation policies__</u>: _Within the cancelPolicy structure response there is a **refundable** field. If this field is filled in with false, it means that the room has 100% cancellation cost, so the room is non-refundable._
-  <u>__Remarks__</u>
-  <u>__Taxes__</u>
{{% /alert %}}
