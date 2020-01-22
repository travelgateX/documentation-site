+++
title = "Check Booking status"
pagetitle = "Check Booking status"
description = ""
icon = "fa-exchange"
weight = 3
alwaysopen = false
isDirectory=false
+++

It is the client´s responsability to check the status of the booking. If you get a response without errors in Book query, it is not meaning that the booking has been confirmed. It is strictly required for an effective use of the API. 

There are 4 different status for the response of Book query:

**OK**:The reservation was completed with no problems.
**ON_REQUEST**: The reservation was completed but the product is still not available, so the reservation goes into a waiting list. It is the client’s responsibility to check if the booking is OK.
**UNKNOWN**: The reservation process through TGX was completed but due to a supplier error or a timeout, the reservation status is unknown. It is the client’s responsibility to check if the booking is OK. 
**PENDING_COMMIT**: The payment has been confirmed in provider's side, but is necessary make a commit in order to confirm the reservation. 