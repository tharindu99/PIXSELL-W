var express = require('express');
var app = express();

app.get('/', function(request, response) {
    
    var baseFrame = 
      {title: 'Advertising Client',
       userName: 'Tharindu',
       siteName: ['AB.lk','bc.lk'],
       userImage:'images/user.png'
      };
    var sideMenu =
      [
        {name:'Home',icon:'home',link:'Home',state:'active'},
        {name:'Ad-Campaign',icon:'layers',link:'ad_campaigns'},
        {name:'Hostory',icon:'monetization_on',link:'history'}
      ]
    var TopPanel = 
      [
        {name:'Active Ad-Blocks',icon:'dashboard',value:2,color:'bg-pink'},
        {name:'Active Ad-Campaigns',icon:'view_quilt',value:2,color:'bg-cyan'},
        {name:'Active Pixsells',icon:'donut_small',value:'34%',color:'bg-light-green'},
        {name:'Complete',icon:'attach_money',value:'40%',color:'bg-orange'}
      ]
  
    response.render('metlook/pages/adClient/adClient',{baseFrame:baseFrame,sideMenu:sideMenu,topPanel:TopPanel});
  });

  module.exports = app