package com.example.GYM.Jasmine.model.Entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Member {
    @Id
    private int m_id;
    private int height;
    private int weight;
    private String name;
    private String gender;
    private String address;
    private String renewal;
    private int dob;
    private String start_date;
    private String end_date;

    public Member(int m_id, int height, int weight, String name, String gender, String address, String renewal, int dob, String start_date, String end_date) {
        this.m_id = m_id;
        this.height = height;
        this.weight = weight;
        this.name = name;
        this.gender = gender;
        this.address = address;
        this.renewal = renewal;
        this.dob = dob;
        this.start_date = start_date;
        this.end_date = end_date;
    }

    public Member() {
    }

    public int getM_id() {
        return m_id;
    }

    public void setM_id(int m_id) {
        this.m_id = m_id;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getRenewal() {
        return renewal;
    }

    public void setRenewal(String renewal) {
        this.renewal = renewal;
    }

    public int getDob() {
        return dob;
    }

    public void setDob(int dob) {
        this.dob = dob;
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

