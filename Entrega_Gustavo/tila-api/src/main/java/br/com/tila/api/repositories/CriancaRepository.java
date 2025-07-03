package br.com.tila.api.repositories;

import br.com.tila.api.models.Crianca;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CriancaRepository extends JpaRepository<Crianca, Integer> {

    // Encontra todas as crianças de um determinado responsável
    List<Crianca> findByResponsavelIdResponsavel(Integer idResponsavel);
}