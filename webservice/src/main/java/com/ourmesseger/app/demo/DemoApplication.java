package com.ourmesseger.app.demo;

import org.json.JSONObject;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
public class DemoApplication {
	
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
    
    @GetMapping(value = "/hello")
    public String hello(){
        return new JSONObject().put("name", "Ashish")
                .put("job", new int[]{1,2,3,4,5,6,7,8}).toString();
    }

}
