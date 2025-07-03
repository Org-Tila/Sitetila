package br.com.tila.api.dtos;

import br.com.tila.api.models.Crianca.Sexo;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

/**
 * DTO (Data Transfer Object) para receber os dados de criação de uma nova criança.
 * Usamos DTOs para não expor nossas entidades do banco de dados diretamente na API.
 */
public class CriancaDTO {

    @NotBlank(message = "O nome da criança é obrigatório.")
    private String nome;

    @NotNull(message = "A idade é obrigatória.")
    @Min(value = 0, message = "A idade não pode ser negativa.")
    private int idade;

    @NotNull(message = "O sexo é obrigatório.")
    private Sexo sexo;

    // Getters e Setters
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
}
