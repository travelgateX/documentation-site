+++
title = "Add Parameter"
pagetitle = "Add Parameter"
description = "Allows Add Parameter to the access created for a supplier"
icon = "fa-cog"
weight = 3
alwaysopen = false
+++

Add Parameter is an optional plugin that allows parameters to be added or modified at request level.

### What it does {#addparameter}

The add parameter plugin **adds parameters in the configuration of the existing accesses**. By doing this, you can add parameters dynamically in request time to the existing accesses (see [Access configuration](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/concepts/basicconcepts/supplier-access-client-context/)). This plugin can be used in all the booking services.

You can also **replace** the value of an existing parameter by adding into the query a parameter with the same key as the one to be replaced.

You'll be able to add different parameters to multiple accesses and/or suppliers in the same query.

### How to use it

Use this plugin by adding it to the [settings](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/concepts/advancedconcepts/settings/) in your HotelX Search Query.

### Parameters

|key|value type|condition|description|
|---|----|----|---|
|JSONConfiguration|JSON|mandatory|JSON structure with parameters that you add by access or by supplier, or even for all accesses|

### Execution example


The JSONConfiguration value brings several possibilities to this plugin:
- Lets say you want to add a parameter with key 'A' and value '1' for the access 123 and the parameters 'B' and 'C' with values '2' and '3' respectively for the accesses 456 and 789. The following example shows this:

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
		     "value": "{\"accesses\": [ { \"codes\": [\"123\"], \"parameters\": [{ \"key\": \"A\", \"value\": \"1\" }] }, { \"codes\": [ \"456\", \"789\" ], \"parameters\": [ { \"key\": \"B\", \"value\": \"2\" }, { \"key\": \"C\", \"value\": \"3\" } ] } ]}"
		  }
		]
	     }
	   ]
	}
```
- Another case could be to add parameters by supplier. So for the supplier XXX you add the parameter with key 'D' and value '4'.

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
		     "value": "{ \"suppliers\": [{ \"codes\": [\"XXX\"], \"parameters\": [{ \"key\": \"D\", \"value\": \"4\" }] }] }"
		  }
		]
	     }
	   ]
	}
```

- And finally you're also able to add parameters for all of the accesses requested in the corresponding service query (search, quote...):

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
		     "value": "{ \"parameters\": [{ \"key\": \"E\", \"value\": \"1\" }] }"
		  }
		]
	     }
	   ]
	}
```

### File format

No files are needed in order to use this plugin.