package opacote;

public class Cachorro extends Animal{
	//props
	private String raca;
	
	
	//constructors
	public Cachorro() {}

	public Cachorro(String nome, String raca, double peso) {
		super(nome, peso);
		this.raca = raca;
	};
	
	// methods
	public void imprimir() {
		super.print();
		System.out.println("Raça: "+this.raca);
	}
	
	public String getRaca() {
		return raca;
	}

	public void setRaca(String raca) {
		this.raca = raca;
	}
	
	
}
