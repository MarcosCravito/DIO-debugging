/* OBJETO ERROR do ECMASCript
É UM ERRO QUE OCORRE DURANTE O PROCESSO DE EXECUÇÃO
 POR UM EXEMPLO FALTA DE VARIAVEL, OU ALGO NO CÓDIGO

 SUA COMPOSIÇÃO É COMPOSTA DE
MENSAGEM, NOME, LINHA E CALL STACK */

/*OBJETO ERROR DO DOMEException

DOCUMENT MODEL OBJECT ( DOM ) 

SÃO ERROS RELACIONADOS AOS CODIGOS QUE ESTÃO SENDO RODADOS
NA WEB */

// COMO TRATAR ESSES ERROS ?

/* PALAVRAS RESERVADAS PELO JS ''TRHOW'' E ''RETURN''

TRHOW ->  ELE DEMONSTRA UMA STRING INVÁLIDA COMO UM ERRO VÍSIVEL

E RETURN RETORNA A CLASSE SELECIONADA COMO POR EXEMPLO A STRING QUE ESTÁ ERRADA

EX> Console.log(...);


TRY...cath ->

é usado para tratar erros da forma que a pessoa que estiver arrumando ela poderá fazer como bem quiser.

*/

/* PALAVRA FINALLY

Ele é uma instrução que será chamada independente se tem um erro ou não

e caso exista um erro ou nao ele será chamado pelo sistema */

//ATIVIDADE PRÁTICA

function validaArray(arr, num){
  
    try{
  
    if(!arr && !num) throw new ReferenceError("Envie os parametros");

    if(typeof arr !== 'object') throw new TypeError("O array precisa ser do tipo object");

    if(typeof arr!== 'number') throw new TypeError("Array precisa ser do tipo number");

    if(arr.lenght !== num) throw new RangeError("Tamanho Inválido!");

        return arr;
 }
 catch(e) {
     if(e instanceof ReferenceError) {
         console.log("Este erro é um ReferenceError")
        console.log(e.message)

        } 
        else if(e instanceof TypeError) {
            console.log("Este erro é um TypeError")
           console.log(e.message)
         } else if
           (e instanceof RangeError) {
            console.log("Este erro é um RangeError")
           console.log(e.message)
           } else {
               console.log("Tipo de erro nao esperado:" + e);
           }
 }
}

console.log(validaArray());
