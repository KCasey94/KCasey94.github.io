let groceries=[];
let list=document.getElementById("newList");
function showList(){
    for(i=0;i<groceries.length;i++){
        var li=document.createElement('li');
        li.innerText=groceries[i];
        list.appendChild(li);
    }
}
function addToEnd(){
    groceries.push(prompt("Enter a name"));
    showList();
}
function removeFromEnd(){
    groceries.pop();
    showList();
}
