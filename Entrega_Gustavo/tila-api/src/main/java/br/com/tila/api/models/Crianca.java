package br.com.tila.api.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "Crianca")
public class Crianca {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_crianca")
    private Integer idCrianca;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private int idade;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Sexo sexo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_responsavel", nullable = false)
    @JsonIgnore // Evita que os dados do responsável voltem em loop infinito na resposta da API
    private Responsavel responsavel;

    @OneToMany(mappedBy = "crianca", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Progresso> progressos;

    @OneToMany(mappedBy = "crianca", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private List<SessaoUso> sessoesDeUso;

    public enum Sexo {
        M, F, OUTRO
    }

    // Construtor vazio
    public Crianca() {
    }

    // Getters e Setters
    public Integer getIdCrianca() {
        return idCrianca;
    }

    public void setIdCrianca(Integer idCrianca) {
        this.idCrianca = idCrianca;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public Sexo getSexo() {
        return sexo;
    }

    public void setSexo(Sexo sexo) {
        this.sexo = sexo;
    }

    public Responsavel getResponsavel() {
        return responsavel;
    }

    public void setResponsavel(Responsavel responsavel) {
        this.responsavel = responsavel;
    }

    public List<Progresso> getProgressos() {
        return progressos;
    }

    public void setProgressos(List<Progresso> progressos) {
        this.progressos = progressos;
    }

    public List<SessaoUso> getSessoesDeUso() {
        return sessoesDeUso;
    }

    public void setSessoesDeUso(List<SessaoUso> sessoesDeUso) {
        this.sessoesDeUso = sessoesDeUso;
    }
}
