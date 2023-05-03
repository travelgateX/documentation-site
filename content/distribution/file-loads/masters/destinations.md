+++
title = "Destinations"
pagetitle = "Destinations"
description = "Create and update your destinations and destinations groups"
icon = "fa-globe"
weight = 10
alwaysopen = false
isDirectory=false
+++


# How to add a destination

</br>

## Considerations
  
It is an incremental load, so bear in mind these considerations:

* If a destination exists then it is updated.

* If a destination does not exist then it is created.
 
* Existing destinations that are not referenced are not removed.

* If an existing destination has to be removed from system then you have to contact with TravelgateX.

* If there is any problem with a destination's information then it is omitted (and logged) but the load continues.

</br>

## Specifications
  
* File name: **`Master_Destinations.csv`**.

* Each line represents a unique destination and contains all the information (fields) about it.

* The first line is not a header line: it contains data directly.

* Inside a line, by default fields are separated using the character <code>#</code>. This character can't be used inside data because fields would be gathered in a wrong way.

* The data of the fields is not encapsulated by <code>"</code> or any other character: the information must be included directly.

* Any blank line will be skipped.

* The file and its data have to be encoded using <b>UTF-8</b>. Otherwise there can be stored strange characters.

* All fields are mandatory.

</br>

## Control lines

* Control lines allow us to determine how the content of the file has to be interpreted.

* This type of lines do not contain data, they contain orders for the process and these orders take effect from the control line forward, so control lines should be placed at the begining of the file (and after any header).

* Each control operation has to be given on a separate line (one line one control operation).

</br>

| **Control**          | **Description**     |
| -------------------  | ------------------- | 
| **@CTRL:separator=** | 	With the control line **@CTRL:separator=** followed by a character or string it can be defined the fields separator to be used, overwriting the default one or any previous definition. The specified character or string cannot be used inside data because fields would be gathered in a wrong way. </br></br> *Example of line to set <code>#</code> as the fields separator: <code>@CTRL:separator=#</code>*.

</br>

## Line fields
  
| **Position** | **Mandatory Field** | **Mandatory Data**	| **Type** | **Description**|
| -----------  | ------------------- | ------------------ | -------- | ---------------|
| 0     	     | Yes                 |	Yes               | string   | Destination Code. It can't be set to zero value. It is the code of the destination and it will be used for reference the node on the tree. Note: *This code should be match the city code in the Hotel master file*. 
| 1     	     | Yes                 |	-                 | string   | Empty field. It will be ignored.
| 2     	     | Yes                 |	Yes               | string   | Destination name.
| 3     	     | Yes                 |	-                 | string   | ISO Country Code (2 chars).
| 4     	     | Yes                 |	-                 | string   | Parent destination code. If the destination has no parent then it has to be set to zero.

</br>

## Example

~~~
5##Springs (California)#US#0
~~~




# How to add a destination group
  
## Considerations
  
It is an incremental load, so take in account these considerations:
     
* If a group exists then it is updated.

* If a group does not exist then it is created.

* Existing groups that are not referenced are not removed.

* If an existing group has to be removed from system then you have to contact with TravelgateX.

* If there is any problem with a group's information then it is omitted (and logged) but the load continues.

</br>

## Specifications
  
* File name: **`Master_DestinationsGroups.csv`**.

* Each line represents a unique destination group and contains all the information (fields) about it.

* The first line is not a header line: it contains data directly.

* Inside a line, by default fields are separated using the character `#`. This character can't be used inside data because fields would be gathered in a wrong way.

* The data of the fields is not encapsulated by `"` or any other character: the information must be included directly.

* Any blank line will be skipped.

* The file and its data have to be encoded using **UTF-8**. Otherwise there can be stored strange characters.

* All fields are mandatory.

</br>
  
## Control lines

* Control lines allow us to determine how the content of the file has to be interpreted.

* This type of lines do not contain data, they contain orders for the process and these orders take effect from the control line forward, so control lines should be placed at the begining of the file (and after any header).

* Each control operation has to be given on a separate line (one line one control operation).

</br>

| **Control**          | **Description**     |
| -------------------  | ------------------- | 
| **@CTRL:separator=** | 	With the control line **@CTRL:separator=** followed by a character or string it can be defined the fields separator to be used, overwriting the default one or any previous definition. The specified character or string cannot be used inside data because fields would be gathered in a wrong way. *Example of line to set <code>#</code> as the fields separator: <code>@CTRL:separator=#</code>*.|
| **@CTRL:separatorlist=** |  With the control line **@CTRL:separatorlist=** followed by a character or string it can be defined the separator to be used with list items, overwriting the default one or any previous definition. The specified character or string cannot be used inside list data because list items would be gathered in a wrong way. *Example of line to set <code>_</code> as the list items separator: <code>@CTRL:separatorlist=_</code>*.|

</br>

## Line fields
  
| **Position** | **Mandatory Field** | **Mandatory Data**	| **Type** | **Description**|
| -----------  | ------------------- | ------------------ | -------- | ---------------|
| 0     	     | Yes                 |	Yes               | string   | Group ID. Unique group identifier.
| 1     	     | Yes                 |	No                | string   | Group Name/Description. If not given then it will be used the group ID as name.
| 2     	     | Yes                 |	Yes               | string   | Destionation List. List of destinations that belong to the corresponding group. </br></br>*The list of destinations stored in this value are separated by default with ";" but it can be changed.*

</br>

## Example

~~~
5#California Group#1234;4567;8910
~~~
