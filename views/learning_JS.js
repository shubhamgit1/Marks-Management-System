console.log('yo bitch!!');
var arr=[2,3,4,5,6,1,1];
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// arr.forEach(function(element){
//     console.log(element);
// })
var chbtn=document.getElementById('btnid')

var created=document.createElement('p')
created.innerHTML="<p background=yellow>I have appended this para....</p"
document.getElementsByClassName('container')[0].appendChild(created);

document.getElementsByClassName('container')[0].addEventListener('click',function(){
    console.log("button is clicked")
})
var prev_color=chbtn.style.background;
chbtn.addEventListener('mousedown',function(){
    chbtn.style.background="red";
})
chbtn.addEventListener('mouseup',function(){
    chbtn.style.background=prev_color;
})