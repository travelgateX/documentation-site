{
"title": "Book",
"pagetitle": "Book",
"description": "How to perform a booking",
"icon": "fa-money",
"weight": 3,
"alwaysopen": false,
"default_ak": "8626cf56-e364-4fd1-4fe0-311e23ac6355",
"default_user": "",
"gists": [
    {
        "n":"1 Room",
        "g":"fb4cf9773a63b7bf222011c211de6b4a",
        "o":["graphiql"],
        "u":"tgx-bot",
        "ak":"8626cf56-e364-4fd1-4fe0-311e23ac6355"
    }
        ]
}

This Book operation requests a reservation confirmation for the specified optionId returned in Quote.

## Advanced criteria

Within the Query Variables, you should modify the optionRefId with the optionRefId value returned in the Quote response and send the Query with the other mandatory information.

Also, please specify advanced criteria if it’s necessary:

**auditTransactions:** It returns all the transactions exchanged with the supplier.
We recommend to set it to "true" for possible claiming purposes with the supplier - if set to "true", the system will return the logs from the supplier in the response.

{{% alert theme="info" %}} When making a booking, you get the **Book status** in the response of our API. There are 4 different status: 
1. ***OK***:The reservation was completed with no problems.
2. ***ON_REQUEST***: The reservation was completed but the product is still not available, so the reservation goes into a waiting list. It is the client’s responsibility to check if the booking is OK.
3. ***UNKNOWN***: The reservation process through TGX was completed but due to a supplier error or a timeout, the reservation status is unknown. It is the client’s responsibility to check if the booking is OK. 
4. ***PENDING_COMMIT***: The payment has been confirmed in provider's side, but is necessary to make a commit in order to confirm the reservation.  .{{% /alert %}}

## How to confirm a reservation

{{% graphiql-tabs %}}

fb4cf9773a63b7bf222011c211de6b4a
Please, bear in mind that the clientReference should be different for every test that you are performing.
/fb4cf9773a63b7bf222011c211de6b4a

{{% /graphiql-tabs %}}

{{< graphiql-styles >}}
{{% graphiql-script-tabs %}}
