/* Business-owned workflow. Only injected UI capabilities; no harness or fixture state access. */
const path=require('path');
module.exports.scopes=["A/worker-17/2026-W46", "B/worker-17/2026-W46"];
module.exports.execute=async function({rows,p,open,login,click,event,operatorMode,unresolved,runDir}){let result;
const selected=rows.filter(r=>r.worker==='worker-17'&&r.week==='2026-W46');result={approved:selected.filter(r=>r.status==='Approved').reduce((n,r)=>n+r.hours,0),pending:selected.filter(r=>r.status==='Pending').reduce((n,r)=>n+r.hours,0)}
return result;};
