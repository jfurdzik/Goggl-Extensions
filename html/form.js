
function getDate() { 
    let date = document.querySelector('#taskDate').value;
    let name = document.querySelector('#taskName').value; //rep
    let start = document.querySelector('#taskStart').value;

    console.log(date);
    const entriesString = sessionStorage.getItem("entries");
    let entries = {rows: []};
    if (entriesString != null)
    {
        entries = JSON.parse(entriesString);
    }
    //addRow();
    
    const entry = {
        date: date,
        name: name, //rep
        start: start,
    }
    entries.rows.push(entry);
    sessionStorage.setItem("entries", JSON.stringify(entries));
    
    //then query selector again and access task.html, make new cell row below (HOW THO)
    //prbly gonna have to use innerText, querySelector, create element, and/or the `words template ${date}` thing
}

function addRow()
{
    const table = document.querySelector(".task-table-container tbody");
    console.log(table);

    const entriesString = sessionStorage.getItem("entries");
    if (entriesString != null)
    {
        const entries = JSON.parse(entriesString);
        console.log(entries);
        for (let i=0; i<entries.rows.length; i++)
        {
            const tr = document.createElement("tr");

            const dateth = document.createElement("th");
            dateth.innerHTML = entries.rows[i].date;
            tr.appendChild(dateth); //rep ^ 3

            const nameth = document.createElement("th");
            nameth.innerHTML = entries.rows[i].name;
            tr.appendChild(nameth);

            const startth = document.createElement("th");
            startth.innerHTML = entries.rows[i].start;
            tr.appendChild(startth);

            table.appendChild(tr);
        }
        
        //repeat 30-32 for each new field
    }
    
    /*var str="";
    for(var i=0;i<20;i++)
    {
        str+="<tr>";
        str+="<td>"+i+"</td>";
        str+="</tr>";
    }
    $('#add').append(str); //insert row*/
}
//in html FORM submit button -> onClick="getDate()" 
//also add <script src="form.js"></script> to end of ^ file

window.onload = function() {
    if (window.location.href.indexOf("task.html") > -1)
    {
        addRow();
    }
    
}