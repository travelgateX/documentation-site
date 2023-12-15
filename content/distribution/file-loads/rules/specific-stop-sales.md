+++
title = "Specific stop sales"
pagetitle = "Specific stop sales"
description = "Define specific stop sales by different conditions"
icon="fa-ban"
weight = 4
alwaysopen = false
isDirectory = false
+++

# Specific Stop Sales


## Considerations
  
It is an absolute load, so bear in mind these considerations:

* If all the data on the file is correct then the existing definition of `General Stop Sales` is removed and file's data is inserted into the system to define the new `Specific Stop Sales`. 

* If there is any problem with the file or its data then the load is cancelled and the existing definition of `Specific Stop Sales` is not removed.
  
</br>

## Specifications

* File name: **`Rules_SpecificStopSales.csv`**. 

* Each line represents a unique specific stop sale and contains all the information (fields) about it. 

* The first line is not a header line: it contains data directly. 

* Inside a line, by default fields and subfields are separated using the characters `#`, `|` and `;`. None of these characters can't be used inside data because fields and subfields would be gathered in a wrong way. 

* The data of the fields is not encapsulated by `"` or any other character: the information must be included directly. 

* Any blank line will be skipped.

* The file and its data have to be encoded using <b>UTF-8</b>. Otherwise there can be stored strange characters.

* If a field is mandatory then it has to be present in each line, even if it has no data: its used position cannot be omitted. If mandatory then we have to see if its data is mandatory or not.

* If a field is not mandatory but we want to set it then all previous fields must be present: if any previous field is not mandatory and we don't want to set a value we will have to include it with no value. We need it this way as it is used the field position to map it to the target data.

* If a field's data is not mandatory and we don't want to set it then we just keep it empty: i.e. ...##...

* If a field's data is mandatory then we have to set something (no value is not admitted). 

</br>

 For the complexity of the data the fields are not always directly unitary data many fields are complexe data so they have to be divided in other subfields.
 
 The fields are separated by `#` and internally, if it needs it, its subfields are separated by `|`. And also if a subfield is a list of values it also has its values separated by `;`.

 </br>

| **Case**           | **Example**         | **Description**    |
| ------------------ | ------------------- | ------------------ | 
| Field without data | ...##...            | We have the separator `#` and nothing inside.
| Field directly with data and no subfields | ...#12#...   | It is just the value 12.
| Field with complex data (not needed)      | ...#0#...    | The type is **0** and it does not need of any other data so there is no more information (it has not got any more subfield).
| Field with complex data (simple value)    | ...#1|AS#... | The type is **1** and it needs more data so there is another subfield (separated with `|`) whose value is "AS" (and it is not a list). *i.e: a code*.
| Field with complex data (simple values)   | ...#1|10-08-2018|15-08-2018#... | The type is 1 and it needs more data so there are other subfields (separated with `|`) whose value is a simple value. *i.e: a range of dates*.
| Field with complex data (list)            | ...#1|AS;XF;TR#... | The type is 1 and it needs more data so there is another subfield (separated with `|`) whose value is a list and its elements are separated with `;` ("AS", "XF" and "TR"). *i.e: a list of codes*.

</br>

## Control Lines

* Control lines allow us to determine how the content of the file has to be interpreted.

* This type of lines do not contain data, they contain orders for the process and these orders take effect from the control line forward, so control lines should be placed at the begining of the file (and after any header).

* Each control operation has to be given on a separate line (one line one control operation).

</br>

| **Control**            | **Description**        
| ---------------------- | ------------------- 
| **@CTRL:separator=**	 | With the control line **@CTRL:separator=** followed by a character or string it can be defined the fields separator to be used, overwriting the default one or any previous definition. The specified character or string cannot be used inside data because fields would be gathered in a wrong way. </br></br>*Example of line to set `#` as the fields separator: `@CTRL:separator=#`*.  
| **@CTRL:separatorsub=**  | With the control line **@CTRL:separatorsub=** followed by a character or string it can be defined the subfields separator to be used, overwriting the default one or any previous definition. The specified character or string cannot be used inside data because fields and subfields would be gathered in a wrong way. </br></br>*Example of line to set `-` as the subfields separator: `@CTRL:separatorsub=-`*.    
| **@CTRL:separatorlist=** | With the control line** @CTRL:separatorlist=** followed by a character or string it can be defined the separator to be used with list items, overwriting the default one or any previous definition. The specified character or string cannot be used inside list data because list items would be gathered in a wrong way. </br></br>*Example of line to set `#` as the list items separator: `@CTRL:separatorlist=#`*.    
| **@CTRL:remove**         | With the control line **@CTRL:remove** we order the process to remove all the specific stop sale rules that are currently on the system. See [Remove Data](remove-data). </br></br>*Example of line: @CTRL:remove*.

</br>

## Data Line fields
  
| **Position** | **Mandatory Field** | **Subfield Position** | **Mandatory Data** | **Type**               | **Description/Value** |
| -----------  | ------------------- | --------------------- | ------------------ | ---------------------- | ---------------------
| 0     	   | Yes                 | 0                     | Yes                | enumeration: 0,1,2,... | Defines if the rule is specific for a list of concret agencies or if it applies to all agencies. <ul><li>0 = All agencies.</li><li>1 = List of agencies: in this case it is mandatory to receive a list of items.</li></ul>
| 0     	   | Yes                 | 1                     | -                  | list of strings        | List of agency codes.
| 1     	   | Yes                 | 0                     | Yes                | enumeration: 0,1,2,... | Defines the type of Cancellation Policies. <ul><li>0 = All (NRF + RF)</li><li>1 = Only No refundable (NRF)</li><li>2 = Only Refundable (RF)</li></ul>
| 2     	   | Yes                 | 0                     | Yes                | enumeration: 0,1,2,... | Defines the Rate Type. <ul><li>0 = All (B2C + B2B)</li><li>1 = Only B2C</li><li>2 = Only B2B</li></ul>
| 3    	       | Yes                 | 0                     | Yes                | enumeration:0,1,2,...  | Defines if the rule is specific for a list of concret providers or if it applies to all providers or only to direct or third party providers. ul><li>0 = All providers</li><li>1 = List of items: in this case it is mandatory to receive a list of items.</li><li>2 = Only all Third Party providers</li><li>3 = Only all Direct providers</li></ul>
| 3    	       | Yes                 | 1                     | -                  | list of strings        | List of provider codes.
| 4    	       | Yes                 | 0                     | Yes                | enumeration:0,1,2,...  | Defines if the rule is specific for a list of concret hotels (and from countries, cities, chains or destinations) or if it applies to all hotels. <ul><li>0 = All hotels</li><li>1 = List of hotels</li><li>2 = Hotels from a list of countries</li><li>3 = Hotels from a list of cities</li><li>4 = Hotels from a list of chains</li><li>5 = Hotels from a list of destinations</li><li>6 = Hotels from a list of groups of destinations</li></ul>
| 4    	       | Yes                 | 1                     | -                  | list of strings        | List of codes: hotels, countries, cities, chains or destinations (just one type).
| 5    	       | Yes                 | 0                     | Yes                | enumeration:0,1,2,...  | Defines if the rule is specific for a list of concret markets or if it applies to all markets. <ul><li>0 = All markets.</li><li>1 = List of markets: in this case it is mandatory to receive a list of items.</li></ul>
| 5    	       | Yes                 | 1                     | -                  | list of strings        | List of market codes.
| 6    	       | Yes                 | 0                     | Yes                | enumeration: 0,1,2,... | Defines if the rule is specific for a list of concret meal plans or if it applies to all meal plans. <ul><li>0 = All meal plans.</li><li>1 = List of meal plans: in this case it is mandatory to receive a list of items.</li></ul>
| 6    	       | Yes                 | 1                     | -                  | list of strings        | List of meal plans codes.
| 7    	       | Yes                 | 0                     | Yes                | enumeration: 0,1,2,... | Defines if the rule is specific for a concret range of check-in dates or if it applies to any date. <ul><li>0 = All check-in dates.</li><li>1 = Range of check-in dates.</li></ul>
| 7    	       | Yes                 | 1                     | -                  | date                   | Check-in date: from (inclusive). Only the date is used. Time is ignored
| 7    	       | Yes                 | 2                     | -                  | date                   | Check-in date: to (inclusive).Only the date is used. Time is ignored.
| 8    	       | Yes                 | 0                     | Yes                | enumeration: 0,1,2,... | Defines if the rule is specific for a concret range of booking dates or if it applies to any date. <ul><li>0 = All booking dates.</li><li>1 = Range of booking dates.</li></ul>
| 8    	       | Yes                 | 1                     | -                  | date                   | Booking date: from (inclusive). Only the date is used. Time is ignored.
| 8    	       | Yes                 | 2                     | -                  | date                   | Booking date: to (inclusive).Only the date is used. Time is ignored.
| 9     	   | Yes                 | 0                     | Yes                | string                 | Description of the rule.
| 10     	   | -                   | 0                     | -                  | integer                | Defines the release. A zero value indicates that there is no release applied.

### Notes

* A `decimal` value has to be set using '.' as separator.
* A `boolean` value can be set using false/true or 0/1.
* A `date` value has to be set with the format "yyyy-MM-dd" (i.e. "2018-05-12").
* An `hour` value has to be set with an integer between 0 and 23.
* `Country` and `market` are in ISO 3166-1 alpha-2 code format (i.e. "ES", "PT", "FR",...).


## Remove Data

If it is needed there is the possibility to remove all the temporary pricing rules that are currently on the system.

To do this we cannot use the previous line fields specifications as they are used to set data, not to remove it.

* We have to use the same file name.
* The file has to be composed of one line with the following control line: **@CTRL:remove**
* Any blank line will be skipped (without generating any error).
* If there is any other line with data on the file then an error will be generated and no data will be removed from the system

{{%custom-children%}}