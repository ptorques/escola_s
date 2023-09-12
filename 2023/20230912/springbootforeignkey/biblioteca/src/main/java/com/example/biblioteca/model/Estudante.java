package com.example.biblioteca.model;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;

@Entity
@Getter
@Setter
public class Estudante {
    @Id
    private Long matricula;
    private String nome;
    private String dataNasc;
    private String email;
    private String telefone;
    
    @ManyToOne
    private Usuario usuario;
}
