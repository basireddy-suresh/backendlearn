const express=require('express');
const port=8000;
const app=express();
const data=require('./models/Data.json');
const userRouters=require('./router/users');
// node is runtime env for javascript to run in outside the web browser
// it can create the server 
// need to install [npm init] and [npm i express]
// need to use (`) for console stmt ${port} 
// run [node index.js] code for output
// To run in live server install [npm install -g nodemon]
// Go to packages.json and in scripts write 'start':'nodemon index.js'
// [npm start] used for run the code
// create file .gitignore write node_modules/ for remove the many modules
// git commands
// git init, git add . , git commit -m "comment"
// git branch -M main, git remote add origin "link", git push -u origin main
app.use('/',userRouters);
// https://github.com/himanshugarg702/backendlearn

app.listen(port,function(err){
    if(err){
        console.log("Error is run in server");
    }
    console.log(`server is run on port: ${port}`);
})