const phases=[["Foundation",1,4],["Build",5,8],["Maintain & Finish",9,12]];
const base=[
["Upper Strength","Keep pressing and pulling strength high without unsupported bent-over loading.",
["Bike/elliptical — 5 min","Band pull-aparts — 2×15","External rotation — 2×10/side","Scapular push-ups — 2×8"],
[["DB or Machine Chest Press","4×5–8","reps"],["Chest-Supported Row","4×6–8","reps"],["Incline DB Press","3×8–10","reps"],["Neutral-Grip Lat Pulldown","3×8–10","reps"],["Seated DB/Machine Shoulder Press","3×8–10","reps"],["Face Pull","3×12–15","reps"],["Cable Curl","3×10–12","reps"],["Rope Pressdown","3×10–12","reps"],["Bird Dog","2×6–8/side","reps"],["Side Plank","2×20–40 sec","time"]],
["Easy walk — 3 min","Pec stretch — 30 sec/side","Lat stretch — 30 sec/side","Slow breathing — 2 min"]],
["Lower Strength + Core","Train legs hard while minimizing unnecessary spinal loading.",
["Bike — 5 min","Glute bridge — 2×10","Bodyweight split squat — 1×8/side","Bird dog — 1×6/side"],
[["Hack Squat / Belt Squat / Leg Press","4×6–8","reps"],["Supported Bulgarian Split Squat","3×8/side","reps"],["Hip Thrust / Glute Bridge","3×8–10","reps"],["Seated/Lying Leg Curl","3×10–12","reps"],["Calf Raise","3×10–15","reps"],["Modified Curl-Up","2×6–8","reps"],["Pallof Press","2×10/side","reps"]],
["Easy bike — 3 min","Hip flexor stretch — 30 sec/side","Gentle hamstring mobility","Slow breathing — 2 min"]],
["Conditioning + Carries","Conditioning, work capacity, grip and trunk stability.",
["Bike/elliptical — 6 min","Gentle cat-camel ×6","Glute bridge — 2×10","Band row — 2×12"],
[["Sled Push","4 rounds","distance"],["Battle Ropes","4×20–30 sec","time"],["Farmer's Walk","4 carries","carry"],["Suitcase Carry","3 carries/side","carryside"],["Bike / Elliptical","4×60–90 sec","time"]],
["Easy walk — 3 min","Hip flexor stretch","Thoracic rotation — 5/side","Slow breathing — 2 min"]],
["Upper Hypertrophy + Arms","Maintain upper-body muscle with joint-friendly volume.",
["Elliptical — 5 min","Band pull-aparts — 2×15","Face pulls — 1×15","Push-up — 1×10"],
[["Incline DB Press","3×8–12","reps"],["Chest-Supported Row","3×8–12","reps"],["Machine Chest Press","3×10–12","reps"],["Pulldown","3×10–12","reps"],["Lateral Raise","3×12–15","reps"],["Rear-Delt Fly","3×12–15","reps"],["Cable Curl","3×10–12","reps"],["Rope Pressdown","3×10–12","reps"],["Hammer Curl","2×12","reps"],["Overhead Cable Triceps Extension","2×12","reps"]],
["Easy bike — 3 min","Pec stretch","Lat stretch","Slow breathing — 2 min"]],
["Full Body Functional","Athletic full-body work while respecting back tolerance.",
["Bike — 5 min","Glute bridge — 2×10","Band row — 2×12","Step-up — 1×8/side","Bird dog — 1×6/side"],
[["Goblet Squat to Box","3×8–10","reps"],["Machine/DB Chest Press","3×8–10","reps"],["Chest-Supported Row","3×8–10","reps"],["Step-Up","3×8/side","reps"],["Cable Chop","3×10/side","reps"],["Farmer's Walk","3 carries","carry"],["Bike / Sled Intervals","8–12 min","time"]],
["Easy walk — 3 min","Hip flexor stretch","Chest/lat mobility","Slow breathing — 2 min"]]
];
let s=JSON.parse(localStorage.getItem("ironlog31")||'{"week":1,"logs":{},"done":{}}');
const save=()=>localStorage.setItem("ironlog31",JSON.stringify(s));
function phase(){return phases.find(p=>s.week>=p[1]&&s.week<=p[2])}
function render(){week.textContent=s.week;let p=phase();phaseEl.textContent=`Phase: ${p[0]} • Weeks ${p[1]}–${p[2]}`;days.innerHTML="";base.forEach((d,i)=>{let b=document.createElement("button");b.className="day";b.innerHTML=`<b>Day ${i+1} — ${d[0]} ${s.done[s.week]?.includes(i)?"✓":""}</b><span>${d[1]}</span>`;b.onclick=()=>openDay(i);days.appendChild(b)})}
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
function openDay(di){let d=base[di];titleEl.textContent=`Day ${di+1} — ${d[0]}`;goalEl.textContent=d[1];contentEl.innerHTML="";checklist("Warm-up",d[2],`w${s.week}d${di}warm`);let c=document.createElement("div");c.className="card";c.innerHTML="<h3>Workout</h3>";d[3].forEach((e,ei)=>{let k=`w${s.week}d${di}e${ei}`,pk=`w${s.week-1}d${di}e${ei}`,v=s.logs[k]||{},pv=s.logs[pk]||{};let x=document.createElement("div");x.className="item";let carry=e[2].startsWith("carry");x.innerHTML=`<b>${e[0]}</b><div class=rx>${e[1]}</div>${s.week>1&&Object.keys(pv).length?`<div class=prev>Previous: ${pv.weight||"—"} lb ${carry?"× "+(pv.yards||"—")+" yd":"× "+(pv.reps||"—")+" reps"}</div>`:""}<div class=grid><span>Log</span><input data-f=weight type=number placeholder="lb" value="${v.weight||""}"><input data-f=${carry?"yards":e[2]=="time"?"time":e[2]=="distance"?"yards":"reps"} type=number placeholder="${carry||e[2]=="distance"?"yd":e[2]=="time"?"time":"reps"}" value="${v[carry?"yards":e[2]=="time"?"time":e[2]=="distance"?"yards":"reps"]||""}"><select data-f=rpe><option value="">RPE</option>${[6,7,8,9,10].map(n=>`<option ${v.rpe==n?"selected":""}>${n}</option>`).join("")}</select></div>${e[2]=="carryside"?`<div class=rx>Log each side as separate exposure; alternate L/R.</div>`:""}<div class=pain>Back tolerance 0–5: <select data-f=back><option value="">—</option>${[0,1,2,3,4,5].map(n=>`<option ${v.back==n?"selected":""}>${n}</option>`).join("")}</select></div>`;x.querySelectorAll("[data-f]").forEach(el=>el.onchange=()=>{s.logs[k]??={};s.logs[k][el.dataset.f]=el.value;save()});c.appendChild(x)});contentEl.appendChild(c);checklist("Cool-down",d[4],`w${s.week}d${di}cool`);completeBtn.onclick=()=>{s.done[s.week]??=[];if(!s.done[s.week].includes(di))s.done[s.week].push(di);save();render();dlg.close()};dlg.showModal()}
prevBtn.onclick=()=>{if(s.week>1){s.week--;save();render()}};nextBtn.onclick=()=>{if(s.week<12){s.week++;save();render()}};closeWorkoutBtn.onclick=()=>{ if(dlg.open) dlg.close(); };
let sec=90,h=null;function paint(){timeEl.textContent=`${String(Math.floor(sec/60)).padStart(2,"0")}:${String(sec%60).padStart(2,"0")}`};startBtn.onclick=()=>{if(h)return;h=setInterval(()=>{if(--sec<=0){clearInterval(h);h=null;sec=90}paint()},1000)};resetBtn.onclick=()=>{clearInterval(h);h=null;sec=90;paint()};render();
dlg.addEventListener("cancel", (e)=>{ e.preventDefault(); if(dlg.open) dlg.close(); });
dlg.addEventListener("close", ()=>{ document.body.style.overflow=""; });
