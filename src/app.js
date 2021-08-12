const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 5000;

// Public static path
const static_page = path.join(__dirname , "../public");
const template_path = path.join(__dirname , "../template/views");
const partials_path = path.join(__dirname , "../template/partials");

//  To set views folder with hbs
app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_page));

// Routing 
app.get("" , (req , res) => {
    res.render('index');
})

app.get("/about" , (req , res) => {
    res.render('about');
})

app.get("/weather" , (req , res) => {
    res.render('weather');
})

app.get("*" , (req , res) => {
    res.render('404error');
})

app.listen(port , () => {
    console.log(`Listining to the port ${port}`);
})