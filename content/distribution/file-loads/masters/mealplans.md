+++
title = "MealPlans"
pagetitle = "MealPlans"
description = "Create and configurate your mealplans"
icon = "fa-cutlery"
weight = 5
alwaysopen = false
isDirectory=false
+++


# How to add a mealplan

</br>

## Considerations
  
It is an incremental load, so bear in mind these considerations:

* If a meal plan exists then it is updated. 

* If a meal plan does not exist then it is created. 

* Existing meal plans that are not referenced are not removed. 

* If an existing meal plan has to be removed from system then you have to contact with TravelgateX. 

* If there is any problem with a meal plan's information then it is omitted (and logged) but the load continues.

</br>
  
 ## Specifications
  
* File name: **`Master_Mealplans.csv`**.

* Each line represents a unique meal plan and contains all the information (fields) about it. 

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
| 0     	     | Yes                 |	Yes               | string   | Meal plan code
| 1     	     | Yes                 |	Yes               | string   | Meal plan name 

</br>

## Example

~~~
AI#All inclusive
~~~
