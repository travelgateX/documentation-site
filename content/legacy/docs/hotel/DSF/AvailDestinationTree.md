---
title: AvailDestinationTree
keywords: hotel, data structure, destination tree, avail destination tree
search: Hotel - Data Structure - AvailDestinationTree
sidebar: mydoc_sidebar
permalink: /docs/hotel/DSF/AvailDestinationTree
---



### Method Goals


This method returns the tree of destinations accessible from the call
*Avail* .



### Request Format


The request does not require any elements - it's an empty request.



### Response Format


The result returns a list of *DestinationTree* with their corresponding
sub-destinations.



### Remarks


The maximum time permitted in our system before the connection is closed is **240000** milliseconds.



### AvailDestinationTreeRQ Example

~~~xml
    <AvailDestinationTreeRQ>
    </AvailDestinationTreeRQ>
~~~


### AvailDestinationTreeRQ Description




| **Element**		 | **Number** | **Type** | **Description** |
| ---------------------  | ---------- | -------- | --------------- |
| AvailDestinationTreeRQ | 1          |          | Root node.      |



### AvailDestinationTreeRS Example


~~~xml
    <AvailDestinationTreeRS>
        <UpgradeUTCDate>2016-10-18T13:18:03+02:00</UpgradeUTCDate>
        <DestinationTree code = "ES" name = "España">
            <DestinationLeaf code = "BAL"/>
            <DestinationLeaf code = "AST"/>
            <DestinationLeaf code = "AND"/>
        </DestinationTree>
        <DestinationTree code = "IT" name = "Italia">
            <DestinationLeaf code = "AA"/>
            <DestinationLeaf code = "BB"/>
            . . .
        </DestinationTree>
        <DestinationTree code = "EN" name = "England">. . .    </DestinationTree>
        <DestinationTree code = "BAL" name = "Baleares">
            <DestinationLeaf code = "PAL0"/>
            <DestinationLeaf code = "ALC0"/>
        </DestinationTree>
        <DestinationTree code = "AST" name = "Asturias"/>
        <DestinationTree code = "AND" name = "Andalucia"/>
        <DestinationTree code = "PAL0" name = "Palma de Mallorca"/>
        <DestinationTree codigo = "ALC0" name = "Alcudia"/>
        . . .
    </AvailDestinationTreeRS>
~~~


### AvailDestinationTreeRS Description




| **Element**			| **Number** | **Type** | **Description**	|
| ----------------------------- | ---------- | -------- | --------------------- |
| AvailDestinationTreeRS	| 1          |          | Root node.		|
| UpgradeUTCDate		| 1       	|	DateTime	| Indicates the update date of the information in UTC format.	|
| DestinationTree		| 0..n       | 		| Father node.		|
| @code | 1 | String | Destination code.|
| @name | 1 | String | Destination name.|
| DestinationTree/DestinationLeaf		| 0..n      |		| Child node.		|
| @code | 1 | String |Destination code. |



### Detailed description


~~~xml
    <AvailDestinationTreeRS>
        <DestinationTree code = "BAL" name = "Baleares">
            <DestinationLeaf code = "PAL0"/>
            <DestinationLeaf code = "ALC0"/>
        </DestinationTree>
        <DestinationTree code = "AST" name = "Asturias"/>
        <DestinationTree code = "AND" name = "Andalucia"/>
        <DestinationTree code = "PAL0" name = "Palma de Mallorca"/>
        <DestinationTree code = "ALC0" name = "Alcudia"/>
        . . .
    </AvailDestinationTreeRS>
~~~


It is essential to understand types of nodes in order to discern between city and zone. 

There are two types of nodes: the parent node, also called DestinationTree node, and the child node, also named Destination leaf
node. A parent can have zero to n children ( 0..n ) and a child can only one parent ( 1..1 ). For example, the DestinationTree code =
"ES" is the parent of the DestinationLeaf code = "BAL", "AST" and "AND" and at the same time DestinationTree code = "BAL" is also a the parent of the DestinationLeaf code = "PAL0" and "ALC0", and so on.

Therefore:

-  **City:** Lowest node.
-  **Zone:** Not the lowest node.

![Diagrama1](/articles-pub/docs/hotel/images/diagrama2.png)


**Note:** *All of the zones that appear in this particular call (DestinationsTree) are all accessible from availability.*


