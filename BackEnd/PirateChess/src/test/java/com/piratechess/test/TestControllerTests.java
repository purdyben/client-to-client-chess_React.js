//package com.piratechess.test;
//
//import static org.junit.Assert.assertEquals;
//
//import java.net.URI;
//
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.web.client.TestRestTemplate;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.RequestEntity;
//import org.springframework.http.ResponseEntity;
//import org.springframework.test.context.junit4.SpringRunner;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
//public class TestControllerTests {
//
//  @Autowired
//  private TestRestTemplate restTemplate;
//
////  @Test
////  public void corsWithAnnotation() throws Exception {
////    ResponseEntity<String> entity = this.restTemplate.exchange(
////        RequestEntity.get(uri("/test/hello")).header(HttpHeaders.ORIGIN, "http://localhost:3000").build(),
////        String.class);
////    assertEquals(HttpStatus.OK, entity.getStatusCode());
////    assertEquals("http://localhost:9000", entity.getHeaders().getAccessControlAllowOrigin());
////    String greeting = entity.getBody();
////    assertEquals( "Hello World - v3!", greeting);
////  }
//  private URI uri(String path) {
//	    return restTemplate.getRestTemplate().getUriTemplateHandler().expand(path);
//	  }
//  }