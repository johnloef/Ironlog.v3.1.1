const phases=[["Foundation",1,4],["Build",5,8],["Maintain & Finish",9,12]];
const base=[
["Upper Strength","Keep pressing and pulling strength high without unsupported bent-over loading.",
["Bike/elliptical — 5 min","Band pull-aparts — 2×15","External rotation — 2×10/side","Scapular push-ups — 2×8"],
[["DB or Machine Chest Press","main","reps"],["Chest-Supported Row","main","reps"],["Superset A1 — Incline DB Press","accessory","reps"],["Superset A2 — Neutral-Grip Lat Pulldown","accessory","reps"],["Superset B1 — Seated DB/Machine Shoulder Press","accessory","reps"],["Superset B2 — Face Pull","accessoryHigh","reps"],["Superset C1 — Cable Curl","accessory","reps"],["Superset C2 — Rope Pressdown","accessory","reps"],["Bird Dog","core","reps"],["Side Plank","coreTime","time"]],
["Easy walk — 3 min","Pec stretch — 30 sec/side","Lat stretch — 30 sec/side","Slow breathing — 2 min"]],
["Lower Strength + Core","Train legs hard while minimizing unnecessary spinal loading.",
["Bike — 5 min","Glute bridge — 2×10","Bodyweight split squat — 1×8/side","Bird dog — 1×6/side"],
[["Hack Squat / Belt Squat / Leg Press","main","reps"],["Superset A1 — Supported Bulgarian Split Squat","accessory","reps"],["Superset A2 — Seated/Lying Leg Curl","accessory","reps"],["Superset B1 — Hip Thrust / Glute Bridge","accessory","reps"],["Superset B2 — Calf Raise","accessoryHigh","reps"],["Superset C1 — Modified Curl-Up","core","reps"],["Superset C2 — Pallof Press","core","reps"]],
["Easy bike — 3 min","Hip flexor stretch — 30 sec/side","Gentle hamstring mobility","Slow breathing — 2 min"]],
["Conditioning + Carries","Conditioning, work capacity, grip and trunk stability.",
["Bike/elliptical — 6 min","Gentle cat-camel ×6","Glute bridge — 2×10","Band row — 2×12"],
[["Sled Push","sled","distance"],["Assault Bike","assault","time"],["Farmer's Walk","farmer","carry"],["Suitcase Carry","suitcase","carryside"],["Zone 2 Elliptical","zone2","time"]],
["Easy walk — 3 min","Hip flexor stretch","Thoracic rotation — 5/side","Slow breathing — 2 min"]],
["Upper Hypertrophy + Arms","Maintain upper-body muscle with joint-friendly volume.",
["Elliptical — 5 min","Band pull-aparts — 2×15","Face pulls — 1×15","Push-up — 1×10"],
[["Superset A1 — Incline DB Press","hypertrophyMain","reps"],["Superset A2 — Chest-Supported Row","hypertrophyMain","reps"],["Superset B1 — Machine Chest Press","accessory","reps"],["Superset B2 — Pulldown","accessory","reps"],["Superset C1 — Lateral Raise","accessoryHigh","reps"],["Superset C2 — Rear-Delt Fly","accessoryHigh","reps"],["Superset D1 — Cable Curl","accessory","reps"],["Superset D2 — Rope Pressdown","accessory","reps"],["Superset E1 — Hammer Curl","armFinish","reps"],["Superset E2 — Overhead Cable Triceps Extension","armFinish","reps"]],
["Easy bike — 3 min","Pec stretch","Lat stretch","Slow breathing — 2 min"]],
["Full Body Functional","Athletic full-body work while respecting back tolerance.",
["Bike — 5 min","Glute bridge — 2×10","Band row — 2×12","Step-up — 1×8/side","Bird dog — 1×6/side"],
[["Superset A1 — Goblet Squat to Box","functional","reps"],["Superset A2 — Machine/DB Chest Press","functional","reps"],["Superset B1 — Chest-Supported Row","functional","reps"],["Superset B2 — Step-Up","functional","reps"],["Superset C1 — Cable Chop","functionalCore","reps"],["Superset C2 — Farmer's Walk","functionalCarry","carry"],["Bike / Sled Intervals","functionalConditioning","time"]],
["Easy walk — 3 min","Hip flexor stretch","Chest/lat mobility","Slow breathing — 2 min"]]
];

const weekPlan={
1:{main:"4×6–8",accessory:"3×10–12",accessoryHigh:"3×12–15",hypertrophyMain:"3×8–12",armFinish:"2×12",functional:"3×8–10",functionalCore:"3×10/side",core:"2×6–8/side",coreTime:"2×20–30 sec/side"},
2:{main:"4×6–8",accessory:"3×10–12",accessoryHigh:"3×12–15",hypertrophyMain:"3×8–12",armFinish:"2×12",functional:"3×8–10",functionalCore:"3×10/side",core:"2×6–8/side",coreTime:"2×25–35 sec/side"},
3:{main:"4×5–7",accessory:"3×8–10",accessoryHigh:"3×10–15",hypertrophyMain:"4×8–10",armFinish:"2×10–12",functional:"3×8",functionalCore:"3×10/side",core:"2×8/side",coreTime:"2×30–40 sec/side"},
4:{main:"3×6–8",accessory:"2×10–12",accessoryHigh:"2×12–15",hypertrophyMain:"2×10–12",armFinish:"2×10–12",functional:"2×8–10",functionalCore:"2×10/side",core:"2×6/side",coreTime:"2×20–30 sec/side"},
5:{main:"4×5–7",accessory:"3×8–10",accessoryHigh:"3×10–15",hypertrophyMain:"4×8–10",armFinish:"3×10–12",functional:"3×8",functionalCore:"3×10/side",core:"3×6–8/side",coreTime:"3×25–35 sec/side"},
6:{main:"4×5–7",accessory:"3×8–10",accessoryHigh:"3×10–15",hypertrophyMain:"4×8–10",armFinish:"3×10–12",functional:"3×8",functionalCore:"3×10/side",core:"3×8/side",coreTime:"3×30–40 sec/side"},
7:{main:"4×4–6",accessory:"3×8–10",accessoryHigh:"3×10–12",hypertrophyMain:"4×6–10",armFinish:"3×10",functional:"4×6–8",functionalCore:"3×8–10/side",core:"3×8/side",coreTime:"3×30–45 sec/side"},
8:{main:"3×6–8",accessory:"2×10–12",accessoryHigh:"2×12–15",hypertrophyMain:"2×10–12",armFinish:"2×12",functional:"2×8–10",functionalCore:"2×10/side",core:"2×6/side",coreTime:"2×20–30 sec/side"},
9:{main:"4×5–7",accessory:"3×8–10",accessoryHigh:"3×10–15",hypertrophyMain:"3×8–10",armFinish:"2×10–12",functional:"3×8",functionalCore:"3×10/side",core:"3×8/side",coreTime:"3×30–40 sec/side"},
10:{main:"4×5–7",accessory:"3×8–10",accessoryHigh:"3×10–15",hypertrophyMain:"3×8–10",armFinish:"2×10–12",functional:"3×8",functionalCore:"3×10/side",core:"3×8/side",coreTime:"3×35–45 sec/side"},
11:{main:"3×4–6",accessory:"2–3×8–10",accessoryHigh:"2–3×10–12",hypertrophyMain:"3×6–8",armFinish:"2×10",functional:"3×6–8",functionalCore:"2–3×8–10/side",core:"2×8/side",coreTime:"2×30–40 sec/side"},
12:{main:"2–3×6–8",accessory:"2×10–12",accessoryHigh:"2×12–15",hypertrophyMain:"2×8–12",armFinish:"2×12",functional:"2×8–10",functionalCore:"2×10/side",core:"2×6/side",coreTime:"2×20–30 sec/side"}
};

const conditioningPlan={
1:{sled:"4 rounds",assault:"4×30 sec hard / 60 sec easy",farmer:"4 carries",suitcase:"3 carries/side",zone2:"15 min",functionalCarry:"3 carries",functionalConditioning:"8 min"},
2:{sled:"4 rounds",assault:"5×30 sec hard / 60 sec easy",farmer:"4 carries",suitcase:"3 carries/side",zone2:"18 min",functionalCarry:"3 carries",functionalConditioning:"9 min"},
3:{sled:"5 rounds",assault:"6×30 sec hard / 60 sec easy",farmer:"5 carries",suitcase:"4 carries/side",zone2:"20 min",functionalCarry:"4 carries",functionalConditioning:"10 min"},
4:{sled:"3 rounds",assault:"4×20 sec hard / 70 sec easy",farmer:"3 carries",suitcase:"2 carries/side",zone2:"15 min easy",functionalCarry:"2 carries",functionalConditioning:"8 min easy"},
5:{sled:"5 rounds",assault:"5×35 sec hard / 55 sec easy",farmer:"5 carries",suitcase:"3 carries/side",zone2:"20 min",functionalCarry:"4 carries",functionalConditioning:"10 min"},
6:{sled:"5 rounds",assault:"6×35 sec hard / 55 sec easy",farmer:"5 carries",suitcase:"4 carries/side",zone2:"22 min",functionalCarry:"4 carries",functionalConditioning:"11 min"},
7:{sled:"6 rounds",assault:"6×40 sec hard / 50 sec easy",farmer:"6 carries",suitcase:"4 carries/side",zone2:"25 min",functionalCarry:"4 carries",functionalConditioning:"12 min"},
8:{sled:"4 rounds",assault:"4×30 sec hard / 60 sec easy",farmer:"4 carries",suitcase:"3 carries/side",zone2:"18 min easy",functionalCarry:"3 carries",functionalConditioning:"8–9 min easy"},
9:{sled:"5 rounds",assault:"6×35 sec hard / 55 sec easy",farmer:"5 carries",suitcase:"4 carries/side",zone2:"22 min",functionalCarry:"4 carries",functionalConditioning:"10 min"},
10:{sled:"6 rounds",assault:"6×40 sec hard / 50 sec easy",farmer:"6 carries",suitcase:"4 carries/side",zone2:"25 min",functionalCarry:"4 carries",functionalConditioning:"12 min"},
11:{sled:"5 rounds",assault:"5×40 sec hard / 50 sec easy",farmer:"5 carries",suitcase:"3 carries/side",zone2:"20 min",functionalCarry:"3 carries",functionalConditioning:"10 min"},
12:{sled:"3 rounds",assault:"4×30 sec hard / 60 sec easy",farmer:"3 carries",suitcase:"2 carries/side",zone2:"15–18 min easy",functionalCarry:"2 carries",functionalConditioning:"8 min easy"}
};

function rxFor(type){
  if(conditioningPlan[s.week][type]) return conditioningPlan[s.week][type];
  return weekPlan[s.week][type] || type;
}
let s=JSON.parse(localStorage.getItem("ironlog31")||'{"week":1,"logs":{},"done":{}}');
const save=()=>localStorage.setItem("ironlog31",JSON.stringify(s));
function phase(){return phases.find(p=>s.week>=p[1]&&s.week<=p[2])}
function render(){week.textContent=s.week;let p=phase();const emphasis={1:"Base",2:"Build reps",3:"Load",4:"Deload",5:"Strength build",6:"Build reps",7:"Heavy",8:"Deload",9:"Maintain",10:"Push",11:"Heavy exposure",12:"Taper"}[s.week];
phaseEl.textContent=`Phase: ${p[0]} • Week ${s.week}: ${emphasis}`;days.innerHTML="";base.forEach((d,i)=>{let b=document.createElement("button");b.className="day";b.innerHTML=`<b>Day ${i+1} — ${d[0]} ${s.done[s.week]?.includes(i)?"✓":""}</b><span>${d[1]}</span>`;b.onclick=()=>openDay(i);days.appendChild(b)})}
const week=document.querySelector("#week"),
phaseEl=document.querySelector("#phase"),
days=document.querySelector("#days"),
dlg=document.querySelector("#dlg"),
titleEl=document.querySelector("#title"),
goalEl=document.querySelector("#goal"),
contentEl=document.querySelector("#content"),
completeBtn=document.querySelector("#complete"),
prevBtn=document.querySelector("#prev"),
nextBtn=document.querySelector("#next"),
closeWorkoutBtn=document.querySelector("#closeWorkout"),
startBtn=document.querySelector("#start"),
resetBtn=document.querySelector("#reset"),
timeEl=document.querySelector("#time");
function checklist(name,arr,key){let c=document.createElement("div");c.className="card";c.innerHTML=`<h3>${name}</h3>`;arr.forEach((x,i)=>{let l=document.createElement("label");l.className="check";l.innerHTML=`<input type=checkbox ${s.logs[key+i]?"checked":""}> ${x}`;l.querySelector("input").onchange=e=>{s.logs[key+i]=e.target.checked;save()};c.appendChild(l)});contentEl.appendChild(c)}
function setCount(rx){
  let m=String(rx).match(/^(\d+)(?:–(\d+))?×/);
  if(!m) return 1;
  return parseInt(m[1],10);
}
function repRange(rx){
  let m=String(rx).match(/×(\d+)(?:–(\d+))?/);
  return m ? [parseInt(m[1],10), parseInt(m[2]||m[1],10)] : null;
}
function recommendation(pv,rx,type){
  if(!pv || !pv.sets || !pv.sets.length) return "Establish a clean baseline this week.";
  let back=Number(pv.back||0);
  if(back>=3) return "Hold or reduce load; prioritize back tolerance and clean technique.";
  if(type==="reps"){
    let rr=repRange(rx); if(!rr) return "Match last week with clean reps.";
    let completed=pv.sets.filter(z=>z.reps!=="" && z.reps!=null).map(z=>Number(z.reps));
    if(completed.length && completed.every(r=>r>=rr[1])){
      return "Top of range achieved — consider +5 lb (upper) or +5–10 lb (lower) if form and back tolerance stay good.";
    }
    return "Keep the load and try to add 1 rep where possible.";
  }
  if(type.startsWith("carry")) return "If all carries were controlled and back tolerance was 0–2, add 5 lb or 5 yd; change only one variable.";
  if(type==="distance") return "If last week felt controlled, add a small amount of distance or resistance.";
  if(type==="time") return "Follow this week's prescribed interval/time; keep quality high.";
  return "Progress only if technique and back tolerance remain good.";
}
function openDay(di){
  let d=base[di];
  titleEl.textContent=`Day ${di+1} — ${d[0]}`;
  goalEl.textContent=d[1];
  contentEl.innerHTML="";
  checklist("Warm-up",d[2],`w${s.week}d${di}warm`);
  let c=document.createElement("div"); c.className="card"; c.innerHTML="<h3>Workout</h3>";
  d[3].forEach((e,ei)=>{
    let k=`w${s.week}d${di}e${ei}`, pk=`w${s.week-1}d${di}e${ei}`;
    let v=s.logs[k]||{}, pv=s.logs[pk]||{};
    let rx=rxFor(e[1]), n=setCount(rx), carry=e[2].startsWith("carry");
    if(!v.sets){
      v.sets=[];
      if(v.weight||v.reps||v.yards||v.time) v.sets.push({weight:v.weight||"",reps:v.reps||"",yards:v.yards||"",time:v.time||"",side:v.side||""});
    }
    let x=document.createElement("div"); x.className="item";
    let prevSummary="";
    if(s.week>1 && pv.sets && pv.sets.length){
      prevSummary=pv.sets.map((z,i)=>{
        let val=carry?(z.yards||"—")+" yd":e[2]=="time"?(z.time||"—")+" sec":e[2]=="distance"?(z.yards||"—")+" yd":(z.reps||"—")+" reps";
        return `S${i+1}: ${z.weight||"—"} lb × ${val}${z.side?" "+z.side:""}`;
      }).join(" • ");
    }
    x.innerHTML=`<b>${e[0]}</b><div class=rx>${rx}</div>
      ${prevSummary?`<div class=prev>Previous: ${prevSummary}</div>`:""}
      <div class=prev><strong>Next target:</strong> ${recommendation(pv,rx,e[2])}</div>
      <div class=setRows></div>
      <div class=pain>Back tolerance 0–5: <select data-back><option value="">—</option>${[0,1,2,3,4,5].map(q=>`<option ${v.back==q?"selected":""}>${q}</option>`).join("")}</select></div>`;
    let rows=x.querySelector(".setRows");
    for(let si=0;si<n;si++){
      let sv=v.sets[si]||{};
      let second=carry||e[2]=="distance"?"yards":e[2]=="time"?"time":"reps";
      let ph=carry||e[2]=="distance"?"yd":e[2]=="time"?"sec":"reps";
      let row=document.createElement("div"); row.className="grid setrow";
      row.innerHTML=`<span>Set ${si+1}</span><input data-si=${si} data-f=weight type=number inputmode=decimal placeholder="lb" value="${sv.weight||""}">
      <input data-si=${si} data-f=${second} type=number inputmode=decimal placeholder="${ph}" value="${sv[second]||""}">
      ${e[2]=="carryside"?`<select data-si=${si} data-f=side><option value="">Side</option><option ${sv.side=="L"?"selected":""}>L</option><option ${sv.side=="R"?"selected":""}>R</option></select>`:`<select data-si=${si} data-f=rpe><option value="">RPE</option>${[6,7,8,9,10].map(q=>`<option ${sv.rpe==q?"selected":""}>${q}</option>`).join("")}</select>`}`;
      rows.appendChild(row);
    }
    x.querySelectorAll("[data-si]").forEach(el=>el.onchange=()=>{
      s.logs[k]??={sets:[]}; s.logs[k].sets??=[];
      let si=Number(el.dataset.si); s.logs[k].sets[si]??={};
      s.logs[k].sets[si][el.dataset.f]=el.value; save();
    });
    x.querySelector("[data-back]").onchange=el=>{
      s.logs[k]??={sets:[]}; s.logs[k].back=el.target.value; save();
    };
    c.appendChild(x);
  });
  contentEl.appendChild(c);
  checklist("Cool-down",d[4],`w${s.week}d${di}cool`);
  completeBtn.onclick=()=>{s.done[s.week]??=[];if(!s.done[s.week].includes(di))s.done[s.week].push(di);save();render();dlg.close()};
  dlg.showModal();
}
prevBtn.onclick=()=>{if(s.week>1){s.week--;save();render()}};nextBtn.onclick=()=>{if(s.week<12){s.week++;save();render()}};closeWorkoutBtn.onclick=()=>{ if(dlg.open) dlg.close(); };
let sec=90,h=null;function paint(){timeEl.textContent=`${String(Math.floor(sec/60)).padStart(2,"0")}:${String(sec%60).padStart(2,"0")}`};startBtn.onclick=()=>{if(h)return;h=setInterval(()=>{if(--sec<=0){clearInterval(h);h=null;sec=90}paint()},1000)};resetBtn.onclick=()=>{clearInterval(h);h=null;sec=90;paint()};render();
dlg.addEventListener("cancel", (e)=>{ e.preventDefault(); if(dlg.open) dlg.close(); });
dlg.addEventListener("close", ()=>{ document.body.style.overflow=""; });
