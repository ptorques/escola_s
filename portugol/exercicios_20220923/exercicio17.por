programa
{
	inclua biblioteca Tipos
	inclua biblioteca Texto
	
	funcao inicio()
	{
		inteiro num, num_inv
		cadeia inv, cad_num
		escreva("\nInsira o número em modelo ABC: ")
		leia(num)
		cad_num = Tipos.inteiro_para_cadeia(num, 10)
		inv = Tipos.caracter_para_cadeia(Texto.obter_caracter(cad_num, 2)) + Tipos.caracter_para_cadeia(Texto.obter_caracter(cad_num, 1)) + Tipos.caracter_para_cadeia(Texto.obter_caracter(cad_num, 0))
		num_inv = Tipos.cadeia_para_inteiro(inv, 10)
		escreva("\nNúmero invertido: " + num_inv)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 522; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */