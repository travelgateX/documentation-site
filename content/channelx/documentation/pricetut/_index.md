+++
title = "Price Use Cases"
pagetitle = "Price Calculation"
description = "Some examples on how to operate prices"
weight = 2
icon="fa-money"
alwaysopen = false
isDirectory = false
+++

**Notes**

-   Children and babies are not allowed in BaseByGuestAmts. Children and
    babies are always defined in AdditionalGuestAmounts.
-   The possible Type values in the AdditionalGuestAmount tag are
    Exclusive and not specified.
   > - If there is no value specified then the price is a relative and it is added to the price of the current pax.
   > - If the value is "Exclusive" then the price is absolute and it will represent the total price of the current pax.

-   If the price is per room then all AdditionalGuestAmount must be
    relative.

- If the price is per occupancy then *@Type* should be **14** and *@Code* should
be specified. 

- An Occupancy is defined by *AdultNumber-ChildNumber-InfantNumber*. E.g.: *@Code* for an occupancy of 2 adults, 1 child and 0 babies would be "2-1-0"

### Price per Guests
**Case 1:**\
*Standard occupancy* = 2\
*Room uses*\
`1-0-0`\
`2-0-0`

Message:
```xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>  
```
| **Occupancy** | **Price**			        |
| ------------- | ------------------------- |
| 1-0-0         | -              			|
| 2-0-0         | 2\*(100/2) = 100          |

**Case 2:**\
*Standard occupancy* = 2\
*Room uses*\
`1-0-0`\
`2-0-0`

Message:
```xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "1" AmountAfterTax="100.00"/>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="130.00"/>
    </BaseByGuestAmts>
```
| **Occupancy** | **Price**			        |
| ------------- | ------------------------- |
| 1-0-0         | 100              			|
| 2-0-0         | 2\*(130/2) = 130          |

**Case 3:**\
*Standard occupancy* = 2\
*Room uses*\
`1-0-0`\
`2-0-0`\
`3-0-0`

Message:
```xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "40.00" AgeQualifyingCode = "10"/>
    </AdditionalGuestAmounts>
```
| **Occupancy** | **Price**			        |
| ------------- | ------------------------- |
| 1-0-0         | -              			|
| 2-0-0         | 2\*(100/2) = 100          |
| 3-0-0         | (100/2) + (100/2) + ((100/2) + (40) = 190 |

**Case 4:**\
*Standard occupancy* = 2\
*Room uses*\
`1-0-0`\
`2-0-0`\
`3-0-0`

Message:
```xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "40.00" AgeQualifyingCode = "10" Type="Exclusive"/>
    </AdditionalGuestAmounts>
``` 
| **Occupancy** | **Price**			        |
| ------------- | ------------------------- |
| 1-0-0         | -              			|
| 2-0-0         | 2*(100/2) = 100           |
| 3-0-0         | (100/2) + (100/2) + 40 = 140 |

**Case 5:**\
*Standard occupancy* = 2\
*Room uses*\
`1-0-0`\
`2-0-0`\
`1-1-0`

Message:
```xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "40.00" AgeQualifyingCode = "8" />
    </AdditionalGuestAmounts>
```
| **Occupancy** | **Price**			        |
| ------------- | ------------------------- |
| 1-0-0         | -              			|
| 2-0-0         | 2*(100/2) = 100           |
| 1-1-0         | 2*(100/2) = 100           |

**Case 5.1:**\
*Standard occupancy* = 2\
*Room uses*\
`1-0-0`\
`2-0-0`\
`1-0-1`

> NOTE: The same samples with children are valid for babies specifying
AgeQualifyingCode = "7".

Message:
```xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "40.00" AgeQualifyingCode = "7" />
    </AdditionalGuestAmounts>
```
| **Occupancy** | **Price**			        |
| ------------- | ------------------------- |
| 1-0-0         | -              			|
| 2-0-0         | 2*(100/2) = 100           |
| 1-1-0         | 2*(100/2) = 100           |

**Case 6:**\
*Standard occupancy* = 2\
*Room uses*\
`1-0-0`\
`2-0-0`\
`2-1-0`

Message:
```xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "-40.00" AgeQualifyingCode = "8" />
    </AdditionalGuestAmounts>
```
| **Occupancy** | **Price**			        |
| ------------- | ------------------------- |
| 1-0-0         | -              			|
| 2-0-0         | 2*(100/2) = 100           |
| 2-1-0         | 2*(100/2) + ((100/2) -40) = 60 |

**Case 7:**\
*Standard occupancy* = 2\
*Room uses*\
`1-0-0`\
`2-0-0`\
`3-0-0`\
`4-0-0`

Message:
```xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "10.00" AgeQualifyingCode = "10" />
        <AdditionalGuestAmount MaxAdditionalGuests = "2" Amount = "-15.00" AgeQualifyingCode = "10" />
    </AdditionalGuestAmounts>
```
| **Occupancy** | **Price**			        |
| ------------- | ------------------------- |
| 1-0-0         | -              			|
| 2-0-0         | 2*(100/2) = 100           |
| 3-0-0         | (100/2) + (100/2) + ((100/2) + 10) = 160 |
| 4-0-0         | (100/2) + (100/2) + ((100/2) + 10) + ((100/2) - 15) = 195 |

**Case 8:**\
*Standard occupancy* = 2\
*Room uses*\
`1-0-0`\
`2-0-0`\
`3-0-0`\
`4-0-0`

Message:
```xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "-10.00" AgeQualifyingCode = "10" />
    </AdditionalGuestAmounts>
```
| **Occupancy** | **Price**			        |
| ------------- | ------------------------- |
| 1-0-0         | -              			|
| 2-0-0         | 2*(100/2) = 100           |
| 3-0-0         | (100/2) + (100/2) + ((100/2) -10) = 140 |
| 4-0-0         | (100/2) + (100/2) + ((100/2) -10) + ((100/2) - 10) = 180 |

**Case 9:**\
*Standard occupancy* = 3\
*Room uses*\
`1-0-0`\
`2-0-0`\
`3-0-0`\
`4-0-0`\
`5-0-0`

Message:
```xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "3" AmountAfterTax="150.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "-10.00" AgeQualifyingCode = "10" />
        <AdditionalGuestAmount MaxAdditionalGuests = "2" Amount = "15.00" AgeQualifyingCode = "10" />
    </AdditionalGuestAmounts>
```
| **Occupancy** | **Price**			        |
| ------------- | ------------------------- |
| 1-0-0         | -              			|
| 2-0-0         | 2*(100/2) = 100           |
| 3-0-0         | 3\*(150/3) = 150 |
| 4-0-0         | (150/3) + (150/3) + (150/3) + ((150/3) - 10) = 190 |
| 5-0-0         | (150/3) + (150/3) + (150/3) + ((150/3) - 10) + ((150/3) + 15) = 255|


### Price per Room and Additional Guests
**Case 1:**\
*Standard occupancy* = 2\
*Room uses*\
`1-0-0`\
`2-0-0`\
`1-1-0`

Message:
```xml
    <BaseByGuestAmts>
        <BaseByGuestAmt Type = "25" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
```
| **Occupancy** | **Price**			        |
| ------------- | ------------------------- |
| 1-0-0         | 100              			|
| 2-0-0         | 100                       |
| 1-1-0         | 100                       |


**Case 2:**\
*Standard occupancy* = 2\
*Room uses*\
`1-0-0`\
`2-0-0`\
`3-0-0`\
`1-1-0`\
`3-1-0`

Message:
```xml
    <BaseByGuestAmts>
        <BaseByGuestAmt Type = "25" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "20.00" AgeQualifyingCode = "10" />
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "10.00" AgeQualifyingCode = "8" />
    </AdditionalGuestAmounts>
```
| **Occupancy** | **Price**			        |
| ------------- | ------------------------- |
| 1-0-0         | 100              			|
| 2-0-0         | 100                       |
| 3-0-0         | 100 + (100/2 + 20) = 170  |
| 1-1-0         | 100                       |
| 3-1-0         | 100 + (100/2 + 20) + (100/2 + 10) = 230 |

**Case 3:**\
*Standard occupancy* = 3\
*Room uses*\
`1-0-0`\
`2-0-0`\
`3-0-0`\
`4-0-0`

Message:
```xml
    <BaseByGuestAmts>
        <BaseByGuestAmt Type = "25" AmountAfterTax="120.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "20.00" AgeQualifyingCode = "10" />
    </AdditionalGuestAmounts>
```
| **Occupancy** | **Price**			        |
| ------------- | ------------------------- |
| 1-0-0         | 120              			|
| 2-0-0         | 120                       |
| 3-0-0         | 120                       |
| 4-0-0         | 120 + (120/3 + 20) = 180  |


### Price per Occupancy:
**Case 1:**\
*Room uses*\
`1-0-0`\
`2-0-0`\
`3-0-0`

Message:
```xml
    <BaseByGuestAmts>
        <BaseByGuestAmt Type = "14" AmountAfterTax="100.00" Code = "2-0-0"/>
    </BaseByGuestAmts> 
```
| **Occupancy** | **Price**			        |
| ------------- | ------------------------- |
| 1-0-0         | -              			|
| 2-0-0         | 100                       |
| 3-0-0         | -                         |

**Case 2:**\
*Room uses*\
`2-1-0`\
`2-0-1`

Message:
```xml
    <BaseByGuestAmts>
        <BaseByGuestAmt Type = "14" AmountAfterTax="95.00" Code = "2-1-0"/>
        <BaseByGuestAmt Type = "14" AmountAfterTax="80.00" Code = "2-0-1"/>
    </BaseByGuestAmts>  
```
| **Occupancy** | **Price**			        |
| ------------- | ------------------------- |
| 2-1-0         | 95             			|
| 2-0-1         | 80                        |

{{%custom-children%}}

