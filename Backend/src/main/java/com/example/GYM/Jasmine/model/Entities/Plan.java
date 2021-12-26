//package com.example.GYM.Jasmine.model.Entities;
//
//
//import javax.persistence.*;
//
//@Entity
//@Table
//public class Plan {
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Id
//    private int p_id;
//    private String p_name;
//    private String p_description;
//    private String amount;
//    private String active;
//
//
//
//    public Plan() {
//    }
//
//    public Plan(int p_id, String p_name,  String p_description, String amount, String active) {
//        this.p_id = p_id;
//        this.p_name = p_name;
//        this.p_description = p_description;
//        this.amount = amount;
//        this.active = active;
//    }
//
//
//
//    public int getP_id() {
//        return p_id;
//    }
//
//    public void setP_id(int p_id) {
//        this.p_id = p_id;
//    }
//
//    public String getName() {
//        return p_name;
//    }
//
//    public void setName(String p_name) {
//        this.p_name = p_name;
//    }
//
//
//
//    public String getP_description() {
//        return p_description;
//    }
//
//    public void setP_description(String p_description) {
//        this.p_description = p_description;
//    }
//
//
//    public String getAmount() {
//        return amount;
//    }
//
//    public void setAmount(String amount) {
//        this.amount = amount;
//    }
//
//    public String getActive() {
//        return active;
//    }
//
//    public void setActive(String active) {
//        this.active = active;
//    }
//
//
//    @Override
//    public String toString() {
//
//
//        return "plan{" +
//                "p_id=" + p_id +
//                ", p_name='" + p_name + '\'' +
//                ", p_description='" + p_description + '\'' +
//                ", amount='" + amount + '\'' +
//                ", active='" + active + '\'' +
//                '}';
//    }
//}