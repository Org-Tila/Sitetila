package br.com.tila.api.repositories;

import br.com.tila.api.models.Progresso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProgressoRepository extends JpaRepository<Progresso, Integer> {

    // Encontra todos os progressos de uma criança específica
    List<Progresso> findByCriancaIdCrianca(Integer idCrianca);
}