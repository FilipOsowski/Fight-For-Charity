(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{185:function(e,t,a){e.exports=a(186)},186:function(e,t,a){"use strict";a.r(t);var n=a(19),r=a(20),l=a(22),i=a(21),o=a(23),s=a(16),c=a(0),p=a.n(c),d=a(18),u=a.n(d),h=(a(191),a(8)),m=(a(213),a(32));m.a.initialize("UA-137697306-1"),m.a.pageview("/main-page");var b=window.innerWidth<=700;console.log("isMobile =",b);var f={male:["Filippo DeFrenza","BYE","Teague Conrad","Eric Braun","Nick Mussman","BYE","Jake Lydon","BYE","Jeffrey Pagels","BYE","Mark Frale","BYE","Jacob Glorioso","BYE","Robert Stanislawski","BYE","Anthony Wachal","BYE","Brandon Kriepke","Andrew Bittner","Jacob Cosentino","BYE","Davon Holmes","BYE","Raja Mittal","BYE","Michael Guskey","Jake Milewski","Raj Patel","BYE","Jaylen Patel","BYE"],female:["Katie O'Brien","BYE","Sidra Capriolo","Niva Patel","Olivia Olszewski","Laura Vesco","Kimmi Nijjar","Nicole Brashears","Alyssa Bolbot","BYE","Kelly O'Sullivan","Rachel Pariso","Delaney Demaret","Bridget Tobin","Gianna Catania","Lyric Childs"]},y=null,g=null,x=null,v=null,E=null,k=null,C=null,j=null;function _(e){var t=e.children;return p.a.createElement(h.l,{component:"div",style:{paddingTop:100,paddingLeft:50,paddingRight:50,paddingBottom:50}},t)}var O=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).handleChange=function(e,t){a.setState({value:t})},a.handleChangeIndex=function(e){a.setState({value:e})},a.update=a.update.bind(Object(s.a)(Object(s.a)(a))),a.state={value:0},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"update",value:function(){this.forceUpdate()}},{key:"render",value:function(){return p.a.createElement("div",{className:"ViewsContainer"},p.a.createElement(h.a,{position:"fixed",color:"default"},p.a.createElement(h.k,{value:this.state.value,onChange:this.handleChange,indicatorColor:"primary",textColor:"primary",variant:"fullWidth"},p.a.createElement(h.j,{label:"Male Bracket"}),p.a.createElement(h.j,{label:"Female Bracket"}),p.a.createElement(h.j,{label:"Profile & Leaderboard"}))),0===this.state.value&&p.a.createElement(_,null,p.a.createElement(D,{starting_names:f.male,user_bracket:y.male,disabled:E.male||g,gender:"male",correct_bracket:v.male,display_only:!1})),1===this.state.value&&p.a.createElement(_,null,p.a.createElement(D,{starting_names:f.female,user_bracket:y.female,disabled:E.female||g,gender:"female",correct_bracket:v.female,display_only:!1})),2===this.state.value&&p.a.createElement(_,null,p.a.createElement(w,{name:k,rank:j,points:C,leaderboard_data:x,event_has_started:g})),p.a.createElement("footer",{style:{backgroundColor:"lightgrey",color:"grey",height:"60px",display:"flex",justifyContent:"flex-end",alignItems:"center"}},p.a.createElement("div",{style:{paddingRight:"25px",fontFamily:"Roboto"}},"Created by Andrew Milas, Viraj Sule, Murat Oguz, Graham Knott, Eddie Federmeyer, and Filip Osowski")))}}]),t}(p.a.Component),w=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"logout",value:function(){var e=new XMLHttpRequest;e.withCredentials=!0,e.open("POST","http://battleforcharity.com/clear-session",!0),e.onreadystatechange=function(){e.readyState==XMLHttpRequest.DONE&&window.location.reload(!0)},e.send()}},{key:"render",value:function(){var e=null;if(this.props.leaderboard_data){var t=null,a=b?"3em":"7em";this.props.rank&&(t=p.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",top:"50px",backgroundColor:"#ededed",borderRadius:"15px",fontFamily:"Roboto",height:"200px"}},p.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",height:"200px"}},p.a.createElement("div",{style:{fontSize:"2em",fontWeight:"400",paddingTop:"25px"}},"Rank"),p.a.createElement("div",{style:{fontSize:a,fontWeight:"900",paddingTop:"55px"}},"#",this.props.rank)),p.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",height:"200px"}},p.a.createElement("div",{style:{fontSize:"2em",fontWeight:"400",paddingTop:"25px"}},"Points"),p.a.createElement("div",{style:{fontSize:a,fontWeight:"900",paddingTop:"55px"}},this.props.points)))),e=p.a.createElement("div",null,t,p.a.createElement("div",{style:{display:"flex",justifyContent:"center",fontFamily:"Roboto",fontSize:"3em",fontWeight:"900",paddingTop:"75px",paddingBottom:"50px"}},"Leaderboard"),p.a.createElement("div",{style:{backgroundColor:"#ededed",borderRadius:"15px 15px 15px 15px"}},p.a.createElement(B,{leaderboard_data:x})))}else e=p.a.createElement("div",{style:{paddingTop:"50px",display:"flex",justifyContent:"center",fontFamily:"Roboto",fontSize:"3em",fontWeight:"400",minHeight:"1000px",lineHeight:"1.15",textAlign:"center"}},"Come back when the event is over to see the leaderboard!");return p.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-start"}},p.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}},p.a.createElement("div",{style:{width:"150px"}}),p.a.createElement("div",{style:{display:"flex",justifyContent:"center",fontFamily:"Roboto",fontSize:b?"2em":"3em",fontWeight:"900",paddingBottom:"35px",lineHeight:"1.15"}},"Logged in as ",this.props.name),p.a.createElement(h.b,{variant:"contained",color:"secondary",onClick:this.logout,style:{height:"50px",width:"150px",marginBottom:"35px"}},"Log Out")),e)}}]),t}(p.a.Component),B=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"createData",value:function(e){return{id:e,name:this.props.leaderboard_data[e][0],score:this.props.leaderboard_data[e][1]}}},{key:"render",value:function(){var e=p.a.createElement("div",null,"No leaderboard data");if(this.props.leaderboard_data){for(var t=[],a=0;a<this.props.leaderboard_data.length;a++)t.push(this.createData(a));var n=b?"200px":"500px";e=p.a.createElement("div",{className:"Leaderboard",style:{display:"flex",flexDirection:"column",alignItems:"center"}},p.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:n,fontFamily:"Roboto",fontSize:"2.5em",fontWeight:"900",paddingBottom:"10px",paddingTop:"15px"}},p.a.createElement("span",null,"Name"),p.a.createElement("span",null,"Points")),p.a.createElement("div",{style:{borderBottom:"3px solid grey",width:n}}),t.map(function(e){return p.a.createElement("div",null,p.a.createElement("div",{key:e.id,style:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:n,fontFamily:"Roboto",fontSize:"2em",fontWeight:"400",paddingBottom:"15px",paddingTop:"15px",lineHeight:"1.15"}},p.a.createElement("span",null,e.name),p.a.createElement("span",null,e.score)),p.a.createElement("div",{style:{borderBottom:"1px solid grey",width:n}}))}))}return e}}]),t}(p.a.Component),R=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).onClick=a.onClick.bind(Object(s.a)(Object(s.a)(a))),a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"onClick",value:function(){E[this.props.gender]=!0;var e=new XMLHttpRequest;e.withCredentials=!0,e.open("POST","http://battleforcharity.com/set-user-bracket",!0),e.setRequestHeader("Content-type","application/json"),e.send(JSON.stringify({gender:this.props.gender,user_bracket:this.props.user_bracket})),m.a.event({category:"User",action:"Locked bracket "+this.props.gender}),this.props.disable_bracket()}},{key:"render",value:function(){var e=this.props,t=e.user_bracket,a=(e.disable_bracket,e.gender),n=!0,r="Lock Bracket";return g?r="Event has already started":!0===E[a]?r="Locked":t.includes(null)?r="Finish Your Bracket To Lock It":n=!1,p.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},p.a.createElement(h.b,{fullWidth:!0,variant:"contained",color:"primary",disabled:n,onClick:this.onClick,style:{minHeight:"50px",height:"auto",overflow:"hidden",fontFamily:"Roboto",fontSize:b?"1em":"2em",fontWeight:"400"}},r),p.a.createElement(S,null))}}]),t}(p.a.Component),S=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).state={open:!1},a.onClick=a.onClick.bind(Object(s.a)(Object(s.a)(a))),a.onClose=a.onClose.bind(Object(s.a)(Object(s.a)(a))),a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"onClick",value:function(){m.a.event({category:"User",action:"Clicked the help button"}),this.setState({open:!0})}},{key:"onClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return p.a.createElement("div",null,p.a.createElement(h.b,{variant:"contained",onClick:this.onClick,style:{minHeight:"50px",height:"auto",marginLeft:"25px",fontFamily:"Roboto",fontSize:"2em",fontWeight:"900"}},"?"),p.a.createElement(h.c,{open:this.state.open,onClose:this.onClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},p.a.createElement(h.e,{id:"alert-dialog-title"},"To complete your brackets:",p.a.createElement("ol",null,p.a.createElement("li",null,"Pick the winner of ",p.a.createElement("b",null,"each")," match."),p.a.createElement("li",null,'Click the "Lock Bracket" button at the top of the page.'),p.a.createElement("li",null,"Do the same for ",p.a.createElement("b",null,"both")," Male and Female brackets.")),"Come back after the battle to see how your brackets did!"),p.a.createElement(h.d,null,p.a.createElement(h.b,{onClick:this.onClose,color:"primary"},"OK"))))}}]),t}(p.a.Component),D=function(e){function t(e){var a;Object(n.a)(this,t),a=Object(l.a)(this,Object(i.a)(t).call(this,e));var r=e.disabled;return a.state={disabled:r},a.handleChange=a.handleChange.bind(Object(s.a)(Object(s.a)(a))),a.disableBracket=a.disableBracket.bind(Object(s.a)(Object(s.a)(a))),a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e,t){this.props.user_bracket[t]=e,this.setState({user_bracket:this.state.user_bracket})}},{key:"disableBracket",value:function(){this.setState({disabled:!0})}},{key:"baseLog",value:function(e,t){return Math.log(t)/Math.log(e)}},{key:"render",value:function(){var e=p.a.createElement(R,{gender:this.props.gender,user_bracket:this.props.user_bracket,disable_bracket:this.disableBracket});if(this.props.display_only&&(e="",!this.props.user_bracket))return p.a.createElement("div",null,"No bracket data");for(var t=Array(this.baseLog(2,this.props.starting_names.length)).fill(void 0),a=this.props.starting_names.concat(this.props.user_bracket),n=0,r=0;r<t.length;r++){for(var l=Math.pow(2,t.length-1-r),i=Array(l).fill(void 0),o=0;o<l;o++){var s=o+n,c=2*s,d=[a[c],a[c+1]],u=[null,null];v.male[0]&&v.female[0]&&(u=r>0?[this.props.correct_bracket[c-this.props.starting_names.length],this.props.correct_bracket[c-this.props.starting_names.length+1]]:[null,null]);var h=this.props.user_bracket[s],m=this.state.disabled,b=void 0;if(d.includes("BYE")){var f=1;"BYE"==d[1]&&(f=0);var y=d[f];this.props.user_bracket[s]=y,b=y,m=!0}else d.includes(h)?b=h:(this.props.user_bracket[s]=null,b=void 0);this.props.user_bracket[s]!=a[this.props.starting_names.length+s]&&(a=this.props.starting_names.concat(this.props.user_bracket));var g=this.props.correct_bracket,x=this.props.user_bracket,E=null;if(r==t.length-1){if(g[this.props.starting_names.length-2]&&v.male[0]&&v.female[0]){var k=null,C="none";g[this.props.starting_names.length-2]==x[this.props.starting_names.length-2]?k=p.a.createElement("div",{style:{borderRadius:"5px",backgroundColor:"#c1fed6",width:"200px",position:"absolute",height:"50px",top:"35px",left:"330px"}}):(C="line-through",k=p.a.createElement("div",null,p.a.createElement("div",{style:{borderRadius:"5px",backgroundColor:"#fec1c1",width:"200px",position:"absolute",height:"50px",top:"35px",left:"330px"}}),p.a.createElement("div",{style:{position:"absolute",top:"-10px",left:"330px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"200px",height:"50px"}},this.props.correct_bracket[this.props.starting_names.length-2])))}E=p.a.createElement("div",null,k,p.a.createElement("div",{style:{border:"solid 5px grey",borderRadius:"10px",width:"200px",position:"absolute",height:"50px",top:"30px",left:"325px",textDecoration:C,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}},p.a.createElement("div",{style:{top:"50px"}},this.props.user_bracket[this.props.user_bracket.length-1])))}i[o]=p.a.createElement("div",{style:{width:"300px",height:"200px"},key:o+n},p.a.createElement("div",{style:{border:"solid 5px grey",borderRadius:"10px",width:"200px",position:"relative"}},p.a.createElement(L,{names:d,id:o+n,update:this.handleChange,disabled:m,value:b,correct_names:u}),o%2==0&&r!=t.length-1&&p.a.createElement("div",{style:{position:"absolute",width:"280px",top:"57px",borderTop:"solid 2px grey",height:200*(r+1)+"px",borderRight:"solid 2px grey",pointerEvents:"none"}}),o%2==1&&p.a.createElement("div",{style:{position:"absolute",width:"280px",top:-(43+200*(r+1)-100)+"px",borderBottom:"solid 2px grey",height:200*(r+1)+"px",borderRight:"solid 2px grey",pointerEvents:"none"}}),r>0&&p.a.createElement("div",{style:{position:"absolute",width:r==t.length-1?"350px":"220px",left:"-20px",top:"57px",borderBottom:"solid 2px grey",pointerEvents:"none"}}),E))}n+=Math.pow(2,t.length-1-r),t[r]=p.a.createElement("div",{key:r,className:"matchColumn",style:{display:"flex",flexDirection:"column",justifyContent:"space-around"}},i)}return p.a.createElement("div",{className:"tournamentContainer"},e,p.a.createElement("div",{style:{overflowX:"scroll"}},p.a.createElement("br",null),p.a.createElement("br",null),p.a.createElement("br",null),p.a.createElement("div",{className:"tournament",style:{display:"flex",flexDirection:"row",justifyContent:"flex-start"}},t)))}}]),t}(p.a.Component),L=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).handleChange=function(e){a.props.update(e.target.value,a.props.id)},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){for(var e=this.props,t=e.names,a=(e.id,e.update,e.disabled),n=e.value,r=Array(2).fill(a),l=0;l<r.length;l++)a||null==t[l]?r[l]=!0:r[l]=!1;var i=Array(2).fill("none"),o=Array(2).fill(null);if(this.props.correct_names[0])for(l=0;l<2;l++)this.props.correct_names[l]==t[l]?o[l]=p.a.createElement("div",{key:l,style:{position:"absolute",backgroundColor:"#c1fed6",height:"58px",width:"200px",top:0==l?"0px":"58px",borderRadius:0==l?"5px 5px 0px 0px":"0px 0px 5px 5px"}}):(i[l]="line-through",o[l]=p.a.createElement("div",{key:l},p.a.createElement("div",{style:{position:"absolute",top:0==l?"0px":"58px",width:"200px",height:"58px",backgroundColor:"#fec1c1",borderRadius:0==l?"5px 5px 0px 0px":"0px 0px 5px 5px"}}),p.a.createElement("div",{style:{position:"absolute",top:0==l?"-35px":"135px",left:"50px"}},this.props.correct_names[l])));return p.a.createElement("div",{style:{position:"relative"}},o,p.a.createElement(h.f,{component:"fieldset",style:{position:"relative"}},p.a.createElement(h.i,{value:n||"deselected",onChange:this.handleChange},p.a.createElement(h.g,{value:t[0]||"",disabled:r[0],control:p.a.createElement(h.h,null),label:t[0],style:{margin:"5px",textDecoration:i[0]}}),p.a.createElement(h.g,{value:t[1]||"",disabled:r[1],control:p.a.createElement(h.h,null),label:t[1],style:{margin:"5px",textDecoration:i[1]}}))))}}]),t}(p.a.Component),M=new XMLHttpRequest;M.withCredentials=!0,M.open("POST","http://battleforcharity.com/get-data",!0),M.setRequestHeader("Content-type","application/json"),M.onreadystatechange=function(){if(M.readyState==XMLHttpRequest.DONE){var e=JSON.parse(M.responseText);y=e.user_brackets,g=e.event_has_started,x=e.leaderboard,v=e.correct_brackets,E=e.user_has_posted,k=e.name,C=e.points,j=e.rank;var t=0;for(var a in y)y[a]||(y[a]=Array(0==t?31:15).fill(null)),t+=1;for(var a in t=0,v)v[a]||(v[a]=Array(0==t?31:15).fill(null)),t+=1;u.a.render(p.a.createElement(O,null),document.getElementById("root"))}},M.send()},213:function(e,t,a){}},[[185,1,2]]]);
//# sourceMappingURL=main.d0b2135a.chunk.js.map