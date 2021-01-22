+++
title = "Offices"
pagetitle = "Offices"
description = "Create and configurate offices for your agencies"
icon = "fa-list-ul"
weight = 2
alwaysopen = false
isDirectory=false
+++

# What is the meaning of *office*?

xxxx

</br>

# How to create an office

</br>

## Considerations
  
It is an incremental load, so bear in mind these considerations:
    
* If an agency exists then it is updated.

* If an agency does not exist then it is created.

* Existing agencies that are not referenced are not removed.

* If an existing agency has to be removed from system then you have to contact with TravelgateX.

* If there is any problem with an agency's information then it is omitted (and logged) but the load continues.

</br>

## Specifications<
  
* File name: **`Master_Offices.csv`**.

* Each line represents a unique agency and contains all the information (fields) about it. 
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
  
| **Position** | **Mandatory Field** | **Mandatory Data** | **Type** | **Description**|
| -----------  | ------------------- | ------------------ | -------- | ---------------|
| 0     	   | Yes                 |	Yes               | string   | Office code
| 1     	   | Yes                 |	Yes               | string   | Office name
| 2     	   | Yes                 |	Yes               | string   | Agency code (to which the office belongs to)
| 3     	   | Yes                 |	Yes               | boolean  | Is active
| 4     	   | Yes                 |	Yes               | decimal  | Markup

</br>

## Examples

~~~
2#Office2#AG1#true#0.8
3#Office3#AG1I#false#1
4#Office4#AG1#true#0
1#Office#AG1#true#1.2
2#Office2#AG2#true#3.4
~~~
