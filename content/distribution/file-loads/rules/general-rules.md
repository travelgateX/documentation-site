+++
title = "General rules"
pagetitle = "General rules"
description = "Configurate general rules and filters by different conditions"
icon="fa-cogs"
weight = 1
alwaysopen = false
isDirectory = false
+++

## Considerations

It is an absolute load, so bear in mind these considerations:

* If there is any problem with the file or its data then the load is cancelled and no rules are modified.
* If a rule is not referenced on the file then its value is not modified (only rules explicitly referenced on the file are affected).
* If you want to set the default value of a rule you just have to delete that rule.
  
</br>

## Specifications

* File name: **`Rules_GeneralRules.csv`**. 

* Each line represents a unique temporary pricing rule and contains all the information (fields) about it. 

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

The fields are separated by `#`. And if a field is a list of values it also has its values separated by `;`.


 </br>

| **Case**           | **Example**         | **Description**    |
| ------------------ | ------------------- | ------------------ | 
| Field without data | ...##...            | We have the separator `#` and nothing inside.
| Field directly with data and no lists | ...#12#...   | It is just the value 12.
| Field with a list of elements | ...#AS;XF;TR#...   | Its value is a list and its elements are separated with `;` ("AS", "XF" and "TR").

</br>


## Data Line fields
  
| **Position** | **Mandatory Field** | **Mandatory Data** | **Type**               | **Description/Value** |
| -----------  | ------------------- | ------------------ | ---------------------- | ---------------------
| 0     	   | Yes                 | Yes                | enumeration            | Defines the rule type we want to operate with. It may be one of the following values: <ul><li>**COM**: Comission/Markup. To define a comission to a set of agencies</li><li>**DEF_MAR**: Default/Fixed Market. To define a default/fixed market to a set of agencies</li><li>**SEL_REL**: Selling Release. To define a selling release to a set of agencies.</li><li>**RATE**: Rate Type. To define the rate type filter to a set of agencies</li><li>**CLO_REL**: Closing Release. To define a closing release to a set of agencies.</li><li>**FIL_NRF**: Filter NRF. To define the NRF/RF filter to a set of agencies.</li><li>**ALW_CUR**: Allowed Currencies. To define a list of allowed currencies to a set of agencies.</li><li>**FRC_CUR**: Force Currency. To define if the currency on the RQ has to be forced to a set of agencies.</li><li>**FIL_BIND**: Filter Binding. To define the binding filter to a set of agencies.</li><li>**CUR_EXC**: Allow Currency Exchange. To define if currency exchange is allowed or not, and to define a set of currencies to accomplish.</li><li>**ADD_MRK_PRC**: Add Markup to Pricing. To define if we add the markup to the price after the pricing rules.</li><li>**MAX_TQ**: Max Time to Quote. To define the maximum amount of minutes between Availability and Quote.</li><li>**MAX_TB**: Max Time to Book. To define the maximum amount of minutes between Quote and Book.</li><li>**MIN_COM**: Minimum Selling Pricing Rules: To define a Minimum Selling Price and how to act in sellings with lower pricing. It can choosen to set the Minimum Selling Price value or to discard the selling.</li></ul>
| 1     	   | Yes                 | Yes                | enumeration            | Defines the type of operation that will be done with the rule. <ul><li>**U**: Update. Updates the rule's current value removing any previous definition.</li><li>**D**: Delete. Removes the rule's current value and sets it to its default value</li></ul>
| 2     	   | Yes                 | Yes/-              | complex                | Value to set to the rule. <ul><li>This field's data is mandatory if we want to update the value of a rule (if not then an error will be generated).</li><li>This field must be empty If we want to delete a rule (if not then an error will be generated).</li></ul>*Note: Depending on the type of rule that is applied, this list can contain a different number of elements. Also, depending on the type of rule, the content of the values can be different.* Check the table ***Rules** to know the available values for this field.
| 3     	   | Yes                 | Yes                | enumeration            | Defines if the rule is applied in general (affecting all agencies) or only for a list of concrete agencies. <ul><li>**GEN** = in general (the rule will be set on the general settings and will affect all agencies).</li><li>**LIST** = a list of concrete agencies (the rule will be set only to these agencies).</ul> Not all rules can be set always as GEN and as LIST, it depends on the rule type. All rules can be a **LIST**, and rules that can be a **GEN** are: ADD_MRK_PRC, MAX_TQ, MAX_TB, MIN_COM. 
| 4     	   | Yes/-               | Yes                | list of strings        | List of agencies for which the rule is applied, separated with ";". <ul><li>****: </li><li>If the operation is defined for a list of agencies then this field must contain a list (it can not be empty).</li><li>If the operation is defined in general then this field must be empty.</ul>


### Apendix: Rules table


| **Rule Type** | **Values** |
| ------------- | ----------
| COM    	    | Decimal value.               
| DEF_MAR 	    | String value. It is the market.
| SEL_REL	    | Integer value.
| RATE  	    | Integer value that has to be one of the folllowing: <ul><li>**0** = All (no filter) </li><li>**1** = Only B2B rates</li><li>**2** = Only B2C rates</li></ul>
| CLO_REL	    | Integer value.
| FIL_NRF	    | Integer value that has to be one of the folllowing: <ul><li>**0** = = All (no filter)</li><li>**1** = Only NRF</li><li>**2** = Only RF</li></ul>
| ALW_CUR	    | List of string, separated with ";". It is a list of currencies (at least one).
| FRC_CUR	    | Boolean value (true/false).
| FIL_BIND	    | Integer value that has to be one of the folllowing: <ul><li>**0** = All (no filter) </li><li>**1** = Only binding prices</li><li>**2** = Only not binding prices</li></ul>
| CUR_EXC	    | Complex value: See Apendix CUR_EXC
| ADD_MRK_PRC   | Values when set for agencies: <ul><li>**-1**: Add markup to pricing</li><li>**0**: Use general definition (default value)</li><li>**1**: Do not add markup to pricing</li></ul> Values when set in general: <ul><li>**-1**: Add markup to pricing (default value)</li><li>**1**: Do not add markup to pricing</li></ul>
| MAX_TQ        | Values when set for agencies: <ul><li>**-1**: Not limit</li><li>**0**: Use organization limit (default value)</li><li>**>0**: Defines the limit (integer, represents minutes).</li></ul> Values when set in general: <ul><li>**-1**: No limit (default value)</li><li>**>0**: Defines the limit (integer, represents minutes).</li></ul>
| MAX_TB        | Values when set for agencies: <ul><li>**-1**: No limit</li><li>**0**: Use organization limit (default value)</li><li>**>0**: Defines the limit (integer, represents minutes).</li></ul> Values when set in general: <ul><li>**-1**: No limit (default value)</li><li>**>0**: Defines the limit (integer, represents minutes).</li></ul>
| MIN_COM	    | Complex value: it is composed of a Type and a Value separated with ';'. Type values when set for agencies:  <ul><li>**-1**: Use Organization Setting (only for agencies)</li><li>**0**: Do not set minimum</li><li>**1**: Define minimum and discard selling with lower pricing</li><li>**2**: Define a minimum and apply it for sellings with lower pricing</li></ul> Type values when set in general: <ul><li>**0**: Do not set minimum</li><li>**1**: Define minimum and discard selling with lower pricing</li><li>**2**: Define a minimum and apply it for sellings with lower pricing</li></ul> Value (for agencies and in general): It is a decimal. *Example of line: MIN_COM#U#2;5.2* Type 2 and it is set a minimum of 5.2



### Apendix: CUR_EXC

The value to set (field position 2) for the CUR_EXC rule is a complex one. Tt is composed of 3 items:

* A type, to allow or not the currency exchange.
* A list of currencies.
* A list of countries with a sublist of currencies.

This field includes information about these items (subfields) using "|" as separator.

Each subfields has the following format:

| **Subfield Position** | **Mandatory subfield** | **Mandatory Data** | **Type**               | **Description/Value** |
| --------------------  | ---------------------- | ------------------ | ---------------------- | ---------------------
| 0                     | Yes                    | Yes                | int                    | Indicates if currency exchange is allowed or not, with the following values. <ul><li>**0** = Allow any currency exchange. (we don't have to add the following subfields)</li><li>**1** = Do not allow exchange and apply filters (we have to add the following subfields)</li><li>**2** = Allow currency exchange but only to the given currencies (we have to add the following subfields)</li></ul>
| 1                     | No                     | No                 | list                   | List of admitted currencies. *Example:* 1|*;GBP;USD <ul><li>This field has to start with "*;" and then the currencies have to be included with the separator ";" (it is not added to the end).</li><li>This subfield is mandatory with types 1 and 2.</li></ul>
| 2                     | No                     | No                 | list                   | List of countries and their admitted currencies. *Example:* 2|*;GBP;USD|ES;EUR <ul><li>This field has to start with the country code folowed by "*;" and then the currencies have to be included with the separator ";" (it is not added to the end).</li><li>This subfield is optinal even with types 1 and 2.</li></ul>


</br>

**Examples of complete lines:**

* Exchange is allowed **CUR_EXC#U#0#LIST#Agency1;Agency2**
* Exchange is not allowed and only have a general list of currencies **CUR_EXC#U#1|*;GBP;USD#LIST#Agency1;Agency2**
* Exchange is not allowed and we have currencies by country **CUR_EXC#U#1|*;GBP;USD|ES;EUR#LIST#Agency1;Agency2**
* Exchange is allowed and only have a general list of currencies **CUR_EXC#U#2|*;GBP;USD#LIST#Agency1;Agency2**
* Exchange is allowed and we have currencies by country **CUR_EXC#U#2|*;GBP;USD|ES;EUR#LIST#Agency1;Agency2**


{{%custom-children%}}