package com.app.SpringBootToMysqlTest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages={"com.app.accessingdatamysql"})
public class SpringBootToMysqlTest2Application {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootToMysqlTest2Application.class, args);
	}

}
