programa
{
	inclua biblioteca Texto
	
	funcao inicio()
	{
		cadeia nome
		escreva("\nInsira o nome: ")
		leia(nome)
		escreva("\nNome: " + nome)
		escreva("\nPrimeiro caractere: " + Texto.obter_caracter(nome, 0))
		escreva("\nÚltimo caractere: " + Texto.obter_caracter(nome, Texto.numero_caracteres(nome) - 1))
		escreva("\nPrimeiros três caracteres: " + Texto.extrair_subtexto(nome, 0, 3))
		escreva("\nQuarto caractere: " + Texto.obter_caracter(nome, 3))
		escreva("\nTodos menos o primeiro caractere: " + Texto.extrair_subtexto(nome, 1, Texto.numero_caracteres(nome)))
		escreva("\nÚltimos dois caracteres: " + Texto.extrair_subtexto(nome, Texto.numero_caracteres(nome) - 2, Texto.numero_caracteres(nome)))	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 707; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */