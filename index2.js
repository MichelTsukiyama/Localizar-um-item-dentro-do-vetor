var idade=[], achou='n', resp='s',idade_procurar;

//adicionar dados ao vetor idade
for(i=0;resp=='s';i++){
  idade[i]=prompt('Digite uma idade');
  resp=prompt('Deseja continuar? s/n');
}
idade_procurar = parseInt(prompt('Qual idade deseja procurar?'));

//laço para varrer o vetor em busca da idade
for(i=0;(achou=='n' && idade.length >i); i++){
  if(idade[i]==idade_procurar){
    achou='s';
  }
}

//retorno para o usuário
if(achou=='n'){
  alert('Não consta o cadastro dessa idade');
}else{
  alert(`A idade ${idade_procurar} está cadastrada na posição ${i}`);
}