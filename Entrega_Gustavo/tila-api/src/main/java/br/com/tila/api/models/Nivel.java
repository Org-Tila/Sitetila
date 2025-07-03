package br.com.tila.api.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "Nivel")
public class Nivel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_nivel")
    private Integer idNivel;

    @Column(nullable = false)
    private int numero;

    private String dificuldade;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_jogo", nullable = false)
    @JsonIgnore
    private Jogo jogo;

    @OneToMany(mappedBy = "nivel", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Progresso> progressos;

    // Construtor vazio
    public Nivel() {
    }

    // Getters e Setters
    public Integer getIdNivel() {
        return idNivel;
    }

    public void setIdNivel(Integer idNivel) {
        this.idNivel = idNivel;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public String getDificuldade() {
        return dificuldade;
    }

    public void setDificuldade(String dificuldade) {
        this.dificuldade = dificuldade;
    }

    public Jogo getJogo() {
        return jogo;
    }

    public void setJogo(Jogo jogo) {
        this.jogo = jogo;
    }

    public List<Progresso> getProgressos() {
        return progressos;
    }

    public void setProgressos(List<Progresso> progressos) {
        this.progressos = progressos;
    }
}
