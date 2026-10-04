/* English helpers, loaded before the English topic files.
   A term entry is [term, definition, acceptedStems]; an example entry is [example, technique, explanation, acceptedStems].
   The stems are optional and list other accepted answers, separated by |. All passages and example lines are original. */
const EN={
st:t=>' '+plain(t),
pk:W=>shuf(W.slice()).slice(0,4),
mcDef:W=>()=>{const s=EN.pk(W);return M(`Which term means: "${s[0][1]}"?`,s.map(x=>x[0]),`This is the meaning of "${s[0][0]}".`)},
mcTerm:W=>()=>{const s=EN.pk(W);return M(`What does the term "${s[0][0]}" mean?`,s.map(x=>x[1]),`"${s[0][0]}" means: ${s[0][1]}.`)},
name:W=>()=>{const [t,d,k]=pick(W);return T(`Give the term that means: "${d}"`,[k||EN.st(t)],t,`The term is "${t}".`)},
mcEx:X=>()=>{const [e,t,m]=pick(X),o=shuf([...new Set(X.map(x=>x[1]))].filter(x=>x!=t)).slice(0,3);return M(`Which technique is used in this line? "${e}"`,[t,...o],m)},
nameEx:X=>()=>{const [e,t,m,k]=pick(X);return T(`Name the technique used in this line: "${e}"`,[k||EN.st(t)],t,m)},
rd:(tx,q,o,m)=>()=>M(`Read this extract: "${tx}" ${q}`,o,m),
ex:(q,kw,a,m,o)=>()=>T(q,kw,a,m||`Your answer is checked for the key ideas, not the exact words. Compare it with the model answer.`,o)
};
