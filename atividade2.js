    let CodigoCidade, veiculoPasseio, veiculoTransito, maiorAcidentes = 0, menorAcidentes = Infinity, cidadeMaiorAcidentes, cidadeMenorAcidentes, continuar, totalVeiculos = 0, quantidadeCidades = 0, mediaVeiculos
do{
    do {
        CodigoCidade = prompt("Digite o codigo da cidade")
        if(isNaN(CodigoCidade) || CodigoCidade == "" || CodigoCidade == " "){
            CodigoCidade = prompt("Por favor, digite um numero valido! ");
        }
        quantidadeCidades++;
    } while (isNaN(CodigoCidade) || CodigoCidade == "" || CodigoCidade == " "); 
    
    do {
        veiculoPasseio = prompt("Digite o numero de veiculos de passeio (em 2022) ")
        if(isNaN(veiculoPasseio) || veiculoPasseio == "" || veiculoPasseio == " "){
            veiculoPasseio = prompt("Por favor, digite um numero valido! ");
        }
    } while (isNaN(veiculoPasseio) || veiculoPasseio == "" || veiculoPasseio == " ");
    do {
        veiculoTransito = prompt("Digite o numero de veiculos de transito com vitimas (em 2022) ")
        if(isNaN(veiculoTransito) || veiculoTransito == "" || veiculoTransito == " "){
            veiculoTransito = prompt("Por favor, digite um numero valido! ");
        }
    } while (isNaN(veiculoTransito) || veiculoTransito == "" || veiculoTransito == " ");
  
    // exibe o índice
    document.write(`${CodigoCidade} (código da cidade) - ${veiculoTransito} Acidentes de trânsito<br>`);
  
    // verifica se é o maior ou menor número de acidentes
    if (veiculoTransito > maiorAcidentes) {
      maiorAcidentes = veiculoTransito;
      cidadeMaiorAcidentes = CodigoCidade;
    }
    if (veiculoTransito < menorAcidentes) {
      menorAcidentes = veiculoTransito;
      cidadeMenorAcidentes = CodigoCidade;
    }

    totalVeiculos += veiculoTransito;

    continuar = prompt("Deseja continuar?")

}while(continuar === "Sim")

    mediaVeiculos = totalVeiculos / quantidadeCidades

    document.write(`O maior número de acidentes é ${maiorAcidentes} unidades de trânsito, na cidade ${cidadeMaiorAcidentes}.<br>`)
    document.write(`O menor número de acidentes é ${menorAcidentes} unidades de trânsito, na cidade ${cidadeMenorAcidentes}.`)

    document.write(`<p>A média de veículos é ${mediaVeiculos} unidades de trânsito.</p>`);
