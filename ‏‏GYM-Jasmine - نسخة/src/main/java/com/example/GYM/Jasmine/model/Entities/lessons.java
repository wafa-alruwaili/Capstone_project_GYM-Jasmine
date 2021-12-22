package com.example.GYM.Jasmine.model.Entities;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table
public class Lessons {
    @Id
    private int l_id;
        private String l_name;
    private String l_type;
       private String l_description;
       private Date l_datetime;

  @OneToMany(mappedBy = "lessons")
  private List<Member> Member;



    public Lessons (int l_id, String l_name, String l_type, String l_description, Date l_datetime) {
        this.l_id = l_id;
        this.l_name = l_name;
        this.l_type = l_type;
        this.l_description = l_description;
        this.l_datetime = l_datetime;
    }

    public Lessons() {
    }

    public int getL_id() {
        return l_id;
    }

    public void setL_id(int l_id) {
        this.l_id = l_id;
    }


    public String getL_name() {
        return l_name;
    }

    public void setL_name(String l_name) {
        this.l_name = l_name;
    }


    public String getL_description() {
        return l_description;
    }

    public void setL_description(String l_description) {
        this.l_description = l_description;
    }
    public Date getL_datetime() {
        return l_datetime;
    }

    public void setL_datetime(Date l_datetime) {
        this.l_datetime = l_datetime;
    }


    public String getL_type() {
        return l_type;
    }

    public void setL_type(String l_type) {
        this.l_type = l_type;
    }




    @Override
    public String toString() {
        return "employees{" +
                "l_id=" + l_id +
                ", l_name=" + l_name +
                ", l_description=" + l_description +
                ", l_datetime='" + l_datetime + '\'' +
                ", l_type='" + l_type + '\'' +
                '}';
    }
}
