programa
{
	funcao inicio()
	{
		real valorCompra, lucro
		escreva("Insira o valor da compra: ")
		leia(valorCompra)
		se (valorCompra < 20){
			lucro = valorCompra*0.45
			escreva("\nO valor da venda será: R$" + (valorCompra + lucro))
		}
		senao {
			lucro = valorCompra*0.3
			escreva("\nO valor da venda será: R$" + (valorCompra + lucro))
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 316; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */