package com.hyron;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan(basePackages = "com.hyron.mapper")
public class SpringbootMybatis2Application {

    public static void main(String[] args) {
        SpringApplication.run(SpringbootMybatis2Application.class, args);
    }

}
