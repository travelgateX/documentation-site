+++
title = "General stop sales"
pagetitle = "General stop sales"
description = "Define general stop sales by different conditions"
icon="fa-ban"
weight = 3
alwaysopen = false
isDirectory = false
+++

# General Stop Sales

## Considerations
  
It is an absolute load, so bear in mind these considerations:
      
* If all the data on the file is correct then the existing definition of "General Stop Sales" is removed and file's data is inserted into the system to define the new "General Stop Sales".

* If there is any problem with the file or its data then the load is cancelled and the existing definition of "General Stop Sales" is not removed.
  
</br>

## Specifications

* File name:  `Rules_GeneralStopSales.csv `

* Each line represents a unique agency and contains all the information (fields) about it.

* The first line is not a header line: it contains data directly.

* Inside a line fields are separated using the character  `#`. This character can't be used inside data because fields would be gathered in a wrong way.

* The data of the fields is not encapsulated by  `"` or any other character: the information must be included directly.

* Any blank line will be skipped.

* The file and its data have to be encoded using **UTF-8**. Otherwise there can be stored strange characters.

* If a field is mandatory then it has to be present in each line, even if it has no data: its used position cannot be omitted. If mandatory then we have to see if its data is mandatory or not.

* If a field is not mandatory but we want to set it then all previous fields must be present: if any previous field is not mandatory and we don't want to set a value we will have to include it with no value. We need it this way as it is used the field position to map it to the target data.

* If a field's data is not mandatory and we don't want to set it then we just keep it empty: i.e. ...##...

* If a field's data is mandatory then we have to set something (no value is not admitted).

* The fields are separated by  `#`. If a field is a list of values it also has its values separated by  `;`.

</br>

| **Case**           | **Example**         | **Description**    |
| ------------------ | ------------------- | ------------------ | 
| Field without data | ...##...            | We have the separator  `# ` and nothing inside.
| Field directly with data and no lists | ...#12#...   | It is just the value 12.
| Field with a list of elements | ...#AS;XF;TR#...     | Its value is a list and its elements are separated with ";" ("AS", "XF" and "TR").

</br>

## Control Lines

* Control lines allow us to determine how the content of the file has to be interpreted.

* This type of lines do not contain data, they contain orders for the process and these orders take effect from the control line forward, so control lines should be placed at the begining of the file (and after any header).

* Each control operation has to be given on a separate line (one line one control operation).

</br>

| **Control**              | **Description**        
| ------------------------ | ------------------- 
| **@CTRL:separator=**	   | With the control line **@CTRL:separator=** followed by a character or string it can be defined the fields separator to be used, overwriting the default one or any previous definition. The specified character or string cannot be used inside data because fields would be gathered in a wrong way. *Example of line to set  `#` as the fields separator:  `@CTRL:separator=#`*.   
| **@CTRL:separatorlist=** | With the control line** @CTRL:separatorlist=** followed by a character or string it can be defined the separator to be used with list items, overwriting the default one or any previous definition. The specified character or string cannot be used inside list data because list items would be gathered in a wrong way. *Example of line to set  `#` as the list items separator:  `@CTRL:separatorlist=#`*.       

</br>

## Line fields
  
| **Position** | **Mandatory Field** | **Mandatory Data** | **Type** | **Description**|
| -----------  | ------------------- | ------------------ | -------- | ---------------|
| 0     	   | Yes                 |	Yes               | enum     | Defines the entity of the stop sale. It may be one of the following types: <ul><li>**PRV = Provider Blacklist**. If you wish to discard all the product of one or more providers.</li><li>**MRK = Market Blacklist**. If you wish to prevent the sales for specific markets. (Country ISO-2)</li><li>**CHA = Chain Blacklist**. If you wish to prevent the sales for specific chains. </li><li>**COU = Country Blacklist**.  If you wish to prevent the sales for specific countries. (Country ISO-2)</li><li>**CIT = City Blacklist**. If you wish to prevent the sales for specific cities.</li><li>**HOT = Hotel Blacklist**. If you wish to prevent the sales for specific hotels.</li><li>**DES = Destination Blacklist**. If you wish to prevent the sales for specific destinations.</li><li>**DESGR = Destination Group Blacklist**. If you wish to prevent the sales for specific destination groups.</li></ul>
| 1     	   | Yes                 |	Yes               | enum     | Defines the type of operation that will be done with the blacklist. <ul><li>**U = Update**. → Updates the blacklist setting the new values (and removing any previous BL definition).</li><li>**D = Delete**. → Removes the blacklist from the system.</li></ul>
| 2     	   | Yes                 |	Yes/-             | list of strings     | List of codes of entities included into the blacklist. <ul><li>If the operation is Update then this field must contain a list (it can not be empty).</li><li>If the operation is Delete then this field must be empty.</li></ul> *In the case that the rule is applied for the entity Provider, then in this field there are 2 specific values that can be used:* <ul><li>***@ALLDIRECT@** = Rule is applied for all direct providers.*</li><li>***@ALLEXTERNAL@** = Rule is applied for all external providers.*</li></ul> These 2 codes can be mixed with other specific provider codes. *i.e "abc;xj123;@ALLDIRECT@;mcefb"*. *The character "@" cannot be used as separator on this file.*
| 3     	   | Yes                 |	Yes               | enum     | Defines if the blacklist is applied over all the agencies or only for a list of agencies. <ul><li>**ALL** = all the agencies.</li><li>**LIST** = a list of concrete agencies.</li></ul>
| 4     	   | Yes                 |	Yes/-             | list of string    | List of agencies for with the blacklist is applied. <ul><li>If the operation is done for a set of agencies then this field must contain a list (it can not be empty).</li><li>If the operation is done for all agencies then this field must be empty.</li></ul>


### Notes

* `Country` and `market` are in ISO 3166-1 alpha-2 code format (i.e. "ES", "PT", "FR",...).

{{%custom-children%}}