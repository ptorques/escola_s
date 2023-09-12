package com.example.biblioteca.controller;
import com.example.biblioteca.model.Emprestimo;
import com.example.biblioteca.repository.EmprestimoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:5173") // Endereço do front
@RestController

@RequestMapping("/emprestimos")
public class EmprestimoController {

    @Autowired
    private EmprestimoRepository emprestimoRepository;
    @GetMapping
    public List<Emprestimo> listarEmprestimos() {
        return emprestimoRepository.findAll();
    }
    @PostMapping
    public Emprestimo criarEmprestimo(@RequestBody Emprestimo emprestimo) {
        return emprestimoRepository.save(emprestimo);
    }
    @DeleteMapping("/{cod}")
    public ResponseEntity<String> deletarEmprestimo(@PathVariable Long cod) {
        try {
            emprestimoRepository.deleteById(cod);
            return ResponseEntity.ok("Emprestimo deletado com sucesso.");
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/{cod}")
    public ResponseEntity<Emprestimo> atualizarEmprestimo(@PathVariable Long cod, @RequestBody Emprestimo emprestimoAtualizado) {
        if (emprestimoRepository.existsById(cod)) {
            Emprestimo emprestimo = emprestimoRepository.findById(cod).get();
            emprestimo.setCod(emprestimoAtualizado.getCod());
            emprestimo.setDataRetirada(emprestimoAtualizado.getDataRetirada());
            emprestimo.setDataPrevEntrega(emprestimoAtualizado.getDataPrevEntrega());
            emprestimo.setStatusDevolucao(emprestimoAtualizado.getStatusDevolucao());
            emprestimo.setLivro(emprestimoAtualizado.getLivro());
            emprestimo.setUsuario(emprestimoAtualizado.getUsuario());
            Emprestimo emprestimoAtualizadoBD = emprestimoRepository.save(emprestimo);
            return ResponseEntity.ok(emprestimoAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
