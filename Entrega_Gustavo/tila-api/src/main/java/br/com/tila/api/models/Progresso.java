package br.com.tila.api.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "Progresso")
public class Progresso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_progresso")
    private Integer idProgresso;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatusProgresso status;

    @Column(name = "data_conclusao")
    private LocalDate dataConclusao;

    @Column(nullable = false)
    private int tentativas = 1;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_crianca", nullable = false)
    @JsonIgnore
    private Crianca crianca;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_nivel", nullable = false)
    private Nivel nivel;

    @OneToOne(mappedBy = "progresso", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private Recompensa recompensa;

    public enum StatusProgresso {
        em_andamento, concluido
    }
    
    public Progresso() {
    }
    
    // Getters e Setters
    public Integer getIdProgresso() {
        return idProgresso;
    }

    public void setIdProgresso(Integer idProgresso) {
        this.idProgresso = idProgresso;
    }

    public StatusProgresso getStatus() {
        return status;
    }

    public void setStatus(StatusProgresso status) {
        this.status = status;
    }

    public LocalDate getDataConclusao() {
        return dataConclusao;
    }

    public void setDataConclusao(LocalDate dataConclusao) {
        this.dataConclusao = dataConclusao;
    }

    public int getTentativas() {
        return tentativas;
    }

    public void setTentativas(int tentativas) {
        this.tentativas = tentativas;
    }

    public Crianca getCrianca() {
        return crianca;
    }

    public void setCrianca(Crianca crianca) {
        this.crianca = crianca;
    }

    public Nivel getNivel() {
        return nivel;
    }

    public void setNivel(Nivel nivel) {
        this.nivel = nivel;
    }

    public Recompensa getRecompensa() {
        return recompensa;
    }

    public void setRecompensa(Recompensa recompensa) {
        this.recompensa = recompensa;
    }
}
