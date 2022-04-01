package com.hyron.web;

import com.hyron.model.Student;
import com.hyron.service.StudentServie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class StudentController {
    @Autowired
    private StudentServie studentServie;

    @RequestMapping(value="/update")
    public @ResponseBody Object student(Integer id, String name) {
        Student student = new Student();
        student.setId(id);
        student.setName(name);
        int updateCnt = studentServie.updateStudentById(student);

        return "修改学生编号为" + id + "的姓名修改结果：" + updateCnt;
    }
}
