+++
title = "Overview"
pagetitle = "Distribution-X Overview"
description = "Distribution-X Overview"
icon = "fa-info-circle"
weight = 1
alwaysopen = false
+++

In this documentation we will describe what the TravelgateX Distribution Module is (here in after Distribution-X), but also indicate what Distribution-X is not - it’s as important to know in detail what functionalities it offers as those not!

## Distribution-X: it’s a rules engine

Distribution-X is a rules engine for the distribution of hotel products. The main rules that this solution offers are grouped into:

### Pricing Rules

The main potential of Distribution-X lies in the versatility when it comes to defining complex rules to define the sales price. The different rules are calculated to obtain a percentage to be applied to the purchase price: it is not possible to define a fixed amount (fee). Rules can be defined to set both positive and negative percentages, but Distribution-X will never sell below the purchase price.

### Blacklist rules

By default Distribution-X works in such a way that everything is open for sale, so it offers a mechanism to define what we do not want to sell (based on different characteristics of the sale). Thus, the sale of everything that comes from the supplier is allowed and if there is no explicit rule, no element will be blocked.

{{% alert theme="info" %}}The reverse way would be to work with WhiteList rules and not allow selling unless explicitly enabled. This is a more restrictive method.{{% /alert %}}

### Rules with additional functionality

Apart from the main functions to establish the sale price or close sales (blacklist), Distribution-X also offers a set of rules such as filters, modifiers and currency exchanges to adapt the sale to certain needs not directly linked to the sale price but to characteristics of the sale itself. Examples would be applying filters on the type of rate, the type of cancellation policies, etc...

{{% alert theme="info" %}}The entire set of rules and their behaviour is described in the documentation for the Rules Management Extranet.{{% /alert %}}

</br>

One aspect to keep in mind is that Distribution-X only modifies the price of the product and the price of the cancellation policies, but it does not modify the rest of the product's characteristics: rooms, cancellation policies conditions, rates, etc. are not changed.

![Distribution scheme](./../images/distribution_scheme.png "Distribution scheme")


## Distribution-X: not a stand-alone product

Another point to keep in mind is that Distribution-X is not accessible directly or independently (it is not a stand-alone product). Distribution-X is a module within the TravelgateX platform and to be able to operate with Distribution-X it is necessary to use other products of the TravelgateX platform:


* To access Distribution-X it must be done through our Legacy API or Hotel-X (both are part of the TravelgateX platform). This implies that buyers must integrate with TravelgateX using one of the two modules (each TravelgateX module has its specific technical characteristics, data model and specific configuration).

* To connect with the final suppliers it must be done through Hotel-X. Distribution-X does not connect directly with the supplier, but rather uses Hotel-X and the TravelgateX platform: this implies that in order to include a supplier's product in the distribution module, it is mandatory that the supplier’s integration is part of the ecosystem of TravelgateX.

In summary, all buyers must be integrated with our Legacy API or with Hotel-X, since both have connectivity with Distribution-X, then Distribution-X will apply the entire set of rules configured for the distribution of the product and will access through Hotel-X to suppliers integrated with TravelgateX.

![Distribution scheme](./../images/distribution_scheme2.png "Distribution scheme")


## Distribution-X: it is a reservation storage

The main objective of Distribution-X is to act as a distribution module, mainly establishing the selling prices of the product and for this reason it also stores the reservations. The product information is saved both with the received configuration from supplier, and also with the business rules with which the reservation (or cancellation) has been made. At this point it should be clear that the information stored in Distribution-X will be out of sync with the supplier if any modification is made directly to the supplier without using the TravelgateX reservation flow: if the reservation is modified directly in the supplier, the reservation stored in Distribution-X will not be updated automatically (no self-sync mechanism is included). What Distribution-X offers are basic functionalities to modify reservations (either manually through the web or for an application through an API) but also in these cases reservations are modified within the Distribution-X storage system and are not synchronized with the supplier. It is the responsibility of the Distribution-X customer to maintain synchronization between systems in the case of actions outside the normal reservation flow.

![Distribution reservation scheme](./../images/distribution_scheme_reservation.png "Distribution reservation scheme")


## Distribution-X:  it is a master entities storage

Distribution-X is also a master entities storage (static information specific to the organization, such as meal plan codes, suppliers, hotels, ...) for the following reasons:

* To support static information operations: All the information linked to the static information operations (list of hotels with basic information, list of meal plans, list of suppliers, etc.) is extracted directly from the master entities storage of Distribution-X so that: no queries or requests are made to suppliers or other external systems. It is a way of having information controlled without depending on other systems.

* To support the Rules Management Extranet

* To facilitate usability, the Distribution-X interface (web where the different rules that define the behavior of the distribution can be managed) relies on the master entities storage to show names to users so that they do not have to work with codes.

* To make use of metadata in the rules: There are different rules that are based on entities metadata. For example, in order to set  rules on specific countries or cities, we need to know the country and city of the hotels we need to apply these rules to, and this information is included in the hotel master.

The loading of this information is done mainly through files located in FTP directories and built based on detailed specifications. There are master entities that can be managed directly on the extranet.

Specifically, we must load the following information into Distribution-X:

* Complete portfolio of hotels.
* Buyers / Agencies / Clients / distribution channels.
* Currencies exchange.
* MealPlans.
* Suppliers.

We also offer the following options:

* Hotel portfolio by buyer (agency / client / distribution channel).
* Offices by agency.
* Destination tree and destination groups.
* Detailed hotel information.
* Room information.


## Distribution-X: not a logging system

Although Distribution-X stores reservations and cancellation logs, it does not store the entire set of transactions. 


## Distribution-X: not an aggregator and no direct access to suppliers

Distribution-X neither directly accesses suppliers nor does it perform product aggregation. This functionality is delegated to the Hotel-X module (which includes a set of rules to control this behavior). Hotel-X accesses different suppliers asynchronously, collecting their product and carrying out the aggregation to generate a unique response, which will be the one that Distribution-X will feed on and over which the set of rules will apply.


## Distribution-X: no mapping

Distribution-X is a module that within the TravelgateX platform is located in the sales part, so it always works with sales codes and always expects to receive sales codes from Hotel-X. Then, where is done the mapping work between supplier codes and sales codes? It is done at Hotel-X. Therefore, it must always be kept in mind that Distribution-X rules are always defined on sales entities and sales codes.

![Distribution scheme](./../images/distribution_scheme_mapping.png "Distribution scheme")


## DistributionX: not a product storage

Another important point to keep in mind is that Distribution-X is not a product storage. Distribution-X enforces distribution rules on the product it receives from Hotel-X. At Distribution-X we do not charge quotas, nor fees, nor rates, nor do quota blocks: the product is already received to be distributed. The fact that Distribution-X is a reserve storage without being a product storage is due to the fact that Distribution-X modifies the sale price and the other modules of the TravelgateX platform are unaware of its behaviour, actions and results.

![Distribution summary](./../images/distribution_summary.png "Distribution summary")