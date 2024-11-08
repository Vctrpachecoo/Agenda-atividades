package com.example.api_agenda.controllers;


import com.example.api_agenda.entities.AtividadesEntity;
import com.example.api_agenda.services.AtividadesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/atividades")
public class AtividadesController {

    @Autowired
    private AtividadesService service;

    @GetMapping("/execucoes")
    public List<AtividadesEntity> execucoes(){
        return service.getExecucoes();
    }
}
