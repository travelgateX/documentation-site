+++
title = "Hotels"
pagetitle = "Hotels"
description = "Create and update your hotels"
icon = "fa-building"
weight = 3
alwaysopen = false
isDirectory=false
+++


# How to add a hotel

</br>

## Considerations

It is an incremental load, so bear in mind these considerations:

* If a hotel exists then it is updated. 

* If a hotel does not exist then it is created. 

* Existing hotels that are not referenced are not removed. 

* If an existing hotel has to be removed from system then you have to contact with TravelgateX. 

* If there is any problem with a hotel's information then it is omitted (and logged) but the load continues.

</br>

## Specifications

* File name: **`Master_Hotels.csv`** or **`Master_Portfolio.csv`**

* Each line represents a unique hotel and contains all the information (fields) about it.

* Inside a line fields are separated using the character `|`. This character can't be used inside data because fields would be gathered in a wrong way. 

* The data of the fields is not encapsulated by `"` or any other character: the information must be included directly. 

* Any blank line will be skipped. 

* The file and its data have to be encoded using **UTF-8** Otherwise there can be stored strange characters.

* If a field is mandatory then it has to be present in each line, even if it has no data: its used position cannot be omitted. If mandatory then we have to see if its data is mandatory or not.

* If a field is not mandatory but we want to set it then all previous fields must be present: if any previous field is not mandatory and we don't want to set a value we will have to include it with no value. We need it this way as it is used the field position to map it to the target data.

* If a field's data is not mandatory and we don't want to set it then we just keep it empty: i.e. ...||...

* If a field's data is mandatory then we have to set something (no value is not admitted). 

</br>

## Control Lines

* Control lines allow us to determine how the content of the file has to be interpreted.

* This type of lines do not contain data, they contain orders for the process and these orders take effect from the control line forward, so control lines should be placed at the begining of the file (and after any header).

* Each control operation has to be given on a separate line (one line one control operation).

| **Control**          | **Description**     |
| -------------------  | ------------------- | 
| **@CTRL:separator=** | 	With the control line **@CTRL:separator=** followed by a character or string it can be defined the fields separator to be used, overwriting the default one or any previous definition. The specified character or string cannot be used inside data because fields would be gathered in a wrong way. </br></br> *Example of line to set <code>#</code> as the fields separator: <code>@CTRL:separator=#</code>*.

</br>

## Line fields
  
| **Position** | **Mandatory Field** | **Mandatory Data**	| **Type** | **Description**|
| -----------  | ------------------- | ------------------ | -------- | ---------------|
| 0     	     | Yes                 |	Yes               | string   | Hotel code
| 1     	     | Yes                 |	Yes               | string   | Hotel name
| 2     	     | Yes                 |	No                | string   | Address
| 3     	     | Yes                 |	No                | decimal  | Longitude
| 4     	     | Yes                 |	No                | decimal  | Latitude
| 5     	     | Yes                 |	No                | string   | Phone
| 6     	     | Yes                 |	No                | string   | Category code
| 7     	     | Yes                 |	No                | string   | Category name
| 8     	     | Yes                 |	No                | string   | City code
| 9     	     | Yes                 |	No                | string   | City name
| 10     	     | Yes                 |	No                | string   | ISO Country Code (2 chars)
| 11    	     | Yes                 |	No                | string   | ZIP code
| 12     	     | Yes                 |	No                | string   | Chain code
| 13    	     | Yes                 |	No                | string   | Chain name

</br>

## Example

~~~
HotelCode|HotelName|Address|Longitude|Latitude|Phone|CategoryCode|CategoryName|Citycode|CityName|ISOCountryCode|ZIPCode|ChainCode|ChainName
123|Hotel Test Distribution|Parc Bit, 1 (Mallorca)|39.637070|2.63170357|+34871968181|5|5 stars|16563|Palma de Mallorca|ES|||
~~~
