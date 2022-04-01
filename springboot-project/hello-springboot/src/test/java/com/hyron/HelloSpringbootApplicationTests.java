package com.hyron;

import org.junit.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import java.net.URL;


@RunWith(SpringRunner.class)
@SpringBootTest(classes = HelloSpringbootApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class HelloSpringbootApplicationTests {

    @LocalServerPort
    private int port;
    private URL base;

    @Autowired
    private TestRestTemplate template;

    @BeforeEach
    public void setUp() throws Exception {
        this.base = new URL("http://localhost:" + port + "/");
    }
    @Test
    public void contextLoads() {
        ResponseEntity<String> response = template.getForEntity(base.toString(), String.class);
        Assert.assertEquals(response.getBody(), "Hello Spring Boot");

    }

}
