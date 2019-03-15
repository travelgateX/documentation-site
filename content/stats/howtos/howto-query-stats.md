{
"title": "Query Stats",
"pagetitle": "Stats - Query",
"description": "How to query about your performance",
"icon": "fa-exchange",
"weight": 4,
"alwaysopen": false,
"default_ak": "64780338-49c8-4439-7c7d-d03c2033b145",
"default_user": "",
"gists": [
    {
        "n":"Buyer",
        "g":"666b32bc15f794d941a0549f56576994",
        "o":["graphiql"],
        "u":"tgx-bot",
        "ak":"64780338-49c8-4439-7c7d-d03c2033b145"
    }, 
    {
        "n":"Seller",
        "g":"22146f0cf8f73939e0a55c0274def86c",
        "o":["graphiql"],
        "u":"tgx-bot",
        "ak":"64780338-49c8-4439-7c7d-d03c2033b145"
    }
        ]
}
This page shows you how to query Stats using API or TravelgateX Web.

## How to request

There are 2 ways to query about your performance:
- As a Buyer
- As a Seller

Below are shown different examples for different casuistry:

{{% graphiql-tabs %}}

002160e4c2822635ef3b1a3c81b1d44d
In this availability case, you will not receive results due to the hotel's restriction of minimum stay. In this case, if you change the date range to 3 days or more, you will receive availability
/002160e4c2822635ef3b1a3c81b1d44d

{{% /graphiql-tabs %}}

{{< graphiql-styles >}}
{{% graphiql-script-tabs %}}