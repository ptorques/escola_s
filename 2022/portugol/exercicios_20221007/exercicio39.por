programa
{
	funcao inicio()
	{
		cadeia nome
		real tr1, tr2, tr3, media
		escreva("Insira o nome do aluno: ")
		leia (nome)
		escreva("Insira a nota do primeiro trimestre: ")
		leia (tr1)
		escreva("Insira a nota do segundo trimestre: ")
		leia (tr2)
		escreva("Insira a nota do terceiro trimestre: ")
		leia (tr3)
		media = (tr1+tr2+tr3)/3
		limpa()
		escreva("\nNome: " + nome + "\nNota do TR1: " + tr1 + "\nNota do TR2: " + tr2 + "\nNota do TR3: " + tr3 + "\nMédia: " + media)
		se (media >= 7){
			escreva("\n\nAluno aprovado!")
		}
		senao se(media <= 3){
			escreva("\n\nAluno reprovado!")
		}
		senao {
			escreva("\n\nAluno de PPE")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 627; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */