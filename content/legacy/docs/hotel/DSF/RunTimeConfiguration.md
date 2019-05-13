---
title: RuntimeConfiguration
keywords: hotel, data structure, run time configuration, time
search: Hotel - Data Structure - RunTimeConfiguration
sidebar: mydoc_sidebar
permalink: /docs/hotel/DSF/RuntimeConfiguration
---



### Method Goals


This message returns a template of the supplier's configuration.



### Request Format


The request does not require any elements, it is an empty request.



### Response Format


The returned XML contains a template of all fields used by the supplier.



### RuntimeConfigurationRQ Example


~~~xml
    <RuntimeConfigurationRQ>
    </RuntimeConfigurationRQ>
~~~


### RuntimeConfigurationRQ Description



| **Element**			| **Number**	| **Type**	| **Description**	|
| ----------------------------- | ------------- | ------------- | --------------------- |
| RuntimeConfigurationRQ	| 1          	|		| Root node.		|
                 



### RuntimeConfigurationRS Example


~~~xml
    <RuntimeConfigurationRS>
        <Configuration>
            <User/>
            <Password/>
            <UrlGeneric/>
            <Parameters>
                <Parameter key = "agencia" value = ""/>
            </Parameters>
        </Configuration>
    </RuntimeConfigurationRS>
~~~


### ConfiguracionRunTimeRS Description


 
| **Element**			| **Number**	| **Type**	| **Description**			|
| ----------------------------- | ------------- | ------------- | ------------------------------------- |
| RuntimeConfigurationRS	| 1          	|		| Root node.				|
 
