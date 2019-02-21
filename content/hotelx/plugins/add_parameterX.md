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

The add parameterX plugin **adds parameters to the existing ones** in the configuration of each access. By doing this, communication with suppliers improves.

### Execution example


{

    "plugins": {
        "step": "REQUEST_ACCESS",
        "pluginsType": [
            {
                "type": "POST_STEP",
                "name": "add_parameterX",
                "parameters": [
							{
								"key": "paramterConfiguration",
								"value": "{\"accesses\": [ {\"accessIds\": [\"1094\",\"185\"], \"parameters\": [ {\"key\": \"A\", \"value\": \"hotel,room,board\"}, {\"key\": \"B\", \"value\": \"100\"} ] }, {\"parameters\": [ {\"key\": \"C\", \"value\": \"valor\" } ] } ] }"
							}
            }
        ]
    }
}
```
