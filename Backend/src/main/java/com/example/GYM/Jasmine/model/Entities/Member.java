package com.example.GYM.Jasmine.model.Entities;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.awt.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
//@JsonIdentityInfo(
//       generator = ObjectIdGenerators.PropertyGenerator.class,
//    property = "id")
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int m_id;
    private String name;
    private String gender;
    private int dob;
    private String address;
    private int height;
    private int weight;
    private String renewal;
    private String start_date;
    private String end_date;



    @OneToMany(mappedBy = "member")

    @JsonIgnore

    private List<Lessons> items = new ArrayList<>();


//    @OneToMany(mappedBy="member")
//    private List<Lessons> lessons;

    public Member() {
}





    public Member(int m_id, String name, String gender, int dob, String address, int height, int weight, String renewal, String start_date, String end_date, List<Lessons> items) {
        this.m_id = m_id;
        this.name = name;
        this.gender = gender;
        this.dob = dob;
        this.address = address;
        this.height = height;
        this.weight = weight;
        this.renewal = renewal;
        this.start_date = start_date;
        this.end_date = end_date;
        this.items = items;
    }


    public List<Lessons> getItems() {
        return items;
    }

    public void setItems(List<Lessons> items) {
        this.items = items;
    }

    public int getM_id() {
        return m_id;
    }

    public void setM_id(int m_id) {
        this.m_id = m_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public int getDob() {
        return dob;
    }

    public void setDob(int dob) {
        this.dob = dob;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public String getRenewal() {
        return renewal;
    }

    public void setRenewal(String renewal) {
        this.renewal = renewal;
    }

    public String getStart_date() {
        return start_date;
    }

    public void setStart_date(String start_date) {
        this.start_date = start_date;
    }

    public String getEnd_date() {
        return end_date;
    }

    public void setEnd_date(String end_date) {
        this.end_date = end_date;
    }



    @Override
    public String toString() {


        return "member{" +
                "m_id=" + m_id +
                ", height=" + height +
                ", weight=" + weight +
                ", name='" + name + '\'' +
                ", gender='" + gender + '\'' +
                ", address='" + address + '\'' +
                ", renewal='" + renewal + '\'' +
                ", dob=" + dob +
                ", start_date='" + start_date + '\'' +
                ", end_date='" + end_date + '\'' +
                '}';
    }
}

