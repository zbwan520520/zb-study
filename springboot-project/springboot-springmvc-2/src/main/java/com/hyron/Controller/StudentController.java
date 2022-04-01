package com.hyron.Controller;

import com.hyron.model.Student;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class StudentController {
    @RequestMapping(value = "student")
    public @ResponseBody Object student() {
        Student student = new Student();
        student.setId(1001);
        student.setName("zhangsan");
        return student;
    }
}
