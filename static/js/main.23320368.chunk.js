(this["webpackJsonpdeduplicated-chat"]=this["webpackJsonpdeduplicated-chat"]||[]).push([[0],{18:function(e,t,a){e.exports=a(35)},23:function(e,t,a){},24:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(8),c=a.n(r),i=(a(23),a(9)),o=a(10),u=a(16),l=a(11),d=a(17),m=(a(24),a(25),a(12)),g=a.n(m),f=a(5),h=a(13),v=(a(31),function(e){var t=e.sentAt,a=new Date(t),n="".concat(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][a.getDay()]," ",["January","February","March","April","May","June","July","August","September","October","November","December"][a.getMonth()],", ",a.getFullYear()," at ",a.getHours(),":",a.getMinutes());return s.a.createElement("p",{className:"date"},n)}),p=(a(32),function(e){var t=e.message,a=e.onRemoveMessageClick,n=t.sentAt,r=t.content,c=t.senderUuid,i=t.uuid;return s.a.createElement("div",{className:"message"},s.a.createElement(h.a,{bordered:!0,responsive:!0},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("img",{alt:"uuid",src:"https://robohash.org/".concat(c,"?set=set5&size=120x120")})),s.a.createElement("td",{className:"data-row"},s.a.createElement("tr",null,s.a.createElement("h5",{className:"content"},r)),s.a.createElement("tr",null,s.a.createElement(v,{sentAt:n}))),s.a.createElement("td",{rowSpan:2},s.a.createElement(f.a,{variant:"primary",onClick:function(){return a({uuid:i})}},"Remove"))))))}),y=(a(33),function(e){var t=e.messages,a=e.onRemoveMessageClick;return s.a.createElement("div",{className:"message-list"},t.map((function(e){return s.a.createElement(p,{key:e.uuid,message:e,onRemoveMessageClick:a})})))}),b=a(15),E=(a(34),function(e){var t=e.onOrderClick;return s.a.createElement("div",{className:"ordering-buttons"},s.a.createElement(b.a,{"aria-label":"Basic example"},s.a.createElement(f.a,{variant:"secondary",onClick:function(){return t("asc")}},"Order Ascending"),s.a.createElement(f.a,{variant:"secondary",onClick:function(){return t("desc")}},"Order Descending")))}),C=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).deduplicateMessages=function(e){return e.filter((function(t,a){return e.findIndex((function(e){return e.uuid===t.uuid}))===a}))},e.onRemoveMessageClick=function(t){var a=t.uuid,n=e.state.messages.filter((function(e){return e.uuid!==a}));e.setState({messages:n},(function(){return e.setPaginatedMessages()}))},e.handlePageChange=function(t){var a=t.selected;e.setState({offset:a},(function(){return e.setPaginatedMessages()}))},e.setPaginatedMessages=function(){var t=5*e.state.offset,a=t+5,n=e.orderMessages().slice(t,a);e.setState({paginatedMessages:n})},e.onOrderClick=function(t){e.setState({ordering:t},(function(){return e.setPaginatedMessages()}))},e.orderMessages=function(){var t=e.state,a=t.messages,n=[];switch(t.ordering){case"desc":n=a.sort((function(t,a){return e.sortDescending(t,a)}));break;case"asc":n=a.sort((function(t,a){return e.sortAscending(t,a)}));break;default:n=a}return n},e.sortDescending=function(e,t){var a=e.sentAt,n=t.sentAt,s=0;return a<n?s=-1:a>n&&(s=1),s},e.sortAscending=function(e,t){var a=e.sentAt,n=t.sentAt,s=0;return a>n?s=-1:a<n&&(s=1),s},e.state={messages:[],paginatedMessages:[],offset:1,ordering:""},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://my-json-server.typicode.com/briverac/dummy-messages/data").then((function(e){return e.json()})).then((function(t){return e.setState({messages:e.deduplicateMessages(t.messages),paginatedMessages:t.messages.slice(0,5)})}))}},{key:"render",value:function(){var e=this.state,t=e.paginatedMessages,a=e.messages;return s.a.createElement("div",{className:"ChatApp"},s.a.createElement("h1",null,"Modern Health chat"),s.a.createElement(y,{messages:t,onRemoveMessageClick:this.onRemoveMessageClick}),s.a.createElement("div",{className:"button-area"},s.a.createElement(g.a,{previousClassName:"btn btn-secondary",nextClassName:"btn btn-secondary",pageLinkClassName:"btn btn-secondary",pageRangeDisplayed:5,marginPagesDisplayed:1,initialPage:1,pageCount:Math.ceil(a.length/5),onPageChange:this.handlePageChange,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}),s.a.createElement(E,{onOrderClick:this.onOrderClick})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.23320368.chunk.js.map