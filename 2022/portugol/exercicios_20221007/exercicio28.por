programa
{
	
	funcao inicio()
	{
		real valorDeposito, valorJuros, rendimento
		escreva("\nInsira o valor inicial do depósito: ")
		leia(valorDeposito)
		escreva("\nInsira a taxa dos juros: ")
		leia(valorJuros)
		rendimento = (valorDeposito * valorJuros/100)
		escreva("\nValor do rendimento: R$" + rendimento)
		escreva("\nValor total após rendimento: R$" + (valorDeposito + rendimento))
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 356; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */