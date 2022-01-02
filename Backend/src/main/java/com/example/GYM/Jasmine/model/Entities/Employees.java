package com.example.GYM.Jasmine.model.Entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Employees {
    @Id
    private int e_id;
    private int password;
    private String full_name;
    private String user_name;
    private String type;


    public Employees(int e_id, int password, String full_name, String user_name, String type) {
        this.e_id = e_id;
        this.password = password;
        this.full_name = full_name;
        this.user_name = user_name;
        this.type = type;
    }

    public Employees() {
    }

    public int getE_id() {
        return e_id;
    }

    public void setE_id(int e_id) {
        this.e_id = e_id;
    }

    public int getPassword() {
        return password;
    }

    public void setPassword(int password) {
        this.password = password;
    }



    public String getFull_name() {
        return full_name;
    }

    public void setFull_name(String full_name) {
        this.full_name = full_name;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }


    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }


    @Override
    public String toString() {
        return "employees{" +
                "e_id=" + e_id +
                ", password=" + password +
                ", full_name=" + full_name +
                ", user_name='" + user_name + '\'' +
                ", type='" + type + '\'' +
                '}';
    }
}

