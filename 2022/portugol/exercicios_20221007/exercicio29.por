programa
{
	inclua biblioteca Matematica
	
	funcao inicio()
	{
		real salarioMinimo, salario
		escreva("\nInsira o valor do salário mínimo: ")
		leia(salarioMinimo)
		escreva("\nInsira o valor de seu salário: ")
		leia(salario)
		escreva("\nVocê faz " + Matematica.arredondar(salario/salarioMinimo, 2) + " salários mínimos")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 329; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */