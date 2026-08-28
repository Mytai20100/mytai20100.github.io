import { parseMarkdown } from './markdown.js?v=20260827b'
import { renderToc, bindTocHighlight, renderTocInline } from './toc.js?v=20260827b'
import { renderSidebar } from './sidebar.js?v=20260827b'
let sidebarData=null
let docsIndex=null
let currentId='Home'
function getIdFromLocation(){
let hash=location.hash
if(hash.startsWith('#/')){
let part=hash.slice(2)
let q=part.split('?')[0].split('#')[0]
return q||'Home'
}
let path=location.pathname.replace(new RegExp('^/'), '').replace(new RegExp('/$'), '')
if(path && !path.includes('.') && path!=='index.html'){
return path
}
return 'Home'
}
function updateActiveLinks(id){
document.querySelectorAll('[data-route]').forEach(a=>{
a.classList.toggle('active', a.dataset.route===id)
})
}
async function loadDocument(id){
let file=id
let tryFiles=[`docs/${file}.md`,`docs/${file}.mdx`]
let text=null
let found=''
for(let p of tryFiles){
try{
let res=await fetch(p)
if(res.ok){ text=await res.text(); found=p; break; }
}catch(e){}
}
let contentEl=document.getElementById('article')
let titleEl=document.getElementById('docTitle')
let breadcrumbEl=document.getElementById('breadcrumb')
let tocEl=document.getElementById('tocList')
let tocInlineEl=document.getElementById('tocInline')
let metaEl=document.getElementById('docMeta')
if(text===null){
titleEl.textContent='Không tìm thấy trang'
breadcrumbEl.innerHTML=`<a href="#/">Trang chủ</a><span>/</span><span>404</span>`
contentEl.innerHTML=`<div class="notfound"><span class="badge">404</span><h2>Trang không tồn tại</h2><p style="color:var(--muted);font-weight:700">Không tìm thấy tài liệu “${id}”, có thể do sai liên kết hoặc tài liệu chưa được chuyển.</p><a class="btn btn-primary" href="#/Home">Về trang chủ</a></div>`
if(tocEl) tocEl.innerHTML=`<div style="padding:12px;font-weight:700;color:var(--muted)">Không có mục lục</div>`
if(tocInlineEl) tocInlineEl.style.display='none'
if(metaEl) metaEl.innerHTML=`<span class="pill pill-peach">404</span>`
return
}
let parsed=parseMarkdown(text)
contentEl.innerHTML=parsed.html
if(tocInlineEl){
renderTocInline(parsed.toc, tocInlineEl)
}
let titleMatch=text.match(/^#\s+(.+?)(?:\s*\{#.*?\})?\s*$/m)
let rawTitle=titleMatch?titleMatch[1].trim():''
rawTitle=rawTitle.replace(/\s*\{#.*?\}/,'')
titleEl.textContent=rawTitle||id
let labelMatch=text.match(/sidebar_label:\s*(.+)/)
let label=labelMatch?labelMatch[1].trim().replace(/^['"]|['"]$/g,''):rawTitle
breadcrumbEl.innerHTML=`<a href="#/">Trang chủ</a><span>/</span><a href="#/${id}">${label||id}</a>`
if(metaEl){
let cat=getCategoryForId(id)
metaEl.innerHTML=`<span class="pill pill-amber">${cat||'Tài liệu'}</span><span class="pill">${id}</span><a class="pill pill-gold" href="${'https:' + '/' + '/github.com/Servernotdie/Slimefun-Wiki/tree/master/docs/' + found.split('/').pop()}" target="_blank" rel="noopener">Chỉnh sửa trên GitHub</a>`
}
renderToc(parsed.toc, tocEl)
bindTocHighlight(parsed.toc)
attachContentLinks()
updateActiveLinks(id)
let anchor=location.hash.split('#').slice(2).join('#')
if(anchor){
let el=document.getElementById(anchor)
if(el) setTimeout(()=>el.scrollIntoView({behavior:'smooth'}),80)
}else{
window.scrollTo({top:0,behavior:'instant'})
document.querySelector('.main')?.scrollTo?.(0,0)
}
addNextPrev(id)
}
function getCategoryForId(id){
if(!sidebarData) return ''
for(let entry of sidebarData){
if(entry.type==='category' && Array.isArray(entry.items)){
if(entry.items.includes(id)) return entry.label
for(let it of entry.items){
if(typeof it==='object' && it.items){
if(it.items.includes(id)) return it.label
}
}
}
if(entry.type==='category' && entry.label && entry.items){
let flat=JSON.stringify(entry.items)
if(flat.includes(`"${id}"`)) return entry.label
}
}
return 'Wiki'
}
function addNextPrev(id){
let flat=[]
function collect(items){
items.forEach(it=>{
if(typeof it==='string') flat.push(it)
else if(it && it.type==='category' && it.link) {
flat.push(it.link.id)
if(it.items) collect(it.items)
}
else if(it && it.type==='category' && it.items) collect(it.items)
else if(it && it.type==='doc') flat.push(it.id)
})
}
sidebarData.forEach(e=>{
if(e.type==='doc') flat.push(e.id)
else if(e.type==='category' && e.items) collect(e.items)
})
flat = [...new Set(flat)]
let idx=flat.indexOf(id)
let prev= idx>0? flat[idx-1]:null
let next= idx>=0 && idx<flat.length-1? flat[idx+1]:null
let container=document.getElementById('nextPrev')
if(!container) return
container.innerHTML=''
if(prev){
let a=document.createElement('a')
a.href=`#/${prev}`
a.innerHTML=`<small>Bài trước</small><strong>${prev}</strong>`
container.appendChild(a)
}else{
let d=document.createElement('div')
container.appendChild(d)
}
if(next){
let a=document.createElement('a')
a.href=`#/${next}`
a.style.textAlign='right'
a.innerHTML=`<small>Bài tiếp</small><strong>${next}</strong>`
container.appendChild(a)
}
}
function attachContentLinks(){
let article=document.getElementById('article')
if(!article) return
article.querySelectorAll('a[href^="#/"]').forEach(a=>{
a.addEventListener('click',(e)=>{
let href=a.getAttribute('href')
let id=href.slice(2).split('#')[0]
if(id){
e.preventDefault()
navigate(id)
}
})
})
article.querySelectorAll('a[href^="#"]').forEach(a=>{
let href=a.getAttribute('href')
if(href.startsWith('#/')) return
a.addEventListener('click',(e)=>{
let target=document.querySelector(href)
if(target){
e.preventDefault()
target.scrollIntoView({behavior:'smooth'})
}
})
})
}
export function navigate(id){
location.hash=`#/${id}`
}
export async function initRouter(){
let sRes=await fetch('data/sidebar.json')
sidebarData=await sRes.json()
let iRes=await fetch('data/docs-index.json')
docsIndex=await iRes.json()
let sidebarEl=document.getElementById('sidebar')
function renderCurrent(){
let id=getIdFromLocation()
currentId=id
renderSidebar(sidebarEl, sidebarData, id)
loadDocument(id)
}
window.addEventListener('hashchange',()=>{
let id=getIdFromLocation()
currentId=id
renderSidebar(sidebarEl, sidebarData, id)
loadDocument(id)
})
renderCurrent()
document.addEventListener('click',(e)=>{
let a=e.target.closest('a[data-route]')
if(a){
let id=a.dataset.route
if(id){
e.preventDefault()
navigate(id)
}
}
})
}
export function getDocsIndex(){ return docsIndex }
