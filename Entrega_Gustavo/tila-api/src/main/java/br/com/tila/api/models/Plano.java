package br.com.tila.api.models;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "Plano")
public class Plano {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_plano")
    private Integer idPlano;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private NomePlano nome;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal valor;

    public enum NomePlano {
        comum, premium
    }

    public Plano() {
    }

    // Getters e Setters
    public Integer getIdPlano() {
        return idPlano;
    }

    public void setIdPlano(Integer idPlano) {
        this.idPlano = idPlano;
    }

    public NomePlano getNome() {
        return nome;
    }

    public void setNome(NomePlano nome) {
        this.nome = nome;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }
}
