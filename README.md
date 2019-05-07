
### Steps to run APP
#1: Get access token by runnin the following cmd in linux based terminal.
curl --basic --user "BZaa-av5L6RmZKlPgZaGNkea:jchbf_Q5zRWCaEg4TCB4m9cLIioPiml0" -X POST -d "grant_type=client_credentials&scope=view_products:nuts-custom-demo-1" "https://auth.commercetools.co/oauth/token"

Format will be:
{"access_token":"NEW-ACCESS-TOKEN","token_type":"Bearer","expires_in":172800,"scope":"view_products:nuts-custom-demo-1"}

#2.  Replace "YourAccessTokenHere" with your new access token within the App.
See line 27 of App.js : const token = 'YourAccessTokenHere';

#3. Run with `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
