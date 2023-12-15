+++
title = "Modifiers"
pagetitle = "Modifiers"
description = "Configuration modifiers"
icon="fa-pencil"
weight = 3
alwaysopen = false
isDirectory = false
+++

## Maximum Time to Quote

![Distribution Maximum Time to Quote](./../../../../images/web/distribution_web_modifiers_maximumtimequote.jpg "Distribution Maximum Time to Quote")

With this rule it can be set the maximum time in minutes than can elapse between the execution of an availability search and the execution of the valuation of any of its selling options: if the elapsed minutes are greater than the maximum then the valuation can not be performed and an error is returned. If this rule is no set with a maximum value then the previous condition will not be applied.

By default the value for an agency inherits the one set on the general settings.

This rule can be set by ``agency`` or by ``organization`` on general settings: when defined by agency it can be chosen to set a concrete behaviour or to inherit the value set on the general settings.


## Maximum Time to Booking

![Distribution Maximum Time to Booking](./../../../../images/web/distribution_web_modifiers_maximumtimebooking.jpg "Distribution Maximum Time to Booking")

With this rule it can be set the maximum time in minutes than can elapse between the execution of a valuation and the execution of its reservation: if the elapsed minutes are greater than the maximum then the valuation can not be performed and an error is returned. If this rule is no set with a maximum value then the previous condition will not be applied.

By default the value for an agency inherits the one set on the general settings.

This rule can be set by ``agency`` or by ``organization`` on general settings: when defined by agency it can be chosen to set a concrete behaviour or to inherit the value set on the general settings.


## Selling Release

![Distribution Selling Release](./../../../../images/web/distribution_web_modifiers_sellingrelease.jpg "Distribution Selling Release")

If this rule is set with a value then it is applied the following condition to any selling for the agency: if the booking date is NOT included on the release (counting from the check-in date, inclusive) then it cannot be sold (*"No availability"* is returned). If this rule is no set with a value then the previous condition will not be applied. By default there is no *Selling Release* set for an agency.

Examples:

* If *"Selling Release"* is set to 0 then we can only sell on the same day of the check-in.
* If *"Selling Release"* is set to 1 then we can only sell on the same day of the check-in and one day before.
* If *"Selling Release"* is set to 5 then we can only sell on the same day of the check-in and up until five days before.

This rule can only be set by ``agency``.


## Closing Release

![Distribution Closing Release](./../../../../images/web/distribution_web_modifiers_closingrelease.jpg "Distribution Closing Release")

If this rule is set with a value then it is applied the following condition to any selling for the agency: if the booking date IS included on the release (from the check-in date, inclusive) then it cannot be sold ("No availability" is returned). If this rule is no set with a value then the previous condition will not be applied. By default there is no *Closing Release* set for an agency.

Examples:

* If *"Closing Release"* is set to 0 then we cannot sell on the same day of the check-in.
* If *"Closing Release"* is set to 1 then we cannot sell on the same day of the check-in nor one day before.
* If *"Closing Release"* is set to 5 then we cannot sell on the same day of the check-in nor up until five days before.

This rule can only be set by ``agency``.



## Fixed Market

![Distribution Fixed Market](./../../../../images/web/distribution_web_modifiers_fixedmarket.jpg "Distribution Fixed Market")

If there is a market defined then this market will be always used for the agency in any operation and any market received on any request will be discarted. If not then the system will use the market received on the request, or the default one if none is given.

By default there is no *Fixed Market* defined for an agency.

This rule can only be set by ``agency``.

{{%custom-children%}}