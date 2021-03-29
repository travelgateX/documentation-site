{
"title": "Quote",
"pagetitle": "Quote",
"description": "How to valuate an availability option",
"icon": "fa-exchange",
"weight": 2,
"alwaysopen": false,
"default_ak": "8626cf56-e364-4fd1-4fe0-311e23ac6355",
"default_user": "",
"gists": [
    {
        "n":"1 Room",
        "g":"9dbea409d3b01ed457754dd5f4d35ce5",
        "o":["graphiql"],
        "u":"xsolano",
        "ak":"8626cf56-e364-4fd1-4fe0-311e23ac6355"
    }
        ]
}

Quote is an operation used to assess and valuate the rate before the actual booking. It returns the same information as the Search response for a hotel rate with up-to-date price, along with additional information regarding the rate: rate breakdown and cancellation policies.

## Advanced criteria
There are different parameters that can be set up in the request (The below ones are mandatory)

- **optionRefId**: Identifier of the option chosen in Search. Mandatory
- **language**: Language to be used in the request

In the Query Variables, you must modify the optionRefId with the option id value returned in the search response and send the query.

## How to request 
Here you can find 2 examples of how to valuate an availability option, one for 1 room and the other one for multi-room. </br>

{{% graphiql-tabs %}}

9dbea409d3b01ed457754dd5f4d35ce5
Please, bear in mind that you should place on _optionRefId_ field the value from the **_id_** field of the option you want to valuate from availability.
/9dbea409d3b01ed457754dd5f4d35ce5

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
