package com.example.GYM.Jasmine.model.service;

import com.example.GYM.Jasmine.model.Entities.Member;
import com.example.GYM.Jasmine.model.Repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class MemberService {

        private MemberRepository memberRepository;

        @Autowired
        public MemberService(MemberRepository memberRepository) {
            this.memberRepository = memberRepository;
        }


        public List<Member> getMembers() {
            return memberRepository.findAll();
        }

        public Optional<Member> getMember(Integer memberId) {
            return memberRepository.findById(memberId);

        }

        public void addNewMember(Member member) {
            memberRepository.save(member);
        }

        public void deleteMember(Integer memberId) {
            memberRepository.deleteById(memberId);

        }



}


