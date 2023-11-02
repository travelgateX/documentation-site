+++
title = "Components"
pagetitle = "Distribution-X components"
description = "Distribution-X components and tools"
icon = "fa-cubes"
weight = 2
alwaysopen = false
+++

Distribution-X is made up of the following elements. For more detail, please refer to the specific documentation for each component.

## Selling API

This API provides different transactions that are part of the reservation flow and also includes transactions to obtain the static information. Therefore, it is the API that buyers / clients will use.

This is the API that contains the Core of Distribution-X: it is in charge of applying all the distribution rules, closing and cancelling reservations (and storing them) and also allows basic reservation queries.

{{% alert theme="warning" %}}This API is not directly accessible: a buyer/client must integrate with Hotel-X in order to have access.{{% /alert %}}


## Reservation API

This API provides advanced operations to be able to access the reservations store: it basically allows searches (based on different criteria) and also allows detailed information to be extracted from reservations.

This API is for the exclusive use of Distribution-X customers as it contains sensitive information about the sale and distribution. No buyer should have access. For this reason, the authentication system of this API is different from that of the Selling API.


## Rules Management Extranet

This extranet allows us to access the entire set of rules that Distribution-X can apply. From it you can add and modify pricing  rules, blacklist, filters and modifiers. It will also be possible to activate and deactivate buyers / agencies / distribution  channels, as well as make inquiries about the loaded master entities and the stored reservations.

{{% alert theme="warning" %}}This extranet is for the exclusive use of Distribution-X clients as it contains sensitive information about the sale and distribution and allows it to be modified for all buyers / agencies / distribution  channels. No buyer should have access.{{% /alert %}}


## FTP loads

Main method of loading master entities into Distribution-X system. There is a complete documentation of how each load file that must be created. Please check [Masters load](./../../file-loads/masters).

Some business rules can be also set and loaded using FTP loads. Please check [Rules load](./../../file-loads/rules).