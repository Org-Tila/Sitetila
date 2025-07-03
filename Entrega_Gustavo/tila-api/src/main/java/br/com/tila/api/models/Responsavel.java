package br.com.tila.api.models;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "Responsavel")
public class Responsavel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_responsavel")
    private Integer idResponsavel;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String senha;

    // Campos adicionados conforme solicitado
    @Column(name = "ativo")
    private boolean ativo = true;

    @Column(name = "ultimo_login")
    private LocalDateTime ultimoLogin;

    @Column(name = "senha_ultima_alteracao")
    private LocalDateTime senhaUltimaAlteracao;

    @Column(name = "usa_acessibilidade")
    private boolean usaAcessibilidade = false;
    
    @Column(name = "data_cadastro", updatable = false) // Não atualiza após a criação
    private LocalDateTime dataCadastro = LocalDateTime.now();

    // Relacionamento: Um Responsável tem muitas Crianças
    @OneToMany(mappedBy = "responsavel", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Crianca> criancas;

    // Construtor Vazio
    public Responsavel() {
    }
    
    // Getters e Setters
    public Integer getIdResponsavel() {
        return idResponsavel;
    }

    public void setIdResponsavel(Integer idResponsavel) {
        this.idResponsavel = idResponsavel;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public boolean isAtivo() {
        return ativo;
    }

    public void setAtivo(boolean ativo) {
        this.ativo = ativo;
    }

    public LocalDateTime getUltimoLogin() {
        return ultimoLogin;
    }

    public void setUltimoLogin(LocalDateTime ultimoLogin) {
        this.ultimoLogin = ultimoLogin;
    }

    public LocalDateTime getSenhaUltimaAlteracao() {
        return senhaUltimaAlteracao;
    }

    public void setSenhaUltimaAlteracao(LocalDateTime senhaUltimaAlteracao) {
        this.senhaUltimaAlteracao = senhaUltimaAlteracao;
    }

    public boolean isUsaAcessibilidade() {
        return usaAcessibilidade;
    }

    public void setUsaAcessibilidade(boolean usaAcessibilidade) {
        this.usaAcessibilidade = usaAcessibilidade;
    }

    public LocalDateTime getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(LocalDateTime dataCadastro) {
        this.dataCadastro = dataCadastro;
    }

    public List<Crianca> getCriancas() {
        return criancas;
    }

    public void setCriancas(List<Crianca> criancas) {
        this.criancas = criancas;
    }
}