package com.ourmesseger.app.demo;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RequestMapping("/api")
@RestController
@SpringBootApplication
public class DemoApplication {
	
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
    
    @GetMapping(value = "/hello")
    public String hello() throws JSONException{
        return new JSONObject().put("name", "Ashish")
                .put("job", new int[]{1,2,3,4,5,6,7,8}).toString();
    }

}
