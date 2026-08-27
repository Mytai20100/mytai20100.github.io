export function createSearch(indexData){
let input = document.getElementById('searchInput')
let panel = document.getElementById('searchPanel')
let resultsEl = document.getElementById('searchResults')
let countEl = document.getElementById('searchCount')
if(!input||!panel||!resultsEl) return
function normalize(s){return s.toLowerCase()}
function scoreItem(item,q){
let title = item.title.toLowerCase()
let id = item.id.toLowerCase()
let label = (item.label||'').toLowerCase()
let excerpt = (item.excerpt||'').toLowerCase()
let score=0
if(title.includes(q)) score+=10
if(id.includes(q)) score+=8
if(label.includes(q)) score+=6
if(excerpt.includes(q)) score+=2
if(title===q) score+=20
if(title.startsWith(q)) score+=5
return score
}
function render(q){
let query = q.trim().toLowerCase()
if(!query){
resultsEl.innerHTML=`<div class="search-empty">Nhập từ khóa để tìm trong 271 tài liệu</div>`
if(countEl) countEl.textContent='271 bài'
return
}
let scored = indexData.map(it=>({item:it,score:scoreItem(it,query)})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,12)
if(countEl) countEl.textContent=`${scored.length} kết quả`
if(scored.length===0){
resultsEl.innerHTML=`<div class="search-empty">Không tìm thấy “${query}”</div>`
return
}
resultsEl.innerHTML=scored.map(({item})=>`
<a class="search-item" href="#/${item.id}" data-route="${item.id}">
<strong>${item.title}</strong>
<span>${item.excerpt||item.label||''}</span>
</a>
`).join('')
}
input.addEventListener('input',()=>{
let v=input.value
panel.classList.add('open')
render(v)
})
input.addEventListener('focus',()=>{
panel.classList.add('open')
render(input.value)
})
document.addEventListener('click',(e)=>{
if(!panel.contains(e.target) && e.target!==input){
panel.classList.remove('open')
}
})
let btn=document.getElementById('searchClear')
if(btn){
btn.addEventListener('click',()=>{
input.value=''
render('')
input.focus()
})
}
render('')
}
