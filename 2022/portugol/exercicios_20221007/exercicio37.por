programa
{
	funcao inicio()
	{
		inteiro num
		escreva("Insira o número: ")
		leia (num)
		se (num%10 == 0){
			escreva("\nÉ divisível por 10, 5 e 2")
			// todo número divisível por 10 é divisível por 5 e 2 ao mesmo tempo
		}
		senao se (num%5 == 0){
			escreva("\nÉ divisível apenas por 5")
			// se for divisível por 5 e 2, também será por 10
		}
		senao se (num%2 == 0){
			escreva("\nÉ divisível apenas por 2")
		}
		senao {
			escreva("\nNão é divisível por 10, 5 ou 2")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 485; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */