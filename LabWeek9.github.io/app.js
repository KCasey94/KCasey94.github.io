function sing(){
    var bot=0;
	var ans=0;
	var left=0;
    for(i=99;i>=0;i--){
        ans=bot+i;
        left=ans-1;
        if(ans>=1){
            document.getElementById("words").innerHTML+="<br />"+ans+" bottles of beer on the wall,"+ans+" bottles of beer.<br />Take one down and pass it around, "+left+" bottles of beer on the wall.<br />";
            ;
        }
        else{
            document.getElementById("words").innerHTML+="<br />No more bottles of beer on the wall, no more bottles of beer.<br />Go to the store and buy some more, 99 bottles of beer on the wall.<br />";
        }
    }

}
