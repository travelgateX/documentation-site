+++
title = "Booking List"
pagetitle = "Book (How To Perform a Booking)"
description = "How to create a new Booking by calling the Book Mutation"
icon = "fa-calendar"
weight = 2
alwaysopen = false
+++

Flow to book 

## HotelX Settings

In HotelX we have differents configuration level settings for a request. With settings, you can configure some aspect of the request:


| Field  | Description |
|----|-----|
| Context | Indicates the context codes that you want to send and to receive.|
| Timeout | Set request timeout in the differents call types:* search * quote * book (includes book, cancel and booking) |
|Language|What language you want to do the request.|
|Currency|Indicates the currency to send to the suppliers.|
|Nationality|Indicates the nationality to send to the suppliers.|
|Market|Indicates the market to send to the suppliers.|
|Business Rules|This rules are used to send directly to the integration, and affected to the supplier response.<br>* Options Quota: number of options returned via integration.<br>* Type: Choose priority of product |



How we have said some lines before, we have three ways to indicated this settings.

We are going to begin with the most specific until the most general.

### Settings per request

This setting overwrites all others.

You must have permission to overwrite settings, if you don't have this permission you won't be able to change the configuration on runtime, that is, to each request.

The fields are the same in the three levels, only that the information is overwritten in lower levels. So, request settings overwrite all others settings.

### Settings per client

The settings in this level are used when you don’t overwrite settings to request level.

However, if you have the same client in different groups, you can set different settings to each one. In this case, you must specify which group you want to use in the request, to choose which configuration to use.

### Settings per HotelX

And the last one, settings per hotelX instance. These settings are in the higher level, in the case that you haven't got client settings and you don't specify it in the request, the settings are got from hotelX instance, this setting is mandatory.

## Execute a plugin

A plugin execution can be specified in any request’s HotelSettingsInput and must specify in which step has to be executed. The plugin type and name are mandatory in order to identify a plugin instance.

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
