---
title: Service Endpoints
keywords: service endpoints, intro
search: Service Endpoints
sidebar: mydoc_sidebar
permalink: /docs/service-endpoints/
---

# Service Endpoints (To be used for Testing Purposes only)

You will be sent Production endpoints alongside your live access configuration once you have passed our certification process. 

WSDLs describing the structure of an XML request and response are available
through the following URLs:

-   **Hotel API:**

> -   Endpoints to our system for the dynamic workflow (Avail, Valuation, Reservation, etc):
> 
> > -   <http://hubpublic.xmltravelgate.com/Service/Travel/v2/Hotel.svc>
> > -   <https://hubpublic.xmltravelgate.com/Service/Travel/v2/HotelSecure.svc>
> 
> -   Endpoints to our system for the static information (HotelList, DescriptiveInfo, GeographicDestinationTree, etc):
> 
> > -  <http://hubhotelbatch.xmltravelgate.com/Service/Travel/v2/HotelBatch.svc>
> > -  <https://hubhotelbatch.xmltravelgate.com/Service/Travel/v2/HotelBatchSecure.svc>

-   **Transportation API:**

> -   Booking messages:
> 
> > -   <http://hubpublic.xmltravelgate.com/Service/Travel/TransportationInsecure.svc>
> > -   <https://hubpublic.xmltravelgate.com/Service/Travel/Transportation.svc>
> 
> -   Batch messages:
> 
> > -   <http://hubtransportationbatch.xmltravelgate.com/Service/Travel/v2/TransportationBatch.svc>
> > -   <https://hubtransportationbatch.xmltravelgate.com/Service/Travel/v2/TransportationBatchSecure.svc>

-   **Car Rental API:**

> -   Booking messages:
> 
> > -   <http://hubpublic.xmltravelgate.com/Service/Travel/v2/Car.svc>
> > -   <https://hubpublic.xmltravelgate.com/Service/Travel/v2/CarSecure.svc>
> 
> -   Batch messages:
> 
> > -   <http://hubcarbatch.xmltravelgate.com/Service/Travel/v2/CarBatch.svc>
> > -   <https://hubcarbatch.xmltravelgate.com/Service/Travel/v2/CarBatchSecure.svc>

-   **Activities API:**

> -   Booking messages:
> 
> > -   <http://hubpublic.xmltravelgate.com/Service/Travel/ActivitiesInsecure.svc>
> > -   <https://hubpublic.xmltravelgate.com/Service/Travel/Activities.svc>
> 
> -   Batch messages:
> 
> > -   <http://hubactivitiesbatch.xmltravelgate.com/Service/Travel/v2/ActivitiesBatch.svc>
> > -   <https://hubactivitiesbatch.xmltravelgate.com/Service/Travel/v2/ActivitiesBatchSecure.svc>

-   **Transfers API:**

> -	Booking messages:
> 
> > -   <http://hubpublic.xmltravelgate.com/Service/Travel/TransfersInsecure.svc>
> > -   <https://hubpublic.xmltravelgate.com/Service/Travel/Transfers.svc>
> 
> -   Batch messages:
> 
> > -   <http://hubtransfersbatch.xmltravelgate.com/Service/Travel/v2/TransfersBatch.svc>
> > -   <https://hubtransfersbatch.xmltravelgate.com/Service/Travel/v2/TransfersBatchSecure.svc>


It's the clients responsibility to use **http or https** when needed.

