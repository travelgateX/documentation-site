+++
title = "Useful information"
pagetitle = "Useful information"
description = "Some concepts and particularities"
icon = "fa-check-square-o"
weight = 7
alwaysopen = false
+++

## HotelX Settings

In [HotelX](/hotel-x/) there are different configuration level settings for a request. With these settings, you can configure some aspect of the request:


| Field  | Description |
|----|-----|
| [context](/hotel-x/concepts/accesses-supplier-context/#context) | It indicates the context codes that you want to send and to receive.|
| Timeout | It sets the requested timeout in the different query and mutation types:* search * quote * book (includes cancel and booking) |
|Language|The language you want to use in the request.|
|Currency|It indicates the currency you are going to send to the supplier or suppliers.|
|Nationality|It indicates the nationality you are going to send to the supplier or suppliers.|
|Market|It indicates the market you are going to send to the supplier or suppliers.|
|Business Rules|These rules are sent directly via the integration, and they affect the supplier's response.<br>* Options Quota: number of options returned via the integration.<br>* Type: Choose priority of product |

As we have previously stated, we have three ways to indicate these settings.

We are going to start with the most specific until the most general.

### Settings per request

These [settings](/hotel-x/concepts/settings/) overwrite all others.

You must have permission to overwrite [settings](/hotel-x/concepts/settings/), if you don't have this permission you won't be able to change the configuration on runtime, that is, to each request.

These fields are the same in the three levels, only that the information is overwritten in lower levels. So, the request [settings](/hotel-x/concepts/settings/) overwrite all other settings.

### Settings per client

The [settings](/hotel-x/concepts/settings/) in this level are used when you don’t overwrite settings to the request level.

However, if you have the same client in different groups, you can set different settings to each one. In this case, you should specify which group you want to use in the request, in order to choose which configuration to use.

### Settings per HotelX

And the last one, settings per [HotelX](/hotel-x/) instance. These settings are in the highest level, in the case that you don't have the client's [settings](/hotel-x/concepts/settings/) and you don't specify them in the request, settings are obtained from HotelX instance, this setting is mandatory.

## How to execute a plugin

A [plugin](/hotel-x/plugins/) execution can be specified in any request’s HotelSettingsInput and it must specify in which step it should be executed. The plugin type and name are mandatory in order to identify a plugin instance.

```
"plugins": {

   "step": PluginStepType,

   "pluginsType": [

    {

     "type": PluginType,

     "name": plugin name (its unique),

     "parameters": []

    }

   ]

  }
```

## Develop your own plugin

Plugins are a Go language feature and we are using the [native package](https://golang.org/pkg/plugin/) in order to implement them. Therefore, a plugin is simply a go file that contains a set of functions that we will specify, the interface is yet to be defined.
