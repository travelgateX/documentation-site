+++
title = "Add ParameterX"
pagetitle = "Add ParameterX"
description = "Allows add parameter to the access created for a supplier"
icon = "fa-cog"
weight = 3
alwaysopen = false
+++

Add ParameterX is an optional plugin and allows for paramenters to be added to accesses used by different suppliers at a request level.

## Add ParameterX {#addparameter}

### Goals

The add parameterX plugin **adds parameters in the configuration of the existing accesses**. By doing this, communication with suppliers will be improved. The plugin only allows one parameter with the following key/value:

	Key: JSONConfiguration
	Value: JSON structure, this structure allows adding parameters by access or by provider, or even for all accesses.

### Execution example


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
