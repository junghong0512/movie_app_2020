(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{34:function(e,t,a){e.exports=a(68)},57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(29),c=a.n(s),i=a(7),l=a(6),o=a(16),m=a.n(o),u=a(30),p=a(10),v=a(11),d=a(13),_=a(12),E=a(14),f=a(31),h=a.n(f);a(57);var y=function(e){var t=e.id,a=e.year,n=e.title,s=e.summary,c=e.poster,l=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(i.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:s,poster:c,genres:l}}},r.a.createElement("img",{src:c,alt:n,title:n}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},n),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"movie__genres"},l.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},s.slice(0,180),"..."))))},g=(a(63),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},a.getMovies=Object(u.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:t=e.sent,n=t.data.data.movies,a.setState({movies:n,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(r.a.Component));a(64);var b=function(e){return console.log(e),r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"),r.a.createElement("span",null,"\u2212 George Orwell, 1984"))},N=(a(65),function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location,t=e.state;return e.state?r.a.createElement("div",{className:"detail"},r.a.createElement("img",{className:"detail__image",src:t.poster,title:t.title,alt:t.title}),r.a.createElement("div",{className:"detail__data"},r.a.createElement("h3",{className:"detail__title"},t.title),r.a.createElement("h5",{className:"detail__year"},t.year),r.a.createElement("ul",{className:"detail__genres"},t.genres.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"detail__summary"},t.summary))):null}}]),t}(r.a.Component));a(66);var j=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(i.b,{to:"/"},"Home"),r.a.createElement(i.b,{to:"./about"},"About"))};a(67);var O=function(){return r.a.createElement(i.a,null,r.a.createElement(j,null),r.a.createElement(l.a,{path:"/",exact:!0,component:g}),r.a.createElement(l.a,{path:"/about",component:b}),r.a.createElement(l.a,{path:"/movie/:id",component:N}))};c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.36ddc123.chunk.js.map