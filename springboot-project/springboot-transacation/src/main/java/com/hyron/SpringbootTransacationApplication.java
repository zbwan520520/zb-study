package com.hyron;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.hyron.mapper")
public class SpringbootTransacationApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringbootTransacationApplication.class, args);
    }

}
