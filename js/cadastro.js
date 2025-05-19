document.querySelector("form"),addEventListener("submit",(event)=>{
    event.preventDefault();
    let nome = document.querySelector(".nome");
    let cpf = document.querySelector(".cpf");

    console.log(nome, cpf.value)
    const dados = {
        "nome" : nome.value, 
        "cpf" : cpf.value
    }
    // console.log(dados);
    fetch("http://localhost:1000/cadastro.php",{
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
        window.location.href = window.location.origin + "/noticias";

    })
});