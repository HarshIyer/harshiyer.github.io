(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{792:function(e,t,n){Promise.resolve().then(n.bind(n,4109))},4109:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(3827),s=n(4090),a=n(4303),l=n(9455),i=n(964),o=n(9206),d=n(5050),c=n(3411),u=n.n(c),h=()=>{let e=new Date,t=e.getDate(),n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],c=e.getFullYear(),h=["January","February","March","April","May","June","July","August","September","October","November","December"],x=h[e.getMonth()],p="";p=10>e.getDate()?10>e.getMonth()?"0"+t+"0"+(e.getMonth()+1)+c:"0"+t+(e.getMonth()+1)+c:10>e.getMonth()?""+t+"0"+(e.getMonth()+1)+c:""+t+(e.getMonth()+1)+c;let[y,g]=(0,s.useState)(0),[m,f]=(0,s.useState)(0),[j,C]=(0,s.useState)(""),[b,S]=(0,s.useState)(!1),[I,M]=(0,s.useState)(!1),[T,D]=(0,s.useState)(0),[v,w]=(0,s.useState)(0),[A,F]=(0,s.useState)(0),[Y,k]=(0,s.useState)(0),[E,H]=(0,s.useState)(0),[O,N]=(0,s.useState)(0),[_,J]=(0,s.useState)(0),[R,P]=(0,s.useState)(0),V=""+A[0]+A[1],W=""+A[2]+A[3],z=""+A[4]+A[5]+A[6]+A[7];return(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{style:{display:"flex",justifyContent:"center"},children:"Attendance Helper"}),(0,r.jsxs)("h3",{style:{display:"flex",justifyContent:"center"},children:["Today's date is: ",t," ",x," ",c,", ",n]}),(0,r.jsxs)(a.W,{style:{border:"1px solid black",height:"100%",width:"60wh",display:"flex",justifyContent:"space-between",alignItems:"center",borderRadius:"10px",flexDirection:"column"},children:[(0,r.jsxs)("form",{children:[(0,r.jsx)(l.x,{style:{marginTop:"10px"},children:(0,r.jsx)("label",{htmlFor:"credits",style:{marginTop:"10px"},children:"Enter Current Credits:"})}),(0,r.jsx)(i.Y,{value:y,id:"credits",onChange:g,style:{marginTop:"10px"}}),(0,r.jsx)(l.x,{style:{marginTop:"10px"},children:(0,r.jsx)("label",{htmlFor:"totalcredits",style:{marginTop:"10px"},children:"Enter Total Credits:"})}),(0,r.jsx)(i.Y,{type:"number",value:m,id:"totalcredits",onChange:f,style:{marginTop:"10px"}}),(0,r.jsx)(l.x,{style:{marginTop:"10px"},children:(0,r.jsx)("label",{htmlFor:"course",style:{marginTop:"10px"},children:"Course"})}),(0,r.jsx)(o.Ph,{style:{marginTop:"10px"},value:j,data:["IHS121","ICS121","ICS122","ICS123","IMA121","IEC121"],defaultValue:"IHS121",onChange:e=>C(e),clearable:!0}),(0,r.jsx)(d.z,{onClick:e=>{if(e.preventDefault(),0==y||0==m)u().fire({icon:"error",title:"Oops!",text:"Credits can't be 0!"});else if(""==j)u().fire({icon:"error",title:"Oops!",text:"Course cannot be empty!",footer:"<p>Select a course.</p>"});else{let e=function(e){let t=e[0],n=e[1],r=e[2],s=e[3],a=(t/n*100).toFixed(2),l=["01012024","02012024","03012024","04012024","05012024","08012024","09012024","10012024","11012024","12012024","15012024","16012024","17012024","18012024","19012024","22012024","23012024","24012024","25012024","26012024","29012024","30012024","31012024","01022024","02022024","05022024","06022024","07022024","08022024","09022024","12022024","13022024","14022024","15022024","16022024","19022024","20022024","21022024","22022024","23022024","26022024","27022024","28022024","29022024","01032024","04032024","05032024","06032024","07032024","08032024","11032024","12032024","13032024","14032024","15032024","18032024","19032024","20032024","21032024","22032024","25032024","26032024","27032024","28032024","29032024","01042024","02042024","03042024","04042024","05042024","08042024","09042024","10042024","11042024","12042024","15042024"],i=new Date,o=0,d=0;for(let e=0;e<l.length;e++)if(parseInt(s)==parseInt(l[e])){o=e,d=1;break}let c=i.getDate();if(0==d){let e=i.getDay();0==e?c+=1:6==e&&(c+=2)}let u=""+c+(10>i.getMonth()?"0"+(i.getMonth()+1):""+(i.getMonth()+1))+i.getFullYear();for(let e=0;e<l.length;e++)l[e]==u&&(o=e,d=1);let h=l.length-o,x=0;"IHS121"==r?x=Math.floor(1*h/5):"IMA122"==r||"ICS122"==r||"ICS123"==r?x=Math.floor(4*h/5):("IEC121"==r||"ICS121"==r)&&(x=Math.floor(5*h/5)),x%2!=0&&x--;let p=t+x,y=n+x,g=(p/y*100).toFixed(2),m=0;parseInt(p);let f=t,j="";if(g<=80)m=h,j="You have to attend all days!";else for(;f/y*100<80;)f+=2,m++;let C=0;"IHS121"==r?C=5*m/1:"IMA121"==r||"ICS122"==r||"ICS123"==r?C=5*m/4:("IEC121"==r||"ICS121"==r)&&(C=5*m/5),C=parseInt(C);let b=(f/y*100).toFixed(2),S=l[o+C];return void 0==S&&(S=l[l.length-1]),{credits:t,totalcredits:n,percentage:a,date:s,remainingdays:h,maxfuturecredits:p,maxfuturetotalcredits:y,maxfutureattendance:g,numberOfDaysMoreToAttend:m,idealattendance:b,ideallastdate:S,message:j}}([y,m,j,parseInt(p)]);F(e.ideallastdate),k(e.numberOfDaysMoreToAttend),H(e.percentage),N(e.remainingdays),J(e.maxfutureattendance),P(e.idealattendance),_>80?M(!0):M(!1),S(!0),D(e.credits),w(e.totalcredits)}},style:{marginTop:"20px",marginBottom:"20px"},children:"View Analysis"})]}),(0,r.jsxs)("div",{style:b?{display:"block"}:{display:"none"},children:[(0,r.jsx)("h1",{children:(0,r.jsx)("u",{children:"Your Result:"})}),(0,r.jsxs)("h3",{children:["Your Current Credits: ",T]}),(0,r.jsxs)("h3",{children:["Your Current Total Credits: ",v]}),(0,r.jsxs)("h3",{children:["Your Current Attendance percentage: ",E,"%"]}),(0,r.jsxs)("h3",{children:["Number of Remaining Days: ",O]}),(0,r.jsxs)("h3",{children:["Your maximum future attendance: ",_,"%"]}),(0,r.jsxs)("div",{style:I?{display:"block"}:{display:"none"},children:[(0,r.jsx)("h2",{children:(0,r.jsx)("u",{children:"Just to reach 80%:"})}),(0,r.jsxs)("h3",{children:["Attendance: ",R,"%"]}),(0,r.jsxs)("h3",{children:["Number of lectures more to attend: ",Y]}),(0,r.jsxs)("h3",{children:["Ideal Last Date: ",V," ",h[W-1]," ",z]})]})]})]}),(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[(0,r.jsx)("p",{children:"Disclaimer: The analysis shown may be innaccurate. Don't completely rely on this tool."}),(0,r.jsxs)("p",{style:{marginTop:"0px"},children:["Made by Harsh. ",(0,r.jsx)("a",{href:"https://www.github.com/HarshIyer",children:"Github"})]})]})]})},x=()=>(0,r.jsx)("div",{children:(0,r.jsx)(h,{})})}},function(e){e.O(0,[461,982,971,69,744],function(){return e(e.s=792)}),_N_E=e.O()}]);