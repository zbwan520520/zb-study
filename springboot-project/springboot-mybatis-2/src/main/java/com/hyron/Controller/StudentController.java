package com.hyron.Controller;

import com.hyron.model.Student;
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
    public @ResponseBody Student queryStudentById(Integer id) {
        Student student = studentService.queryStudentById(id);
        return student;
    }
}
