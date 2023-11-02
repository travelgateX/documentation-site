+++
title = "Hotels portfolio by Agency"
pagetitle = "Hotels portfolio by Agency"
description = "Set concrete hotels portfolios by agency"
icon = "fa-cubes"
weight = 9
alwaysopen = false
isDirectory=false
+++


# How to add a hotel portfolio by agency

</br>

## Considerations
  
It is an absolute load, so bear in mind these considerations:

* If all the data on the file is correct then the existing hotels portfolios by agency are removed and file's data is inserted into the system to define the news hotels portfolios by agency.

* If there is any problem with the file or its data then the load is cancelled and the existing hotels portfolios by agency are not removed.

* If an agency does not have a hotels portfolio on the system then that agency will use all the hotels on the system.

* If an agency has a hotels portfolio on the system and that agency is not included on the file then that portfolio will be removed and the agency will use all the hotels on the system.

* If all hotels portfolios for all agencies have to be removed form the system then you have to contact with TravelgateX.

</br>
  
## Specifications

* File name: **`Master_AgencyHotels.csv`**.

* Each line represents a unique hotel portfolio for one agency.

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
| 0     	     | Yes                 |	Yes               | string   | Agency Code
| 1     	     | Yes                 |	Yes               | string   | List of hotel codes that correspond to the hotel portfolio for the corresponding agency. </br></br>*Each hotel code of the list has to be separated using the `;` as separator*.

</br>

## Example

~~~
TEST_AGENCY#1111;2222;3333;4444
~~~