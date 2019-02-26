+++
title = "Add Parameter"
pagetitle = "Add Parameter"
description = "Allows add parameter to the access created for a supplier"
icon = "fa-cog"
weight = 3
alwaysopen = false
+++

Add Parameter is an optional plugin and allows for paramenters to be added to accesses used by different suppliers at a request level.

## Add Parameter {#addparameter}

### Goals

The add parameter plugin **adds parameters in the configuration of the existing accesses**. By doing this, you can add parameters dynamically in request time to the existing accesses (see [Access configuration](https://docs.travelgatex.com/hotelx/concepts/accesses-supplier-context/)).

### Parameters

|key|value type|condition|description|
|---|----|----|---|
|JSONConfiguration|JSON|mandatory|JSON structure with parameters that you add by access or by supplier, or even for all accesses|
|function|string|optional|possible values: “min” and “max”, min is the default value.<br>The chosen option will be the cheapest when min function, and the expensivest when max function|
|priceField|string|optional|possible values: “net” or “gross”, net is the default value.<br>The function will operate over the field determined by this parameter|
|currency|string|optional|exchanges a price’s currency before applicating the filter. In order to make use of this functionality, the same setup in the CurrencyX plugin is needed.|
|size|int|optional|number of options in each aggregation group, the default value is 1|

### Execution example

```json
	{
	  "step": "REQUEST_ACCESS",
	  "pluginsType": [
	     {
	       "name": "add_parameterX",
	       "type": "POST_STEP",
	       "parameters": [
	          {
		     "key": "JSONConfiguration",
		     "value": "{\"accesses\": [ {\"codes\": [\"1\",\"2\"],\"parameters\": [ {\"key\": \"A\", \"value\": \"1\"} ] } ],
		                \"suppliers\": [ {\"codes\": [\"XXX\"], \"parameters\": [ {\"key\": \"D\",\"value\": \"4\"}] } ],
				\"parameters\": [ {\"key\": \"C\", \"value\": \"valor\" } ] }"
		  }
		]
	     }
	   ]
	}
```
