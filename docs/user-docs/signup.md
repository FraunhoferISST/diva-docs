# Sign up / Sign in

Identity management is provided by [Keycloak](https://www.keycloak.org/).
Whether you can register and log in depends on the Keycloak configuration.
To get more details regarding this topic, please contact your administrator.

## Sing Up

::: warning
Depending on your Keycloak configuration, this option may not be available.
:::

Perform the following steps to access Keycloak and sign up:

1. Navigate to the DIVA web application (you can ask your administrator to provide you with the URL)
2. On the login page click the button "Create new account". You will be redirected to our trusted Keycloak page.
3. Enter your email address and password
4. Click "Register" button

<div class="flex-col sm:flex-row flex justify-center">
    <img class="rounded-lg w-full sm:w-1/2" :src="$withBase('/assets/screenshots/login.png')" alt="DIVA login">
    <img class="rounded-lg w-full sm:w-1/2" :src="$withBase('/assets/screenshots/keycloak/keycloak_register.png')" width="50%" alt="DIVA Register">
</div>

After successful registration you will be logged in automatically.

## Sign In

Perform the following steps to log in onto the DIVA application with your email and password:

1. Navigate to the DIVA web application
2. On the login page click the button "Login". You will be redirected to our trusted Keycloak page.
3. Enter your email and password
4. Click "Login" button

<div class="flex-col sm:flex-row flex justify-center">
    <img class="rounded-lg w-full sm:w-1/2" :src="$withBase('/assets/screenshots/login.png')" alt="DIVA login">
    <img class="rounded-lg w-full sm:w-1/2" :src="$withBase('/assets/screenshots/keycloak/keycloak_signin.png')" width="50%" alt="DIVA Login">
</div>

After successful login you will be automatically redirected to the [Home Page](./home.md).

::: tip Change your Username
Initially, your username will be set to your email.
If you want a better experience, please change your username by visiting the [User Details Page](./user.md).
:::

::: tip Upload a profile image
Visit the [User Details Page](./user.md) to provide your account with further information or upload a profile picture.
:::
