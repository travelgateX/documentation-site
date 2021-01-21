+++
title = "Others"
pagetitle = "Others"
description = "Other business rules you can manage"
icon="fa-th-list"
weight = 5
alwaysopen = false
isDirectory = false
+++

## Time Zone

![Distribution Time Zone](./../../../../images/web/distribution_web_others_timezone.jpg "Distribution Time Zone")

With this rule it be can set the Time Zone to use with some rules, as: 
* **Selling Pricing Rules:** the Booking Date field (dates from & to), the Booking Hour field and the Booking Day field.
* **Specific Stop Sales:** the Booking Date field (dates from & to).

Rest of date fields and rules related to dates are managed as UTC. By default this rule is set to UTC Time Zone.

This rule can only be set by `organization` on general settings (the same behaviour for all agencies).


## Aggregation Key

![Distribution Aggregation Key](./../../../../images/web/distribution_web_others_aggregationkey.jpg "Distribution Aggregation Key")

With this rule it can be set to activate aggregation of sellings on the Hotel-X module with a specific key or it can be set not to use any kind of aggregation. Aggregation key has an specific format: it has to be a concatenation of different selectors (the order is important) using ',' as separator (with no blank spaces neither other kind of special characters).

Selectors are the following ones:
* hotel 
* supplier 
* board 
* refundable 
* binding 
* room 
* rateRules 
* payment

*Example*: hotel,board,room

By default it will be used the aggregation defined on internal system configuration.

This rule can be set by ``agency`` or by ``organization`` on general settings: when defined on general settings it will only be applied on those agencies that explicitly have been set to inherit from general settings.

{{%custom-children%}}