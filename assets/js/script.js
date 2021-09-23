function simular(){
  var valor = document.getElementById("valor").valueAsNumber;
  var prazo = document.getElementById("prazoaa").valueAsNumber;
  var jurosaa = document.getElementById("jurosaa").valueAsNumber;
  var prazoam = prazo * 12;
  var jurosam = ((1+(jurosaa/100))**(1/12))-1;
  amortizacao = valor / prazoam;

  document.getElementById("prazoam").valueAsNumber = prazoam;
  document.getElementById("jurosam").valueAsNumber = jurosam * 100;

  var tbody = document.querySelector("tbody");
  var jurosTotal = 0;
  for(var i = 0; i < prazoam; i++){
    var saldoDevedor = valor - i * amortizacao;
    var jurosPrestacao = saldoDevedor * jurosam;
    jurosTotal += jurosPrestacao;
    
    if(i<5){
      var totalPrestacao = jurosPrestacao + amortizacao;
      var tr = tbody.children[i];
      tr.children[1].textContent = amortizacao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;
      tr.children[2].textContent = jurosPrestacao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;
      tr.children[3].textContent = totalPrestacao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;
    }
  }
  document.getElementById("jurosTotal").valueAsNumber = jurosTotal.toFixed(2);

}