package com.academy.lodsing;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class MainController {

	
//	@Inject
//	private MemberMapper memberMapper;
	
	@GetMapping
	public String main() {
		
		
		return "/vue/admin.html" ;
	}
	
//	@GetMapping("/member")
//	public Object getMember() {
//		
//		List<Member> member = memberMapper.findAll();
//		
//		return Map.of("member", member);
//	}
}
