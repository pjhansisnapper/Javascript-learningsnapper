//parent element
const itemList=document.getElementById('itemList');
const addItemBtn=document.getElementById('addItemBtn')

//event listener
addItemBtn.addEventListener('click',()=>{
    const newItem=document.createElement('li');
    newItem.textContent=`Item ${itemList.children.length+1}`;
    itemList.appendChild(newItem);
});
//event delegation
itemList.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
        alert(`You clicked on ${e.target.textContent}`);
    }
});