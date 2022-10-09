programa
{
	
	funcao inicio()
	{
		real salario_min, kW_gastos, kW
		escreva("\nInsira o valor do salário mínimo: ")
		leia(salario_min)
		escreva("\nInsira a quantidade de quilowatts gastos: ")
		leia(kW_gastos)
		kW = (salario_min/7)/100
		escreva("\nValor de cada quilowatt: " + kW)
		escreva("\nValor a ser pago: " + kW_gastos * kW)
		escreva("\nValor a ser pago com desconto de 10%: " + kW_gastos * (kW * 0.9))
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