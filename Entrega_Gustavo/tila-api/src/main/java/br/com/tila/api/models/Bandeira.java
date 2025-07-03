package br.com.tila.api.models;

import jakarta.persistence.*;

@Entity
@Table(name = "Bandeira")
public class Bandeira {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_bandeira")
    private Integer idBandeira;

    @Column(nullable = false)
    private String nome;

    // Construtor vazio
    public Bandeira() {
    }

    // Getters e Setters
    public Integer getIdBandeira() {
        return idBandeira;
    }

    public void setIdBandeira(Integer idBandeira) {
        this.idBandeira = idBandeira;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
