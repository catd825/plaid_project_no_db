# Plaid Quickstart with Node/Express and React (no database)

This app uses the Plaid API to connect to a sample bank account to load transactions.  This is set up with ReactJS on the front end and NodeJS/Express on the backend.<br/>

```cd server``` and run ```npm install``` <br/>
```cd client``` and run ```npm install``` <br/>

You will need to create a free Plaid account to get keys.  Once you have the keys, you need to create the keys file: <br/>
Under ```server```: ```cd config```<br/>
```touch keys.js```<br/>
In the file, add the following:
```
module.exports = {
    PLAID_CLIENT_ID: 'ADD CLIENT KEY',
    PLAID_SECRET: 'ADD SANDBOX SECRET KEY'
};
```
If you want to push your work to Github, remember to hide your keys: <br/>
Under ```server```: ```touch .gitignore```<br/>
In ```.gitignore``` add ```keys.js```

To run both servers, run ```npm run dev```


When prompted, add the following test credentials: <br/>
```username: user_good``` <br/>
```password: pass_good```
