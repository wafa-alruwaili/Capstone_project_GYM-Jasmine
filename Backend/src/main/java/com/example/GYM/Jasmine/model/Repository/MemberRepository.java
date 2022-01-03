package com.example.GYM.Jasmine.model.Repository;

import com.example.GYM.Jasmine.model.Entities.Employees;
import com.example.GYM.Jasmine.model.Entities.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;



@Repository
public interface MemberRepository extends JpaRepository<Member, Integer>{
//    @Query("SELECT password FROM Member WHERE name= :name")
//    String findByName(@Param("name") String name);
//
//    @Query("select case when count(name) > 0 then true else false end from Member where name = :name")
//    Boolean existsByName(@Param("name") String name);
}
