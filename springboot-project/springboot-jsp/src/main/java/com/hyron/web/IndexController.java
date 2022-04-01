package com.hyron.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
@ResponseBody
public class IndexController {
    @RequestMapping(value="/say")
    public ModelAndView say() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("say");
        return mv;
    }
}
