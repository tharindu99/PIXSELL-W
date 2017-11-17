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
     userName: 'Tharindu Madushanka',
     siteName: ['AB.lk','bc.lk'],
     userImage:'images/user.png'
    
    };

  response.render('metlook/index',baseFrame);
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
