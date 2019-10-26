(this["webpackJsonphashmap-visualizer"]=this["webpackJsonphashmap-visualizer"]||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(6),l=a.n(i),r=(a(69),a(70),a(38),a(48)),c=a(49),u=a(53),h=a(50),o=a(54),m=a(139),v=a(149),k=a(147),d=a(148),p=a(142),b=a(146),y=a(145),g=a(52),E=(a(71),a(107)),f=function(e){function t(e){var a;Object(r.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).hashCode=function(e){var t=0,a=e.length,n=0;if(a>0)for(;n<a;)t=(t<<5)-t+e.charCodeAt(n++)|0;return t},a.createBuckets=function(e){for(var t=[],n=0;n<e;n++)t.push(s.a.createElement(m.a,{item:!0,xs:1,key:n,className:"bucket"},s.a.createElement("p",null,n),s.a.createElement(g.a,{size:"3em"}),a._iterateBuckets(n)));return t};var n=new E;return a.state={type:"insert",key:1,value:1,buckets:16,map:n,equation:"1 % 16 = 1"},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"_typeChange",value:function(e){this.setState({type:e.target.value})}},{key:"_keyChange",value:function(e){this.setState({key:e.target.value,equation:Math.abs(this.hashCode(e.target.value))+" % "+this.state.buckets+" = "+e.target.value%this.state.buckets})}},{key:"_itemChange",value:function(e){this.setState({value:e.target.value})}},{key:"_bucketChange",value:function(e){this.setState({buckets:e.target.value,equation:Math.abs(this.hashCode(this.state.key))+" % "+e.target.value+" = "+this.state.key%e.target.value})}},{key:"_handleClick",value:function(){switch(this.state.type){case"insert":var e=this.state.map.set(this.state.key,this.state.value);this.setState({map:e});break;case"delete":e=this.state.map.delete(this.state.key,this.state.value);this.setState({map:e})}}},{key:"_iterateBuckets",value:function(e){var t=this,a=[];return this.state.map.forEach((function(n,s){Math.abs(t.hashCode(s))%t.state.buckets==e&&a.push(JSON.stringify({key:s,value:n}))})),s.a.createElement("p",null,a.join())}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Hashmap Visualizer"),s.a.createElement("p",null,"A HashMap is a data structure that stores keys and values. In a bucketed system a key value pair is placed into a bucket as denoted by object.hashCode() % n"),s.a.createElement(m.a,{item:!0,xs:12},s.a.createElement(p.a,{className:"select-box"},s.a.createElement(k.a,{htmlFor:"age-simple"},"Type"),s.a.createElement(b.a,{value:this.state.type,onChange:this._typeChange.bind(this),inputProps:{type:this.state.type,id:"age-simple"}},s.a.createElement(d.a,{value:"insert"},"Insert"),s.a.createElement(d.a,{value:"delete"},"Delete")))),s.a.createElement(m.a,{container:!0,spacing:3},s.a.createElement(m.a,{item:!0,xs:4},s.a.createElement(v.a,{id:"standard-name",label:"Key",value:this.state.key,onChange:this._keyChange.bind(this),margin:"normal"})),s.a.createElement(m.a,{item:!0,xs:4},s.a.createElement(v.a,{id:"standard-name",label:"Value",value:this.state.value,onChange:this._itemChange.bind(this),margin:"normal"})),s.a.createElement(m.a,{item:!0,xs:4},s.a.createElement(v.a,{id:"standard-name",label:"Buckets",value:this.state.buckets,onChange:this._bucketChange.bind(this),margin:"normal"}))),s.a.createElement("h3",null,this.state.equation),s.a.createElement(y.a,{variant:"contained",onClick:this._handleClick.bind(this)},this.state.type),s.a.createElement(m.a,{container:!0,className:"buckets"},this.createBuckets(this.state.buckets)))}}]),t}(n.Component);var C=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},38:function(e,t,a){},64:function(e,t,a){e.exports=a(110)},69:function(e,t,a){},70:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"}},[[64,1,2]]]);
//# sourceMappingURL=main.3359ca44.chunk.js.map