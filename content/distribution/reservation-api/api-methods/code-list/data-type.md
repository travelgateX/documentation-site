+++
title = "Data Types"
pagetitle = "Data Types"
description = "Data Types format in Reservation API"
icon="fa-bars"
weight = 3
alwaysopen = false
isDirectory = false
+++

#  Data Types

Formats to be used with each data type are presented in the following table:

|                Data Type                |     Format         
| :--------------------------------: | ----------------------- |
| decimal | Value has to be set using '.' as separator. 
| boolean | Value has to be set using *false/true*.
| date    | Value is a date passed as string and has to be set with the format *"yyyy-MM-dd"* (no hour/minutes/seconds information will be used with it). 
| dateTime| Value is a date passed as string and has to be set with the format *"yyyy-MM-dd HH:mm:ss"* or *"yyyy-MM-dd"* (in the second case it is completed with *"00:00:00"* if it is a *'from'* date and with *"23:59:59"* if it is a *'to'* date).



