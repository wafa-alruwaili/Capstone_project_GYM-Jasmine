package com.example.GYM.Jasmine.controller;

import com.example.GYM.Jasmine.model.service.EmployeesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.GYM.Jasmine.model.Entities.Employees;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping(path = "api/employees")
public class EmployeesController<employeesService> {

    private EmployeesService employeesService;

    @Autowired
    public EmployeesController(EmployeesService employeesService) {
        this.employeesService = employeesService;
    }

    @GetMapping
    public List<Employees> getEmployees() {
        return employeesService.getEmployees();
    }

    @GetMapping(path = "{employeesId}")
    public Optional<Employees> getEmployees(@PathVariable(name = "employeesId") Integer employeesId) {
        return employeesService.getEmployees(employeesId);
    }

    @PostMapping(path = "add")
    public void registerNewEmployees(@RequestBody Employees employees) {
        employeesService.addNewEmployees(employees);
    }

    @DeleteMapping(path = "delete/{employeesId}")
    public void deleteEmployees(@PathVariable ("employeesId") Integer employeesId){
        employeesService.deleteEmployees(employeesId);

    }
}

