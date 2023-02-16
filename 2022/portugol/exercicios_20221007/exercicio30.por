programa
{
	inclua biblioteca Texto
	
	funcao inicio()
	{
		cadeia capital
		escreva("\nInsira a capital do brasil: ")
		leia(capital)
		capital = Texto.caixa_alta(capital)
		capital = Texto.substituir(capital, " ", "")
		se (Texto.numero_caracteres(capital) > 0) {
			se (capital == "BRASÍLIA") {
				escreva("\nVocê acertou!")
			}
			senao {
				escreva("\nVocê errou!")
			}
		}
		senao {
			escreva("\nResposta vazia, tente novamente")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 438; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */