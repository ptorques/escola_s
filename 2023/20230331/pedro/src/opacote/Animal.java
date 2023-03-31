package opacote;

public class Animal {
	//props
	public String nome;
	public double peso;
	
	//constructors
	public Animal() {}
	public Animal(String nome, double peso) {
		super();
		this.nome = nome;
		this.peso = peso;
	}
	
	
	// meth
	public void print() {
		System.out.println("Nome: "+this.nome+
				"\nPeso: "+this.peso);
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public void setPeso(double peso) {
		this.peso = peso;
	}

	public String getNome() {
		return nome;
	}

	public double getPeso() {
		return peso;
	}
	
}
