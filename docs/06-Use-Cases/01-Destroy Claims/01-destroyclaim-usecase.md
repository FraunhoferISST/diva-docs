---
id: destroyclaim-usecase
title: Destroy Claim Use Case
---

Alice is an account manager and uses many Word and PowerPoint templates to generate material for her customer acquisition.
She downloads templates directly from the company's data catalog DIVA onto her laptop.

![Overview Destroy Claim](/diva_4.1.0/screenshots/diva_4.1_screenshots_39.png)

Bob is a designer and responsible for keeping all the templates up to date.

![Overview Destroy Claim](/diva_4.1.0/screenshots/diva_4.1_screenshots_37.png)

Bob inventories all templates in the DIVA data catalog used by his company.
An example here is a Power Point file.

![Overview Destroy Claim](/diva_4.1.0/screenshots/diva_4.1_screenshots_26.png)
![Overview Destroy Claim](/diva_4.1.0/screenshots/diva_4.1_screenshots_27.png)

He also knows that the template should no longer be used by his colleagues when there is an updated version or if the context they are used in is not applicable at some point.
Therefore, he creates a Destroy Claim in DIVA to model the end of the data life cycle for the template.

![Overview Destroy Claim](/diva_4.1.0/screenshots/diva_4.1_screenshots_33.png)

He first adds some basic information such as `title`, `description` and `keywords`.
He also sets himself as the responsible contact for this claim.

![Overview Destroy Claim](/diva_4.1.0/screenshots/diva_4.1_screenshots_30.png)

As he does not want the data to be automatically deleted from his colleagues' devices, he activates the `notificationMode` and the `optInMode`.
He gives `Data Quality - Timeliness` as the reason for the end of the data life cycle so that his colleagues can better understand the claim.

![Overview Destroy Claim](/diva_4.1.0/screenshots/diva_4.1_screenshots_31.png)

He further models the conditions under which the end of the data life cycle is reached.
First he adds a condition that states that a new version of the template must be inventoried in DIVA.
This is an extension that is specific to DIVA (`diva:entityRelation`) and should be understood by DCAs that have access to at least one DIVA instance.
Then he specifies that the old template should only be deleted for a Sales department that works with the template.

![Overview Destroy Claim](/diva_4.1.0/screenshots/diva_4.1_screenshots_32.png)

A few months have passed.
Bob has created a new version of a template and inventoried it in DIVA.
Here he explicitly states that this is a new version of an already inventoried template.

![Overview Destroy Claim](/diva_4.1.0/screenshots/diva_4.1_screenshots_28.png)
![Overview Destroy Claim](/diva_4.1.0/screenshots/diva_4.1_screenshots_29.png)

The DCA running on Alice's laptop is in constant communication with DIVA and has retrieved relevant Destroy Claims.
Now that a new version is available, the DCA is evaluating Bobs Destroy Claim as applicable.
A pop-up appears on Alice's screen asking her to delete the old template because there is a new version available.

![Overview Destroy Claim](/diva_4.1.0/screenshots/dca1.png)

She agrees and the DCA deletes the local template on her laptop and downloads the new version from DIVA automatically.

![Overview Destroy Claim](/diva_4.1.0/screenshots/dca2.png)

:::info
This DCA was implemented prototypically to demonstrate our use case.
:::
