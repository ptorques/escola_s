programa
{
	
	funcao inicio()
	{
		cadeia modelo
		real distancia
		escreva("\nInsira o modelo do carro: ")
		leia(modelo)
		escreva("\nInsira a distância da viagem: ")
		leia(distancia)
		se (modelo == "A") {
			escreva("\nO consumo estimado será " + distancia/8 + " litros de gasolina")
		}
		senao se (modelo == "B") {
			escreva("\nO consumo estimado será " + distancia/10 + " litros de gasolina")
		}
		senao se (modelo == "C") {
			escreva("\nO consumo estimado será " + distancia/12 + " litros de gasolina")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 122; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */