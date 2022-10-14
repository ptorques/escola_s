programa
{
	inclua biblioteca Texto
	
	funcao inicio()
	{
		cadeia nome
		caracter primCaracterNome
		real valor
		escreva("\nInsira o valor da conta: ")
		leia(valor)
		escreva("\nInsira seu nome: ")
		leia(nome)
		nome = Texto.caixa_alta(nome)
		primCaracterNome = Texto.obter_caracter(nome, 0)
		se (primCaracterNome == 'A' ou primCaracterNome == 'D' ou primCaracterNome == 'M' ou primCaracterNome == 'S') {
			escreva("\nParabéns! Você recebeu um desconto de 30%! O valor de sua conta agora é " + valor*0.7)
		}
		senao {
			escreva("\nQue pena. Nesta semana o desconto não é para seu nome; mas continue nos prestigiando que sua vez chegará")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 99; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */