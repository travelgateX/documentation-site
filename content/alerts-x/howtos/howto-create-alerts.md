{
"title": "Create Alert",
"pagetitle": "Create alert",
"description": "How to perform mutations on your alerts",
"icon": "fa-search-plus",
"weight": 4,
"alwaysopen": false,
"default_ak": "64780338-49c8-4439-7c7d-d03c2033b145",
"default_user": "",
"gists": [
    {
        "n":"Error rate - by time frame",
        "g":"708148bb87432be5fbca20c0e5fd0f68",
        "o":["graphiql"],
        "u":"tgx-bot",
        "ak":"64780338-49c8-4439-7c7d-d03c2033b145"
    }, 
    {
        "n":"Error rate - by requests",
        "g":"4b07be538f151b2a75a184d22f26af9a",
        "o":["graphiql"],
        "u":"tgx-bot",
        "ak":"64780338-49c8-4439-7c7d-d03c2033b145"
    },
     {
        "n":"Average time - by time frame",
        "g":"cce260c5bd43d2da1b252e89e7044967",
        "o":["graphiql"],
        "u":"tgx-bot",
        "ak":"64780338-49c8-4439-7c7d-d03c2033b145"
    }, 
     {
        "n":"Average time - by time frame and maximum average",
        "g":"67d52550bbe837e9021144cba561359b",
        "o":["graphiql"],
        "u":"tgx-bot",
        "ak":"64780338-49c8-4439-7c7d-d03c2033b145"
    }, 
     {
        "n":"Average time - by requests",
        "g":"694e031b53c6b4e5f83547b3eaa0629a",
        "o":["graphiql"],
        "u":"tgx-bot",
        "ak":"64780338-49c8-4439-7c7d-d03c2033b145"
    }, 
     {
        "n":"No traffic",
        "g":"af50aa4ff1c8534a88960d2fc2df76e5",
        "o":["graphiql"],
        "u":"tgx-bot",
        "ak":"64780338-49c8-4439-7c7d-d03c2033b145"
    },
    {
        "n":"Peak traffic",
        "g":"ec1edcea1e1427d83911223bf57654a6",
        "o":["graphiql"],
        "u":"tgx-bot",
        "ak":"64780338-49c8-4439-7c7d-d03c2033b145"
    }
        ]
}

This page shows you how to create Alerts using API or TravelgateX Web.

## How to request

You must choose a type alert to create it. The alert types are: Error rate, No traffic, Average time and Peak traffic.

There are different ways to configure the alert types. Below there are references of some values of configuration to create the alert needed.

### Error rate alert
WHAT IS NEEDED? | window | periodicity | percentage | minNumberRequests | to check | to compare
----------|----------|----------|----------|----------|----------|----------
check by time frame     | w > 0 | p > 0 | pg >= 0 | mnr >= 0 | error codes | error codes
check by requests number| w = 0 | p = 0 | pg >= 0 | mnr > 0 | error codes | error codes

{{% alert theme="warning" %}}
By default, you may check all error codes except for 0, and compare all error codes.
{{% /alert %}}

### Average time alert

WHAT IS NEEDED? | window | periodicity | percentage | minNumberRequests |  offset | historical windows | maximum average
----------|----------|----------|----------|----------|----------|----------|----------
check by time frame                 | w > 0 | p > 0 | pg >= 0 | mnr >= 0 | o >= 0 | hw >= 0 | ma = 0
check maximum average by time frame | w > 0 | p > 0 | pg >= 0 | mnr > 0 | o >= 0 | hw = 0 | ma >= 0
check be requests number            | w = 0 | p = 0 | pg >= 0 | mnr > 0 | o >= 0 | hw = 0 | ma >= 0

### No traffic alert

WHAT IS NEEDED? | window | periodicity | percentage | minNumberRequests
----------|----------|----------|----------|----------
check by time frame  | w > 1 | p > 0 | pg = 0 | mnr >= 0 

### Peak traffic alert

WHAT IS NEEDED? | window | periodicity | percentage | minNumberRequests | offset | historical windows
----------|----------|----------|----------|----------|----------|----------
check by time frame  | w > 0 | p > 0 | pg = 0 | mnr >= 0 | o >= 0 | hw > 0


Below you will find some examples for different casuistry:

{{% graphiql-tabs %}}


{{% /graphiql-tabs %}}

{{< graphiql-styles >}}
{{% graphiql-script-tabs %}}
