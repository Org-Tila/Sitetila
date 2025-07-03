package br.com.tila.api.repositories;

import br.com.tila.api.models.Responsavel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ResponsavelRepository extends JpaRepository<Responsavel, Integer> {

    // Spring Data JPA cria a query automaticamente pelo nome do método
    Optional<Responsavel> findByEmail(String email);

    // Contar usuários ativos
    long countByAtivoTrue();

    // Contar usuários que já alteraram a senha
    long countBySenhaUltimaAlteracaoIsNotNull();

    // Contar usuários com acessibilidade
    long countByUsaAcessibilidadeTrue();

    // Consulta customizada usando JPQL (Java Persistence Query Language) para achar pais com 1 filho
    @Query("SELECT r FROM Responsavel r WHERE size(r.criancas) = 1")
    List<Responsavel> findResponsaveisComUmUnicoFilho();
}