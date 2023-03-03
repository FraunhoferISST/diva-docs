---
id: destroyclaims
title: Destroy Claims Details Page
---

:::danger
This is an expert tool. Please take a closer look [here](https://github.com/DaTebe/destroyclaims).
If you have running DCAs in your environment and you don't know what you do here, there is a high risk of loosing data.
:::

## Overview Tab

The overview tab provides you with the most basic metadata a Destroy Claim should have.
You can give it a `title`, `keywords`, `description` and set an responsible `owner`.

![Overview Destroy Claim](/diva_4.1.0/screenshots/01.png)

:::info
By default, a Destroy Claim is not active.
If you want to activate a Destroy Claim, click the three dots on the upper right corner.
There, a switch with the label "active" will be available.
:::

## Details Tab

### General

Here you can model the end of the data life cycle of resources that are inventoried in DIVA.
First, you can select the modes in which the DCAs should interpret the Destroy Claim.
You can also select an expiration date, on which the Destroy Claim is no longer valid and can be ignored by DCAs.
The Destroy Claim Model version is currently hard coded to `1.0.0`.

### Destroy Reasons

Under **Destroy Reasons**, the reasons why resources have reached the end of the data life cycle can be selected.
We prepared a list of 52 standardized reasons.
You can also write custom ones.

![Overview Destroy Claim](/diva_4.1.0/screenshots/02.png)

### Destroy Subjects

Next, you can select which resources are affected by this Destroy Claim.
Click on the input field.
A search component appears where you can search for your resources.

![Overview Destroy Claim](/diva_4.1.0/screenshots/03.png)

You can add them by clicking "Add to Destroy Claim".
Added resources are shown as cards below the input field.

![Overview Destroy Claim](/diva_4.1.0/screenshots/04.png)

For each resource you can define an action to be performed when the end of the data life cycle is reached.
For this, click on the "Edit Action" button.
A list of possible actions supported by DIVA will be available.

![Overview Destroy Claim](/diva_4.1.0/screenshots/05.png)

You can also set your own custom Boolean Conditions by clicking on the "Edit Expert Conditions" tab.

:::caution
please take a closer look at the [Destroy Claim Model Specification](https://github.com/DaTebe/destroyclaims/blob/main/docs/destroy-claim.md#interpreting-conditions) if you want to understand this part.
:::

![Overview Destroy Claim](/diva_4.1.0/screenshots/06.png)

### Destroy Conditions

Next, you can select **Destroy Conditions** to model the end of the data life cycle.

![Overview Destroy Claim](/diva_4.1.0/screenshots/07.png)

DIVA supports a set of standard conditions and two diva specific ones.

![Overview Destroy Claim](/diva_4.1.0/screenshots/08.png)

#### Destroy Condition: Valid from Date

Here you can select a point in time from when on the condition is true.
![Overview Destroy Claim](/diva_4.1.0/screenshots/13.png)

#### Destroy Condition: Country

You can build a condition that checks if the executing DCA is inside or outside a specific country.
![Overview Destroy Claim](/diva_4.1.0/screenshots/12.png)

#### Destroy Condition: DCA Property

This conditions checks if an executing DCA has or has not a specific label.
![Overview Destroy Claim](/diva_4.1.0/screenshots/11.png)

#### Destroy Condition: DIVA Entity Property

A condition that is depending on the entity metadata in DIVA.
You can select any entity.
A list of possible metadata fields will be requested.
Depending on the type of the field, comparison operators can then be selected and a comparison value can be set.
![Overview Destroy Claim](/diva_4.1.0/screenshots/09.png)

#### Destroy Condition: DIVA Entity Relation

A condition that is depending on the entity relations in DIVA.
You can build a condition depending on the existence or non existence of a relation.
You can set the type of relation and if the direction of the relation is important.
![Overview Destroy Claim](/diva_4.1.0/screenshots/10.png)

### Root Level Expert Conditions

On the bottom of the page, you can set expert conditions for the whole Destroy Claim.

![Overview Destroy Claim](/diva_4.1.0/screenshots/diva_4.1_screenshots_20.png)

:::caution
please take a closer look at the [Destroy Claim Model Specification](https://github.com/DaTebe/destroyclaims/blob/main/docs/destroy-claim.md#interpreting-conditions) if you want to understand this part.
:::

## Additional Notes

Like all other entities in DIVA, you are able to see a history of the metadata.
You can also take a look into the data network using the "Data Network" tab.
