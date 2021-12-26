var express = require('express');
var app = express();

app.use(express.static('public'));

// bu onemli degilde 
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('index.ejs')
});
// Uygulama hazir oldugunda olan mesaj
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
