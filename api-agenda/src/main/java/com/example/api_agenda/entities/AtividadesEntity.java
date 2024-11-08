package com.example.api_agenda.entities;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class AtividadesEntity {

    @Id
    @Column(name = "atividade_id")
    private Long atividade_id;
    @Column(name = "nome")
    private String nome;
    @Column(name = "descricao")
    private String descricao;
    @Column(name = "ultima_atualizacao")
    private String ultimaAtualizacao;
    @Column(name = "proxima_execucao")
    private String proximaExecucao;

}
