var express = require('express');
var app = express();

let i = 10;

// 
app.get('/shops', function(req, res) {
  res.header('Content-Type', 'application/json');

  res.send(JSON.stringify([
    {
      name: 'Петрозаводск, улица Антикайненна 4',
      id: 1,
    },
    {
      name: 'Петрозаводск, улица Ленина 10',
      id: 2
    },
    {
      name: 'Москва, Новодмитросвска 5',
      id: 2
    }
  ]));
});

app.post('/book', function (req, res) {
  res.header('Content-Type', 'application/json');

  res.send(JSON.stringify({
    id: ++i,
    message: 'Заказ успешно оформлен!'
  }));
})

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});