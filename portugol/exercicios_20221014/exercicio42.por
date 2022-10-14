programa
{
	
	funcao inicio()
	{
		inteiro idade
		cadeia nome
		escreva("\nInsira seu nome: ")
		leia(nome)
		escreva("\nInsira sua idade: ")
		leia(idade)
		se (idade <= 10) {
			escreva("\nValor a pagar para" + nome + ": " + "R$10,00")
		}
		senao se (idade <= 29) {
			escreva("\nValor a pagar para" + nome + ": " + "R$60,00")
		}
		senao se (idade <= 45) {
			escreva("\nValor a pagar para" + nome + ": " + "R$120,00")
		}
		senao se (idade <= 59) {
			escreva("\nValor a pagar para" + nome + ": " + "R$150,00")
		}
		senao se (idade <= 65) {
			escreva("\nValor a pagar para" + nome + ": " + "R$200,00")
		}
		senao {
			escreva("\nValor a pagar para" + nome + ": " + "R$400,00")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 0; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */