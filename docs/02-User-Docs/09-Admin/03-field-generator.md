---
id: field-generator
title: Field Generator
---

:::warning
Currently, new fields can only be created using the GUI.
Deleting fields only works via the API.
This must be done by a system administrator.
:::

As an administrator you can create new fields for entities.
The GUI can be reached by the side menu.

![DIVA Field Generator](/diva_4.0.0/screenshots/entity_details_menu_admin.png)

The GUI guides you through the creation of the new field.
At first you need to decide in what scope the field is available.
For example you can have fields that are only available to PDF files, or only to assets.

![DIVA Field Generator](/diva_4.0.0/screenshots/create_field.png)

In the next step you need to define which kind of field you want to create.
You can choose between some primitive types.

![DIVA Field Generator](/diva_4.0.0/screenshots/create_field_2.png)

In the third step you need to provide a title that is shown in the webapp and a technical name.
The technical name must be unique.

![DIVA Field Generator](/diva_4.0.0/screenshots/create_field_3.png)

In the fourth step you can decide if you want the field to be full width.
You can also decide where the field should be rendered.
This can be done by providing a priority number.
If you want the field to be first, provide a small or even negative number.
If you want it to be at the end, provide a large number.

![DIVA Field Generator](/diva_4.0.0/screenshots/create_field_4.png)

On the bottom you can see a pre-render of your custom field.
