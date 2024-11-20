function subs(){
    let userSubs=window.prompt("How many subjects did you take?");
    var results=new[userSubs];
    new nextInt();
    for(i=0;i<userSubs.length;i++){
        document.getElementById("subs").innerHTML+=window.prompt("Your result for subject "+(i+1)+" was: ");
        results[i]=nextInt();
        innerHTML+="<br />Your result for subject "+(i+1)+" was "+results[i];
    }
}