document.addEventListener('DOMContentLoaded', function() {

    const botaoUnitario =  document.getElementById('unitario')
    const botaoMensal = document.getElementById('mensal')
    const unitario = document.querySelectorAll('.valorUnitario')
    const mensal = document.querySelectorAll('.valorMensal')

    unitario.forEach(p => p.style.display = 'inline');
    mensal.forEach(p => p.style.display = 'none');

    // Clique no botão mensal
    botaoMensal.addEventListener('click', function() {
        unitario.forEach(p => p.style.display = 'none');
        mensal.forEach(p => p.style.display = 'inline');
    });

    // Clique no botão unitário
    botaoUnitario.addEventListener('click', function() {
        unitario.forEach(p => p.style.display = 'inline');
        mensal.forEach(p => p.style.display = 'none');
    });


    const botoes = document.querySelectorAll("button.plano");
    botoes.forEach(btn => {
        botaoUnitario.classList.add("selecionado")
        btn.addEventListener("click", () => {
            botoes.forEach(b => b.classList.remove("selecionado")); // remove seleção
            btn.classList.add("selecionado"); // adiciona no clicado
        });
    });
})