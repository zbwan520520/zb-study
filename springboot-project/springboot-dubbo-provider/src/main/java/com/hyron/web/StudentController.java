package com.hyron.web;

import com.hyron.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class StudentController {
    @Autowired
    private StudentService studentService;

    @RequestMapping(value="/student")
    public @ResponseBody Object studentCount() {
        Integer count = studentService.queryAllStudentCount();
        return "学生总人数为：" + count;
    }
}
