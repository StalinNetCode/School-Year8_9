/* ---------- Extra subjects engine. Loaded by index.html after the main script.
   Adds three question kinds that any subject file can use, plus the marking for them:
     N(question, number, unit, method, working)          a number answer (units typed by the student are ignored)
     M(question, [correct, wrong, wrong, wrong], method)  multiple choice (options are shuffled; tap one or type its letter)
     T(question, [key ideas], modelAnswer, method, {need, no})  fill-in-the-blank or free text, marked on key ideas, not exact wording.
        Each key idea is a list of accepted word-stems separated by | (e.g. 'vibrat' matches vibrate, vibrates, vibration).
        need = how many of the key ideas are required (default: all). no = stems that make the answer wrong (e.g. 'decreas').
     one(a, b, c)  picks one of several question templates, so a test rarely repeats a question.
     L(question, text)  turns any question into a listening question: a Listen button reads the text aloud in the subject's language.
   Typed answers are compared without accents, so "espanol" matches "español".
   Each topic is a separate file in a folder named after its subject (physics, chemistry, biology, spanish, english); the list is at the bottom of this file.
   A "Previous question" button is added to every test (all subjects) so a student can look back at earlier questions.
   A subject that is not already in the portal's subject list (such as Biology) is added to the list automatically. ---------- */
const N=(q,a,u,m,w)=>({q,a,d:`${f(a)}${u?' '+u:''}`,m,w,k:'nm'});
const M=(q,o,m)=>{const c=o[0],opts=shuf(o.slice()),ci=opts.indexOf(c),L='ABCD'[ci];return{q,a:`${L}) ${c}`,d:`${L}) ${c}`,m,w:`The correct option is ${L}: ${c}.`,k:'mc',opts,ci}};
const T=(q,kw,a,m,o)=>({q,a,d:a,m,w:`Your wording can be different. It is marked on the key idea${kw.length>1?'s':''}, not the exact words.`,k:'tx',kw,...o});
const one=(...t)=>()=>pick(t)();
const plain=s=>String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
const L=(x,say)=>({...x,say});
const nrm=s=>' '+plain(s).replace(/−/g,'-').replace(/[^a-z0-9.\-\/ ]+/g,' ').replace(/\.(?= |$)/g,' ').replace(/\s+/g,' ').trim()+' ';
function mark(q,v){const bad='Incorrect. Try again, or press Correction to see the answer.';
if(q.k=='nm'){const g=String(v).replace(/−/g,'-').replace(/,/g,'').match(/-?\d*\.?\d+/),x=g?+g[0]:NaN,ok=Math.abs(x-q.a)<=Math.max(.005,Math.abs(q.a)*.005)+1e-9;return{ok,fb:isNaN(x)?'Type a number for this answer.':bad}}
if(q.k=='mc'){const t=nrm(v).trim();let i=t.length==1?'abcd'.indexOf(t):-1;if(i<0)i=q.opts.findIndex(o=>o.trim()==String(v).trim());if(i<0)i=q.opts.findIndex(o=>nrm(o).trim()==t);return{ok:i==q.ci,fb:i<0?'Choose one of the options: tap it, or type its letter.':bad}}
const t=nrm(v),need=q.need||q.kw.length,hit=q.kw.filter(g=>g.split('|').some(s=>t.includes(s))).length,no=(q.no||[]).some(s=>t.includes(s));
return{ok:hit>=need&&!no,fb:hit&&!no?`Nearly there: you have ${hit} of the ${need} key ideas needed. Add what is missing and try again, or press Correction to see a model answer.`:'Not quite. Think about the key idea and try again, or press Correction to see a model answer.'}}
function mcUI(){const i=$('#ans'),q=S.t.qs[S.t.i],v=i?i.value.trim().toUpperCase():'';document.querySelectorAll('.mc').forEach((b,n)=>{b.classList.toggle('on',b.dataset.v==v);b.classList.toggle('right',q.done&&n==q.ci)})}
function sxMount(){if(S.v!='test'||!S.t)return;const q=S.t.qs[S.t.i],i=$('#ans');if(!q.k||!i)return;
const tip={mc:'Tap an option, or type its letter, then press Check Answer.',tx:'Answer in your own words: a word, a phrase or a short sentence. Spell the key words carefully.',nm:'Type a number. You can include the unit if you like.'}[q.k],h=i.nextElementSibling;
if(h&&h.tagName=='P'&&h.classList.contains('mu'))h.textContent=tip;else i.insertAdjacentHTML('afterend',`<p class=mu>${tip}</p>`);
if(q.k=='tx')i.placeholder='Type your answer in your own words';
if(q.k=='mc'){const p=$('#app p.q');if(p)p.insertAdjacentHTML('afterend',`<div class=mcs>${q.opts.map((o,n)=>`<button class="chip mc" data-a=mc data-v=${'ABCD'[n]} ${q.done?'disabled':''}><b>${'ABCD'[n]}</b> ${o}</button>`).join('')}</div>`);i.placeholder='Type A, B, C or D';i.oninput=mcUI;mcUI()}
if(q.say){const p=$('#app p.q');if(p)p.insertAdjacentHTML('afterend',`<p><button class=g data-a=say>🔊 Listen</button><button class=g data-a=saytx>Cannot hear it? Show the text</button></p><p class=mu id=saytx hidden>${q.say}</p>`)}}
document.head.insertAdjacentHTML('beforeend','<style>.mcs{display:grid;gap:8px;margin:10px 0}.mc{width:100%;font-weight:400}.mc b{margin-right:8px}.mc.right{border-color:var(--ok);box-shadow:0 0 0 2px var(--ok);opacity:1}</style>');
function bkMount(){if(S.v!='test'||!S.t||S.t.i<1)return;const i=$('#ans'),c=i&&i.closest('.card');if(!c)return;const n=c.querySelector('[data-a=next]'),b='<button class=g data-a=back>← Previous question</button>';if(n)n.insertAdjacentHTML('beforebegin',b);else c.insertAdjacentHTML('beforeend',b)}
const render1=render;render=function(){render1();sxMount();bkMount()};
const chk0=A.chk;
Object.assign(A,{back(){if(!S.t||S.t.i<1)return;cap();S.t.i--;render()},
say(){try{const u=new SpeechSynthesisUtterance(S.t.qs[S.t.i].say);u.lang=({Spanish:'es-ES',French:'fr-FR'})[S.subj]||'en-GB';u.rate=.85;speechSynthesis.cancel();speechSynthesis.speak(u)}catch(e){A.saytx()}},saytx(){const e=$('#saytx');if(e)e.hidden=false},
mc(v){const i=$('#ans');if(!i||i.disabled)return;i.value=v;mcUI()},
chk(){const q=S.t.qs[S.t.i];if(!q.k)return chk0();cap();if(q.done)return;if(!q.last){q.fb='Type an answer first, then press Check Answer.';q.ok=false;render();return}
const g=mark(q,q.last);if(g.ok){q.ok=q.done=true;q.pts=PUP[S.diff];S.t.pup+=q.pts;q.fb=`Correct! 🎉 +${q.pts} ${q.pts>1?'Puppies':'Puppy'} 🐶`;cheer()}else{q.ok=false;q.fb=g.fb}render()}});
const G10=`Use g = 10 N/kg.`;
const LOAD={Physics:['forces','energy','electricity','magnetism','waves','matter','space','skills'],Chemistry:['particles','atoms','mixtures','reactions','acids','periodic','energy','materials','earth','skills'],Biology:['cells','transport','photosynthesis','respiration','digestion','reproduction','ecosystems','health','genetics','evolution','skills'],Spanish:['core','identity','freetime','school','travel','future','home','food','culture','environment','society','communication','grammar','vocabulary','practical'],English:['core','poetry','shakespeare','media','prose','creative','reading','writing','grammar','techniques','comparison','critical','speaking']};
for(const sj in LOAD){BANK[sj]={};if(!SUBJ.includes(sj))SUBJ.splice(SUBJ.indexOf('Chemistry')+1,0,sj);LOAD[sj].forEach(u=>{const s=document.createElement('script');s.src=sj.toLowerCase()+'/'+u+'.js';s.async=false;document.head.append(s)})}
const sbx=$('#sb');if(sbx){const v=sbx.value;sbx.innerHTML='<option value="">Choose a subject…</option>'+SUBJ.map(s=>`<option>${s}</option>`).join('');sbx.value=v}
if(S.v=='test')render();
