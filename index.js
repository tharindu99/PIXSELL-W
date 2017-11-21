var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  
  var baseFrame = 
    {title: 'Web Site Owner',
     userName: 'Tharindu',
     siteName: ['AB.lk','bc.lk'],
     userImage:'images/user.png'
    };
  var sideMenu =
    [
      {name:'Home',icon:'home',link:'Home',state:'active'},
      {name:'RegisteAd-block',icon:'layers',link:'reg_adblock'}
    ]

  response.render('metlook/index',{baseFrame:baseFrame,sideMenu:sideMenu});
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
