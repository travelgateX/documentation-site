+++
title = "Overview"
pagetitle = "Distribution Overview"
description = "Distribution Overview"
icon = "fa-info-circle"
weight = 1
alwaysopen = false
+++

In this documentation we will describe what the App Distribution is, what it does and also what it doesn't do!

## Distribution: it’s a rules engine

Distribution is a rules engine for the distribution of hotel products. The main rules that this solution offers are grouped into:

### Pricing Rules

The main potential of Distribution lies in the versatility when it comes to defining complex rules to define the sales price. The different rules are calculated to obtain a percentage to be applied to the purchase price: it is not possible to define a fixed amount (fee). Rules can be defined to set both positive and negative percentages. By default, Distribution-X will never sell below the purchase price. To change it, you can activate the rule [Negative Business Rules](./../../distribution/extranet/rules/configuration/pricing)

### Blacklist rules

By default Distribution works in such a way that everything is open for sale, so it offers a mechanism to define what we do not want to sell (based on different characteristics of the sale). Thus, the sale of everything that comes from the supplier is allowed and if there is no explicit rule, no element will be blocked.

{{% alert theme="info" %}}The reverse way would be to work with WhiteList rules and not allow selling unless explicitly enabled. This is a more restrictive method.{{% /alert %}}

### Rules with additional functionality

Apart from the main functions to establish the sale price or close sales (blacklist), Distribution also offers a set of rules such as filters, modifiers and currency exchanges to adapt the sale to certain needs not directly linked to the sale price but to characteristics of the sale itself. Examples would be applying filters on the type of rate, the type of cancellation policies, etc...

{{% alert theme="info" %}}The entire set of rules and their behaviour is described in the documentation for the Rules Management Extranet.{{% /alert %}}

</br>

One aspect to keep in mind is that Distribution only modifies the price of the product and the price of the cancellation policies, but it does not modify the rest of the product's characteristics: rooms, cancellation policies conditions, rates, etc. are not changed.

![Distribution scheme](./../images/distribution_scheme.png "Distribution scheme")


## Distribution: not a stand-alone product

Distribution is not a stand-alone product, it's a module within the TravelgateX ecosystem and to be able to operate it, it is necessary to use other products as per below:

* To access Distribution it must be done through our Hotel Buyers Legacy API or Hotel-X Buyers API. This means that the Buyers must integrated to TravelgateX using one of the two APIs (each TravelgateX API has its specific technical characteristics, data model and specific configuration).

* Connecting to the final supplier must be done through Hotel-X. Distribution does not connect directly with the supplier, but rather uses Hotel-X and the TravelgateX ecosytem: this implies that in order to include a supplier's product in the distribution module, it is mandatory that the supplier’s integration is part of the ecosystem of TravelgateX.

In summary, all Buyers must have integrated either our Hotel Buyers Legacy API or Hotel-X Buyers API and since both have connectivity with Distribution then Distribution will apply the entire set of rules configured for the distribution of the product and will access through Hotel-X to suppliers integrated with TravelgateX.

![Distribution scheme](./../images/distribution_scheme2.png "Distribution scheme")


## Distribution: it is a reservation storage

The main objective of Distribution is to act as a distribution module, mainly establishing the selling prices of the product and for this reason it also stores the reservations. The product information is saved both with the configuration received from the supplier, and also with the business rules with which the reservation (or cancellation) has been made. At this point it's important to remember that the information stored in Distribution will be out of sync with the supplier if any modification is made directly to the supplier without using the TravelgateX reservation flow: if the reservation is modified directly with the supplier, the reservation stored in Distribution will not be updated automatically (no self-sync mechanism is included). 
Distribution offers basic functionalities to modify reservations (either manually through the web or for an application through an API) but also in these cases reservations are modified within the Distribution storage system and are not synchronized with the supplier. It is the responsibility of the Distribution customer to maintain synchronization between systems in the case of actions outside the normal reservation flow.

![Distribution reservation scheme](./../images/distribution_scheme_reservation.png "Distribution reservation scheme")


## Distribution:  it is a master entities storage

Distribution is also a master entities storage (static information specific to the organization, such as meal plan codes, suppliers, hotels, ...) for the following reasons:

* To support static information operations: All the information linked to the static information operations (list of hotels with basic information, list of meal plans, list of suppliers, etc.) is extracted directly from the master entities storage of Distribution so that no queries or requests are made to suppliers or other external systems. It is a way of having information controlled without depending on other systems.

* To support the Rules Management Extranet

* To facilitate usability, the Distribution interface (web in which the different rules that define the behavior of the distribution are managed) relies on the master entities storage to show names to users so that they do not have to work with codes.

* To make use of metadata in the rules
There are different rules that are based on entities metadata. For example, in order to set  rules on specific countries or cities, we need to know the country and city of the hotels we need to apply these rules to, and this information is included in the hotel master.

The loading of this information is done mainly through files located in FTP directories and built based on detailed specifications. There are master entities that can be managed directly on the extranet.

Specifically, we must load the following information into Distribution:

* Complete portfolio of hotels.
* Buyers / Agencies / Clients / distribution channels.
* Currencies exchange.
* MealPlans.
* Suppliers.

We also offer the following options:

* Hotel portfolio by Buyer (agency / client / distribution channel).
* Offices by agency.
* Destination tree and destination groups.
* Detailed hotel information.
* Room information.


## Distribution: not a log management system

Although Distribution stores reservations and cancellation logs, it does not store the entire set of transactions. 


## Distribution: not an aggregator and no direct access to suppliers

Distribution does not access the system of suppliers directly (Hotel-X does that) nor does it aggregate product. These functionalities are available in the Hotel-X API (which includes a set of rules to control this behavior). Hotel-X accesses different suppliers asynchronously, collecting their product and carrying out the aggregation to generate a unique response, which will be the one that Distribution will feed from and over which the set of rules will apply.


## Distribution: no mapping

Distribution is located in the sales part, so it always works with sales codes and always expects to receive sales codes from Hotel-X. So, where is the mapping done between supplier codes and sales codes? It is done at Hotel-X. Therefore, it's important to remember that Distribution rules are always defined on sales entities and sales codes.

![Distribution scheme](./../images/distribution_scheme_mapping.png "Distribution scheme")


## Distribution: not a product storage

Another important point to keep in mind is that Distribution is not a product storage. Distribution enforces distribution rules on the product it receives from Hotel-X. At Distribution we do not load quotas, fees, rates, nor perform quota blocks: the product is already received to be distributed. The fact that Distribution is a reserve storage without being a product storage is due to the fact that Distribution modifies the sale price and the other modules of the TravelgateX ecosystem are unaware of its behaviour, actions and results.

![Distribution summary](./../images/distribution_summary.png "Distribution summary")
