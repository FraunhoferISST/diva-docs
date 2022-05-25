---
id: user
title: User Details Page
---

# User Details Page

To navigate to the page with your account settings, click on the user icon in the navigation at the bottom of the  [Home Page](home) and then on your name in the menu that appears.

![User Menu](/img/screenshots/user_menu.png)

## Edit User Data

The above step will take you to the overview of your personal data.
You can log out or edit your information. To switch to the edit mode, click on the "Edit profile" button.

![User](/img/screenshots/user.png)

In the edit mode you have the possibility to add more details to your account and upload a profile picture.

![User Edit](/img/screenshots/user_edit.png)

Click on "Save changes" to apply the modifications. The changes should be immediately applied and visible in the whole application.

![User Edited](/img/screenshots/user_edited.png)

## Edit User Credentials

If you want to change your email or password, you can click on the Keycloak link.
You will be redirected to our trusted identity management page provided by Keycloak.

![Keycloak edit data](/img/screenshots/keycloak/keycloak_edit.png)

## ⚠️ Delete User

If you want to delete your user account, click on `Delete account` while editing your user data.

:::caution
This will only delete your user data in our **DIVA** system.
You are still able to log into the identity management system provided by **Keycloak**.
If you sign in again, **DIVA** will create a new internal account.
Everything done with your old, deleted account is not related to this new one.

🔨 We try to improve this behavior in future releases.
:::

## See other users accounts

You can also view the details of other users.
To do this, you need to click on the name of the corresponding user.
You will see other users in several places in the application.
For example, you can find the data owner or the creator of a resource on the [resource details](./details/general-metadata) page.
