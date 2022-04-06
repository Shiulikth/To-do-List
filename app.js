let count = 0;
document.getElementById("add-btn").addEventListener("click",function(){
    count++;
    const inputField = document.getElementById("input-field");

    const inputValue = inputField.value;

    if(inputValue == "")
    alert("Enter A value");

    else{
        const tableBody = document.getElementById("table-body");

       
        const newTableRaw= document.createElement("tr");
        newTableRaw.innerHTML=`<th scope="row">${count}</th>
        <td>${inputValue}</td>
        <td> <button class=" btn btn-danger ">Delete</button> <button class=" btn btn-success ">Done</button></td>`;

        tableBody.appendChild(newTableRaw);
        inputField.value="";

        }



        
})