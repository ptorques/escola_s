programa
{
	funcao inicio()
	{
		real salarioMinimo, valorPrestacao
		escreva("Insira o salário mínimo: ")
		leia (salarioMinimo)
		escreva("Insira o valor da prestação: ")
		leia (valorPrestacao)
		se ((salarioMinimo*0.3) >= valorPrestacao){
			escreva("\nO valor da prestação é válido")
		}
		senao {
			escreva("\nO valor ultrapassa o limite")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 37; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */