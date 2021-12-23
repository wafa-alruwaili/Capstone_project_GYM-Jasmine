package com.example.GYM.Jasmine.model.Entities;


import javax.persistence.*;

@Entity
@Table
public class Lessons {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int l_id;
    private String l_name;
    private String l_type;
    private String l_description;
    private String l_date_time;

    @ManyToMany
    @JoinColumn(name = "m_id")
    private Member member;


    public Lessons() {
    }

    public Lessons(int l_id, String l_name, String l_type, String l_description, String l_date_time) {
        this.l_id = l_id;
        this.l_name = l_name;
        this.l_type = l_type;
        this.l_description = l_description;
        this.l_date_time = l_date_time;
    }


    public int getL_id() {
        return l_id;
    }

    public void setL_id(int l_id) {
        this.l_id = l_id;
    }

    public String getName() {
        return l_name;
    }

    public void setName(String l_name) {
        this.l_name = l_name;
    }


    public String getType() {
        return l_type;
    }

    public void setType(String l_type) {
        this.l_type = l_type;
    }


    public String getDescription() {
        return l_description;
    }

    public void setDescription(String l_description) {
        this.l_description = l_description;
    }

    public String getDate_time() {
        return l_date_time;
    }

    public void setDate_time(String l_date_time) {
        this.l_date_time = l_date_time;
    }


    @Override
    public String toString() {


        return "lessons{" +
                "l_id=" + l_id +
                ", l_name='" + l_name + '\'' +
                ", l_type='" + l_type + '\'' +
                ", l_description='" + l_description + '\'' +
                ", l_date_time='" + l_date_time + '\'' +
                '}';
    }
}