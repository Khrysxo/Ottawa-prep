/* Ottawa Prep for Call — engine. Content lives in SUITES (one object per chapter suite). */
(function(){
"use strict";
var KEY="oncall_rad_master_suite_v1";
var EXAM=new Date(2026,11,23,8,0,0);
var LEVELS=[[0,"Intern"],[150,"PGY-1"],[400,"PGY-2"],[800,"PGY-3"],[1300,"PGY-4"],[1900,"PGY-5"],[2600,"Fellow"],[3500,"Staff Radiologist"],[4600,"Chief of Call"]];
var ACH=[
 ["first","🩺","First steps","Learn your first chapter"],["half","📚","Halfway there","Learn half the chapters"],["all","🎓","Chapter complete","Learn every chapter in a suite"],
 ["q10","✅","Warm-up","Answer 10 questions"],["q100","💯","Century","Answer 100 questions"],["q200","🏆","Whole bank","Answer 200 different questions"],
 ["s5","🔥","On a roll","5 correct in a row"],["s15","⚡","Unstoppable","15 correct in a row"],["perfect","🎯","Perfect set","Score 100% on a set of 10+"],
 ["drill20","👁️","Eagle eye","20 correct image drills"],["cards50","🃏","Card shark","Review 50 flashcards"],["streak3","📅","Habit","3-day study streak"],
 ["streak7","🗓️","Committed","7-day study streak"],["call","📞","Phone ready","Open the When to Call the ER chapter"],["board","🧠","Board brain","25 board-level questions correct"]];
var ICONS={compass:"M12 2a10 10 0 100 20 10 10 0 000-20zm3.5 6.5l-2 5-5 2 2-5 5-2z",layers:"M12 3l9 5-9 5-9-5 9-5zm-9 9l9 5 9-5M3 16l9 5 9-5",target:"M12 3a9 9 0 100 18 9 9 0 000-18zm0 4a5 5 0 110 10 5 5 0 010-10zm0 3a2 2 0 100 4 2 2 0 000-4z",
 bone:"M7 4a3 3 0 00-2 5l9 9a3 3 0 105 2 3 3 0 00-2-5L8 6a3 3 0 00-1-2z",split:"M6 3v6a6 6 0 006 6h6M18 15l-3-3m3 3l-3 3M6 21v-6",tooth:"M7 3c-3 0-4 3-3 6l2 11c1 1 2 1 2-1l1-5h6l1 5c0 2 1 2 2 1l2-11c1-3 0-6-3-6-2 0-3 1-5 1S9 3 7 3z",
 alert:"M12 3l10 18H2L12 3zm0 6v5m0 3v1",wind:"M3 8h11a3 3 0 10-3-3M3 12h15a3 3 0 11-3 3M3 16h8",drop:"M12 3s7 7 7 12a7 7 0 01-14 0c0-5 7-12 7-12z",cloud:"M7 18h10a4 4 0 000-8 6 6 0 00-11-1 4.5 4.5 0 001 9z",
 pin:"M12 2v8m-4 0h8l-2 6h-4l-2-6zm4 6v6",vein:"M8 2c0 6 8 6 8 12s-8 4-8 8M16 2c0 4-3 5-3 7",gland:"M12 3c5 0 8 4 8 8s-4 9-8 9-8-5-8-9 3-8 8-8zm0 5v8",phone:"M5 3h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2A17 17 0 013 5a2 2 0 012-2z",
 home:"M3 11l9-8 9 8v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9z",cal:"M4 5h16v15H4zM4 9h16M8 3v4M16 3v4",quiz:"M9 9a3 3 0 116 0c0 2-3 2-3 5m0 3v1M12 2a10 10 0 100 20 10 10 0 000-20z",eye:"M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zm10-3a3 3 0 100 6 3 3 0 000-6z",
 cards:"M4 6h12v14H4zM8 2h12v14",cmp:"M4 4h7v16H4zM13 4h7v16h-7z",flag:"M5 21V4h11l-2 4 2 4H5",hash:"M4 9h16M4 15h16M10 3L8 21M16 3l-2 18",img:"M3 5h18v14H3zM3 16l5-5 4 4 3-3 6 6M15 9a1.5 1.5 0 100-.1",book:"M4 4h7a3 3 0 013 3v13a2 2 0 00-2-2H4zM20 4h-7a3 3 0 00-3 3v13a2 2 0 012-2h8z",
 lungs:"M12 4v8M8 7c-3 0-4 6-4 10 0 2 2 3 4 2l2-2V9M16 7c3 0 4 6 4 10 0 2-2 3-4 2l-2-2V9",bug:"M12 6a4 4 0 014 4v5a4 4 0 01-8 0v-5a4 4 0 014-4zM4 12h4M16 12h4M5 7l3 2M19 7l-3 2M5 18l3-2M19 18l-3-2",clock:"M12 3a9 9 0 100 18 9 9 0 000-18zm0 4v5l3 2",body:"M12 2a2 2 0 110 4 2 2 0 010-4zM6 8h12M12 8v7m-3 7l3-7 3 7",ct:"M12 3a9 9 0 100 18 9 9 0 000-18zm0 5a4 4 0 110 8 4 4 0 010-8z",shield:"M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3z",bolt:"M13 2L4 14h7l-1 8 9-12h-7l1-8z",list:"M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01",ear:"M7 9a5 5 0 1110 0c0 3-3 4-3 7a3 3 0 01-6 0M10 9a2 2 0 114 0",jaw:"M4 6c0 7 3 13 8 13s8-6 8-13M8 12h8",skull:"M12 3a8 8 0 00-8 8v3l2 2v4h3v-2h2v2h2v-2h2v2h3v-4l2-2v-3a8 8 0 00-8-8zM9 11a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z",tree:"M12 21v-8M12 13l-5-5M12 13l5-5M7 8l-3-4M7 8l2-5M17 8l3-4M17 8l-2-5",branch:"M6 3v12a3 3 0 003 3h9M6 9h6a3 3 0 013 3v1M18 18l-2-2m2 2l-2 2",pipe:"M8 3v6a4 4 0 004 4v8M16 3v6",wave:"M2 12h4l3-8 4 16 3-8h6",ghost:"M6 20V10a6 6 0 0112 0v10l-2-2-2 2-2-2-2 2-2-2-2 2zM10 10h.01M14 10h.01"};
function ic(n){var d=ICONS[n]||ICONS.book;return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="'+d+'"/></svg>';}
function $(s){return document.querySelector(s);}
function esc(s){return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}return a;}
function today(){var d=new Date();return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();}
function scrollTop(){try{window.scrollTo(0,0);}catch(e){}}

/* ---------- storage ---------- */
var MEM={};var LQS={};
function load(){var s=null;try{s=JSON.parse(localStorage.getItem(KEY)||"null");}catch(e){s=MEM[KEY]||null;}
 s=s||{};s.xp=s.xp||0;s.read=s.read||{};s.ans=s.ans||{};s.cards=s.cards||{};s.cardN=s.cardN||0;s.drill=s.drill||{ok:0,n:0};s.plan=s.plan||{};
 s.ach=s.ach||{};s.lq=s.lq||{};s.days=s.days||{};s.run=s.run||0;s.best=s.best||0;s.chk=s.chk||{};s.suite=s.suite||null;s.mode=s.mode||"focus";return s;}
function save(){try{localStorage.setItem(KEY,JSON.stringify(ST));}catch(e){MEM[KEY]=ST;}}
var ST=load();
var SUITE=null;

/* ---------- gamification ---------- */
function level(xp){var L=LEVELS[0],N=null;for(var i=0;i<LEVELS.length;i++){if(xp>=LEVELS[i][0]){L=LEVELS[i];N=LEVELS[i+1]||null;}}return {name:L[1],min:L[0],next:N};}
function addXP(n,msg){ST.xp+=n;var d=today();ST.days[d]=(ST.days[d]||0)+n;save();hdr();if(msg)toast("+"+n+" XP · "+msg);checkAch();}
function streak(){var c=0,d=new Date();for(var i=0;i<400;i++){var k=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();if(ST.days[k]){c++;}else if(i>0){break;}d.setDate(d.getDate()-1);}return c;}
function unlock(id){if(ST.ach[id])return;ST.ach[id]=Date.now();save();var a=ACH.filter(function(x){return x[0]===id;})[0];if(a)setTimeout(function(){toast(a[1]+" Achievement: "+a[2]);},900);}
function checkAch(){
 var tot=0,rd=0;SUITES.forEach(function(s){s.topics.forEach(function(t){tot++;if(ST.read[s.id+":"+t.id])rd++;});});
 if(rd>=1)unlock("first");if(rd>=tot/2)unlock("half");
 SUITES.forEach(function(s){if(s.topics.every(function(t){return ST.read[s.id+":"+t.id];}))unlock("all");});
 var n=0,u=0,bd=0;for(var k in ST.ans){u++;n+=ST.ans[k].n;if(ST.ans[k].lv==="BD")bd+=ST.ans[k].c;}
 if(n>=10)unlock("q10");if(n>=100)unlock("q100");if(u>=200)unlock("q200");if(bd>=25)unlock("board");
 if(ST.best>=5)unlock("s5");if(ST.best>=15)unlock("s15");if(ST.drill.ok>=20)unlock("drill20");if(ST.cardN>=50)unlock("cards50");
 var s=streak();if(s>=3)unlock("streak3");if(s>=7)unlock("streak7");}
var tT=null;function toast(m){var t=$("#toast");t.textContent=m;t.classList.add("on");clearTimeout(tT);tT=setTimeout(function(){t.classList.remove("on");},2200);}
function daysLeft(){return Math.max(0,Math.ceil((EXAM-new Date())/864e5));}
function hdr(){var L=level(ST.xp);$("#cd").innerHTML="<b>"+daysLeft()+"</b> days to exam";$("#xp").innerHTML="<b>"+ST.xp+"</b> XP · "+L.name;$("#stk").innerHTML="🔥 <b>"+streak()+"</b>";}

/* ---------- navigation ---------- */
var VIEW={p:"home"};
function go(p,arg){if(p==="topic"){var so=suiteOfTopic(arg);if(so&&so!==SUITE.id)setSuite(so);}VIEW={p:p,a:arg};closeSide();render();scrollTop();}
function closeSide(){$("#side").classList.remove("on");$("#scrim").classList.remove("on");}
function navBtn(p,arg,label,icon,extra){var on=(VIEW.p===p&&(arg===undefined||VIEW.a===arg))?" on":"";
 return '<button class="nav'+on+'" data-go="'+p+'"'+(arg!==undefined?' data-arg="'+esc(arg)+'"':"")+'>'+(icon||"")+'<span>'+label+'</span>'+(extra||"")+'</button>';}
function side(){var s=SUITE,h='<div class="suitebox"><div class="k">Section suite</div><div class="t">'+esc(s.title)+'</div><div class="small muted">'+esc(s.source)+'</div>';
 if(SUITES.length>1){h+='<select id="suitesel">'+SUITES.map(function(x){return '<option value="'+x.id+'"'+(x.id===s.id?" selected":"")+'>'+esc(x.title)+'</option>';}).join("")+'</select>';}
 h+='</div><div class="sgrp">Overview</div>'+navBtn("home",undefined,"Dashboard",ic("home"))+navBtn("plan",undefined,"Weekly study plan",ic("cal"))+'<div class="sgrp">Chapters</div>';
 s.topics.forEach(function(t){h+=navBtn("topic",t.id,esc(t.title.replace(/ — .*/,"")),'<span class="num">'+t.n+'</span>',ST.read[s.id+":"+t.id]?'<span class="tick">✓</span>':"");});
 h+='<div class="sgrp">Practice</div>'+navBtn("quiz",undefined,"Question bank ("+s.questions.length+")",ic("quiz"))+navBtn("drill",undefined,"Image drill — spot it",ic("eye"))+navBtn("cards",undefined,"Flashcards",ic("cards"));
 h+='<div class="sgrp">Reference</div>'+navBtn("compare",undefined,"Compare & DDx",ic("cmp"))+navBtn("flags",undefined,"Red flags & don't forget",ic("flag"))+navBtn("quick",undefined,"Quick numbers",ic("hash"))+navBtn("atlas",undefined,"Image atlas",ic("img"))+navBtn("guide",undefined,"Exam guide & settings",ic("book"));
 $("#side").innerHTML=h;}

/* ---------- block renderers ---------- */
function img(k){return (window.IMG&&IMG[k])||"";}
function figHTML(k,cap,extra){return '<figure class="fig"><img loading="lazy" src="'+img(k)+'" alt="'+esc(cap)+'" data-lb="'+k+'" data-cap="'+esc(cap)+'"><figcaption><span class="cap">'+cap+'</span>'+(extra?'<span class="src">'+extra+'</span>':"")+'</figcaption></figure>';}
function bl(c,t,inner,cls){return '<div class="card '+(cls||"")+'"><div class="blk-t">'+t+'</div>'+inner+'</div>';}
function ul(x){return '<ul>'+x.map(function(i){return '<li>'+i+'</li>';}).join("")+'</ul>';}
function chkList(id,x,num){return x.map(function(i,ix){var k=id+":"+ix;var lab=num?String(ix+1):"";return '<div class="chk'+(ST.chk[k]?" on":"")+'" data-chk="'+k+'" data-n="'+lab+'"><span class="bx">'+(ST.chk[k]?"✓":lab)+'</span><span>'+i+'</span></div>';}).join("");}
function block(b,t,ix){var id=SUITE.id+":"+(t?t.id:"x")+":"+ix;
 switch(b.t){
 case "hook":return '<div class="hook">'+b.x+'</div>';
 case "learn":return '<div class="card"><h3>'+b.h+'</h3>'+ul(b.x)+'</div>';
 case "fig":return '<div class="card"><h3>'+ic("img").replace("<svg",'<svg style="width:18px;vertical-align:-3px"')+' '+b.h+'</h3><div class="figs">'+b.imgs.map(function(f){return figHTML(f[0],f[1],"Lecture slide "+t.slides);}).join("")+'</div></div>';
 case "case":var v=b.v.map(function(r){return '<div><span class="lbl">'+r[0]+'</span>'+r[1]+'</div>';}).join("")||'<div class="muted">Image-based case — study the arrows.</div>';
  var f=b.f.map(function(r){return '<div><span class="lbl">'+r[0]+'</span><span class="fv">'+r[1]+'</span></div>';}).join("");
  return '<div class="card case"><h3><span class="pill red">CT CASE</span> '+b.h+'</h3><div class="casehd"><div class="cv"><div class="hh">Clinical vignette</div><div class="bd">'+v+'</div></div><div class="casef"><div class="hh">CT findings</div><div class="bd">'+f+'</div></div></div><div class="figs">'+b.imgs.map(function(x){return figHTML(x[0],x[1],b.credit||"");}).join("")+'</div>'+(b.credit?'<div class="credit">'+b.credit+'</div>':"")+'</div>';
 case "table":return '<div class="card"><h3>'+b.h+'</h3><div class="tw"><table class="t"><tr>'+b.head.map(function(x){return '<th>'+x+'</th>';}).join("")+'</tr>'+b.rows.map(function(r){return '<tr>'+r.map(function(x){return '<td>'+x+'</td>';}).join("")+'</tr>';}).join("")+'</table></div></div>';
 case "key":return bl(0,"✦ Key points",ul(b.x),"key");
 case "forget":return bl(0,"⚠ Don't forget",ul(b.x),"forget");
 case "red":return bl(0,"🚩 Red flags"+(b.h?" — "+b.h:""),ul(b.x),"red");
 case "exam":return bl(0,"🎯 Exam tips — Prep for Call",ul(b.x),"exam");
 case "beyond":return bl(0,"＋ Beyond the slides (general radiology knowledge — not in the lecture)",ul(b.x),"beyond");
 case "report":return bl(0,"📝 "+(b.h||"Report must state"),chkList(id,b.x,false),"report");
 case "check":return '<div class="card"><h3>'+b.h+'</h3>'+chkList(id,b.x,true)+'</div>';
 case "ddx":return bl(0,"⇄ Differential diagnosis — "+b.h,b.x.map(function(r){return '<div class="ddxrow"><b>'+r[0]+'</b><span>'+r[1]+'</span></div>';}).join("")+'<div class="decipher"><div class="blk-t">How to decipher the correct answer</div>'+ul(b.decipher)+'</div>',"ddx");
 case "flow":return '<div class="card"><h3>'+b.h+'</h3><div class="flow">'+b.x.map(function(s){return '<div class="fstep"><b>'+s[0]+'</b><span class="muted">'+s[1]+'</span></div>';}).join("")+'</div></div>';
 case "tri":return '<div class="tri">'+b.x.map(function(s){return '<div><div class="ic">'+ic(s[0]).replace("<svg",'<svg style="width:20px"')+'</div><b>'+s[1]+'</b><span class="small">'+s[2]+'</span></div>';}).join("")+'</div>';
 case "tri3":return '<div class="card"><h3>'+b.h+'</h3><div class="grid g3">'+b.x.map(function(c){return '<div><div class="blk-t" style="color:var(--acc2)">'+c[0]+'</div>'+ul(c[1])+'</div>';}).join("")+'</div></div>';
 case "donut":return '<div class="card"><h3>'+b.h+'</h3><div class="donut"><div class="d"><i></i></div><div>'+b.x.map(function(r,i){return '<div><span class="dot" style="background:'+(i?"var(--blue)":"var(--acc)")+'"></span><b>'+r[1]+'</b> '+r[0]+'</div>';}).join("")+'</div></div></div>';
 case "duct":return '<div class="card"><h3>Ductal dilatation — proximal to stone (schematic)</h3><div class="duct"><span class="a"></span><span class="s"></span><span class="b"></span></div><div class="small muted"><span class="dot" style="background:var(--blue)"></span>Dilated proximal duct &nbsp; <span class="dot" style="background:var(--acc)"></span>Obstructing calculus &nbsp; [1]</div></div>';
 case "calls":return '<div class="calls">'+SUITE.calls.map(function(c,i){return '<div class="callc"><h4>'+(i+1)+' · '+c[0]+'</h4>'+ul(c[2])+'</div>';}).join("")+'</div>'+(SUITE.callsNote?'<p class="small muted" style="margin:8px 2px 0">'+esc(SUITE.callsNote)+'</p>':"")+'<div style="height:14px"></div>';
 case "lq":LQS[id]=b;var done=ST.lq[id];return '<div class="card lq"><h3><span class="pill red">LECTURE QUIZ</span> '+b.h+'</h3><div class="figs">'+b.imgs.map(function(f){return figHTML(f[0],f[1],"Lecture slide "+t.slides);}).join("")+'</div><p class="small muted" style="margin:12px 0 8px">Commit to an answer before you tap.</p><div>'+b.o.map(function(o,i){var c="";if(done!==undefined){if(i===b.a)c=" ok";else if(i===done)c=" no";}return '<button class="opt'+c+'" data-lq="'+esc(id)+'" data-o="'+i+'"><span class="L">'+"ABCDE"[i]+'</span><span>'+esc(o)+'</span></button>';}).join("")+'</div><div class="expl'+(done===undefined?" hidden":"")+'" data-lqa="'+esc(id)+'"><b style="color:var(--green)">Answer: '+esc(b.o[b.a])+'</b><div style="margin-top:6px">'+b.why+'</div>'+(b.note?'<div class="small muted" style="margin-top:8px">'+esc(b.note)+'</div>':"")+'</div></div>';
 case "refs":return '<div class="card"><h3>References (lecture)</h3><ol>'+SUITE.refs.map(function(r){return '<li style="margin:6px 0">'+esc(r[0])+' <a href="'+r[1]+'" target="_blank" rel="noopener">link</a></li>';}).join("")+'</ol></div>';
 }return "";}

/* ---------- pages ---------- */
function pHome(){var s=SUITE,L=level(ST.xp),tot=s.topics.length,rd=s.topics.filter(function(t){return ST.read[s.id+":"+t.id];}).length;
 var qs=s.questions,att=0,cor=0;qs.forEach(function(q){var a=ST.ans[q.id];if(a){att++;if(a.last)cor++;}});
 var ready=Math.round((rd/tot)*40+(att/qs.length)*30+(att?cor/att:0)*30);
 var wk=curWeek(),plan=s.plan.filter(function(p){return p.w===wk;})[0]||s.plan[0];
 var nextT=s.topics.filter(function(t){return !ST.read[s.id+":"+t.id];})[0];
 var dx=ST.days[today()]||0,lvlp=L.next?Math.round((ST.xp-L.min)/(L.next[0]-L.min)*100):100;
 var h='<div class="hero"><div class="ring" style="--p:'+ready+'"><div><b>'+ready+'%</b><span>exam ready</span></div></div><div><div class="small muted">OTTAWA PREP FOR CALL · '+esc(s.title.toUpperCase())+'</div><div class="h1">'+daysLeft()+' days to the Prep for Call exam</div><div class="muted">23 December 2026 · You are in <b>Week '+wk+'</b>: '+esc(plan.title)+'</div>';
 h+='<div class="row" style="margin-top:12px">'+(nextT?'<button class="btn p" data-go="topic" data-arg="'+nextT.id+'">▶ Continue: '+esc(nextT.title.replace(/ — .*/,""))+'</button>':'<button class="btn p" data-q="mock">▶ Take a 40-question mock</button>')+'<button class="btn c" data-wq="'+wk+'|ALL">Week '+wk+' quiz (40)</button><button class="btn" data-go="drill">👁 Image drill</button>'+(SUITES.length>1?'<button class="btn" data-q="mockall">All-suites mock (60)</button>':"")+'</div></div></div>';
 if(SUITES.length>1){h+='<h3 style="margin:4px 0 10px">Section suites</h3><div class="grid g3" style="margin-bottom:16px">'+SUITES.map(function(x){var r=x.topics.filter(function(t){return ST.read[x.id+":"+t.id];}).length,a=x.questions.filter(function(q){return ST.ans[q.id];}).length,on=x.id===s.id;
  return '<div class="card tcard" data-suite-open="'+x.id+'" style="margin:0;'+(on?"border-color:var(--acc)":"")+'"><div class="n">'+(on?'<span class="pill red">OPEN</span> ':'')+x.topics.length+' chapters · '+x.questions.length+' questions</div><div class="tt">'+esc(x.title)+'</div><div class="small muted">'+esc(x.source)+'</div><div class="bar" style="margin-top:8px"><i style="width:'+Math.round((r/x.topics.length*50)+(a/x.questions.length*50))+'%"></i></div><div class="small muted" style="margin-top:4px">'+r+'/'+x.topics.length+' learned · '+a+'/'+x.questions.length+' answered</div></div>';}).join("")+'</div>';}
 h+='<div class="grid g4" style="margin-bottom:16px"><div class="stat"><div class="v">'+rd+'/'+tot+'</div><div class="l">Chapters learned</div></div><div class="stat"><div class="v">'+att+'/'+qs.length+'</div><div class="l">Questions attempted</div></div><div class="stat"><div class="v">'+(att?Math.round(cor/att*100):0)+'%</div><div class="l">Latest-attempt accuracy</div></div><div class="stat"><div class="v">'+ST.xp+'</div><div class="l">'+L.name+(L.next?' · '+(L.next[0]-ST.xp)+' XP to '+L.next[1]:"")+'</div><div class="bar" style="margin-top:6px"><i style="width:'+lvlp+'%"></i></div></div></div>';
 h+='<div class="card"><div class="row" style="justify-content:space-between"><h3 style="margin:0">Today\'s goal</h3><span class="muted small">'+dx+' / 60 XP</span></div><div class="bar" style="margin-top:8px"><i style="width:'+Math.min(100,dx/60*100)+'%"></i></div><div class="small muted" style="margin-top:6px">Small daily wins: one chapter (+20) and one 10-question set (~+100) clears it. Streak: 🔥 '+streak()+' day(s).</div></div>';
 h+='<h3 style="margin:20px 0 10px">Chapters</h3><div class="grid g3">'+s.topics.map(function(t){var r=ST.read[s.id+":"+t.id];return '<div class="card tcard" data-go="topic" data-arg="'+t.id+'" style="margin:0"><div class="n">Chapter '+t.n+' · Week '+t.w+' · Slides '+t.slides+(r?' · <span style="color:var(--green)">✓ learned</span>':"")+'</div><div class="tt">'+esc(t.title)+'</div><div class="small muted">'+esc(t.sub)+'</div></div>';}).join("")+'</div>';
 h+='<h3 style="margin:22px 0 10px">Achievements</h3><div class="grid g3">'+ACH.map(function(a){return '<div class="ach'+(ST.ach[a[0]]?" on":"")+'"><div class="ai">'+a[1]+'</div><div><b>'+a[2]+'</b><div class="small muted">'+a[3]+'</div></div></div>';}).join("")+'</div>';
 return h;}
function curWeek(){var d=new Date(),w=1;SUITE.plan.forEach(function(p){var f=new Date(p.from+"T00:00:00");if(d>=f)w=p.w;});return w;}
function pPlan(){var s=SUITE,cw=curWeek();var h='<div class="h1">Weekly study plan</div><p class="lead">Five weeks to 23 December. Each week = a few chapters + a 40-question set (20 first-year + 20 board-level). All questions stay open at any time.</p>';
 s.plan.forEach(function(p){var done=ST.plan[s.id+":"+p.w];h+='<div class="card" style="'+(p.w===cw?"border-color:var(--acc)":"")+'"><div class="row" style="justify-content:space-between"><div><span class="pill wk">WEEK '+p.w+'</span> '+(p.w===cw?'<span class="pill red">THIS WEEK</span> ':"")+'<b style="font-size:17px">'+esc(p.title)+'</b><div class="small muted">'+p.from+' → '+p.to+'</div></div><button class="btn s'+(done?" g":"")+'" data-plan="'+p.w+'">'+(done?"✓ Completed":"Mark week complete")+'</button></div><p style="margin:10px 0">'+esc(p.goal)+'</p>';
  if(p.topics.length){h+='<div class="row" style="margin-bottom:10px">'+p.topics.map(function(id){var t=topic(id);return '<button class="btn s" data-go="topic" data-arg="'+id+'">'+(ST.read[s.id+":"+id]?"✓ ":"")+t.n+'. '+esc(t.title.replace(/ — .*/,""))+'</button>';}).join("")+'</div>';}
  else{h+='<div class="row" style="margin-bottom:10px"><button class="btn s" data-go="drill">Image drill</button><button class="btn s" data-q="mock">40-Q mixed mock</button><button class="btn s" data-q="missed">Redo missed questions</button><button class="btn s" data-go="flags">Red flags review</button></div>';}
  h+='<div class="row"><button class="btn c s" data-wq="'+p.w+'|FY">Week '+p.w+' · First-year (20)</button><button class="btn c s" data-wq="'+p.w+'|BD">Week '+p.w+' · Board (20)</button><button class="btn p s" data-wq="'+p.w+'|ALL">Week '+p.w+' · All 40</button></div></div>';});
 return h;}
function topic(id){var r=SUITE.topics.filter(function(t){return t.id===id;})[0];if(r)return r;for(var i=0;i<SUITES.length;i++){r=SUITES[i].topics.filter(function(t){return t.id===id;})[0];if(r)return r;}return undefined;}
function suiteOfTopic(id){for(var i=0;i<SUITES.length;i++){if(SUITES[i].topics.some(function(t){return t.id===id;}))return SUITES[i].id;}return null;}
var FOC={i:0,seen:{}};
function pTopic(id){var t=topic(id);if(!t)return pHome();var s=SUITE;
 var nq=s.questions.filter(function(q){return q.t===id;}).length;
 var h='<div class="thead"><div class="tnum">'+t.n+'</div><div><div class="small muted">Chapter '+t.n+' of '+s.topics.length+' · Week '+t.w+' · Lecture slides '+t.slides+'</div><div class="h1">'+esc(t.title)+'</div><div class="muted">'+esc(t.sub)+'</div></div></div>';
 h+='<div class="toolbar"><span class="seg"><button data-mode="focus" class="'+(ST.mode==="focus"?"on":"")+'">One card at a time</button><button data-mode="all" class="'+(ST.mode==="all"?"on":"")+'">Show all</button></span><button class="btn s" id="selft">🙈 Self-test: hide captions</button><button class="btn s c" data-tq="'+id+'">Quiz this chapter ('+nq+')</button>'+(ST.read[s.id+":"+id]?'<span class="pill fy">✓ Learned</span>':'<button class="btn s g" data-learn="'+id+'">Mark learned +20 XP</button>')+'</div>';
 var blocks=t.blocks.map(function(b,i){return '<div class="blk" data-i="'+i+'">'+block(b,t,i)+'</div>';});
 blocks.push('<div class="blk" data-i="'+t.blocks.length+'"><div class="card"><h3>🌐 More images & reading online</h3><p class="small muted" style="margin-top:0">Lecture figures are embedded above. For more cases of this condition open:</p><div class="links">'+t.links.map(function(l){return '<a href="'+l[1]+'" target="_blank" rel="noopener">↗ '+esc(l[0])+'</a>';}).join("")+'</div></div><div class="row"><button class="btn c" data-tq="'+id+'">Quiz this chapter ('+nq+')</button>'+(ST.read[s.id+":"+id]?"":'<button class="btn g" data-learn="'+id+'">Mark learned +20 XP</button>')+nextBtn(t)+'</div></div>');
 h+='<div id="focusnav" class="focusnav'+(ST.mode==="focus"?"":" hidden")+'"><button class="btn s" id="fprev">← Back</button><div class="dots" id="dots"></div><button class="btn s p" id="fnext">Next →</button></div>';
 h+='<div id="blocks">'+blocks.join("")+'</div>';
 if(t.blocks.some(function(b){return b.t==="calls";}))unlock("call");
 return h;}
function nextBtn(t){var i=SUITE.topics.indexOf(t),n=SUITE.topics[i+1];return n?'<button class="btn" data-go="topic" data-arg="'+n.id+'">Next chapter: '+esc(n.title.replace(/ — .*/,""))+' →</button>':"";}
function focusApply(){var bs=document.querySelectorAll("#blocks .blk");if(!bs.length)return;var all=ST.mode!=="focus";
 if(FOC.i>=bs.length)FOC.i=bs.length-1;FOC.seen[FOC.i]=1;
 for(var i=0;i<bs.length;i++){bs[i].classList.toggle("hidden",!all&&i!==FOC.i);}
 var d=$("#dots");if(d){var h="";for(var j=0;j<bs.length;j++)h+='<i data-dot="'+j+'" class="'+(j===FOC.i?"on":(FOC.seen[j]?"seen":""))+'"></i>';d.innerHTML=h;}
 var fn=$("#focusnav");if(fn)fn.classList.toggle("hidden",all);
 var nx=$("#fnext");if(nx)nx.textContent=FOC.i===bs.length-1?"Done ✓":"Next →";}

/* ---------- quiz ---------- */
var QZ=null;
var QF={w:"ALL",lv:"ALL",t:"ALL",src:"ALL",n:"20",mode:"practice"};
function pool(f){return SUITE.questions.filter(function(q){
 if(f.w!=="ALL"&&String(q.w)!==String(f.w))return false;if(f.lv!=="ALL"&&q.lv!==f.lv)return false;if(f.t!=="ALL"&&q.t!==f.t)return false;
 var a=ST.ans[q.id];if(f.src==="MISSED"&&!(a&&!a.last))return false;if(f.src==="NEW"&&a)return false;if(f.src==="IMG"&&!q.img)return false;return true;});}
function sel(name,opts,cur){return '<div><label>'+name[1]+'</label><select data-f="'+name[0]+'">'+opts.map(function(o){return '<option value="'+o[0]+'"'+(String(cur)===String(o[0])?" selected":"")+'>'+o[1]+'</option>';}).join("")+'</select></div>';}
function pQuizSetup(){var s=SUITE;var nfy=s.questions.filter(function(q){return q.lv==="FY";}).length;var h='<div class="h1">Question bank — '+esc(s.title)+'</div><p class="lead">'+s.questions.length+' questions in '+s.plan.length+' weekly sets — '+nfy+' first-year (FY) and '+(s.questions.length-nfy)+' board-level (BD). Options are reshuffled every time. Open any set, any time. Switch suite in the sidebar for the other lectures.</p>';
 h+='<div class="wkq" style="margin-bottom:16px">'+s.plan.map(function(p){var qs=s.questions.filter(function(q){return q.w===p.w;}),a=qs.filter(function(q){return ST.ans[q.id];}).length,c=qs.filter(function(q){return ST.ans[q.id]&&ST.ans[q.id].last;}).length;
  return '<div class="card"><div class="small muted">WEEK '+p.w+'</div><b>'+esc(p.title)+'</b><div class="bar" style="margin:8px 0"><i style="width:'+(a/qs.length*100)+'%"></i></div><div class="small muted">'+a+'/'+qs.length+' done · '+c+' correct</div><div class="row" style="margin-top:8px"><button class="btn s" data-wq="'+p.w+'|FY">FY</button><button class="btn s" data-wq="'+p.w+'|BD">Board</button><button class="btn s p" data-wq="'+p.w+'|ALL">All</button></div></div>';}).join("")+'</div>';
 h+='<div class="card"><h3>Build your own set</h3><div class="form">'+sel(["w","Week"],[["ALL","All weeks"]].concat(s.plan.map(function(p){return [p.w,"Week "+p.w];})),QF.w)+sel(["lv","Level"],[["ALL","Both levels"],["FY","First-year (beginner)"],["BD","Board-level (advanced)"]],QF.lv)
  +sel(["t","Chapter"],[["ALL","All chapters"]].concat(s.topics.map(function(t){return [t.id,t.n+". "+t.title.replace(/ — .*/,"")];})),QF.t)+sel(["src","Source"],[["ALL","All questions"],["NEW","Unseen only"],["MISSED","Missed last time"],["IMG","Image-based only"]],QF.src)
  +sel(["n","Number"],[["10","10"],["20","20"],["40","40"],["999","All matching"]],QF.n)+sel(["mode","Mode"],[["practice","Practice — feedback each question"],["exam","Exam — timed, feedback at end"]],QF.mode)+'</div><div class="row" style="margin-top:14px"><button class="btn p" id="qgo">Start</button><span class="small muted" id="qcount"></span></div></div>';
 h+='<div class="row"><button class="btn" data-q="mock">40-question mixed mock (timed)</button><button class="btn" data-q="missed">Redo everything I missed</button><button class="btn" data-q="img">Image questions only</button>'+(SUITES.length>1?'<button class="btn p" data-q="mockall">All-suites mock (60, timed)</button>':"")+'</div>';
 return h;}
function startQuiz(list,mode,title){if(!list.length){toast("No questions match — try other filters");return;}
 QZ={list:list,i:0,mode:mode,title:title,res:[],start:Date.now(),order:list.map(function(q){return shuffle([0,1,2,3]);}),picked:null};VIEW={p:"run"};render();scrollTop();}
function pRun(){if(!QZ)return pQuizSetup();var q=QZ.list[QZ.i],o=QZ.order[QZ.i],N=QZ.list.length;
 var h='<div class="qwrap"><div class="row" style="justify-content:space-between"><b>'+esc(QZ.title)+'</b><span class="small muted">Question '+(QZ.i+1)+' of '+N+(QZ.mode==="exam"?' · <span id="tmr"></span>':"")+'</span></div><div class="pbar"><i style="width:'+(QZ.i/N*100)+'%"></i></div>';
 var t=topic(q.t);h+='<div class="card"><div class="qmeta"><span class="pill '+(q.lv==="FY"?"fy":"bd")+'">'+(q.lv==="FY"?"FIRST-YEAR":"BOARD-LEVEL")+'</span><span class="pill wk">WEEK '+q.w+'</span><span class="small muted">'+(t?esc(t.title.replace(/ — .*/,"")):"")+'</span></div>';
 if(q.img)h+='<div class="qimg"><img src="'+img(q.img)+'" data-lb="'+q.img+'" data-cap="Question image"></div>';
 h+='<div class="qstem">'+esc(q.q)+'</div><div id="opts">'+o.map(function(oi,k){return '<button class="opt" data-opt="'+oi+'"><span class="L">'+"ABCD"[k]+'</span><span>'+esc(q.o[oi])+'</span></button>';}).join("")+'</div><div id="expl"></div></div>';
 h+='<div class="row"><button class="btn" id="qquit">End set</button></div></div>';return h;}
function answer(oi){var q=QZ.list[QZ.i];if(QZ.picked!==null)return;QZ.picked=oi;var ok=oi===0;
 var a=ST.ans[q.id]||{n:0,c:0,lv:q.lv};a.n++;if(ok)a.c++;a.last=ok;ST.ans[q.id]=a;QZ.res.push({q:q,ok:ok,pick:oi});
 if(ok){ST.run++;if(ST.run>ST.best)ST.best=ST.run;}else ST.run=0;save();
 if(ok)addXP(q.lv==="BD"?15:10);
 var bs=document.querySelectorAll("#opts .opt");
 if(QZ.mode==="exam"){for(var i=0;i<bs.length;i++){if(+bs[i].getAttribute("data-opt")===oi)bs[i].classList.add("pick");}var cur=QZ,ci=QZ.i;setTimeout(function(){if(QZ===cur&&QZ.i===ci&&VIEW.p==="run")nextQ();},350);return;}
 for(var j=0;j<bs.length;j++){var v=+bs[j].getAttribute("data-opt");if(v===0)bs[j].classList.add("ok");else if(v===oi)bs[j].classList.add("no");}
 var t=topic(q.t);$("#expl").innerHTML='<div class="expl"><b style="color:'+(ok?"var(--green)":"var(--red)")+'">'+(ok?"✓ Correct":"✗ Not quite — correct answer: "+esc(q.o[0]))+'</b><div style="margin-top:6px">'+esc(q.e)+'</div>'+(q.tip?'<div class="tip"><b>How to decipher:</b> '+esc(q.tip)+'</div>':"")+'<div class="row" style="margin-top:12px"><button class="btn p" id="qnext">'+(QZ.i===QZ.list.length-1?"See results":"Next question →")+'</button>'+(t?'<button class="btn s" data-go="topic" data-arg="'+t.id+'">Review chapter</button>':"")+'</div></div>';}
function nextQ(){QZ.i++;QZ.picked=null;if(QZ.i>=QZ.list.length){VIEW={p:"res"};}render();scrollTop();}
var TMR=null;function timer(){clearInterval(TMR);if(!QZ||QZ.mode!=="exam"||VIEW.p!=="run")return;var lim=QZ.list.length*75;
 TMR=setInterval(function(){var el=$("#tmr");if(!el||VIEW.p!=="run"){clearInterval(TMR);return;}var r=lim-Math.round((Date.now()-QZ.start)/1000);if(r<=0){clearInterval(TMR);VIEW={p:"res"};render();return;}el.textContent="⏱ "+Math.floor(r/60)+":"+("0"+r%60).slice(-2);},500);}
function pRes(){var r=QZ.res,c=r.filter(function(x){return x.ok;}).length,N=QZ.list.length,pc=N?Math.round(c/N*100):0;
 if(!QZ.paid){QZ.paid=1;if(N>=10&&c===N)unlock("perfect");if(r.length)addXP(5,"set finished");}
 var by={};r.forEach(function(x){var k=x.q.t;by[k]=by[k]||[0,0];by[k][1]++;if(x.ok)by[k][0]++;});
 var h='<div class="qwrap"><div class="hero"><div class="ring" style="--p:'+pc+'"><div><b>'+pc+'%</b><span>'+c+' / '+N+'</span></div></div><div><div class="h1">'+esc(QZ.title)+' — results</div><div class="muted">'+(pc>=80?"Exam-ready on this set. Keep it warm with the image drill.":pc>=60?"Solid — review the misses below, then redo them.":"Re-read the chapters below, then use “Redo missed”.")+'</div><div class="row" style="margin-top:10px"><button class="btn p" data-q="missed">Redo missed</button><button class="btn" data-go="quiz">Question bank</button></div></div></div>';
 h+='<div class="card"><h3>By chapter</h3>'+Object.keys(by).map(function(k){var t=topic(k);return '<div class="row" style="justify-content:space-between;padding:6px 0;border-top:1px solid var(--line)"><a href="#" data-go="topic" data-arg="'+k+'">'+(t?esc(t.title):k)+'</a><b>'+by[k][0]+'/'+by[k][1]+'</b></div>';}).join("")+'</div>';
 var w=r.filter(function(x){return !x.ok;});var unans=QZ.list.slice(r.length);
 if(w.length||unans.length)h+='<div class="card"><h3>Review</h3>'+w.map(function(x){return '<div style="padding:10px 0;border-top:1px solid var(--line)"><b>'+esc(x.q.q)+'</b><div class="small" style="color:var(--red)">Your answer: '+esc(x.q.o[x.pick])+'</div><div class="small" style="color:var(--green)">Correct: '+esc(x.q.o[0])+'</div><div class="small muted">'+esc(x.q.e)+'</div></div>';}).join("")+(unans.length?'<div class="small muted" style="padding-top:8px">'+unans.length+' unanswered (time ran out or set ended).</div>':"")+'</div>';
 return h+'</div>';}

/* ---------- drill ---------- */
var DR=null;var DRF="ALL";
function drillPool(){var d=SUITE.drill;return Object.keys(d).filter(function(k){return DRF==="ALL"||d[k][1]===DRF;});}
function newDrill(){var p=drillPool();if(!p.length)return;var k=p[Math.floor(Math.random()*p.length)],d=SUITE.drill,dx=d[k][0];
 var others=[];Object.keys(d).forEach(function(x){var v=d[x][0];if(v!==dx&&others.indexOf(v)<0)others.push(v);});
 DR={k:k,opts:shuffle([dx].concat(shuffle(others).slice(0,3))),done:false};}
function pDrill(){if(!DR)newDrill();var d=SUITE.drill[DR.k];
 var h='<div class="h1">Image drill — spot the diagnosis</div><p class="lead">Every CT image from the lecture, shown cold. Name it, then check the finding. The exam is visual — this is the reps.</p>';
 h+='<div class="row" style="margin-bottom:12px"><select id="drf" style="background:var(--panel2);color:var(--text);border:1px solid var(--line);border-radius:10px;padding:8px"><option value="ALL">All chapters</option>'+SUITE.topics.filter(function(t){return Object.keys(SUITE.drill).some(function(k){return SUITE.drill[k][1]===t.id;});}).map(function(t){return '<option value="'+t.id+'"'+(DRF===t.id?" selected":"")+'>'+t.n+'. '+esc(t.title.replace(/ — .*/,""))+'</option>';}).join("")+'</select><span class="chip">Score <b>'+ST.drill.ok+'/'+ST.drill.n+'</b></span></div>';
 h+='<div class="qwrap"><div class="drillimg"><img src="'+img(DR.k)+'" data-lb="'+DR.k+'" data-cap="'+esc(DR.done?d[0]:"Unknown")+'"></div><div id="dopts">'+DR.opts.map(function(o,i){var cls=DR.done?(o===d[0]?" ok":(o===DR.pick?" no":"")):"";return '<button class="opt'+cls+'" data-dx="'+i+'"><span class="L">'+"ABCD"[i]+'</span><span>'+esc(o)+'</span></button>';}).join("")+'</div>';
 if(DR.done){var t=topic(d[1]);h+='<div class="expl"><b style="color:'+(DR.pick===d[0]?"var(--green)":"var(--red)")+'">'+(DR.pick===d[0]?"✓ ":"✗ ")+esc(d[0])+'</b><div style="margin-top:6px"><b>Look for:</b> '+esc(d[2])+'</div><div class="row" style="margin-top:12px"><button class="btn p" id="dnext">Next image →</button>'+(t?'<button class="btn s" data-go="topic" data-arg="'+t.id+'">Open chapter</button>':"")+'</div></div>';}
 return h+'</div>';}

/* ---------- flashcards ---------- */
var FC=null;
function deckList(name){var c=SUITE.cards[name];return c.map(function(x,i){return {id:SUITE.id+":"+name+":"+i,f:x[0],b:x[1]};});}
function startDeck(name){var l=deckList(name);l=shuffle(l).sort(function(a,b){return (ST.cards[a.id]||0)-(ST.cards[b.id]||0);});FC={name:name,list:l,i:0,fl:false};render();}
function pCards(){var h='<div class="h1">Flashcards</div><p class="lead">Tap the card to flip. “Again” keeps it near the front; “Got it” pushes it back (5 boxes).</p>';
 if(!FC){h+='<div class="grid g3">'+Object.keys(SUITE.cards).map(function(n){var l=deckList(n),m=l.filter(function(c){return (ST.cards[c.id]||0)>=3;}).length;return '<div class="card tcard" data-deck="'+esc(n)+'" style="margin:0"><div class="tt">'+esc(n)+'</div><div class="small muted">'+l.length+' cards · '+m+' mastered</div><div class="bar" style="margin-top:8px"><i style="width:'+(m/l.length*100)+'%"></i></div></div>';}).join("")+'</div>';return h;}
 var c=FC.list[FC.i];h+='<div class="row" style="justify-content:space-between;max-width:640px;margin:0 auto 10px"><b>'+esc(FC.name)+'</b><span class="small muted">'+(FC.i+1)+' / '+FC.list.length+' · box '+((ST.cards[c.id]||0)+1)+'</span></div>';
 h+='<div class="fc'+(FC.fl?" fl":"")+'" id="fc"><div class="fci"><div class="fcf">'+esc(c.f)+'</div><div class="fcb">'+esc(c.b)+'</div></div></div>';
 h+='<div class="row" style="justify-content:center;margin-top:16px"><button class="btn" data-card="again">↺ Again</button><button class="btn g" data-card="good">✓ Got it</button><button class="btn s" data-card="exit">Decks</button></div>';return h;}

/* ---------- reference pages ---------- */
function pCompare(){var h='<div class="h1">Compare & differential diagnosis</div><p class="lead">Side-by-side tables for the look-alikes the exam loves. Each ends with the one rule that picks the answer.</p>';
 SUITE.compare.forEach(function(c){h+='<div class="card"><h3>'+esc(c.t)+'</h3><div class="tw"><table class="t"><tr>'+c.head.map(function(x){return '<th>'+x+'</th>';}).join("")+'</tr>'+c.rows.map(function(r){return '<tr>'+r.map(function(x){return '<td>'+x+'</td>';}).join("")+'</tr>';}).join("")+'</table></div><div class="decipher"><div class="blk-t">How to decipher</div>'+esc(c.tip)+'</div></div>';});
 SUITE.topics.forEach(function(t){t.blocks.forEach(function(b){if(b.t==="ddx")h+='<div class="card ddx"><div class="blk-t">⇄ '+esc(t.title.replace(/ — .*/,""))+' — '+b.h+'</div>'+b.x.map(function(r){return '<div class="ddxrow"><b>'+r[0]+'</b><span>'+r[1]+'</span></div>';}).join("")+'<div class="decipher"><div class="blk-t">How to decipher the correct answer</div>'+ul(b.decipher)+'</div></div>';});});
 return h;}
function pFlags(){var h='<div class="h1">Red flags & don\'t forget</div><p class="lead">Every red flag, don\'t-forget and key point from all chapters on one page — the night-before list.</p>';
 h+='<div class="card red"><div class="blk-t">📞 When to call the ER — critical findings</div><div class="calls">'+SUITE.calls.map(function(c,i){return '<div class="callc"><h4>'+(i+1)+' · '+c[0]+'</h4>'+ul(c[2])+'</div>';}).join("")+'</div><p style="margin:12px 0 0"><b>Always document:</b> time of the call · name of person notified · read-back confirmation received.</p></div>';
 SUITE.topics.forEach(function(t){var r=[],f=[],k=[];t.blocks.forEach(function(b){if(b.t==="red")r=r.concat(b.x);if(b.t==="forget")f=f.concat(b.x);if(b.t==="key")k=k.concat(b.x);});
  if(r.length||f.length||k.length)h+='<div class="card"><h3><a href="#" data-go="topic" data-arg="'+t.id+'">'+t.n+'. '+esc(t.title)+'</a></h3><div class="grid g3">'+(r.length?'<div><div class="blk-t" style="color:var(--red)">🚩 Red flags</div>'+ul(r)+'</div>':"<div></div>")+(f.length?'<div><div class="blk-t" style="color:var(--amber)">⚠ Don\'t forget</div>'+ul(f)+'</div>':"<div></div>")+(k.length?'<div><div class="blk-t" style="color:var(--green)">✦ Key points</div>'+ul(k)+'</div>':"<div></div>")+'</div></div>';});
 return h;}
function pQuick(){return '<div class="h1">Quick numbers</div><p class="lead">Every number in the lecture. The last row is general knowledge, marked as such.</p><div class="card"><div class="tw"><table class="t"><tr><th>Item</th><th>Value</th><th>Note</th></tr>'+SUITE.quick.map(function(r){return '<tr><td>'+esc(r[0])+'</td><td><b>'+esc(r[1])+'</b></td><td>'+esc(r[2])+'</td></tr>';}).join("")+'</table></div></div>'
 +(SUITE.checklist?'<div class="card"><h3>'+esc(SUITE.checklist.t)+'</h3><ol>'+SUITE.checklist.x.map(function(x){return '<li>'+x+'</li>';}).join("")+'</ol></div>':"");}
var ATF="ALL";
function pAtlas(){var all=[];SUITE.topics.forEach(function(t){t.blocks.forEach(function(b){var im=b.imgs||[];im.forEach(function(f){all.push({k:f[0],c:f[1],t:t});});});});
 var h='<div class="h1">Image atlas</div><p class="lead">All '+all.length+' lecture figures (CT, radiographs and illustrations) with their arrows. Tap to enlarge.</p><div class="row" style="margin-bottom:12px"><select id="atf" style="background:var(--panel2);color:var(--text);border:1px solid var(--line);border-radius:10px;padding:8px"><option value="ALL">All chapters</option>'+SUITE.topics.map(function(t){return '<option value="'+t.id+'"'+(ATF===t.id?" selected":"")+'>'+t.n+'. '+esc(t.title.replace(/ — .*/,""))+'</option>';}).join("")+'</select></div><div class="atlas">';
 all.forEach(function(a){if(ATF!=="ALL"&&a.t.id!==ATF)return;h+='<div class="it" data-lb="'+a.k+'" data-cap="'+esc(a.c)+'"><img loading="lazy" src="'+img(a.k)+'" alt=""><div class="c">'+a.t.n+'. '+esc(a.t.title.replace(/ — .*/,""))+'</div></div>';});
 return h+'</div>';}
function pGuide(){var h='<div class="h1">Exam guide & settings</div><p class="lead">How to use this suite, how to crack the questions, and how to add new chapters.</p>';
 h+='<div class="card exam"><div class="blk-t">🎯 How to decipher the correct answer</div><ul><li><b>Find the discriminator.</b> Look-alike options usually differ by ONE imaging feature (rim, calcification, air, laterality, number of spaces). Name it before reading the options.</li><li><b>Map finding → management.</b> Many answers are really “drain / don’t drain / NSAIDs / stop the drug / call now”.</li><li><b>Look for the source.</b> Infection has one (tooth, tonsil, node, foreign body); angioedema and calcific tendinitis don’t.</li><li><b>Worst complication.</b> When asked “what next?”, the answer is usually airway, danger space/mediastinum, IJV or lung apices.</li><li><b>Age and laterality.</b> Toddler → suppurated node; young adult with sepsis → Lemierre; bilateral parotids → systemic, never stones.</li><li><b>Words like “all EXCEPT”.</b> Re-read the stem; one option belongs to a neighbouring chapter (e.g., C1 calcification in an odontogenic list).</li></ul></div>';
 h+='<div class="card"><h3>How each chapter is built</h3><ul><li><b>Hook</b> → the one-sentence idea from the slide</li><li><b>Lecture content</b> — every bullet, table and case from the slides, with figures inline</li><li><b style="color:var(--green)">Key points</b> · <b style="color:var(--amber)">Don’t forget</b> · <b style="color:var(--red)">Red flags</b> · <b style="color:var(--violet)">Differential + how to decipher</b> · <b style="color:var(--blue)">Exam tips</b></li><li><b>Beyond the slides</b> (dashed box) = general radiology facts not in the lecture, clearly separated</li><li>“One card at a time” mode keeps each chapter bite-sized; switch to “Show all” to skim</li><li>Self-test hides captions and case findings — tap to reveal</li><li><b>Lecture quiz</b> cards reproduce the quizzes from the slides — commit to an answer, then tap. Where a slide did not print the answer, the card says so and explains the reading</li></ul></div>';
 h+='<div class="card"><h3>XP and ranks</h3><p class="small muted" style="margin-top:0">Chapter learned +20 · FY correct +10 · Board correct +15 · Image drill correct +5 · Flashcard +2 · Finished set +5</p><div class="row">'+LEVELS.map(function(l){return '<span class="chip">'+l[1]+' <b>'+l[0]+'</b></span>';}).join("")+'</div></div>';
 h+='<div class="card"><h3>Add a new chapter suite (for future lectures)</h3><p class="small">Everything for a chapter lives in one <code>SUITES</code> entry inside this file. To add a lecture: open the file in a text editor, find <code>/* ===== ADD NEW SUITES BELOW ===== */</code>, paste a copy of the template there (it is in the comment right above that line), fill in topics/questions, and save. Images go in the <code>IMG</code> object as data-URLs, or use web URLs. A suite selector appears in the sidebar automatically, and progress for each suite is kept separately. Easiest route: send me the next PDF and I will add it as a new suite in the same format.</p></div>';
 h+='<div class="card"><h3>Your progress</h3><p class="small muted" style="margin-top:0">Saved in this browser (localStorage). Export a backup before switching browser or device.</p><div class="row"><button class="btn" id="exp">⬇ Back up progress (copy + file)</button><button class="btn" id="pst">⬆ Restore from text</button><label class="btn">⬆ Restore from file<input type="file" id="imp" accept=".json" style="display:none"></label><button class="btn" id="rst" style="border-color:var(--red)">Reset all progress</button></div><textarea id="bk" class="hidden" style="width:100%;height:90px;margin-top:10px;background:var(--panel2);color:var(--text);border:1px solid var(--line);border-radius:10px;padding:8px;font-size:12px"></textarea></div>';
 h+='<div class="card"><h3>Sources — all suites</h3>'+SUITES.map(function(x){return '<p class="small"><b>'+esc(x.title)+':</b> '+esc(x.sourceFull)+'</p>';}).join("")+'<p class="small muted">Figures reproduced from the lectures for personal study; case images courtesy of the credited radiologists and sources named in captions.</p></div>'+block({t:"refs"},null,0);
 return h;}

/* ---------- render & events ---------- */
function render(){side();var m=$("#main"),p=VIEW.p,h="";
 if(p==="home")h=pHome();else if(p==="plan")h=pPlan();else if(p==="topic")h=pTopic(VIEW.a);else if(p==="quiz")h=pQuizSetup();else if(p==="run")h=pRun();else if(p==="res")h=pRes();
 else if(p==="drill")h=pDrill();else if(p==="cards")h=pCards();else if(p==="compare")h=pCompare();else if(p==="flags")h=pFlags();else if(p==="quick")h=pQuick();else if(p==="atlas")h=pAtlas();else if(p==="guide")h=pGuide();
 m.innerHTML=h;hdr();
 if(p==="topic"){focusApply();}
 if(p==="quiz")updCount();
 if(p==="run")timer();}
function updCount(){var c=$("#qcount");if(c)c.textContent=pool(QF).length+" matching questions";}
function weekQuiz(w,lv){var l=SUITE.questions.filter(function(q){return String(q.w)===String(w)&&(lv==="ALL"||q.lv===lv);});startQuiz(shuffle(l),"practice","Week "+w+" · "+(lv==="ALL"?"All 40":lv==="FY"?"First-year":"Board-level"));}
function special(k){var Q=SUITE.questions;
 if(k==="mockall"){var all=[];SUITES.forEach(function(x){all=all.concat(shuffle(x.questions).slice(0,Math.ceil(60/SUITES.length)));});startQuiz(shuffle(all).slice(0,60),"exam","All-suites mixed mock");return;}
 if(k==="mock")startQuiz(shuffle(Q).slice(0,40),"exam","40-question mixed mock");
 else if(k==="missed")startQuiz(shuffle(Q.filter(function(q){return ST.ans[q.id]&&!ST.ans[q.id].last;})),"practice","Redo missed");
 else if(k==="img")startQuiz(shuffle(Q.filter(function(q){return q.img;})),"practice","Image-based questions");}
function lightbox(k,cap){var lb=$("#lb");$("#lbimg").src=img(k);$("#lbimg").classList.remove("z");$("#lbcap").innerHTML=cap||"";lb.classList.add("on");}
document.addEventListener("click",function(e){var el=e.target;
 var c=el.closest?el:null;if(!c)return;
 var t;
 if((t=el.closest("[data-lb]"))&&!el.closest(".lb")){lightbox(t.getAttribute("data-lb"),t.getAttribute("data-cap"));return;}
 if(el.closest("#lbx")||el.id==="lb"){$("#lb").classList.remove("on");return;}
 if(el.id==="lbimg"){el.classList.toggle("z");return;}
 if((t=el.closest("[data-suite-open]"))){setSuite(t.getAttribute("data-suite-open"));go("home");return;}
 if((t=el.closest("[data-go]"))){e.preventDefault();var a=t.getAttribute("data-arg");if(t.getAttribute("data-go")==="topic"){FOC={i:0,seen:{}};}go(t.getAttribute("data-go"),a===null?undefined:a);return;}
 if((t=el.closest("[data-wq]"))){var p=t.getAttribute("data-wq").split("|");weekQuiz(p[0],p[1]);return;}
 if((t=el.closest("[data-q]"))){special(t.getAttribute("data-q"));return;}
 if((t=el.closest("[data-tq]"))){startQuiz(shuffle(SUITE.questions.filter(function(q){return q.t===t.getAttribute("data-tq");})),"practice","Chapter quiz — "+topic(t.getAttribute("data-tq")).title.replace(/ — .*/,""));return;}
 if((t=el.closest("[data-learn]"))){var k=SUITE.id+":"+t.getAttribute("data-learn");if(!ST.read[k]){ST.read[k]=Date.now();save();addXP(20,"chapter learned");}render();return;}
 if((t=el.closest("[data-plan]"))){var pk=SUITE.id+":"+t.getAttribute("data-plan");ST.plan[pk]=!ST.plan[pk];save();render();return;}
 if((t=el.closest("[data-mode]"))){ST.mode=t.getAttribute("data-mode");save();var bb=document.querySelectorAll("[data-mode]");for(var i=0;i<bb.length;i++)bb[i].classList.toggle("on",bb[i]===t);focusApply();return;}
 if(el.closest("#fnext")){var n=document.querySelectorAll("#blocks .blk").length;if(FOC.i<n-1){FOC.i++;focusApply();scrollTop();}else{var tid=VIEW.a,kk=SUITE.id+":"+tid;if(!ST.read[kk]){ST.read[kk]=Date.now();save();addXP(20,"chapter learned");}render();}return;}
 if(el.closest("#fprev")){if(FOC.i>0){FOC.i--;focusApply();scrollTop();}return;}
 if((t=el.closest("[data-dot]"))){FOC.i=+t.getAttribute("data-dot");focusApply();return;}
 if(el.closest("#selft")){var b=$("#blocks");if(b){b.classList.toggle("selftest");el.closest("#selft").textContent=b.classList.contains("selftest")?"👁 Show captions":"🙈 Self-test: hide captions";}return;}
 if((t=el.closest(".selftest .cap, .selftest .fv"))){t.classList.add("rv");return;}
 if((t=el.closest("[data-chk]"))){var ck=t.getAttribute("data-chk");ST.chk[ck]=!ST.chk[ck];save();t.classList.toggle("on",!!ST.chk[ck]);var bx=t.querySelector(".bx");if(bx)bx.textContent=ST.chk[ck]?"✓":(t.getAttribute("data-n")||"");return;}
 if((t=el.closest("[data-lq]"))){var lid=t.getAttribute("data-lq"),lb=LQS[lid],pick=+t.getAttribute("data-o");if(!lb||ST.lq[lid]!==undefined)return;ST.lq[lid]=pick;save();
  var sib=document.querySelectorAll('[data-lq="'+lid+'"]');for(var q2=0;q2<sib.length;q2++){var oi2=+sib[q2].getAttribute("data-o");if(oi2===lb.a)sib[q2].classList.add("ok");else if(oi2===pick)sib[q2].classList.add("no");}
  var ans=document.querySelector('[data-lqa="'+lid+'"]');if(ans)ans.classList.remove("hidden");if(pick===lb.a){addXP(5,"lecture quiz");}else toast("Not quite — read the answer below");return;}
 if((t=el.closest("[data-opt]"))){answer(+t.getAttribute("data-opt"));return;}
 if(el.closest("#qnext")){nextQ();return;}
 if(el.closest("#qquit")){VIEW={p:"res"};render();return;}
 if(el.closest("#qgo")){startQuiz(shuffle(pool(QF)).slice(0,+QF.n),QF.mode,"Custom set");return;}
 if((t=el.closest("[data-dx]"))){if(DR.done)return;var d=SUITE.drill[DR.k];DR.pick=DR.opts[+t.getAttribute("data-dx")];DR.done=true;ST.drill.n++;if(DR.pick===d[0]){ST.drill.ok++;ST.run++;if(ST.run>ST.best)ST.best=ST.run;save();addXP(5);}else{ST.run=0;save();}render();return;}
 if(el.closest("#dnext")){newDrill();render();scrollTop();return;}
 if((t=el.closest("[data-deck]"))){startDeck(t.getAttribute("data-deck"));return;}
 if(el.closest("#fc")){FC.fl=!FC.fl;$("#fc").classList.toggle("fl",FC.fl);return;}
 if((t=el.closest("[data-card]"))){var a2=t.getAttribute("data-card");if(a2==="exit"){FC=null;render();return;}var cc=FC.list[FC.i];
  if(a2==="good"){ST.cards[cc.id]=Math.min(4,(ST.cards[cc.id]||0)+1);}else{ST.cards[cc.id]=0;FC.list.splice(Math.min(FC.list.length,FC.i+4),0,cc);}
  ST.cardN++;save();addXP(2);FC.i++;FC.fl=false;if(FC.i>=FC.list.length){toast("Deck finished!");FC=null;}render();return;}
 if(el.closest("#exp")){var js=JSON.stringify(ST);var ta=$("#bk");if(ta){ta.value=js;ta.classList.remove("hidden");}try{navigator.clipboard.writeText(js).then(function(){toast("Progress copied to clipboard");},function(){toast("Copy the text box below");});}catch(x){toast("Copy the text box below");}
  try{var blob=new Blob([js],{type:"application/json"});var u=URL.createObjectURL(blob);var ln=document.createElement("a");ln.href=u;ln.download="oncall_suite_progress.json";document.body.appendChild(ln);ln.click();ln.remove();}catch(x){}return;}
 if(el.closest("#pst")){var tv=$("#bk");if(tv&&tv.classList.contains("hidden")){tv.value="";tv.classList.remove("hidden");tv.placeholder="Paste your backup text here, then press Restore again";return;}try{ST=JSON.parse(tv.value);save();ST=load();setSuite(ST.suite||SUITE.id);render();toast("Progress restored");}catch(x){toast("That text is not a valid backup");}return;}
 if(el.closest("#rst")){var rb=el.closest("#rst");if(!rb.getAttribute("data-sure")){rb.setAttribute("data-sure","1");rb.textContent="Tap again to confirm reset";return;}{try{localStorage.removeItem(KEY);}catch(x){}MEM={};ST=load();setSuite(SUITE.id);render();toast("Progress reset");}return;}
 if(el.closest("#burger")){$("#side").classList.toggle("on");$("#scrim").classList.toggle("on");return;}
 if(el.id==="scrim"){closeSide();return;}
});
document.addEventListener("change",function(e){var el=e.target;
 if(el.getAttribute("data-f")){QF[el.getAttribute("data-f")]=el.value;updCount();return;}
 if(el.id==="drf"){DRF=el.value;newDrill();render();return;}
 if(el.id==="atf"){ATF=el.value;render();return;}
 if(el.id==="suitesel"){setSuite(el.value);go("home");return;}
 if(el.id==="imp"&&el.files&&el.files[0]){var r=new FileReader();r.onload=function(){try{var o=JSON.parse(r.result);ST=o;save();ST=load();render();toast("Progress imported");}catch(x){toast("Could not read that file");}};r.readAsText(el.files[0]);}
});
document.addEventListener("keydown",function(e){if(e.key==="Escape")$("#lb").classList.remove("on");
 if(VIEW.p==="run"&&QZ&&QZ.picked===null&&/^[1-4a-dA-D]$/.test(e.key)){var ix="1234".indexOf(e.key);if(ix<0)ix="abcd".indexOf(e.key.toLowerCase());var bs=document.querySelectorAll("#opts .opt");if(bs[ix])answer(+bs[ix].getAttribute("data-opt"));}
 else if(VIEW.p==="run"&&e.key==="Enter"&&$("#qnext")){nextQ();}});
function setSuite(id){SUITE=SUITES.filter(function(s){return s.id===id;})[0]||SUITES[0];ST.suite=SUITE.id;save();QZ=null;DR=null;FC=null;}

/* ---------- boot ---------- */
function boot(){SUITES.forEach(function(s){s.questions.forEach(function(q,i){q.id=s.id+"-q"+(i+1);});});
 setSuite(ST.suite||SUITES[0].id);var d=today();if(!ST.days[d]){ST.days[d]=0;}save();
 $("#brand").setAttribute("data-go","home");render();checkAch();}
window.__APP={go:go,state:function(){return ST;},startQuiz:startQuiz,answer:answer,special:special,weekQuiz:weekQuiz,render:render,view:function(){return VIEW;},quiz:function(){return QZ;}};
function safeBoot(){var need=["ottawa-data.js","ottawa-img1.js","ottawa-img2.js"],ok=window.__ok||[],miss=need.filter(function(n){return ok.indexOf(n)<0;});if(miss.indexOf("ottawa-data.js")>=0||!window.SUITES||!SUITES.length){document.getElementById("main").innerHTML='<div class="card red"><div class="blk-t">The app could not load all its files</div><p>Missing: <b>'+miss.join(", ")+'</b></p><p>Upload these files to the <b>same folder</b> of your GitHub repo as ottawa.html (names must match exactly, lower-case), wait 1–2 minutes, then reload.</p></div>';return;}boot();if(miss.length){toast("Images missing: "+miss.join(", ")+" — upload to the same folder");}}if(document.getElementById("main"))safeBoot();else document.addEventListener("DOMContentLoaded",safeBoot);
})();
