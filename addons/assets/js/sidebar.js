export function renderSidebar(container, sidebarData, currentId){
container.innerHTML=''
let head = document.createElement('div')
head.className='sidebar-head'
head.innerHTML=`<div class="sidebar-title">Mục lục</div><div class="sidebar-controls"><button class="chip" data-action="expand">Mở rộng</button><button class="chip" data-action="collapse">Thu gọn</button></div>`
container.appendChild(head)
let nav = document.createElement('div')
nav.className='sidebar-nav'
container.appendChild(nav)
function createDocItem(id,label){
let div=document.createElement('div')
div.className='nav-item'
let a=document.createElement('a')
a.href=`#/${id}`
a.dataset.route=id
a.textContent=label||id
if(id===currentId) a.classList.add('active')
div.appendChild(a)
return div
}
function createCategory(cat, depth){
let section=document.createElement('div')
section.className='nav-section'
if(cat.className==='hidden') section.classList.add('hidden-cat')
let collapsed = cat.collapsed===true
if(collapsed) section.classList.add('collapsed')
let headBtn=document.createElement('button')
headBtn.className='nav-section-head'
let colorClass = depth%3===0?'':depth%3===1?'peach':'gold'
if(colorClass) headBtn.classList.add(colorClass)
let iconText = cat.label ? cat.label.charAt(0) : '≡'
headBtn.innerHTML=`<span><i>${iconText}</i>${cat.label}</span><span class="nav-toggle">›</span>`
if(cat.link && cat.link.id){
let linkA=document.createElement('a')
linkA.href=`#/${cat.link.id}`
linkA.textContent=cat.label
linkA.style.flex='1'
linkA.style.textDecoration='underline'
linkA.style.textUnderlineOffset='3px'
headBtn.querySelector('span').replaceWith(linkA)
}
headBtn.addEventListener('click',()=>{
section.classList.toggle('collapsed')
})
section.appendChild(headBtn)
let list=document.createElement('div')
list.className='nav-list'
if(Array.isArray(cat.items)){
cat.items.forEach(item=>{
if(typeof item==='string'){
list.appendChild(createDocItem(item,item))
}else if(item.type==='category'){
let sub = createCategory(item, depth+1)
sub.style.boxShadow='none'
sub.style.border='0'
sub.style.background='transparent'
list.appendChild(sub)
}else if(item.type==='doc'){
list.appendChild(createDocItem(item.id,item.label||item.id))
}
})
}
section.appendChild(list)
return section
}
sidebarData.forEach(entry=>{
if(entry.type==='doc'){
nav.appendChild(createDocItem(entry.id, entry.label||entry.id))
}else if(entry.type==='category'){
let sec = createCategory(entry,0)
let isHidden = entry.className==='hidden'
if(isHidden){
let hasCurrent=false
function checkItems(items){
for(let it of items){
if(typeof it==='string' && it===currentId) return true
if(it && typeof it==='object'){
if(it.id===currentId) return true
if(it.items && checkItems(it.items)) return true
}
}
return false
}
hasCurrent = checkItems(entry.items||[])
if(entry.link && entry.link.id===currentId) hasCurrent=true
if(!hasCurrent){
sec.style.display='none'
sec.dataset.hidden='true'
}
}
nav.appendChild(sec)
}else if(entry.type==='link'){
let div=document.createElement('div')
div.className='link-card'
div.innerHTML=`<span>↗</span><a href="${entry.href}" target="_blank" rel="noopener">${entry.label}</a>`
nav.appendChild(div)
}
})
head.querySelector('[data-action="expand"]').addEventListener('click',()=>{
nav.querySelectorAll('.nav-section.collapsed').forEach(s=>s.classList.remove('collapsed'))
})
head.querySelector('[data-action="collapse"]').addEventListener('click',()=>{
nav.querySelectorAll('.nav-section').forEach(s=>s.classList.add('collapsed'))
})
let hiddenToggle=document.createElement('button')
hiddenToggle.className='chip'
hiddenToggle.textContent='Hiện danh mục ẩn'
hiddenToggle.style.marginTop='8px'
hiddenToggle.style.width='100%'
hiddenToggle.addEventListener('click',()=>{
let hiddens=nav.querySelectorAll('[data-hidden="true"]')
let anyHidden = Array.from(hiddens).some(el=>el.style.display==='none')
hiddens.forEach(el=>el.style.display= anyHidden ? '' : 'none')
hiddenToggle.textContent= anyHidden ? 'Ẩn danh mục ẩn' : 'Hiện danh mục ẩn'
})
container.appendChild(hiddenToggle)
}
