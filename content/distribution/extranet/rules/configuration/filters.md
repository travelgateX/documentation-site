+++
title = "Filters"
pagetitle = "Filters"
description = "Configuration filters by different market conditions"
icon="fa-filter"
weight = 3
alwaysopen = false
isDirectory = false
+++

## Filter Payment Type

![Distribution Filter Payment Type](./../../../../images/web/distribution_web_filters_paymenttype.jpg "Distribution Filter Payment Type")

With this rule it can be set a list of payment types and then only the sellings that match any of these payment types will be sold and the ones that do not match any of the payment types will be discarded. Payment types:

* Merchant Pay
* Later Pay
* Card Booking Pay
* Card Checkin Pay

By default the list for an agency is empty and so it inherits the list set on the general settings.

This rule can be set by ``agency`` or by `organization` on general settings: if it is defined by agency then it will be applied the value set by agency and if it is not defined by agency then it will be applied the value set on the general settings. The agency value and the general settings value are not mixed.


## Filter Package Rates

![Distribution Filter Package Rates](./../../../../images/web/distribution_web_filters_package.jpg "Distribution Filter Package Rates")

With this filter there can be selected which types of sellings have to be offered based on if they include a package rate or not. By default filters are not activated.

This rule can only be set by ``agency``.


## Filter NRF

![Distribution Filter NRF](./../../../../images/web/distribution_web_filters_refundable.jpg "Distribution Filter NRF")

With this filter there can be selected which types of sellings have to be offered based on if they are non refundable (NRF) or refundable (RF). By default filters are not activated.

This rule can only be set by ``agency``.


## Filter Binding

![Distribution Filter Binding](./../../../../images/web/distribution_web_filters_binding.jpg "Distribution Filter Binding")

With this filter there can be selected which types of sellings have to be offered based on if their price is binding or not. By default filters are not activated.

This rule can only be set by ``agency``.


## Filter Room Rates

![Distribution Filter Room Rates](./../../../../images/web/distribution_web_filters_rate.jpg "Distribution Filter Room Rates")

If this filter is set with a list of Room Rates (codes) then it is applied the following condition to any selling for the agency: if a selling contains exclusively room rates of the list then this selling will be returned on the response, but if a selling has any room rate (or all) that is not in the list then this selling is discarded.

As there is no master of Room Rates on Distribution-X this rule does not have a selector. To enter a new Room Rate on the list just type its code and press enter. If this rule is no set with a value then the previous condition will not be applied. By default filters are not activated.

This rule can only be set by ``agency``.


{{%custom-children%}}