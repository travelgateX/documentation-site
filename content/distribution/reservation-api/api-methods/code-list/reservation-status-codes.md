+++
title = "Reservation Status Codes"
pagetitle = "Reservation Status Codes"
description = "List and description of reservation status codes"
icon="fa-list-ol"
weight = 2
alwaysopen = false
isDirectory = false
+++

#  Reservation status codes


|                Code                |     Explanation         
| :--------------------------------: | ----------------------- |
| *OK* | The reservation was created successfully. 
| *KO* | The reservation process failed and the reservation was not created on the provider.
| *KOP* | The reservation process failed but the reservation was created on the provider.
| *KUN* | The reservation process failed and we don't know the final status on the provider.
| *CN* | The reservation was cancelled successfully. 
| *CK* | The cancellation process failed and the reservation was not cancelled on the provider. 
| *CKP* | The cancellation process failed but the reservation was cancelled on the provider. 
| *CUN* | The cancellation process failed and we don't know the final status on the provider. 
| *ERROR* | There has been an error while recovering the reservation from the system. Returned data can be incompleted. 
| *NOTFOUND* | The reservation has not been found on the system. Returned data has to be ignored.




#  Reservations summary status codes

|                Code                |     Explanation         
| :--------------------------------: | ----------------------- |
| *OK* | The reservation was created successfully. 
| *CN* | The reservation was cancelled successfully.
| *RQ* | The reservation was created successfully put is pending on provider.
| *UN* | The reservation is on an unknown status because some error on the last operation executed on it.

