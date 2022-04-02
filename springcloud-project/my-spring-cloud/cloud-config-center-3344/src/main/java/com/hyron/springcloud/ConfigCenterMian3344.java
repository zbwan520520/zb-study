package com.hyron.springcloud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@SpringBootApplication
@EnableConfigServer
public class ConfigCenterMian3344 {
    public static void main(String[] args) {
        SpringApplication.run(ConfigCenterMian3344.class, args);
    }
}
