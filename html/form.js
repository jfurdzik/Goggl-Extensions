
function getDate() { 
    let date = document.querySelector('#taskDate').value;
    let name = document.querySelector('#taskName').value; //rep
    let start = document.querySelector('#taskStart').value;
    let end = document.querySelector('#taskEnd').value;
    let work = document.querySelector('#taskWorkTime').value;
    let breakT = document.querySelector('#taskBreakTime').value;
    let ints = document.querySelector('#taskint').value;
    let notes = document.querySelector('#taskNotes').value;
    let music = document.querySelector('#taskMusic').value;
    let location = document.querySelector('#taskLoc').value;


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
        end: end,
        work: work,
        breakT: breakT,
        ints: ints,
        notes: notes,
        music: music,
        location: location
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

            const endth = document.createElement("th");
            endth.innerHTML = entries.rows[i].end;
            tr.appendChild(endth);

            const workth = document.createElement("th");
            workth.innerHTML = entries.rows[i].work;
            tr.appendChild(workth);

            const breakTth = document.createElement("th");
            breakTth.innerHTML = entries.rows[i].breakT;
            tr.appendChild(breakTth);

            const intsth = document.createElement("th");
            intsth.innerHTML = entries.rows[i].ints;
            tr.appendChild(intsth);

            const notesth = document.createElement("th");
            notesth.innerHTML = entries.rows[i].notes;
            tr.appendChild(notesth);

            const musicth = document.createElement("th");
            musicth.innerHTML = entries.rows[i].music;
            tr.appendChild(musicth);

            const locationth = document.createElement("th");
            locationth.innerHTML = entries.rows[i].location;
            tr.appendChild(locationth);

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