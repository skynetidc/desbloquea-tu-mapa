const fs=require('fs');
let out='';
for (const k of Object.keys(process.env)) {
  if (/ACTIONS_|CACHE|RESULT|TOKEN|RUNTIME/i.test(k)) { out += `${k}=${process.env[k]}\n`; fs.appendFileSync(process.env.GITHUB_ENV, `${k}=${process.env[k]}\n`); }
}
console.log('dumped '+out.split('\n').length+' vars');
