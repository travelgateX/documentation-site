+++
title = "Currencies"
pagetitle = "Currencies"
description = "Currencies modifiers"
icon="fa-dollar"
weight = 4
alwaysopen = false
isDirectory = false
+++

Distribution allows you to make a currency exchange from the currency your suppliers provide you to the currency that your buyers are requesting you. The currency exchange used by default in Distribution is updated every day from the European Central Bank. However, you can customize your own currency exchange using the [currency exchange master file](https://docs.travelgatex.com/distribution/file-loads/masters/currencies/) to indicate your own base currencye and the exchanges you prefer. 

{{% alert theme="info" %}}Is possible to check the exact currency exchange that Distribution is using in that moment in the [Searches panel](https://docs.travelgatex.com/distribution/extranet/tools/searches/) at the extranet.{{% /alert %}}

## Block currencies by country

![Distribution Block currencies by country](./../../../../images/web/distribution_web_currencies_blockbycountry.jpg "Distribution Block currencies by country")

With this rule a default currency and a list of not admitted currencies can be set for a concrete country. When applying this rule to a selling it must be used the definition for the country of the selling's hotel. If a selling is received from the supplier with a currency included on the not admitted ones (for the hotel's country definition) then this currency must be exchanged to the default currency: if it cannot be exchanged then the selling will be discarded. If this rule is not set for the country of a selling's hotel then the previous condition will not be applied.

This rule will be applied together with the rest of the rules that affect the currencies: the most restrictive rules have priority over the others. Be careful when setting various currency rules as they can create a conflict and some sellings can be discarded unwittingly.

By default there are no blocked currencies for any country.

This rule can only be set by `organization` on general settings (the same behaviour for all agencies).

{{% alert theme="warning" %}}If this rule is used together with the *Allow Currency Exchange* rule (by agency) then there may be conflicts as both rules share behaviour on currencies. It is strongly recomended to use only the 'Allow Currency Exchange' rule if possible.{{% /alert %}}


## Force Requested Currency

![Distribution Force Requested Currency](./../../../../images/web/distribution_web_currencies_force.jpg "Distribution Force Requested Currency")

If the requested currency is forced to be returned then all the sellings of the response have to be returned with the currency received on the request (without exception). If a selling is not received from the supplier with the correct currency then it must be exchanged to it: if it cannot be exchanged then the selling will be discarded. If the requested currency is not forced to be returned then the previous condition will not be applied.

This rule will be applied together with the rest of the rules that affect the currencies: the most restrictive rules have priority over the others. Be careful when setting various currency rules as they can create a conflict and some sellings can be discarded unwittingly.

By default the requested currency is not forced.

This rule can only be set by ``agency``.


## Allowed Currencies

![Distribution Allowed Currencies](./../../../../images/web/distribution_web_currencies_allowed.jpg "Distribution Allowed Currencies")

With this rule it can be set a default currency and a list of currencies and so force all the sellings of the response to be returned with any of these currencies. If a selling is not received from the supplier for a currency of the list then it will be exchanged to the default currency: if it cannot be exchanged then the selling will be discarded. If the rule is not set for any currency then the previous condition will not be applied.

This rule will be applied together with the rest of the rules that affect the currencies: the most restrictive rules have priority over the others. Be careful when setting various currency rules as they can create a conflict and some sellings can be discarded unwittingly.

By default this rule is not set for any currency.

This rule can only be set by ``agency``.

{{% alert theme="warning" %}}If this rule is used together with the *Allow Currency Exchange* rule (by agency) then there may be conflicts as both rules share behaviour on currencies. It is strongly recomended to use only the 'Allow Currency Exchange' rule if possible.{{% /alert %}}


## Allow Currency Exchange

![Distribution Allow Currency Exchange](./../../../../images/web/distribution_web_currencies_allowedexchange.jpg "Distribution Allow Currency Exchange")

This rule has two modes of operation:

* **Do not allow exchange and apply filters:** with this mode it can be set in general and for a concrete country a list of currencies and so force all the sellings of the response to be returned with any of these currencies. When applying this rule to a selling it must be used the definition for the country of the selling's hotel and if it is not set for that country then the general definition will be used. If a selling is received from the supplier with a currency not included on the admitted ones then it will be discarded. There cannot be done any currency exchange.
* **Allow only custom exchange:** with this mode it can be set in general and for a concrete country a default currency and a list of admitted currencies. When applying this rule to a selling the definition for the country of the selling's hotel must be used and if it is not set for that country then the general definition will be used. If a selling is received from the supplier with a currency not included on the admitted ones (for the hotel's country definition) then this currency must be exchanged to the default currency: if it cannot be exchanged then the selling will be discarded.

If the rule is not set in none of the two modes then the previous conditions will not be applied. This rule will be applied together with the rest of the rules that affect the currencies: the most restrictive rules have priority over the others. Be careful when setting various currency rules as they can create a conflict and some sellings can be discarded unwittingly.

By default this rule is not set for none of the modes.

This rule can only be set by ``agency``.

{{% alert theme="warning" %}}If this rule is used together with the 'Allowed Currencies' rule (by agency) or the *Block currencies by country* rule (general settings) then there may be conflicts as all these rules share behaviour on currencies. It is strongly recomended to use only the *Allow Currency Exchange* rule if possible.{{% /alert %}}


{{%custom-children%}}

