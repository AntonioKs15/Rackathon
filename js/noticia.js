function request () {
    fetch("http://localhost:1000/noticias.php")

    .then(res => {
        return res.json();
    })

    .then(data => {
        console.log(data)
        if(data.error){
            alert(data.error)
            return;
        }
        
        const container = document.querySelector('.box-noticia')
        if(data.noticias !== null){
            data.noticias.forEach(noticias => {
                console.log(noticias.dir)
            const card = document.createElement('div');
            card.className = 'card'; // Adiciona uma classe
            // divPai.id = 'divPrincipal'; // Adiciona um ID
          
            // Criar card_user    
            const card_user     = document.createElement('div');
            card_user.className = 'card-user';

            // criar card_user
            const div_img_user     = document.createElement('div');
            div_img_user.className = 'img-user';

            const img_user = document.createElement('img');
            img_user.src = "../img/user.png";

            const div_name_user     = document.createElement('div');
            div_name_user.className = 'name-user';  

            const p_name_user     = document.createElement('p');
            p_name_user.textContent = noticias.nome;  
                
            div_name_user.appendChild(p_name_user);

            div_img_user.appendChild(img_user);

            // card-img
            const div_img = document.createElement('div');
            div_img.className = 'card-img'; // Adiciona uma classe

            const img_card = document.createElement('img');
            img_card.src = noticias.dir;

            const card_text     = document.createElement('div');
            card_text.className = 'card-text';  

            const p_card_text     = document.createElement('p');
            p_card_text.textContent = noticias.descricao;  

            div_img.appendChild(img_card);
            card_text.appendChild(p_card_text);

            // fim card user
            card_user.appendChild(div_img_user);
            card_user.appendChild(div_name_user);
            card.appendChild(card_user);
            card.append(div_img)
            card.appendChild(card_text);
            
            document.querySelector(".box-noticia").appendChild(card);
          });
        }
    })
}

document.addEventListener("DOMContentLoaded", function (event) {
    document.querySelector("#secao").style.display = "flex";
    document.querySelector(".content-page").style.display = "flex";
    request();
});

