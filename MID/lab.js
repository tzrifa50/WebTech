let c1 = [];
let r1 = [];
let c2 = [];
let r2 = [];

function starSystem(boxId, selId){
  let stars = document.querySelectorAll("#" + boxId + " span");
  let selected = 0;

  stars.forEach(s=>{
    s.addEventListener("click", ()=>{
      selected = Number(s.dataset.val);
      document.getElementById(selId).textContent = selected;
      stars.forEach(x=>x.classList.remove("on"));
      for(let i=0; i<selected; i++){
        stars[i].classList.add("on");
      }
    });
  });

  return ()=>selected;
}

let getStar1 = starSystem("rateBox1","sel1");
let getStar2 = starSystem("rateBox2","sel2");

document.getElementById("form1").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name1").value.trim();
  let email = document.getElementById("email1").value.trim();
  let text = document.getElementById("text1").value.trim();
  let rate = getStar1();

  let ok = true;

  if(name.length < 2 || name.length > 50){
    document.getElementById("n1").textContent = "Name should be between 2 and 50 characters";
    ok = false;
  } else document.getElementById("n1").textContent = "";

  if(email !== "" && !email.includes("@")){
    document.getElementById("e1").textContent = "Please enter a valid email address";
    ok = false;
  } else document.getElementById("e1").textContent = "";

  if(text.length < 10 || text.length > 500){
    document.getElementById("t1").textContent = "Comment should between 10 and 500 characters";
    ok = false;
  } else document.getElementById("t1").textContent = "";

  if(!ok) return;

  c1.push({name, text, rate});
  if(rate > 0) r1.push(rate);

  document.getElementById("count1").textContent = c1.length;
  let avg = r1.length ? (r1.reduce((a,b)=>a+b)/r1.length).toFixed(1) : 0;
  document.getElementById("avg1").textContent = avg;

  let box = document.getElementById("list1");
  box.innerHTML = "";
  c1.forEach(x=>{
    let d = document.createElement("div");
    d.textContent = x.name + " (" + (x.rate>0? "★"+x.rate:"No Rating") + "): " + x.text;
    box.appendChild(d);
  });

  this.reset();
  document.getElementById("sel1").textContent = 0;
  document.querySelectorAll("#rateBox1 span").forEach(s=>s.classList.remove("on"));
});

document.getElementById("form2").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name2").value.trim();
  let email = document.getElementById("email2").value.trim();
  let text = document.getElementById("text2").value.trim();
  let rate = getStar2();

  let ok = true;

  if(name.length < 2 || name.length > 50){
    document.getElementById("n2").textContent = "Name should be between 2 and 50 characters";
    ok = false;
  } else document.getElementById("n2").textContent = "";

  if(email !== "" && !email.includes("@")){
    document.getElementById("e2").textContent = "Please enter a valid email address";
    ok = false;
  } else document.getElementById("e2").textContent = "";

  if(text.length < 10 || text.length > 500){
    document.getElementById("t2").textContent = "Comment should between 10 and 500 characters";
    ok = false;
  } else document.getElementById("t2").textContent = "";

  if(!ok) return;

  c2.push({name, text, rate});
  if(rate > 0) r2.push(rate);

  document.getElementById("count2").textContent = c2.length;
  let avg = r2.length ? (r2.reduce((a,b)=>a+b)/r2.length).toFixed(1) : 0;
  document.getElementById("avg2").textContent = avg;

  let box = document.getElementById("list2");
  box.innerHTML = "";
  c2.forEach(x=>{
    let d = document.createElement("div");
    d.textContent = x.name + " (" + (x.rate>0? "★"+x.rate:"No Rating") + "): " + x.text;
    box.appendChild(d);
  });

  this.reset();
  document.getElementById("sel2").textContent = 0;
  document.querySelectorAll("#rateBox2 span").forEach(s=>s.classList.remove("on"));
});
