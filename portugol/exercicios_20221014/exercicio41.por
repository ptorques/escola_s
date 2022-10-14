programa
{
	inclua biblioteca Texto
	
	funcao inicio()
	{
		cadeia nome
		caracter primCaracterNome
		escreva("\nInsira seu nome: ")
		leia(nome)
		nome = Texto.caixa_alta(nome)
		primCaracterNome = Texto.obter_caracter(nome, 0)
		se (primCaracterNome < 'L') {
			escreva("\nAluno " + nome + " na sala 101")
		}
		senao se (primCaracterNome < 'O') {
			escreva("\nAluno " + nome + " na sala 102")
		}
		senao {
			escreva("\nAluno " + nome + " na sala 103")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 181; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */