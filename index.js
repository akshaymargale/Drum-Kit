const n=document.querySelectorAll(".btn").length;
for(var i=0;i<n;i++)
{
    // console.log(i);
    document.querySelectorAll(".btn")[i].addEventListener("click",function(){
        document.getElementById("key").innerHTML=this.innerHTML;
    });
}
document.addEventListener("keypress",function(event){
    document.getElementById("key").innerHTML=event.key;
});