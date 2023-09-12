package com.example.biblioteca.controller;
import com.example.biblioteca.model.Estudante;
import com.example.biblioteca.repository.EstudanteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:5173") // Endereço do front
@RestController

@RequestMapping("/estudantes")
public class EstudanteController {

    @Autowired
    private EstudanteRepository estudanteRepository;
    @GetMapping
    public List<Estudante> listarEstudantes() {
        return estudanteRepository.findAll();
    }
    @PostMapping
    public Estudante criarEstudante(@RequestBody Estudante estudante) {
        return estudanteRepository.save(estudante);
    }
    @DeleteMapping("/{matricula}")
    public ResponseEntity<String> deletarEstudante(@PathVariable Long matricula) {
        try {
            estudanteRepository.deleteById(matricula);
            return ResponseEntity.ok("Estudante deletado com sucesso.");
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/{matricula}")
    public ResponseEntity<Estudante> atualizarEstudante(@PathVariable Long matricula, @RequestBody Estudante estudanteAtualizado) {
        if (estudanteRepository.existsById(matricula)) {
            Estudante estudante = estudanteRepository.findById(matricula).get();
            estudante.setMatricula(estudanteAtualizado.getMatricula());
            estudante.setNome(estudanteAtualizado.getNome());
            estudante.setDataNasc(estudanteAtualizado.getDataNasc());
            estudante.setEmail(estudanteAtualizado.getEmail());
            estudante.setTelefone(estudanteAtualizado.getTelefone());
            estudante.setUsuario(estudanteAtualizado.getUsuario());
            Estudante estudanteAtualizadoBD = estudanteRepository.save(estudante);
            return ResponseEntity.ok(estudanteAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}