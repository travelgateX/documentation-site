+++
title = "AirShopping"
pagetitle = "AirShopping"
description = "Learn about the AirShopping method"
icon = "fa-list-alt"
weight = 1
alwaysopen = false
+++



On this page you will learn more about the Flight-X's Search method 



### Method Goals


This method is the first step in order to perform a Flight-X's booking flow. This method aims to return all the available flight offers matching the given request criteria. This method is equivalent to the IATA AirShopping method. 

If you are not familiar to some concepts that are named in the following paragraphs you can take a look to our [API reference](/hotel-x/reference)

### How to request

In order to know how to make a request, you can take a look to our schema <!-- TODO Add url-->

Mainly, this method has two inputs *where* (FlightOfferWhereInput) and *orderBy* (FlightOfferOrderByInput), at this time the *orderBy* input has no efect. The *where* input is the criteria to set your query. All the offers returned by the Search has those característics, if there are no offers that meet those requiremensts an error is returned.

At the moment, the only parameters from *where* that has effect are the *originDestCriteria_in*, *age_in* and finally the *supplierCode_in*.

The *originDestCriteria_in* is an array of objects (FlightOriginDestCriteriaInput) that must have at least one value. The parameters for this objects are two scalars *departure* and *arrival*, those scalars are IATA airport codes or city codes, with 3 characters. In addition, you has to fill the parameter *departureAt* with a date, it is the date when you want the offers, the date format is "yyyy-mm-dd". There are no limit in the number of *originDestCriteria_in*, however the majority of the providers only accept two criterias.

The *supplierCode_in* is an array of identifiers, each indetifier is a supplier of flight offers in our database. In order to get offers of a supplier you need an access configured in our database, and know the supplier code. Now, there is some suppliers configurated by default, as .... <!--TODO add supplier codes-->. If you do not specify any supplier code, the query return offers for all the default suppliers configurated. You can take a look to this [page](/hotel-x/concepts/basicconcepts/supplier-access-client-context/)

The parameter *age_in* is an array of integers that must have at least one value, each value in the array is the age of a passenger that wants to flight.

Here you can see some examples:







