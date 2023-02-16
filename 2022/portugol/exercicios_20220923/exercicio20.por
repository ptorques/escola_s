programa
{
	inclua biblioteca Matematica
	
	funcao inicio()
	{
		real base, altura
		escreva("\nInsira o valor da base: ")
		leia(base)
		escreva("\nInsira o valor da altura: ")
		leia(altura)
		escreva("\nPerímetro: " + ((base*2) + (altura*2)))
		escreva("\nÁrea: " + base * altura)
		escreva("\nDiagonal: " + Matematica.raiz(Matematica.potencia(base, 2) + Matematica.potencia(altura, 2), 2))
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 244; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */