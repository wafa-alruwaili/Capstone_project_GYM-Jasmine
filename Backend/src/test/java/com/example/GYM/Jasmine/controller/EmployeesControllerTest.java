package com.example.GYM.Jasmine.controller;

import com.example.GYM.Jasmine.model.Entities.Employees;
import com.example.GYM.Jasmine.model.Entities.Lessons;
import com.example.GYM.Jasmine.model.Entities.Member;
import com.example.GYM.Jasmine.model.Entities.Plan;
import com.example.GYM.Jasmine.model.service.EmployeesService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;

class EmployeesControllerTest {
    @Mock
    EmployeesService employeesService;
    @InjectMocks
    EmployeesController employeesController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetEmployees() {
        when(employeesService.getEmployees()).thenReturn(Arrays.<Employees>asList(new Employees(0, 0, "full_name", "user_name", "type", Arrays.<Plan>asList(new Plan(0, "p_name", "p_description", "amount", "active", Arrays.<Lessons>asList(new Lessons(0, "l_name", "l_type", "l_description", "l_date_time", Arrays.<Member>asList(new Member(0, "name", "gender", 0, "address", 0, 0, "renewal", "start_date", "end_date", "username", "password", Arrays.<Lessons>asList(null))), null)), null)))));

        List<Employees> result = employeesController.getEmployees();
        Assertions.assertEquals(Arrays.<Employees>asList(new Employees(0, 0, "full_name", "user_name", "type", Arrays.<Plan>asList(new Plan(0, "p_name", "p_description", "amount", "active", Arrays.<Lessons>asList(new Lessons(0, "l_name", "l_type", "l_description", "l_date_time", Arrays.<Member>asList(new Member(0, "name", "gender", 0, "address", 0, 0, "renewal", "start_date", "end_date", "username", "password", Arrays.<Lessons>asList(null))), null)), null)))), result);
    }

    @Test
    void testGetEmployees2() {
        when(employeesService.getEmployees(anyInt())).thenReturn(null);

        Optional<Employees> result = employeesController.getEmployees(Integer.valueOf(0));
        Assertions.assertEquals(null, result);
    }

    @Test
    void testRegisterNewEmployees() {
        employeesController.registerNewEmployees(new Employees(0, 0, "full_name", "user_name", "type", Arrays.<Plan>asList(new Plan(0, "p_name", "p_description", "amount", "active", Arrays.<Lessons>asList(new Lessons(0, "l_name", "l_type", "l_description", "l_date_time", Arrays.<Member>asList(new Member(0, "name", "gender", 0, "address", 0, 0, "renewal", "start_date", "end_date", "username", "password", Arrays.<Lessons>asList(null))), null)), null))));
    }

    @Test
    void testCheckLogin() {
        when(employeesService.getCheck(anyString(), anyString())).thenReturn("getCheckResponse");

        String result = employeesController.checkLogin("user_name", "password");
        Assertions.assertEquals("getCheckResponse", result);
    }

    @Test
    void testDeleteEmployees() {
        employeesController.deleteEmployees(Integer.valueOf(0));
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme