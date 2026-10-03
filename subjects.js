/* ---------- Extra subjects engine. Loaded by index.html after the main script.
   Adds three question kinds that any subject file can use, plus the marking for them:
     N(question, number, unit, method, working)          a number answer (units typed by the student are ignored)
     M(question, [correct, wrong, wrong, wrong], method)  multiple choice (options are shuffled; tap one or type its letter)
     T(question, [key ideas], modelAnswer, method, {need, no})  fill-in-the-blank or free text, marked on key ideas, not exact wording.
        Each key idea is a list of accepted word-stems separated by | (e.g. 'vibrat' matches vibrate, vibrates, vibration).
        need = how many of the key ideas are required (default: all). no = stems that make the answer wrong (e.g. 'decreas').
     one(a, b, c)  picks one of several question templates, so a test rarely repeats a question.
   Each Physics topic is a separate file in the physics folder; the list of files is at the bottom of this file. ---------- */
const N=(q,a,u,m,w)=>({q,a,d:`${f(a)}${u?' '+u:''}`,m,w,k:'nm'});
const M=(q,o,m)=>{const c=o[0],opts=shuf(o.slice()),ci=opts.indexOf(c),L='ABCD'[ci];return{q,a:`${L}) ${c}`,d:`${L}) ${c}`,m,w:`The correct option is ${L}: ${c}.`,k:'mc',opts,ci}};
const T=(q,kw,a,m,o)=>({q,a,d:a,m,w:`Your wording can be different. It is marked on the key idea${kw.length>1?'s':''}, not the exact words.`,k:'tx',kw,...o});
const one=(...t)=>()=>pick(t)();
const nrm=s=>' '+String(s).toLowerCase().replace(/−/g,'-').replace(/[^a-z0-9.\-\/ ]+/g,' ').replace(/\s+/g,' ').trim()+' ';
function mark(q,v){const bad='Incorrect. Try again, or press Correction to see the answer.';
if(q.k=='nm'){const g=String(v).replace(/−/g,'-').replace(/,/g,'').match(/-?\d*\.?\d+/),x=g?+g[0]:NaN,ok=Math.abs(x-q.a)<=Math.max(.005,Math.abs(q.a)*.005)+1e-9;return{ok,fb:isNaN(x)?'Type a number for this answer.':bad}}
if(q.k=='mc'){const t=nrm(v).trim();let i=t.length==1?'abcd'.indexOf(t):-1;if(i<0)i=q.opts.findIndex(o=>nrm(o).trim()==t);return{ok:i==q.ci,fb:i<0?'Choose one of the options: tap it, or type its letter.':bad}}
const t=nrm(v),need=q.need||q.kw.length,hit=q.kw.filter(g=>g.split('|').some(s=>t.includes(s))).length,no=(q.no||[]).some(s=>t.includes(s));
return{ok:hit>=need&&!no,fb:hit&&!no?`Nearly there: you have ${hit} of the ${need} key ideas needed. Add what is missing and try again, or press Correction to see a model answer.`:'Not quite. Think about the key idea and try again, or press Correction to see a model answer.'}}
function mcUI(){const i=$('#ans'),q=S.t.qs[S.t.i],v=i?i.value.trim().toUpperCase():'';document.querySelectorAll('.mc').forEach((b,n)=>{b.classList.toggle('on',b.dataset.v==v);b.classList.toggle('right',q.done&&n==q.ci)})}
function sxMount(){if(S.v!='test'||!S.t)return;const q=S.t.qs[S.t.i],i=$('#ans');if(!q.k||!i)return;
const tip={mc:'Tap an option, or type its letter, then press Check Answer.',tx:'Answer in your own words: a word, a phrase or a short sentence. Spell the key words carefully.',nm:'Type a number. You can include the unit if you like.'}[q.k],h=i.nextElementSibling;
if(h&&h.tagName=='P'&&h.classList.contains('mu'))h.textContent=tip;else i.insertAdjacentHTML('afterend',`<p class=mu>${tip}</p>`);
if(q.k=='tx')i.placeholder='Type your answer in your own words';
if(q.k=='mc'){const p=$('#app p.q');if(p)p.insertAdjacentHTML('afterend',`<div class=mcs>${q.opts.map((o,n)=>`<button class="chip mc" data-a=mc data-v=${'ABCD'[n]} ${q.done?'disabled':''}><b>${'ABCD'[n]}</b> ${o}</button>`).join('')}</div>`);i.placeholder='Type A, B, C or D';i.oninput=mcUI;mcUI()}}
document.head.insertAdjacentHTML('beforeend','<style>.mcs{display:grid;gap:8px;margin:10px 0}.mc{width:100%;font-weight:400}.mc b{margin-right:8px}.mc.right{border-color:var(--ok);box-shadow:0 0 0 2px var(--ok);opacity:1}</style>');
const render1=render;render=function(){render1();sxMount()};
const chk0=A.chk;
Object.assign(A,{mc(v){const i=$('#ans');if(!i||i.disabled)return;i.value=v;mcUI()},
chk(){const q=S.t.qs[S.t.i];if(!q.k)return chk0();cap();if(q.done)return;if(!q.last){q.fb='Type an answer first, then press Check Answer.';q.ok=false;render();return}
const g=mark(q,q.last);if(g.ok){q.ok=q.done=true;q.pts=PUP[S.diff];S.t.pup+=q.pts;q.fb=`Correct! 🎉 +${q.pts} ${q.pts>1?'Puppies':'Puppy'} 🐶`;cheer()}else{q.ok=false;q.fb=g.fb}render()}});
const G10=`Use g = 10 N/kg.`;BANK.Physics={};
['forces','energy','electricity','magnetism','waves','matter','space','skills'].forEach(u=>{const s=document.createElement('script');s.src='physics/'+u+'.js';s.async=false;document.head.append(s)});
if(S.v=='test')render();
