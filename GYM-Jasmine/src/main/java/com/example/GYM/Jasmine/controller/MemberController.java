package com.example.GYM.Jasmine.controller;

import com.example.GYM.Jasmine.model.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.GYM.Jasmine.model.Entities.Member;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping(path = "api/member")
public class MemberController<memberService> {

    private MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @GetMapping
    public List<Member> getMembers() {
        return memberService.getMembers();
    }

    @GetMapping(path = "{memberId}")
    public Optional<Member> getMember(@PathVariable(name = "memberId") Integer memberId) {
        return memberService.getMember(memberId);
    }

    @PostMapping(path = "add")
    public void registerNewMember(@RequestBody Member member) {
        memberService.addNewMember(member);
    }

    @DeleteMapping(path = "delete/{memberId}")
    public void deleteMember(@PathVariable ("memberId") Integer memberId){
        memberService.deleteMember(memberId);

    }
}
