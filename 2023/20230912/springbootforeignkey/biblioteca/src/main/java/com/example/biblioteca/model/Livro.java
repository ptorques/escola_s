package com.example.biblioteca.model;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;

@Entity
@Getter
@Setter
public class Livro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cod;
    private String titulo;
    private String autor;
    private int ano;
    private String editora;
}
