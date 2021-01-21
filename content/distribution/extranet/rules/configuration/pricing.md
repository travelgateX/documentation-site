+++
title = "Pricing"
pagetitle = "Pricing"
description = "Configuration rules related to pricing"
icon="fa-money"
weight = 2
alwaysopen = false
isDirectory = false
+++


## Price Calculation

![Distribution pricing price calculation](./../../../../images/web/distribution_web_pricing_pricecalculation.jpg "Distribution pricing price calculation")

With this rule it can be selected if the base commission-markup of the agency and the Selling Pricing Rules have to be applied as a commission or as a markup (just one behaviour can be selected for all pricing).

This rule can be set by `agency` or by `organization` on general settings: when defined by agency it can be chosen to set a concrete behaviour or to inherit the value set on the general settings. By default the value for an agency inherits the one set on the general settings.


## Base Commission-Markup

![Distribution pricing Base Commission-Markup](./../../../../images/web/distribution_web_pricing_basemarkup.jpg "Distribution pricing Base Commission-Markup")

With this rule it can be set the base commission-markup to apply to all sellings (it is applied on the purchasing price) and with the previous rule *Price Calculation* it can be selected if this value is applied as a commission or as a markup.

By default the base commission-markup is 0.

This rule can only be set by ``agency``.


## Add Base To Selling Pricing Rules

![Distribution pricing Add Base To Selling Pricing Rules](./../../../../images/web/distribution_web_pricing_addbase.jpg "Distribution pricing Add Base To Selling Pricing Rules")

This rule is related to the *base commission-markup* and the result of applying the [Selling Pricing Rules](./../../selling-pricing-rules/_index.md). With this rule it can be defined if the base commission-markup has always to be included on the selling price calculation or not. There are two modes of operation:

* **Add always base to Selling Pricing Rules:** the base commission-markup will always be included on the selling price calculation, even if there are being also applied *Selling Pricing Rules* or not.

* **Do not add base if applying any Selling Pricing Rule:** the base commission-markup will only be included on the selling price calculation if there is none *Selling Pricing Rules* being applied. If there is just any *Selling Pricing Rule* being applied then the base commission-markup will be discarded.

By default the value for an agency inherits the one set on the general settings.

This rule can be set by `agency` or by `organization` on general settings: when defined by agency it can be chosen to set a concrete behaviour or to inherit the value set on the general settings.

{{%custom-children%}}


## Minimum Selling Pricing Rules

![Distribution pricing Minimum Selling Pricing Rules](./../../../../images/web/distribution_web_pricing_minimum.jpg "Distribution pricing Minimum Selling Pricing Rules")

This rule is related to the total commission-markup obtained as result of applying all the [Selling Pricing Rules](./../../selling-pricing-rules/_index.md). This rule is not related to the base commission-markup and has no effect on it neither contemplates its value.

With this rule it can be set a minimum value related to the result of applying the Selling Pricing Rules and it can be selected one of two modes of operation:

* **Define a minimum and discard sellings with lower pricing:** all sellings whose total after applying the Selling Pricing Rules is lower than the minimum, will be discarted
* **Define a minimum and apply it for sellings with lower pricing:** all sellings whose total after applying the Selling Pricing Rules, is lower than the minimum, will not be discarded but then the minimum value will be used insted of that lower total.

If the rule is not set in none of the two modes then the previous conditions will not be applied. By default the value for an agency inherits the one set on the general settings.

This rule can be set by `agency` or by `organization` on general settings: when defined by agency it can be chosen to set a concrete behaviour or to inherit the value set on the general settings.

## Suppliers To Net

![Distribution pricing Suppliers To Net](./../../../../images/web/distribution_web_pricing_tonet.jpg "Distribution pricing Suppliers To Net")

With this rule it can be defined a set of suppliers for which it is wanted that when receiving a binding price it will be converted to net: the conversion consists on setting the binding mark to false and removing any commission. The amount and the currency will remain inalterated. *Example:* if we receive a price of 250€ set as binding with a commission of 2% it would be converted to a net price of 250€ (without commission neither the binding mark).

The value of this rule is gathered on the availability search and then it is applied also on the quote and booking with the original read value (to mantain coherence on all the booking flow this rule is not read again from the system on quote an booking transactions).

By default the value for an agency inherits the one set on the general settings.

This rule can be set by `agency` or by `organization` on general settings: when defined by agency it can be chosen to set a concrete behaviour or to inherit the value set on the general settings.