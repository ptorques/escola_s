package com.example.biblioteca.controller;
import com.example.biblioteca.model.Usuario;
import com.example.biblioteca.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:5173") // Endereço do front
@RestController

@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;
    @GetMapping
    public List<Usuario> listarUsuarios() {
        return usuarioRepository.findAll();
    }
    @PostMapping
    public Usuario criarUsuario(@RequestBody Usuario usuario) {
        return usuarioRepository.save(usuario);
    }
    @DeleteMapping("/{cod}")
    public ResponseEntity<String> deletarUsuario(@PathVariable Long cod) {
        try {
            usuarioRepository.deleteById(cod);
            return ResponseEntity.ok("Usuario deletado com sucesso.");
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/{cod}")
    public ResponseEntity<Usuario> atualizarUsuario(@PathVariable Long cod, @RequestBody Usuario usuarioAtualizado) {
        if (usuarioRepository.existsById(cod)) {
            Usuario usuario = usuarioRepository.findById(cod).get();
            usuario.setCod(usuarioAtualizado.getCod());
            usuario.setPerfil(usuarioAtualizado.getPerfil());
            usuario.setSenha(usuarioAtualizado.getSenha());
            usuario.setLogin(usuarioAtualizado.getLogin());
            Usuario usuarioAtualizadoBD = usuarioRepository.save(usuario);
            return ResponseEntity.ok(usuarioAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
