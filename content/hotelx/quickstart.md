+++
title = "Quickstart"
pagetitle = ""
description = "HotelX Quickstart"
icon = "fa-clock-o"
weight = 2
alwaysopen = false
+++

This page shows you how to perform a basic hotel booking using [GraphQL Playground](https://api.travelgatex.com/).

### Before Starting

1. Follow the steps in [Creating an API Key](/travelgatex/security/overview#creating-an-api-key) to get your API Key. 

2. [Check the connectivity](travelgatex/overview/#making-requests) of your API Key. 

3. Open [the sample Playground](https://graphqlbin.com/2k65c8) and modify HTTP HEADERS field Authorization with your API Key and indicated your [client](#_ivb2cezalt05) into request settings. 

```
{

  "settings": {

    "client": "yourClient"

  }

}
```

## Step by Step

### Search a Hotel
1. Open search
<object data="https://graphqlbin.com/2kzRfE" type="text/html" width="100%" height="400px" align="left">
</object>
1. Modify Query Variables with valid dates and send the request. Example in the first and third tab. 
1. You can replay the same search (the same dates, currency, language, market, nationality and occupancies) with the token generated per option, this token return a search only for the option’s hotel. Example in second one tab. 

### Quote a Hotel

1. Open quote
<object data="https://graphqlbin.com/31B2HR" type="text/html" width="100%" height="400px" align="left">
</object>
1. In Query Variables modify optionRefId with option id value returned in search response and send the request. 
1.  3.In this case you can modify the language, if you don't indicate the language, it uses the same language that in search. 

### Book a Hotel

1. Open hotelBook
<object data="https://graphqlbin.com/1wxWIp" type="text/html" width="100%" height="400px" align="left">
</object>
1. In Query Variables modify optionRefId with optionRefId value returned in quote response and send the request with the other mandatory information. 

### Cancel Booking

1. Open hotelCancel
<object data="https://graphqlbin.com/68LYhr" type="text/html" width="100%" height="400px" align="left">
</object>
1. In Query Variables  modify the fields with your data. 

### Booking List

1. Open booking
 <object data="https://graphqlbin.com/0RvEU2" type="text/html" width="100%" height="400px" align="left">
</object>
1. You’re going to found three tabs, modify the fields with your data:  
    1. One of them search by booking reference. 
    1. Another tab with search by booking date. 
    1. And another with search by arrival date.
