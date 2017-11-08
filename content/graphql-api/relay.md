+++
title = "Relay"
description = ""
weight = 3
alwaysopen = false
+++

TravelgateX uses [Relay](https://facebook.github.io/relay/) schema requirements for own Resources.
Other resources, like supplier search response, are not modeled with Relay practices.

Relay helps travelgateX API in order to standarize:

* Standards for querying paginated collections ("Connections" and "Edges")
* Identifying objects directly from the root of a query (avoiding long nested queries)
* Provide mutation input data

