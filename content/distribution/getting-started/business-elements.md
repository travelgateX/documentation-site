+++
title = "Business elements"
pagetitle = "Distribution-X business elements"
description = "Business elements and structures"
icon = "fa-sitemap"
weight = 1
alwaysopen = false
+++

Distribution-X distinguishes up to 3 levels in which we can organize product distribution: in each of these levels we can establish a set of rules, or even inherit them.

{{% alert theme="info" %}}The entire set of rules and their operation are described in the documentation for the Rules Management Extranet. Please check [Rules Management](./../../extranet/rules).{{% /alert %}}

## Organization: 1st level

The 1st level is the so-called “organization” and would be equivalent to a Distribution-X customer (not a buyer/client who comes to TravelgateX platform to buy, but the company that has contracted the Distribution-X module to distribute its product). An organization has complete control over its rules, being able to modify any behavior. A buyer/client does not have access to the rules, only to the reservation flow. Between organizations there is no visibility, they do not share anything, nor rules, nor information (masters of entities, for example or reservations.

At the organization level, you can define pricing rules, blacklists, filters, etc. and they will be unique to each organization. Reservations are also stored at the organization level and are only accessible by the owner organization.

Should a Distribution-X customer be restricted to having the equivalence of a single organization? No, it all depends on the circumstances of each Distribution-X customer. In case of having more than one organization, it should be born in mind that the restrictions remain between these organizations and there is neither visibility nor sharing information or rules.



## Agency: 2nd level

If we go down one level within an organization we find what is called “agency”: an organization has a set of agencies (at least one). Agencies are specific to each organization and are not shared between organizations.

{{% alert theme="warning" %}}We can understand an agency as a client, a buyer or a distribution channel.{{% /alert %}}

At the agency level, you can define pricing rules, blacklists, filters, etc. and they will be unique to each agency. What the agencies of the same organization do share are the master of entities and the rules of the organization.

One client of the Distribution-X customer have at least one corresponding agency, but can have more (it depends on the needs, and for example can have 2 to distinguish between B2B and B2C rates).



## Office: 3rd level (optional)

We have an optional third level, which is the office level: an agency can have offices, which will be exclusive to the agency and organization (they are not shared between agencies or between organizations).

At the office level we can define some price rules and they mainly inherit the rules of the agency and organization in which it is included. Like agencies, offices within the same organization also share the organization's masters of entities and rules.


![Distribution structure scheme](./../../images/distribution_structure.png "Distribution structure scheme")

