+++
title = "Add Parameter"
pagetitle = "Add Parameter"
description = "Allows Add Parameter to the access created for a supplier"
icon = "fa-cog"
weight = 3
alwaysopen = false
+++

Add Parameter is an optional plugin that allows parameters to be added to accesses used by different suppliers at a request level.

## Add Parameter {#addparameter}

### Goals

The add parameter plugin **adds parameters in the configuration of the existing accesses**. By doing this, you can add parameters dynamically in request time to the existing accesses (see [Access configuration](https://docs.travelgatex.com/hotel-x/concepts/accesses-supplier-context/)).

### Parameters

|key|value type|condition|description|
|---|----|----|---|
|JSONConfiguration|JSON|mandatory|JSON structure with parameters that you add by access or by supplier, or even for all accesses|

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
