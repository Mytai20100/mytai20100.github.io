import { initRouter, navigate } from './router.js?v=20260827b'
import { createSearch } from './search.js?v=20260827b'
async function boot(){
await initRouter()
let docsIndexRes=await fetch('data/docs-index.json')
let docsIndex=await docsIndexRes.json()
createSearch(docsIndex)
let menuBtn=document.getElementById('menuBtn')
let sidebar=document.getElementById('sidebar')
let backdrop=document.getElementById('drawerBackdrop')
function toggleDrawer(force){
let open = force!==undefined ? force : !sidebar.classList.contains('open')
sidebar.classList.toggle('open', open)
backdrop.classList.toggle('open', open)
}
if(menuBtn){
menuBtn.addEventListener('click',()=>toggleDrawer())
}
if(backdrop){
backdrop.addEventListener('click',()=>toggleDrawer(false))
}
document.addEventListener('click',(e)=>{
let a=e.target.closest('a[data-route]')
if(a && sidebar.classList.contains('open') && window.innerWidth<=860){
toggleDrawer(false)
}
})
let statsDocs=document.getElementById('statDocs')
if(statsDocs) statsDocs.textContent=docsIndex.length
let hero=document.getElementById('hero')
function syncHero(){
let h=location.hash||'#/list'
let id=h.startsWith('#/')?h.slice(2).split('#')[0].split('?')[0]:'list'
if(id==='Home') id='list'
if(!id) id='list'
if(hero) hero.style.display=(id==='list' || id==='Home' || id==='')?'':'none'
}
syncHero()
window.addEventListener('hashchange',syncHero)
}
boot()
