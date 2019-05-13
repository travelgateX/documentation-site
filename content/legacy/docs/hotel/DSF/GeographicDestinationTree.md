---
title: GeographicDestinationTree
keywords: hotel, data structure, destination tree, geographic destination tree
search: Hotel - Data Structure - GeographicDestinationTree
sidebar: mydoc_sidebar
permalink: /docs/hotel/DSF/GeographicDestinationTree
---



### Method Goals


This method returns the supplier's geographic tree where each node indicates whether the request is accessible from availability, indicated with a parameter with values true or false. The main difference between the methods GeographicalTree and DestinationTree is
that GeographicalTree has this boolean parameter.



### Request Format


The request not requires any element, it is empty.



### Response Format


The result returns a list of *DestinationTree* with corresponding
sub-destinations.



### Remarks


The maximum time permitted in our system before the connection is closed is **240000** milliseconds.



### GeographicDestinationTreeRQ Example


~~~xml
    <GeographicDestinationTreeRQ>
    </GeographicDestinationTreeRQ>
~~~


### GeographicDestinationTreeRQ Description




| **Element**		      | **Number** | **Type** | **Description**	|
| --------------------------- | ---------- | -------- | --------------- |
| GeographicDestinationTreeRQ | 1          |	      | Root node.	|



### GeographicDestinationTreeRS Example


~~~xml
    <GeographicDestinationTreeRS>
        <UpgradeUTCDate>2016-10-18T13:18:03+02:00</UpgradeUTCDate>
        <DestinationTree code = "ES" name = "España" avail = "False">
            <DestinationLeaf code = "BAL"/>
            <DestinationLeaf code = "AST"/>
            <DestinationLeaf code = "AND"/>
        </DestinationTree>
        <DestinationTree code= "IT" name = "Italia" avail = "False">
            <DestinationLeaf code = "AA"/>
            <DestinationLeaf code = "BB"/>
            . . .
        </DestinationTree>
        <DestinationTree code = "EN" name = "England" avail = "False">. . .</DestinationTree>
        <DestinationTree code = "BAL" name = "Baleares" avail = "True">
            <DestinationLeaf code = "PAL0"/>
            <DestinationLeaf code = "ALC0"/>
        </DestinationTree>
        <DestinationTree code = "AST" name = "Asturias" avail = "True"/>
        <DestinationTree code = "AND" name = "Andalucia" avail = "True"/>
        . . .
        <DestinationTree code = "PAL0" name = "Palma de Mallorca" avail = " True"/>
        <DestinationTree code = "ALC0" name = "Alcudia" avail = " True"/>
        . . .
    </GeographicDestinationTreeRS>
~~~


### GeographicDestinationTreeRS Description




| **Element**			| **Number** | **Type** | **Description**	|
| ----------------------------- | ---------- | -------- | --------------------- |
| GeographicDestinationTreeRS	| 1          | 		| Root node.		|
| UpgradeUTCDate		| 1       	|	DateTime	| Indicates the update date of the information in UTC format.	|
| DestinationTree		| 1..n       | 		| Father node.		|
| @code | 1 | String | |
| @name | 1 | String | |
| @avail | 1 | Boolean | |
| DestinationTree/DestinationLeaf		| 0..n      |		| Childs node.		|
| @code | 1 | String | |



### Detailed description


~~~xml
    <GeographicDestinationTreeRS>
     <DestinationTree code = "ES" name = "España" avail = "False">
         <DestinationLeaf code = "BAL"/>
         <DestinationLeaf code = "AST"/>
         <DestinationLeaf code = "AND"/>
     </DestinationTree>
     <DestinationTree code= "IT" name = "Italia" avail = "False">
         <DestinationLeaf code = "AA"/>
         <DestinationLeaf code = "BB"/>
         . . .
     </DestinationTree>
     <DestinationTree code = "EN" name = "England" avail = "False">. . .</DestinationTree>

     <DestinationTree code = "BAL" name = "Baleares" avail = "True">
         <DestinationLeaf code = "PAL0"/>
         <DestinationLeaf code = "ALC0"/>
     </DestinationTree>
     <DestinationTree code = "PAL0" name = "Palma de Mallorca" avail = " True"/>
         <DestinationLeaf code = "SAR"/>
         <DestinationLeaf code = "IND"/>

     <DestinationTree code = "AST" name = "Asturias" avail = "True"/>
     <DestinationTree code = "AND" name = "Andalucia" avail = "True"/>
     . . .
     <DestinationTree code = "ALC0" name = "Alcudia" avail = " True"/>
     <DestinationTree code = "SAR" name = "Son Sardina" avail = "false"/>
     <DestinationTree code = "IND" name = "Indioteria" avail = "false"/>
     . . .
    </GeographicDestinationTreeRS>
~~~


There are two essential definitions which needs to be clear in order to understand the difference between city and zone:

1. types of nodes
2. if these nodes are accessible or not.

Let's start with the two types of nodes. There are two types of nodes: the parent node, also called DestinationTree node, and the child node, also named Destination leaf node. A parent can have zero to n children ( 0..n ) and a child can only one parent ( 1..1 ). For example, the DestinationTree code = "ES" is the parent of the DestinationLeaf code = "BAL", "AST" and "AND" and at the same time DestinationTree code = "BAL" is also a the parent of the DestinationLeaf code = "PAL0" and "ALC0", and so on.

Accessible on an **availability** level means that it is possible doing an avail for that zone. A node is accessible when the tag avail is set to true. If it is set as false the node is not accessible and consequently, not available.

Therefore:

-   **City:** Lowest accessible node.
-   **Zone:** Not the lowest accessible node.

![Diagrama1](/articles-pub/docs/hotel/images/diagrama1.png)

 **Note:** *In rare occasions it is possible finding nodes lower than cities, which won't be accessible, but the standard scenario is not to find lower nodes than cities.*

