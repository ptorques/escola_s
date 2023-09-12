package com.example.biblioteca.controller;
import com.example.biblioteca.model.Livro;
import com.example.biblioteca.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:5173") // Endereço do front
@RestController

@RequestMapping("/livros")
public class LivroController {

    @Autowired
    private LivroRepository livroRepository;
    @GetMapping
    public List<Livro> listarLivros() {
        return livroRepository.findAll();
    }
    @PostMapping
    public Livro criarLivro(@RequestBody Livro livro) {
        return livroRepository.save(livro);
    }
    @DeleteMapping("/{cod}")
    public ResponseEntity<String> deletarLivro(@PathVariable Long cod) {
        try {
            livroRepository.deleteById(cod);
            return ResponseEntity.ok("Livro deletado com sucesso.");
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/{cod}")
    public ResponseEntity<Livro> atualizarLivro(@PathVariable Long cod, @RequestBody Livro livroAtualizado) {
        if (livroRepository.existsById(cod)) {
            Livro livro = livroRepository.findById(cod).get();
            livro.setCod(livroAtualizado.getCod());
            livro.setTitulo(livroAtualizado.getTitulo());
            livro.setAutor(livroAtualizado.getAutor());
            livro.setAno(livroAtualizado.getAno());
            livro.setEditora(livroAtualizado.getEditora());
            Livro livroAtualizadoBD = livroRepository.save(livro);
            return ResponseEntity.ok(livroAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
