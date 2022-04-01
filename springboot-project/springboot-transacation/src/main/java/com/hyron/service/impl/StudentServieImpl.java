package com.hyron.service.impl;

import com.hyron.mapper.StudentMapper;
import com.hyron.model.Student;
import com.hyron.service.StudentServie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class StudentServieImpl implements StudentServie {
    @Autowired
    private StudentMapper studentMapper;

    @Transactional
    @Override
    public int updateStudentById(Student student) {
        // 修改成功
        int i = studentMapper.updateByPrimaryKey(student);
        // 失败
        int a = 10 / 0;
        return i;
    }
}
