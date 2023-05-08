var likes= [9,12,9];

function countAdd(index){
likes[index]++;
const countElement=document.querySelector("#count"+(index + 1));
countElement.textContent=likes[index];
}
