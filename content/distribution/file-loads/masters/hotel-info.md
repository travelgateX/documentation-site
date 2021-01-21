+++
title = "Hotel Info"
pagetitle = "Hotel Info"
description = "Add extra information to your hotels: images, descriptions..."
icon = "fa-picture-o"
weight = 4
alwaysopen = false
isDirectory=false
+++


# How to add extra info to a hotel

## Considerations
  
It is an incremental load, so bear in mind these considerations:
    
* If a meal plan exists then it is updated.

* If a meal plan does not exist then it is created.

* Existing meal plans that are not referenced are not removed.

* If an existing meal plan has to be removed from system then you have to contact with TravelgateX.

* If there is any problem with a meal plan's information then it is omitted (and logged) but the load continues.

</br>

## Specifications

* File name: **`Master_HotelInfo.csv`** or **`Master_Portfolio.csv`**

* Each line represents a resource for a hotel.

* The first line is a header line: it does not contain data directly and it will be skipped.

* Inside a line, by default fields are separated using the character `#`. This character can't be used inside data because fields would be gathered in a wrong way. *There is an exception, the resource value can contain the character "#" and it all will be gathered correctly.*

* The data of the fields is not encapsulated by `"` or any other character: the information must be included directly.

* Any blank line will be skipped.

* The file and its data have to be encoded using **UTF-8**. Otherwise there can be stored strange characters.

* If a field is mandatory then it has to be present in each line, even if it has no data: its used position cannot be omitted. If mandatory then we have to see if its data is mandatory or not.

* If a field is not mandatory but we want to set it then all previous fields must be present: if any previous field is not mandatory and we don't want to set a value we will have to include it with no value. We need it this way as it is used the field position to map it to the target data.

* If a field's data is not mandatory and we don't want to set it then we just keep it empty: i.e. ...||...

* If a field's data is mandatory then we have to set something (no value is not admitted).

</br>

## Line fields
  
| **Position** | **Mandatory Field** | **Mandatory Data**	| **Type** | **Description**|
| -----------  | ------------------- | ------------------ | -------- | ---------------|
| 0     	     | Yes                 |	Yes               | string   | Hotel code
| 1     	     | Yes                 |	Yes               | string   | Type of the hotel resource:<ul>* **Img** = Image</li>* **Prop** = Property Type</li>* **Note** = Additional Notes</li>* **Attr** = Attribute</li>* **Sdesc** = Short Description</li>* **Ldesc** = Long Description</li></ul>
| 2     	     | Yes                 |	-                 | string   | Attribute code. </br></br>*This field is only mandatory it the resource type is "Attr".*
| 3     	     | Yes                 |	-                 | string   | Attribute type. </br></br>*This field is only mandatory it the resource type is "Attr".*
| 4     	     | Yes                 |	Yes               | string   | Value of the resource

</br>

## Example

~~~
HotelCode#ResourceType#Value
1001#Img###http://image.com/1
1001#Img###http://image.com/2
1001#Prop###Hostel
1001#Attr#3#General#FreeWifi
1001#Sdesc###Short description of the hotel.
1001#Ldesc###Long description of the hotel including more information.
~~~