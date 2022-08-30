const getUsuarios=()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        const fragment=document.createDocumentFragment();
        const body=document.getElementById("cuerpo")
        for (datos of res){
            const tr=document.createElement("tr");

            for(key in datos){
                if (key !== "address" && key !=="company" && key!=="id"){
                    const td=document.createElement("td");
                    td.textContent=datos[key];
                    tr.appendChild(td);
                }
            }
            // const td_name=document.createElement("td");
            // const td_username=document.createElement("td");
            // const td_email=document.createElement("td");
            // const td_phone=document.createElement("td");
            // const td_website=document.createElement("td");

            // td_name.textContent=dato.name;
            // td_username.textContent=dato.username;
            // td_email.textContent=dato.email;
            // td_phone.textContent=dato.phone;
            // td_website.textContent=dato.website;

            // tr.appendChild(td_name);
            // tr.appendChild(td_username);
            // tr.appendChild(td_email);
            // tr.appendChild(td_phone);
            // tr.appendChild(td_website);

            fragment.appendChild(tr);
        }

        body.innerHTML="";
        body.appendChild(fragment);
    })
    .catch((err)=>{
        console.log(err);
    })
}

getUsuarios();