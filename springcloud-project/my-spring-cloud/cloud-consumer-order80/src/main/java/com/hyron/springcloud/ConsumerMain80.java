package com.hyron.springcloud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
// @RibbonClient(name="CLOUD-PAYMENT-SERVICE", configuration = MySelfRule.class)
public class ConsumerMain80 {
        public static void main(String[] args) {
            SpringApplication.run(ConsumerMain80.class, args);
        }
}
