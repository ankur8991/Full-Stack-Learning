const express = require('express')
const app = express()
const  port = 3000


app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    let siteName = "MoneyMap"
    let searchText = "search Now"
    let arr = ["TotalMoney", 54, 65]
    res.render("index" , {siteName: siteName , searchText: searchText, arr })
})

app.get('/content/:slug', (req, res) =>{
    let contentTitle = "MoneyMap HOw to use ANd why we use?"
    let contentText = "It's very good to use to solve our problems to save more money i our daily life."
    res.render("templates/index.html" , {contentTitle: contentTitle , contentText: contentText })
})

/*

1). ye jo hme contentName , contentText dono variable agr mai duri file se lauu to mai isse kese apne web page pr display krunga mai 
 hamesha hi thodi hi alg file bna kr isme push krunga yah to mai nai ese hi isme ye dono variable manully likh diye hai example ke 
 torr pr pr agr ye vi same index.ejs jaise kissi duri file mai likha hote to kese krta lata mai usse yha pr agr ese hi jada file bn 
 gai to thodi hi mai itni sari files alg-alg bna kr isme add krunga isliye hm Template engine krte hai or vo hi EJS hai isliye iska 
 use krte hai.

2). to phle hme ejs ko install krna hai apne module ke ander uske liye hm terminal mai likhte hai 'npm install ejs' or 'npm i ejs' 
 vi krengai ek br ese likhne ke baad fir hm apne main Express.js mai 'app.set('view engine', 'ejs');' ye likh kr hm btatate hai ki 
 mai ejs template engine use krna cahahta hun.
*/

app.listen(port, () => {
    console.log(`Server chal rah hai 3000 port pe ${port}`)
})