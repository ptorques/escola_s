package com.example.biblioteca.repository;
import com.example.biblioteca.model.Estudante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface EstudanteRepository extends JpaRepository<Estudante, Long> {
}
