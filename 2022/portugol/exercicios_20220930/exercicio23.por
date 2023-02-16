programa
{
	
	funcao inicio()
	{
		real valorHora, aulas, inss
		escreva("\nInsira o valor da hora: ")
		leia(valorHora)
		escreva("\nInsira o número de aulas dadas: ")
		leia(aulas)
		escreva("\nInsira o percentual de desconto do INSS: ")
		leia(inss)
		escreva("\nSalário com desconto: R$" + ((valorHora * aulas) * (1 - (inss/100))))
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 340; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */