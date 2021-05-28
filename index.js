var idade=[18,19,9,28,25,46,2,55,36,14], achou='n';

//Laço para percorrer todos os dados do vetor
for(var i=0;(achou=='n'&& i<10); i++){
  if(idade[i]==46){
    achou='s';
  }
}
if(i==10){
  alert('Não consta cadastro desta idade');
}else{
  console.log('A idade 46 está cadastrada na posição ' + i);
}