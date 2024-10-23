// Função para salvar uma nova pessoa no Local Storage
function salvarPessoa(event) {
  event.preventDefault(); // Evita o recarregamento da página

  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const localizacao = document.getElementById("localizacao").value;
  const descricao = document.getElementById("descricao").value;

  const novaPessoa = {
    nome,
    idade,
    localizacao,
    descricao,
  };

  // Recupera pessoas salvas ou cria um array vazio
  let pessoas = JSON.parse(localStorage.getItem("pessoas")) || [];
  pessoas.push(novaPessoa); // Adiciona a nova pessoa
  localStorage.setItem("pessoas", JSON.stringify(pessoas)); // Salva no Local Storage

  alert("Pessoa cadastrada com sucesso!");
  document.getElementById("form-cadastro").reset(); // Limpa o formulário
}

// Função para exibir a lista de pessoas cadastradas
function listarPessoas() {
  const lista = document.getElementById("lista-pessoas");
  let pessoas = JSON.parse(localStorage.getItem("pessoas")) || [];

  lista.innerHTML = ""; // Limpa a lista
  pessoas.forEach((pessoa) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${pessoa.nome}</h3>
      <p>Idade: ${pessoa.idade} anos</p>
      <p>Última Localização: ${pessoa.localizacao}</p>
      <p>${pessoa.descricao}</p>
    `;
    lista.appendChild(div);
  });
}

// Adiciona eventos ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("form-cadastro")) {
    document.getElementById("form-cadastro").addEventListener("submit", salvarPessoa);
  }

  if (document.getElementById("lista-pessoas")) {
    listarPessoas();
  }
});
