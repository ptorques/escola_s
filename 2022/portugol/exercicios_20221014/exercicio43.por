programa
{
	
	funcao inicio()
	{
		cadeia nome
		inteiro idade
		escreva("\nInsira a sua idade: ")
		leia(idade)
		escreva("\nInsira seu nome: ")
		leia(nome)
		limpa()
		se (idade <= 10) {
			escreva("\n" + nome + ", o valor a ser pago é R$30,00")
		}
		senao se (idade <= 29) {
			escreva("\n" + nome + ", o valor a ser pago é R$60,00")
		}
		senao se (idade <= 45) {
			escreva("\n" + nome + ", o valor a ser pago é R$120,00")
		}
		senao se (idade <= 59) {
			escreva("\n" + nome + ", o valor a ser pago é R$150,00")
		}
		senao se (idade <= 65) {
			escreva("\n" + nome + ", o valor a ser pago é R$200,00")
		}
		senao {
			escreva("\n" + nome + ", o valor a ser pago é R$400,00")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 252; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */