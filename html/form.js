
function getDate() { 
    let date = document.querySelector('#taskDate').value;
    //console.log(date);
    //addRow();

    //then query selector again and access task.html, make new cell row below (HOW THO)
    //prbly gonna have to use innerText, querySelector, create element, and/or the `words template ${date}` thing
}

function addRow()
{
    var str="";
    for(var i=0;i<20;i++)
    {
        str+="<tr>";
        str+="<td>"+i+"</td>";
        str+="</tr>";
    }
    $('#add').append(str);
}
//in html FORM submit button -> onClick="getDate()" 
//also add <script src="form.js"></script> to end of ^ file

