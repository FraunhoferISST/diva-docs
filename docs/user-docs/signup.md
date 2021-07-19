# Sign up / Sign in

Users without an account or users who are not logged in will land on the login page. If you have an account, 
you can log in with your credentials, otherwise create a new account.

::: warning Attention!
Currently, there is no mechanism to prevent an unwanted signup. Everyone who has access to the DIVA web client can sign up.
:::

## Sign up

Perform the following steps to create a new account:

1. Navigate to the DIVA web application
2. On the login page click the button "create new account" in the right card 
2. Enter name, email and password
3. Click "create new account" button

<div class="flex-col sm:flex-row flex justify-center">
    <img class="rounded-lg w-full sm:w-1/2" :src="$withBase('/assets/screenshots/login.png')" alt="DIVA login">
    <img class="rounded-lg w-full sm:w-1/2" :src="$withBase('/assets/screenshots/signup.png')" width="50%"  alt="DIVA Register">
</div>

::: warning Attention!
Currently, there is no **password** double check. Make sure to have your **password** typed in correctly.
:::

After successful registration you will be logged in automatically.

## Sign in

Perform the following steps to log in onto the DIVA application with email and password:

1. Navigate to the DIVA web application
2. Enter your email and password
3. Click "Login" button 

<div class="flex justify-center">
    <img class="rounded-lg" :src="$withBase('/assets/screenshots/login.png')" width="700" alt="DIVA login">
</div>

After successful login you will be automatically redirected to the [home](./home.md) page. 

::: tip Upload a profile image
Visit a [user details](./user.md) page to provide your account with further information or upload a profile image
:::
