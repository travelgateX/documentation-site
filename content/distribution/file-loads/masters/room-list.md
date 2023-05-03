+++
title = "Room List"
pagetitle = "Room List"
description = "Create and update your room list"
icon = "fa-bed"
weight = 7
alwaysopen = false
isDirectory=false
+++


# How to add a room

</br>

## Considerations
  
It is an incremental load, so bear in mind these considerations:
    
* If a room exists then it is updated.

* If a room does not exist then it is created.

* Existing rooms that are not referenced are not removed.

* If an existing room has to be removed from system then you have to contact with TravelgateX.

* If there is any problem with a room's information then it is omitted (and logged) but the load continues.

</br>

## Specifications
  
* File name: **`Master_RoomList.csv`**.

* Each line represents a room.

* The first line is a header line: it does not contain data directly and it will be skipped.

* Inside a line, by default fields are separated using the character `#`. This character can't be used inside data because fields would be gathered in a wrong way. *There is an exception, the Room Description can contain the character `#` and it all will be gathered correctly.*

* The data of the fields is not encapsulated by `"` or any other character: the information must be included directly.

* Any blank line will be skipped.

* The file and its data have to be encoded using <b>UTF-8</b>. Otherwise there can be stored strange characters.

* If a field is mandatory then it has to be present in each line, even if it has no data: its used position cannot be omitted. If mandatory then we have to see if its data is mandatory or not.

* If a field is not mandatory but we want to set it then all previous fields must be present: if any previous field is not mandatory and we don't want to set a value we will have to include it with no value. We need it this way as it is used the field position to map it to the target data.

* If a field's data is not mandatory and we don't want to set it then we just keep it empty: i.e. ...##...

* If a field's data is mandatory then we have to set something (no value is not admitted). 

</br>

## Line fields
  
| **Position** | **Mandatory Field** | **Mandatory Data**	| **Type** | **Description**|
| -----------  | ------------------- | ------------------ | -------- | ---------------|
| 0     	     | Yes                 |	Yes               | string   | Room code
| 1     	     | Yes                 |	Yes               | string   | Room description

</br>

## Example

~~~
RoomCode#RoomDescription
1#Room 1
2#Room 2
3#Room 3
~~~
