export function renderToc(tocData, container){
if(!container) return
container.innerHTML=''
if(!tocData || tocData.length===0){
container.innerHTML=`<div style="padding:12px;font-weight:700;color:var(--muted);font-size:12px">Trang này không có mục lục</div>`
return
}
tocData.forEach(h=>{
let a=document.createElement('a')
a.href=`#${h.id}`
a.textContent=h.text
a.className = h.level===3 ? 'l3' : h.level===2 ? 'l2' : ''
a.addEventListener('click',(e)=>{
e.preventDefault()
let el=document.getElementById(h.id)
if(el) el.scrollIntoView({behavior:'smooth',block:'start'})
history.replaceState(null,'',`#/${currentDocId()}#${h.id}`)
})
container.appendChild(a)
})
}
function currentDocId(){
let hash=location.hash||'#/Home'
let m=hash.match(/^#\/([^#?]+)/)
return m?m[1]:'Home'
}
export function bindTocHighlight(tocData){
if(!tocData||tocData.length===0) return
let ids=tocData.map(t=>t.id)
let links=Array.from(document.querySelectorAll('.toc-list a'))
let observer=new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
let id=entry.target.id
links.forEach(a=>a.classList.toggle('active', a.getAttribute('href')===`#${id}`))
}
})
},{rootMargin:'-20% 0px -70% 0px',threshold:0})
ids.forEach(id=>{
let el=document.getElementById(id)
if(el) observer.observe(el)
})
}
export function renderTocInline(tocData, container){
if(!container) return
container.innerHTML=''
if(!tocData||tocData.length===0){
container.style.display='none'
return
}
container.style.display=''
let list=document.createElement('div')
list.className='toc-inline-list'
tocData.forEach(h=>{
let a=document.createElement('a')
a.href=`#${h.id}`
a.textContent=h.text
a.addEventListener('click',(e)=>{
e.preventDefault()
let el=document.getElementById(h.id)
if(el) el.scrollIntoView({behavior:'smooth'})
})
list.appendChild(a)
})
container.innerHTML=`<div class="toc-inline-head">Mục lục</div>`
container.appendChild(list)
}
