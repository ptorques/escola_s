programa
{
	inclua biblioteca Matematica
	
	funcao inicio()
	{
		real num1, sen, tan, cos
		escreva("\nInsira o ângulo: ")
		leia(num1)
		sen = Matematica.seno(num1)
		tan = Matematica.tangente(num1)
		cos = Matematica.cosseno(num1)
		escreva("\nSeno: " + sen)
		escreva("\nTangente: " + tan)
		escreva("\nCosseno: " + cos)
		escreva("\nSecante: " + 1/cos)
		escreva("\nCossecante: " + 1/sen)
		escreva("\nCotangente: " + 1/tan)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 416; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {num1, 7, 7, 4}-{sen, 7, 13, 3}-{tan, 7, 18, 3}-{cos, 7, 23, 3};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */