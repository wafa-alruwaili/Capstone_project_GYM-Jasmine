//package com.example.GYM.Jasmine.model.service;
//
//import com.example.GYM.Jasmine.model.Entities.Employees;
//import com.example.GYM.Jasmine.model.Repository.EmployeesRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class EmployeesService {
//
//    private EmployeesRepository employeesRepository;
//
//    @Autowired
//    public EmployeesService(EmployeesRepository employeesRepository) {
//        this.employeesRepository = employeesRepository;
//    }
//
//
//    public List<Employees> getEmployees() {
//        return employeesRepository.findAll();
//    }
//
//    public Optional<Employees> getMember(Integer memberId) {
//        return employeesRepository.findById(memberId);
//
//    }
//
//    public void addNewMember(Member member) {
//        memberRepository.save(member);
//    }
//
//    public void deleteMember(Integer memberId) {
//        memberRepository.deleteById(memberId);
//
//    }
//
//
//
//}
//
//
