+++
title = "Booking Panel"
pagetitle = "Booking Panel"
description = "Panel that allows you to check your reservations and its details"
icon = "fa-search"
weight = 4
alwaysopen = false
isDirectory=false
+++

The booking panel tool allows you to obtain a list of all your agencies bookings and cancellations and get more detail information about it. To obtain a list with base information you can use the `Booking List` panel. To check a specific booking and obtain all its details you can use the `Booking Read` panel. 
</br>

![Distribution Booking Search tool](./../../images/web/distribution_web_bookingsearch.jpg "Distribution Booking Search tool")

</br>

To see and download a list of detailed bookings you can use the `Booking Reports` panel (this funcionality especially used for our DMC clients).

</br>

![Distribution Booking List Report tool](./../../images/web/distribution_web_bookingreport.jpg "Distribution Booking List Report tool")

</br>

## Booking List

Booking list allows you to filter by different conditions:

* Dates:
    * Booking dates: The date range when the booking was confirmed by the agency.
    * Check-in date: The date range when the booking check-in is included. 
* Transaction type/status:
    * Include cancellations: List with both effective bookings and cancelled ones. 
    * Only cancellations: List with only cancelled bookings.
    * Only errors: List with bookings that failed and couldn't be confirmed successfully.
* Hotel:
    * Name: Filter bookings by hotel name.
    * Code: Filter bookings by hotel code.
* Agency: Filter bookings by agency/client.
* Provider: In case you work with different suppliers, you can filter by provider name.

</br>

![Distribution Booking Search tool example](./../../images/web/distribution_web_bookingsearch_ex.jpg "Distribution Booking Search tool example")

</br>


## Booking Read

In order to obtain more details and information of a specific booking you can use the `Booking read` panel on the left with one of the locators (Client, Provider or TGX).

For each booking you will find the following information:

* Locators: All booking locators.
* Context: 
    * Status: Booking status (success, cancelled, error)
    * Booking date
    * Agency 
    * Supplier
    * Access
* Configuration
    * * Hotel: Hotel code and name
    * * Check-in date
    * Check-out date
    * Mealplan
    * Market
    * Nationality
* Price & Conditions
    * Payment type
    * Cancellation price
    * Selling price
    * Purchasing price
    * Currency exchange
    * Quote selling price
    * Quote purchasing price
    * Quote currency exchange
    * Quote selling cancel penalties
    * Quote purchasing cancel penalties
* Pricing
    * Type
    * Final Markup
    * Tax
* Breakdown
    * Base Markup
    * Base Rappel
    * Selling pricing rules: Total
* Rooms
    * Main Guest Name
    * Room: Room name, code, and number of pax
   
  </br>
  
## Booking List Reports

The booking reports tool allows you to obtain a file with all the bookings that have been done inside the parameters reports specified. The search parameters will be same as can be seen in the Booking Read.

Notice that a Report name it is asked to you (with alfanumeric format), however, to ensure the uniqueness of the name, a datetime format will be added at the beginning of the name.

The display of the reports created can be shown in the List of Reports. There are two importants thing to know:

   * Only one report can be generated every 15 minutes. So, once a generation is asked, the user has to wait 15 minutes to ask for the other one.
    
   * The generation of the report is not instant but it might take some time, depending on the volume of bookings to return. If Generation Status is equal to “Executing” the file is not done yet. So the download will not be able until the file is finished

![Distribution Booking Report Status](./../../images/web/distribution_web_bookingreportstatus.jpg "Distribution Booking Report Status")
      
 </br>

   * When the status changes to "Finished ok", the download button will be available.
      
 ![Distribution Booking List Report Panel](./../../images/web/distribution_web_bookingreportpanel.jpg "Distribution Booking List Report Panel")
</br>


{{%custom-children%}}
