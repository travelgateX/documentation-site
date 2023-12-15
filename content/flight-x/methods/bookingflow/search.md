{
"title": "Search",
"pagetitle": "Search",
"description": "Learn about the Search method",
"icon": "fa-search-plus",
"weight": 1,
"alwaysopen": false,
"default_user": "",
"gists": [
    
    {
        "n":"Search OneWay - 1 Adults",
        "g":"ddc242b85b1cd354a828f7522401bc16",
        "o":["graphiql"],
        "u":"mmeliaXTG",
        "ak":"59de8cc0-830a-4023-7f5f-6b1bb336b864"
    },
    {
        "n":"Search Round Trip - 1 Adults, 1 Child",
        "g":"2d44e3c15dcae6ec465a82f08b8ea73f",
        "o":["graphiql"],
        "u":"mmeliaXTG",
        "ak":"59de8cc0-830a-4023-7f5f-6b1bb336b864"
    },
    {
        "n":"Search Circle Trip - 1 Adults, 1 Child",
        "g":"4ab2de565b0b52cb5249688f3fc8aa16",
        "o":["graphiql"],
        "u":"mmeliaXTG",
        "ak":"59de8cc0-830a-4023-7f5f-6b1bb336b864"
    }
 ]
}



On this page you will learn more about the Flight-X's Search method 



### Method Goals


This method is the first step in order to perform a Flight-X's booking flow. This method aims to return all the available flight offers matching the given request criteria. This method is equivalent to the IATA AirShopping method.

If you are not familiar to some concepts that are named in the following paragraphs you can take a look to our [API reference](/flight-x/reference) and take a look to our schema

### How to request

Mainly, this method has three inputs *where* (FlightOfferWhereInput), *orderBy* (FlightOfferOrderByInput) and *settings* (FlightSettingsInput). At this time, the *orderBy* input has no efect. The *where* input is the criteria that all the offers returned by the Search has to accomplish. The *settings* input is the common configuration to use in order to build the request to the supplier/s. All the offers returned by the Search has those característics, if there are no offers that meet those requiremensts an error is returned.

At the moment, the only parameters from *where* that has effect are the *originDestCriteria_in* and the *age_in*.

The *originDestCriteria_in* is an array of objects (FlightOriginDestCriteriaInput) that must have at least one value. The parameters for this objects are two scalars *departure* and *arrival*, those scalars are IATA airport codes or city codes, with 3 characters. In addition, you has to fill the parameter *departureAt* with a date, it is the date when you want the offers, the date format is "yyyy-mm-dd". There are no limit in the number of *originDestCriteria_in*, however the majority of the providers only accept two criterias.

The parameter *age_in* is an array of integers that must have at least one value, each value in the array is the age of a passenger that wants to flight.

Regarding to the *settings* input, Flight-X for test purposes is only available with the parameter *groupCode* to **FlightX_18728**. If you do not specify any *supplierCode_in* value, Flight-X searh for all the accesses configurated to this group. Now, Flight-X have two accesess configurated, one for the supplier **DE2** and the other for **AERT**. You can limit the search to one of those providers, using the named suppliers codes in the *supplierCode_in*. You can take a look to this [page](/hotel-x/concepts/basicconcepts/supplier-access-client-context/) in order to learn more about the access, client and supplier concepts.

{{% alert theme="warning" %}}Finally, keep in mind that it's important to use the correct Headers in our requests.
If you wish to test our product, insert `"Authorization":"Apikey 59de8cc0-830a-4023-7f5f-6b1bb336b864"`
You can learn more about the platform security in this [page](/travelgatex/security/)
{{% /alert %}}


Here you can see some examples and play with our playground:


{{% graphiql-tabs %}}

{{% /graphiql-tabs %}}

{{< graphiql-styles >}}
{{% graphiql-script-tabs %}}






