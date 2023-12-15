+++
title = "Selling pricing rules"
pagetitle = "Selling pricing rules"
description = "Apply commissions or markups for different market conditions"
icon="fa-money"
weight = 2
alwaysopen = false
isDirectory = false
+++

## Overview

On this page you will find a table with all the *Sales Rules* configurated (If we enter from an ``Agency``, it only shows its own rules).

In the table you will see the conditions on which each rule applies, such as: Hotels, Markets, Refundable, Check-in Dates, Suppliers….

In the first and second column is shown the code and name rule. The third column contains the pricing applied and in the *Actions* column some buttons where you will be able to:

* **Information:** Check last update and rules comments.
* **Edit the rule.**
* **Delete the rule.**

</br>

![Distribution selling princing rules](./../../../images/web/distribution_web_sellingrules.jpg "Distribution selling princing rules")

</br>

{{% alert theme="info" %}}If in one of the columns you have a button, it means that you have configurated a list of values, and the condition will be fulfilled if it has at least one of those values. To see the values that are applied, you can click the button and a modal will be displayed showing them.{{% /alert %}}


## Create and configurate a new rule

To create a specific selling pricing rule in this section, we have to use the `Create New Rule` button and a modal similar to the following image will be displayed:

![Distribution selling princing rules modal](./../../../images/web/distribution_web_sellingrules_modal.jpg "Distribution selling princing rules modal")

</br>

In the *Basic* tab you should add basic information about the rule as the name to identify it, the pricing percentage to be modified and rate conditions as *package*, *refundable* or its *price type*. You can also select from this tab if the rule should be applied to all agencies and providers or indicate an specific list of each group. A comment is mandatory to create the rule.

In the *Advanced* tab you can choose some additional settings that the system will consider to apply the rule, such as a specific list of mealplans, markets, check-in dates or booking dates.

In the *Hotels* tab, you can select a list of hotels, hotel country or city, chains and destinations to decide to which this rule applies.


## Outdated Rules

There are some rules that can only be applied to certain dates, for example, if you have created a specific pricing rule applying to check-in dates in December. These rules must be gradually eliminated so that inactive rules do not accumulate and in order to streamline operations.

When you have expired rules, its rows will be displayed in red and the following message will be displayed in the extranet:

![Distribution selling princing rules outdated](./../../../images/web/distribution_web_sellingrules_outdated.jpg "Distribution selling princing rules outdated")

</br>

If you select the trash button, all the rules whose date has already passed will be eliminated.

{{%custom-children%}}