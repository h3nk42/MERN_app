(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{145:function(e,t,a){e.exports=a(256)},182:function(e,t){},188:function(e,t,a){},189:function(e,t,a){},256:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(13),i=a.n(l),o=a(23),r=a(125),s=a.n(r),u=a(261),m=a(262),d=(a(187),a(188),a(257)),h=a(61),f=a(264),p=a(263),g=function(e){return c.a.createElement("svg",{color:e.color,width:"60px",height:"60px",fill:"currentColor",viewBox:"0 0 512 512"},c.a.createElement("path",{d:"M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216 v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"}))},x=(a(189),a(97)),b=a(259),E=a(267),v=a(265),y=a(258),w=y.a.Option,j=function(e){var t=[{name:"monstera",id:1},{name:"philodendron",id:2},{name:"pilea peperomioides\n",id:3}].map((function(e){return c.a.createElement(w,{key:e.id,value:e.id},e.name)}));return c.a.createElement(y.a,{showSearch:!0,style:{width:150},placeholder:"Select a species",optionFilterProp:"children",onChange:function(t){e.setAge(t)},onFocus:function(){console.log("focus")},onBlur:function(){console.log("blur")},onSearch:function(e){console.log("search:",e)},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0}},t)},k=function(e){return c.a.createElement("div",{className:"flex flex-column items-center justify-center"},c.a.createElement(x.a,{style:{width:"80px"},icon:c.a.createElement(E.a,null),onClick:e.handlePlantState}," back "),c.a.createElement(b.a,{style:{minWidth:"100px",width:"50%"},onChange:function(t){return e.setMessage(t.target.value)},placeholder:"name"}),c.a.createElement(j,e),c.a.createElement("div",{style:{height:"20px"}}),e.message&&e.age?c.a.createElement(x.a,{style:{width:"80px"},icon:c.a.createElement(v.a,null),onClick:function(){e.handleClick(e.message),e.handlePlantState()}}," send "):c.a.createElement(x.a,{disabled:!0,style:{width:"80px"},icon:c.a.createElement(v.a,null),onClick:function(){e.handleClick(e.message),e.handlePlantState()}}," send "))},O=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),l=a[0],i=a[1],r=Object(n.useState)(0),s=Object(o.a)(r,2),u=s[0],m=s[1],d=Object(n.useState)(0),h=Object(o.a)(d,2),f=h[0],p=h[1],x=Object(n.useState)(!1),b=Object(o.a)(x,2),E=b[0],v=b[1],y=function(){m(1),setTimeout((function(){v(!E)}),500)},w=function(){v(!E),m(0),p(1)},j=function(e){i(e)};return E?c.a.createElement("div",{className:"flex flex-column items-center justify-center",style:{width:"202px",height:"200px",borderRadius:"100px",backgroundColor:e.colorScheme.fourth}},c.a.createElement("div",{className:"flex flex-row items-center justify-center",style:{height:"80px"}},c.a.createElement(k,Object.assign({handlePlantState:w},e)))):c.a.createElement("div",{wobble:u,wobblereverse:f,onAnimationEnd:function(){m(0),p(0)},className:" myDiv myDivReverse flex flex-column items-center justify-center",onMouseEnter:function(){return j(!0)},onMouseLeave:function(){return j(!1)},onClick:y,style:l?{width:"202px",height:"200px",cursor:"pointer",borderRadius:"100px"}:{width:"202px",height:"200px",borderRadius:"100px"}},c.a.createElement("div",{className:"flex flex-row items-center justify-center",style:{height:"80px"}},c.a.createElement(g,Object.assign({color:"white"},e))))},S=d.a.Meta;var C=function(e){var t=["https://i.ibb.co/1JF6wrY/monstera.png","https://i.ibb.co/pKbJxQV/philo.png","https://i.ibb.co/fY2wB9m/ufoplant.png"],a=e.items.map((function(a){return c.a.createElement(d.a,{key:a._id,style:{width:200,margin:"0.5%",boxShadow:"2px 2px 10px black"},cover:c.a.createElement("img",{alt:"example",src:t[a.id-1]}),actions:[c.a.createElement(f.a,{onClick:function(){e.handlePlantView()},key:"ellipsis"}),c.a.createElement(p.a,{onClick:function(){e.deleteItem(a.id)},key:"ellipsis"})]},c.a.createElement(S,{title:a.message,description:a.id}))}));return c.a.createElement("div",{className:"flex flex-row items-start justify-center",style:{flexWrap:"wrap",padding:"2%",width:"645px",height:"100%",backgroundColor:e.colorScheme.fifth}},e.items.length>0?c.a.createElement("div",null):c.a.createElement(h.a,{description:"no plants.."}),a)},N=a(93),D=a.n(N),H=(a(88),a(260));var M=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),l=a[0],i=a[1],r=Object(n.useState)(!1),s=Object(o.a)(r,2),u=s[0],d=(s[1],Object(n.useState)(null)),h=Object(o.a)(d,2),f=h[0],p=h[1],g=Object(n.useState)(null),x=Object(o.a)(g,2),b=x[0],E=x[1];Object(n.useEffect)((function(){v(e.url,!0),null!=e.socket&&e.socket.on("dbUpdated",(function(t){v(e.url,!0),H.b.info("db update: ".concat(t))}))}),[u,e.url,e.socket]);var v=function(t,a){fetch(t+"api/getData").then((function(e){return e.json()})).then((function(t){i(t.data),a&&setTimeout((function(){return e.setLoading(!1)}),300)}))},y=function(t){D.a.post("".concat(e.url,"api/putData"),{id:b,message:t}),p(null),E(null)};return e.loading?c.a.createElement("div",{className:"flex flex-column justify-start items-center",style:{height:"800px",width:"800px"}},c.a.createElement("div",{className:"flex flex-column justify-center items-center",style:{width:"30%",height:"40%",backgroundColor:e.colorScheme.fifth}},c.a.createElement(m.a,{style:{fontSize:"100px",color:"white"}}))):c.a.createElement("div",{className:"flex flex-column"},c.a.createElement("div",{style:{boxShadow:"9px 11px 34px 1px rgba(0,0,0,0.71)",maxWidth:"60%",height:"100%",display:"flex",flexDirection:"column"}},c.a.createElement(C,Object.assign({handleClick:y,message:f,setMessage:p,age:b,setAge:E,items:l,setItems:i,deleteItem:function(t){parseInt(t);var a=null;l.forEach((function(e){e.id==t&&(a=e._id)})),D()({method:"delete",url:"".concat(e.url,"api/deleteData"),data:{id:a}})}},e))),c.a.createElement("div",{className:"self-center pt-4"},c.a.createElement(O,Object.assign({handleClick:y,message:f,setMessage:p,age:b,setAge:E,items:l,setItems:i},e))))},L=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),l=a[0],i=a[1],r=function(){i(!l)};return c.a.createElement("div",{onMouseEnter:r,onMouseLeave:r,key:e.val,className:" flex flex-row justify-center items-center",style:{cursor:"pointer",marginLeft:"10%",marginRight:"10%",height:"auto",width:"100%",backgroundColor:l?e.colorScheme.fourth:""}},e.val)},P=function(e){var t=[{data:c.a.createElement("h2",{style:{color:"white"}}," HOME "),id:1},{data:c.a.createElement("h2",{style:{color:"white"}}," CONTACT "),id:2},{data:c.a.createElement("h2",{style:{color:"white"}}," DNTKNW "),id:3}].map((function(t){return c.a.createElement(L,Object.assign({key:t.id,val:t.data},e))}));return c.a.createElement("div",{className:"flex flex-row items-center justify-center",style:{boxShadow:"-2px 19px 39px 34px rgba(0,0,0,1)",height:"80px",width:"100vw"}},t)},I=function(e){return c.a.createElement("div",{className:"flex flex-row items-center justify-center"},c.a.createElement("div",{className:"card-3 flex flex-column justify-center items-center",style:{height:"700px",width:"500px",display:"flex",flexDirection:"row",backgroundColor:e.colorScheme.fifth}},c.a.createElement(x.a,{className:"self-end align-self-start",style:{width:"80px"},icon:c.a.createElement(E.a,null),onClick:function(){e.toggleLoading(),e.handlePlantView()}}," back ")))},V=function(e){return c.a.createElement("div",{className:"flex flex-row items-center justify-center",style:{height:"80px",width:"100vw",boxShadow:" -2px -32px 39px 1px rgba(0,0,0,1)"}},c.a.createElement("h2",{style:{color:"white"}}," Share your "),c.a.createElement("h2",{style:{color:"black"}}," Plant // created by Henk van der "),c.a.createElement("h2",{style:{color:"white"}}," Sloot // \xa92020 "))},B=u.a.Content;var W=function(){var e=["https://shareyourplant.herokuapp.com/","http://localhost:5001/shareyourplant-b5c9a/us-central1/app/api"],t=Object(n.useState)(!1),a=Object(o.a)(t,2),l=(a[0],a[1],Object(n.useState)(e[0])),i=Object(o.a)(l,2),r=i[0],d=(i[1],Object(n.useState)(!1)),h=Object(o.a)(d,2),f=h[0],p=h[1],g=Object(n.useState)(!0),x=Object(o.a)(g,2),b=x[0],E=x[1],v=Object(n.useState)(!0),y=Object(o.a)(v,2),w=y[0],j=y[1],k=Object(n.useState)(null),O=Object(o.a)(k,2),S=O[0],C=O[1];Object(n.useEffect)((function(){return C(s()(r)),function(){S.disconnect()}}),[]);var N={main:"#264653",second:"#2a9d8f",third:"#e9c46a",fourth:"#f4a261",fifth:"#e76f51"},D=function(){p(!f)},H=function(){E(!b)};return c.a.createElement("div",{className:"wrappingContainer ",style:{fontFamily:"Quicksand, sans-serif"}},w?c.a.createElement("div",{className:"flex flex-column item-center justify-center",style:{height:"100vh",width:"100vw",backgroundColor:"white"}},c.a.createElement(m.a,{style:{fontSize:"100px",color:"black"}})):c.a.createElement("div",null),c.a.createElement("div",{style:w?{display:"none"}:{}},c.a.createElement(u.a,null,c.a.createElement(B,null,c.a.createElement("div",{className:"backgroundDiv"},c.a.createElement("img",{src:"https://i.ibb.co/b5DH4nY/djnglHD.jpg",alt:"https://i.ibb.co/b5DH4nY/djnglHD.jpg",className:"backgroundImg",onLoad:function(){console.log("loading done"),j(!1)}}),c.a.createElement("div",{className:"flex flex-column items-center justify-start",style:{minHeight:"100vh",backgroundSize:"3000px 2000px",backgroundImage:"url('https://i.ibb.co/b5DH4nY/djnglHD.jpg')"}},c.a.createElement(P,{colorScheme:N}),c.a.createElement("div",{style:{padding:"5% 5%",marginBottom:"auto"}},f?c.a.createElement(I,{colorScheme:N,toggleLoading:H,handlePlantView:D}):c.a.createElement("div",{className:"flex flex-column items-center justify-center"},c.a.createElement(M,{socket:S,colorScheme:N,loading:b,setLoading:E,handlePlantView:D,url:r}))),c.a.createElement(V,{colorScheme:N})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,t,a){}},[[145,1,2]]]);
//# sourceMappingURL=main.8cf11ab0.chunk.js.map