(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{117:function(e,t,a){"use strict";a.r(t);a(62);var n=a(63),s=a(77),o=a(94),r=a(69),w=a(95),c=a(70),u=new n.a({declutter:!0,source:new s.a({format:new o.a,url:"data/states.geojson"})}),d=new r.a({target:"map",view:new w.a({center:[-13603186.115192635,6785744.563386],zoom:2})});fetch("data/states.json").then(function(e){return e.json()}).then(function(e){Object(c.a)(u,e,"states"),-1===d.getLayers().getArray().indexOf(u)&&d.addLayer(u)})}},[[117,0]]]);
//# sourceMappingURL=stylefunction.js.map