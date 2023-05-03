+++
title = "Providers"
pagetitle = "Providers"
description = "Create and update your prpviders"
icon = "fa-users"
weight = 8
alwaysopen = false
isDirectory=false
+++


# How to add a provider

</br>

## Considerations
  
It is an incremental load, so bear in mind these considerations:
    
* If a provider exists then it is updated. 
* If a provider does not exist then it is created. 
* Existing providers that are not referenced are not removed. 
* If an existing provider has to be removed from system then you have to contact with TravelgateX. 
* If there is any problem with a provider's information then it is omitted (and logged) but the load continues.

</br>

## Specifications

* File name: **`Providers.csv`**.

* Each line represents a unique provider and contains all the information (fields) about it. 

* The first line is not a header line: it contains data directly. 

* Inside a line fields are separated using the character `#`. This character can't be used inside data because fields would be gathered in a wrong way. 

* The data of the fields is not encapsulated by `"` or any other character: the information must be included directly.

* Any blank line will be skipped.

* The file and its data have to be encoded using **UTF-8**. Otherwise there can be stored strange characters. 

* If a field is mandatory then it has to be present in each line, even if it has no data: its used position cannot be omitted. If mandatory then we have to see if its data is mandatory or not.

* If a field is not mandatory but we want to set it then all previous fields must be present: if any previous field is not mandatory and we don't want to set a value we will have to include it with no value. We need it this way as it is used the field position to map it to the target data.

* If a field's data is not mandatory and we don't want to set it then we just keep it empty: i.e. ...##...

* If a field's data is mandatory then we have to set something (no value is not admitted). 

</br>

## Line fields
  
| **Position** | **Mandatory Field** | **Mandatory Data**	| **Type** | **Description**|
| -----------  | ------------------- | ------------------ | -------- | ---------------|
| 0     	     | Yes                 |	Yes               | string   | Provider code
| 1     	     | Yes                 |	Yes               | string   | Provider name
| 2     	     | Yes                 |	Yes               | boolean  | Indicate if the provider is Direct or Third.<ul><li>**_true_** → Direct / Own provider</li><li>**_false_** → Third / External provider</li></ul>

</br>

## Example

~~~
1#Test Provider#true
~~~
