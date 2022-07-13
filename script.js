fetch("https://api.github.com/users/danielsrzpbn/repos")
.then(info => {
    if (info.ok) {
        return info.json()
    } else {
        throw new Error("Não foi possivel obter a informação, Código " + resp.status)
    }
})
.then(data => {
    let inforepos = []
    data.forEach(repos => {
        inforepos.push({
            nome: repos.name,
            description: repos.description, 
            url: repos.html_url,
            owner: repos.owner.login,
            avatarOwner: repos.owner.avatar_url,
            fork: repos.fork
        })
    })
    createList(inforepos);
})

function createList(inforepos) {
    let section = document.querySelector("#projetos")
    for ( let list of inforepos ) {
        if (list.description === null) {
            list.description = "Sem descrição"
        } 
        let listRepos = document.createElement("article")
        listRepos.className = "container__projeto__card"
        listRepos.innerHTML = `
        <img
          src="img/arepa.jpeg"
          alt="Foto projeto"
          class="container__projeto__card__img"
        />
        <p class="container__projeto__tittle">${list.nome}</p>
        <p class="cotainer__projeto__text">
          ${list.description}
        </p>
        <div class="container__button">
          <a href="${list.url}" class="button" target="_blank">REPOSITÓRIO</a>
          <a href="https://danielsrzpbn.github.io/Receita_Aula4/" class="button" target="_blank">VER DEMO</a>
        </div>
      `;
        section.appendChild(listRepos);
        
        
    }  
};

document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("formulario")
      .addEventListener("submit", validarFormulario);
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nome = document.getElementById("nome").value;
    if (nome.length == 0) {
      alert("Nome inválido");
      return;
    }
    var email = document.getElementById("email").value;
    if (email.length == 0) {
      alert("Email inválido");
      return;
    } else if (email.search("@") == -1) {
      alert("Email inválido");
      return;
    } else if (email.search("com") == -1) {
      alert("Email inválido");
      return;
    }
    var assunto = document.getElementById("assunto").value;
    if (assunto.length == 0) {
      alert("Colocar assunto");
      return;
    }
    var menssagem = document.getElementById("menssagem").value;
    if (menssagem.length == 0) {
      alert("Escreva uma menssagem");
      return;
    }
    this.submit();
  }