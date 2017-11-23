var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  
  var baseFrame = 
    {title: '',
     userName: '',
     siteName: [],
     userImage:''
    };
  var sideMenu =
    [
      {name:'About',icon:'home',link:'#',state:'active'},
      {name:'Concept',icon:'layers',link:'#'},
      {name:'Legator',icon:'layers',link:'#'}
    ]

  response.render('metlook/index',{baseFrame:baseFrame,sideMenu:sideMenu});
});

app.get('/webSiteOwner', function(request, response) {
  
  var baseFrame = 
    {title: 'Web Site Owner',
     userName: 'Tharindu',
     siteName: ['AB.lk','bc.lk'],
     userImage:'images/user.png'
    };
  var sideMenu =
    [
      {name:'Home',icon:'home',link:'Home',state:'active'},
      {name:'RegisteAd-block',icon:'layers',link:'reg_adblock'},
      {name:'Earnings',icon:'monetization_on',link:'earnings'}
    ]
  var TopPanel = 
    [
      {name:'Active Blocks',icon:'dashboard',value:5,color:'bg-pink'},
      {name:'Sold Blocks',icon:'view_quilt',value:2,color:'bg-cyan'},
      {name:'Micro Investments',icon:'donut_small',value:'34%',color:'bg-light-green'},
      {name:'Expect Income',icon:'attach_money',value:'40%',color:'bg-orange'}
    ]

  response.render('metlook/pages/webSiteOwner/webSiteOwner',{baseFrame:baseFrame,sideMenu:sideMenu,topPanel:TopPanel});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
