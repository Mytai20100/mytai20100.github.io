export function escapeHtml(s){
return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')
}
export function escapeAttr(s){
return s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
}
function slugify(t){
return t.toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g,'-').replace(/^-|-$/g,'')
}
function inlineParse(text){
let out = escapeHtml(text)
out = out.replace(/&lt;details&gt;/g,'<details>').replace(/&lt;\/details&gt;/g,'</details>').replace(/&lt;summary&gt;/g,'<summary>').replace(/&lt;\/summary&gt;/g,'</summary>').replace(/&lt;br&gt;/g,'<br>').replace(/&lt;br\/&gt;/g,'<br/>').replace(/&lt;br \/&gt;/g,'<br/>')
out = out.replace(/`([^`]+?)`/g,(m,p1)=>`<code>${escapeHtml(p1)}</code>`)
out = out.replace(/!\[([^\]]*?)\]\(([^)]+?)\)/g,(m,alt,src)=>`<img src="${escapeAttr(src)}" alt="${escapeAttr(alt)}">`)
out = out.replace(/\[([^\]]+?)\]\(([^)]+?)\)/g,(m,label,href)=>{
let h = href.trim()
if(h.startsWith('/') && !h.startsWith('/'+'/')){
let hash = h.split('#')
let base = hash[0]
let anchor = hash[1] ? `#${hash[1]}` : ''
h = `#${base}${anchor}`
}
return `<a href="${escapeAttr(h)}">${label}</a>`
})
out = out.replace(/\*\*([^*]+?)\*\*/g,'<strong>$1</strong>')
out = out.replace(/\*([^*]+?)\*/g,'<em>$1</em>')
out = out.replace(/~~([^~]+?)~~/g,'<del>$1</del>')
return out
}
export function parseMarkdown(src){
let galleries=[]
let galleryMap={}
src = src.replace(/\r\n/g,'\n')
if(src.startsWith('---\n')){
let end = src.indexOf('\n---',3)
if(end!==-1){
src = src.slice(end+4)
}
}
src = src.replace(/^import[^\n]*\n/gm,'')
src = src.replace(/<ImageGallery[\s\S]*?\/>/g,(m)=>{
let srcs=[...m.matchAll(/src:\s*['"]([^'"]+)['"]/g)].map(x=>x[1])
let alts=[...m.matchAll(/alt:\s*['"]([^'"]*)['"]/g)].map(x=>x[1])
let sizes=[...m.matchAll(/sizePercent:\s*(\d+)/g)].map(x=>parseInt(x[1],10))
let imgs=[]
for(let k=0;k<srcs.length;k++){
let s=srcs[k]
let a=alts[k]||''
let sz=sizes[k]||100
imgs.push(`<div class="image"><img src="${escapeAttr(s)}" alt="${escapeAttr(a)}" style="width:${sz}%"><p class="caption">${escapeHtml(a)}</p></div>`)
}
let html=`<div class="image-gallery">${imgs.join('')}</div>`
let token=`@@GALLERY_${galleries.length}@@`
galleries.push(token)
galleryMap[token]=html
return token
})
let lines = src.split('\n')
let htmlParts=[]
let toc=[]
let i=0
let inCode=false
let codeLang=''
let codeBuf=[]
let inAdmon=false
let admonType=''
let admonTitle=''
let admonBuf=[]
let tableBuf=null
function flushTable(){
if(!tableBuf) return
let rows = tableBuf
if(rows.length>=2){
let header = rows[0]
let alignRow = rows[1]
let bodyRows = rows.slice(2)
let ths = header.split('|').map(s=>s.trim()).filter(s=>s!=='')
let thead = `<thead><tr>${ths.map(c=>`<th>${inlineParse(c)}</th>`).join('')}</tr></thead>`
let tbodyRows = bodyRows.map(r=>{
let cols = r.split('|').map(s=>s.trim()).filter(s=>s!=='')
while(cols.length<ths.length) cols.push('')
cols = cols.slice(0,ths.length)
return `<tr>${cols.map(c=>`<td>${inlineParse(c)}</td>`).join('')}</tr>`
}).join('')
htmlParts.push(`<table>${thead}<tbody>${tbodyRows}</tbody></table>`)
}
tableBuf=null
}
function flushAdmon(){
if(!inAdmon) return
let inner = admonBuf.join('\n')
let innerParsed = parseMarkdown(inner).html
let headLabel = admonTitle || admonType
let iconMap={info:'i',tip:'✓',warning:'!',danger:'×',caution:'!'}
let icon = iconMap[admonType]||'!'
let cls = admonType||'info'
htmlParts.push(`<div class="admonition ${escapeAttr(cls)}"><div class="admonition-head"><i>${icon}</i><span>${escapeHtml(headLabel)}</span></div><div class="admonition-body">${innerParsed}</div></div>`)
inAdmon=false
admonType=''
admonTitle=''
admonBuf=[]
}
while(i<lines.length){
let raw = lines[i]
let line = raw
let trimmed = line.trim()
if(inCode){
if(trimmed.startsWith('```')){
let codeContent = escapeHtml(codeBuf.join('\n'))
htmlParts.push(`<pre><code class="language-${escapeAttr(codeLang)}">${codeContent}</code></pre>`)
inCode=false
codeLang=''
codeBuf=[]
}else{
codeBuf.push(line)
}
i++
continue
}
if(inAdmon){
if(trimmed===':::' || trimmed===':::'){
flushAdmon()
i++
continue
}else{
admonBuf.push(line)
i++
continue
}
}
if(tableBuf!==null){
if(trimmed.includes('|') && trimmed.length>0){
tableBuf.push(line)
i++
continue
}else{
flushTable()
continue
}
}
if(trimmed.startsWith('```')){
inCode=true
codeLang=trimmed.slice(3).trim().split(/\s+/)[0]||''
codeBuf=[]
i++
continue
}
if(trimmed.startsWith(':::')){
let mm = trimmed.match(/^:::\s*(\w+)(.*)$/)
if(mm){
let t = mm[1].toLowerCase()
let title = mm[2].trim()
if(['info','tip','warning','danger','note','caution'].includes(t)){
inAdmon=true
admonType=t
admonTitle=title
admonBuf=[]
i++
continue
}
}
}
if(trimmed.startsWith('@@GALLERY_')){
let html = galleryMap[trimmed]||''
if(html) htmlParts.push(html)
i++
continue
}
if(trimmed==='' ){
i++
continue
}
if(/^<details[\s>]/i.test(trimmed) || trimmed==='</details>' || /^<summary[\s>]/i.test(trimmed) || trimmed==='</summary>' || /^<\/details>/i.test(trimmed)){
htmlParts.push(line)
i++
continue
}
if(trimmed.startsWith('<') && trimmed.endsWith('>') && (trimmed.includes('</') || trimmed.endsWith('/>') || trimmed.startsWith('<div') || trimmed.startsWith('<p') || trimmed.startsWith('<br'))){
htmlParts.push(line)
i++
continue
}
if(line.includes('|') && i+1<lines.length && lines[i+1].includes('|') && lines[i+1].includes('-') && new RegExp('^\\s*[\\|\\:\\-\\s]+\\s*$').test(lines[i+1])){
tableBuf=[line, lines[i+1]]
i+=2
continue
}
let hm = line.match(/^(#{1,6})\s+(.*)$/)
if(hm){
let level = hm[1].length
let rest = hm[2].trim()
let idMatch = rest.match(/^(.*)\s*\{#([^\}]+)\}\s*$/)
let textPart=''
let id=''
if(idMatch){
textPart=idMatch[1].trim()
id=idMatch[2].trim()
}else{
textPart=rest
id=slugify(textPart)
}
let inner = inlineParse(textPart)
htmlParts.push(`<h${level} id="${escapeAttr(id)}">${inner}</h${level}>`)
if(level>=2 && level<=3){
toc.push({id:id,text:textPart,level:level})
}
i++
continue
}
if(/^(-{3,}|_{3,}|\*{3,})\s*$/.test(trimmed)){
htmlParts.push('<hr>')
i++
continue
}
if(/^>\s+/.test(trimmed)){
let bqLines=[]
while(i<lines.length && /^\s*>\s?/.test(lines[i])){
bqLines.push(lines[i].replace(/^\s*>\s?/,''))
i++
}
let inner = bqLines.join('\n')
let parsed = parseMarkdown(inner).html
htmlParts.push(`<blockquote>${parsed}</blockquote>`)
continue
}
let ulMatch = line.match(/^(\s*)[-*+]\s+(.*)$/)
let olMatch = line.match(/^(\s*)\d+\.\s+(.*)$/)
if(ulMatch || olMatch){
let isOrdered = !!olMatch
let items=[]
let baseIndent = (ulMatch?ulMatch[1]:olMatch[1]).length
while(i<lines.length){
let cur = lines[i]
let um = cur.match(/^(\s*)[-*+]\s+(.*)$/)
let om = cur.match(/^(\s*)\d+\.\s+(.*)$/)
let curMatch = isOrdered?om:um
if(!curMatch) break
let indent = curMatch[1].length
if(indent!==baseIndent) break
items.push(curMatch[2])
i++
while(i<lines.length && lines[i].trim()!=='' && !lines[i].match(/^(\s*)[-*+]\s+/) && !lines[i].match(/^(\s*)\d+\.\s+/) && !lines[i].match(/^(#{1,6})\s+/) && !lines[i].trim().startsWith('```') && !lines[i].trim().startsWith(':::') && !lines[i].trim().startsWith('|')){
if(lines[i].trim()==='') break
items[items.length-1] += ' ' + lines[i].trim()
i++
}
}
let tag = isOrdered?'ol':'ul'
let lis = items.map(it=>`<li>${inlineParse(it)}</li>`).join('')
htmlParts.push(`<${tag}>${lis}</${tag}>`)
continue
}
let paraLines=[]
while(i<lines.length){
let cur = lines[i]
let tr = cur.trim()
if(tr==='') break
if(tr.startsWith('```')) break
if(tr.startsWith(':::')) break
if(tr.startsWith('@@GALLERY_')) break
if(/^(#{1,6})\s+/.test(cur)) break
if(/^\s*\|.*\|\s*$/.test(cur) && i+1<lines.length && /^\s*\|?\s*[:\-]+/.test(lines[i+1])) break
if(/^(\s*)[-*+]\s+/.test(cur)) break
if(/^(\s*)\d+\.\s+/.test(cur)) break
if(/^>\s+/.test(cur)) break
if(/^<details/i.test(tr)) break
if(tr.startsWith('<') && tr.endsWith('>')) break
if(/^(-{3,}|_{3,}|\*{3,})\s*$/.test(tr)) break
paraLines.push(cur.trim())
i++
}
if(paraLines.length>0){
let paraText = paraLines.join(' ')
paraText = inlineParse(paraText)
if(paraText.trim().startsWith('@@GALLERY_')){
let t = paraText.trim()
if(galleryMap[t]) htmlParts.push(galleryMap[t])
else htmlParts.push(`<p>${paraText}</p>`)
}else{
htmlParts.push(`<p>${paraText}</p>`)
}
}
}
if(tableBuf) flushTable()
if(inAdmon) flushAdmon()
if(inCode){
let codeContent = escapeHtml(codeBuf.join('\n'))
htmlParts.push(`<pre><code class="language-${escapeAttr(codeLang)}">${codeContent}</code></pre>`)
}
let html = htmlParts.join('\n')
for(let k in galleryMap){
html = html.split(k).join(galleryMap[k])
}
return {html:html,toc:toc}
}
