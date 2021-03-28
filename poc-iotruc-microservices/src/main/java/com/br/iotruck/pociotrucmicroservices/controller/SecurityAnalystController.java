package com.br.iotruck.pociotrucmicroservices.controller;

import com.br.iotruck.pociotrucmicroservices.entity.SecurityAnalyst;
import com.br.iotruck.pociotrucmicroservices.repository.ISecurityAnalystRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Access;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/securityanalyst")
@Api("API REST POC")
public class SecurityAnalystController {

    @Autowired
    private ISecurityAnalystRepository repository;

    @GetMapping("/{id}")
    @ApiOperation("Retorna uma busca por id de um analista de segurança")
    public SecurityAnalyst getById(@PathVariable int id) {

        Optional<SecurityAnalyst> securityanalyst = repository.findById(id);

        return securityanalyst.orElse(null);
    }

    @GetMapping
    @ApiOperation("Retorna todos os analistas")
    public Iterable<SecurityAnalyst> getAll() {

        return repository.findAll();

    }

    @PostMapping
    @ApiOperation("Esse método cria um novo analista")
    public String create(@RequestBody SecurityAnalyst securityAnalyst) {
        repository.save(securityAnalyst);
        return "Analista Criado com sucesso";

    }

    @PutMapping("/{id}")
    @ApiOperation("Esse método atualiza um analista existente")
    public String update(@PathVariable int id, @RequestBody SecurityAnalyst securityAnalyst) {

        if (repository.existsById(id)) {
            securityAnalyst.setId(id);
            repository.save(securityAnalyst);
            return "Analista Atualizado com sucesso";
        } else {
            return "Treinador não encontrado";
        }
    }

    @DeleteMapping("/{id}")
    @ApiOperation("Esse método remove um analista")
    public String remove(@PathVariable int id) {

        if (repository.existsById(id)) {
            repository.deleteById(id);
            return "Analista Removido com sucesso";
        } else {
            return "Analista Não encontrado";
        }
    }


}
