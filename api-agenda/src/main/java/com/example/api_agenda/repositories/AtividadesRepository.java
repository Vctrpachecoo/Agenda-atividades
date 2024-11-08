package com.example.api_agenda.repositories;

import com.example.api_agenda.entities.AtividadesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface AtividadesRepository extends JpaRepository<AtividadesEntity, Long> {

    @Query(value = "call Pr_calcula_proxima_execucao()", nativeQuery = true)
    List<AtividadesEntity> calculaProximaExecucao();
}

