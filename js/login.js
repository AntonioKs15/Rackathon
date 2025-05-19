document.querySelector("form"),addEventListener("submit",(event)=>{
    event.preventDefault();
    let cpf = document.querySelector("input");

    const dados = {
        "cpf" : cpf.value
    }
    // console.log(dados);
    let teste = fetch("http://localhost:1000/login.php",{
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify(dados)
    })

    .then(res => {
        return res.json();
    })

    .then(data => {
        console.log(data)
        if(data.error){
            alert(data.error)
            return;
        }

        if(data.user == null){
            alert("Usuário não existe");
            return;
        }

        sessionStorage.setItem("user", data.user.id);
        sessionStorage.setItem("img", data.user.dir);
        window.location.href += "noticias";

    })
});