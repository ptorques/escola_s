package com.example.biblioteca.model;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;

@Entity
@Getter
@Setter
public class Emprestimo{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cod;
    private String dataRetirada;
    private String dataPrevEntrega;
    private String statusDevolucao;
    
    @ManyToOne
    private Livro livro;
    
    @ManyToOne
    private Usuario usuario;
}
