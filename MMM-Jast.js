/*! *****************************************************************************
  mmm-jast
  Version 2.6.0

  A minimalistic stock ticker based on Yahoo's finance API for the MagicMirror² platform.
  Please submit bugs at https://github.com/jalibu/MMM-Jast/issues

  (c) Jan.Litzenburger@gmail.com
  Licence: MIT

  This file is auto-generated. Do not edit.
***************************************************************************** */

!function(e){"use strict";function t(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var r=t(e);class n{constructor(e){this.config=e,this.currentValueStyle={style:e.showCurrency?"currency":"decimal",useGrouping:e.useGrouping,currencyDisplay:e.currencyStyle,minimumFractionDigits:e.numberDecimalsValues<=8?e.numberDecimalsValues:8},this.changeValueStyle={style:e.showChangeValueCurrency?"currency":"decimal",useGrouping:e.useGrouping,currencyDisplay:e.currencyStyle,minimumFractionDigits:e.numberDecimalsValues<=8?e.numberDecimalsValues:8},this.percentStyle={style:"percent",useGrouping:e.useGrouping,minimumFractionDigits:e.numberDecimalsPercentages<=8?e.numberDecimalsPercentages:8}}getStockChange(e){var t;return null===(t=e.price)||void 0===t?void 0:t.regularMarketChange}getStockChangePercent(e){var t;return null===(t=e.price)||void 0===t?void 0:t.regularMarketChangePercent}getCurrentValue(e){var t;return null===(t=e.price)||void 0===t?void 0:t.regularMarketPrice}getStockChangeAsString(e){return this.getStockChange(e).toLocaleString(this.config.locale,Object.assign(this.changeValueStyle,{currency:e.price.currency}))}getStockChangePercentAsString(e){return this.getStockChangePercent(e).toLocaleString(this.config.locale,this.percentStyle)}getCurrentValueAsString(e){return this.getCurrentValue(e).toLocaleString(this.config.locale,Object.assign(this.currentValueStyle,{currency:e.price.currency}))}getStockName(e){return e.meta.name||e.price.longName}getPortfolioValueAsString(e){return e.value.toLocaleString(this.config.locale,Object.assign(this.currentValueStyle,{currency:e.currency}))}getPortfolioChangeAsString(e){return(e.value-e.oldValue).toLocaleString(this.config.locale,Object.assign(this.currentValueStyle,{currency:e.currency}))}getPortfolioChangePercentAsString(e){return((e.value-e.oldValue)/e.oldValue).toLocaleString(this.config.locale,this.percentStyle)}getPortfolio(e){var t,n,a;const i=[];for(const o of e)try{const e=null===(t=this.config.stocks)||void 0===t?void 0:t.find((e=>{var t;return e.symbol===(null===(t=o.meta)||void 0===t?void 0:t.symbol)}));if(null==e?void 0:e.quantity){const t=(null===(n=o.price)||void 0===n?void 0:n.regularMarketPrice)*e.quantity,r=(null===(a=o.price)||void 0===a?void 0:a.regularMarketPreviousClose)*e.quantity,c=i.find((e=>e.currency===o.price.currency));c?(c.value+=t,c.oldValue+=r):i.push({value:t,oldValue:r,currency:o.price.currency})}}catch(e){r.warn("There was a problem calculating the detpot growth",e)}return i}}Module.register("MMM-Jast",{defaults:{locale:config.locale||"en-GB",updateIntervalInSeconds:600,useGrouping:!1,currencyStyle:"code",fadeSpeedInSeconds:3.5,stocks:[{name:"BASF",symbol:"BAS.DE",quantity:100},{name:"SAP",symbol:"SAP.DE",quantity:200},{name:"Henkel",symbol:"HEN3.DE"},{name:"AbbVie",symbol:"4AB.DE"},{name:"Bitcoin",symbol:"BTC-EUR"},{name:"Alibaba",symbol:"BABA"}],lastUpdateFormat:"HH:mm",scroll:"vertical",maxWidth:"100%",numberDecimalsValues:2,numberDecimalsPercentages:1,showColors:!0,showCurrency:!0,showChangePercent:!0,showChangeValue:!1,showChangeValueCurrency:!1,showLastUpdate:!1,showPortfolioValue:!1,showPortfolioGrowth:!1,showPortfolioGrowthPercent:!1,virtualHorizontalMultiplier:2},getScripts:()=>["moment.js"],getStyles:()=>["MMM-Jast.css"],getTranslations:()=>({en:"translations/en.json",de:"translations/de.json"}),getTemplate:()=>"templates/MMM-Jast.njk",getTemplateData(){var e,t;const r=new n(this.config);return{config:this.config,stocks:null===(e=this.state)||void 0===e?void 0:e.stocks,lastUpdate:moment(null===(t=this.state)||void 0===t?void 0:t.lastUpdate).format(this.config.lastUpdateFormat),utils:r}},start(){this.loadData(),this.scheduleUpdate(),this.updateDom()},scheduleUpdate(){this.config.updateIntervalInSeconds=this.config.updateIntervalInSeconds<120?120:this.config.updateIntervalInSeconds,setInterval((()=>{this.loadData()}),1e3*this.config.updateIntervalInSeconds)},loadData(){this.sendSocketNotification("JAST_STOCKS_REQUEST",this.config)},socketNotificationReceived(e,t){"JAST_STOCKS_RESPONSE"===e&&(this.state=t,r.log("JAST_STOCKS_RESPONSE",this.state),this.updateDom())}})}(Log);
