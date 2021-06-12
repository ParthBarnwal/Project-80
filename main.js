var number_of_people=[];

function submit()
{
    var GuestName=document.getElementById("name1").value;
    number_of_people.push(GuestName);
    console.log(number_of_people);
    document.getElementById("GuestName").innerHTML=number_of_people;
}
function show()
{
    var remove_commas=number_of_people.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name").innerHTML=remove_commas;
}
function sorting()
 {
    number_of_people.sort();
    console.log(number_of_people);
    document.getElementById("display_name_sorted").innerHTML=number_of_people;
 }
 function searching()
 {
     var s=document.getElementById("name1").value;
     var found=0;
     var j;
     for(j=0;j<number_of_people.length;j++)
     {
         if(s==number_of_people[j]){
             found=found+1;
         }
     }
     document.getElementById("error").innerHTML="name found"+found+"time/s";
     console.log("name found"+found+"time/s");
 }