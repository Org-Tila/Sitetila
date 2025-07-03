package br.com.tila.api.models;

import jakarta.persistence.*;
import java.time.LocalTime;

@Entity
@Table(name = "ConfiguracoesParentais")
public class ConfiguracoesParentais {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_config")
    private Integer idConfig;

    @Column(name = "limite_tempo_diario")
    private LocalTime limiteTempoDiario;

    @Column(name = "horario_inicio")
    private LocalTime horarioInicio;

    @Column(name = "horario_fim")
    private LocalTime horarioFim;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_responsavel", nullable = false)
    private Responsavel responsavel;

    // Construtor vazio
    public ConfiguracoesParentais() {
    }

    // Getters e Setters
    public Integer getIdConfig() {
        return idConfig;
    }

    public void setIdConfig(Integer idConfig) {
        this.idConfig = idConfig;
    }

    public LocalTime getLimiteTempoDiario() {
        return limiteTempoDiario;
    }

    public void setLimiteTempoDiario(LocalTime limiteTempoDiario) {
        this.limiteTempoDiario = limiteTempoDiario;
    }

    public LocalTime getHorarioInicio() {
        return horarioInicio;
    }

    public void setHorarioInicio(LocalTime horarioInicio) {
        this.horarioInicio = horarioInicio;
    }

    public LocalTime getHorarioFim() {
        return horarioFim;
    }

    public void setHorarioFim(LocalTime horarioFim) {
        this.horarioFim = horarioFim;
    }

    public Responsavel getResponsavel() {
        return responsavel;
    }

    public void setResponsavel(Responsavel responsavel) {
        this.responsavel = responsavel;
    }
}
