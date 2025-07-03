package br.com.tila.api.models;

import jakarta.persistence.*;

@Entity
@Table(name = "Banco")
public class Banco {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_banco")
    private Integer idBanco;

    @Column(name = "codigo_banco", nullable = false)
    private String codigoBanco;

    @Column(nullable = false)
    private String nome;

    // Construtor vazio (obrigatório pelo JPA)
    public Banco() {
    }

    // Getters e Setters
    public Integer getIdBanco() {
        return idBanco;
    }

    public void setIdBanco(Integer idBanco) {
        this.idBanco = idBanco;
    }

    public String getCodigoBanco() {
        return codigoBanco;
    }

    public void setCodigoBanco(String codigoBanco) {
        this.codigoBanco = codigoBanco;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
