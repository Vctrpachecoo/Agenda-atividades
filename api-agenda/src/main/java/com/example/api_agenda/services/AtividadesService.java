package com.example.api_agenda.services;

import com.example.api_agenda.entities.AtividadesEntity;
import com.example.api_agenda.repositories.AtividadesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AtividadesService {

    @Autowired
    private AtividadesRepository repository;

    public List<AtividadesEntity> getExecucoes() {
        return repository.calculaProximaExecucao();

    }
}
