package com.shopeasy.controller;

  import com.shopeasy.model.Product;
  import org.springframework.http.HttpStatus;
  import org.springframework.http.ResponseEntity;
  import org.springframework.web.bind.annotation.*;

  import java.util.ArrayList;
  import java.util.HashMap;
  import java.util.List;
  import java.util.Map;

  @RestController
  public class ProductController {

      private List<Product> products = new ArrayList<>();

      public ProductController() {
          products.add(new Product(1, "Laptop",     "Electronics", 45000.00, 10));
          products.add(new Product(2, "Phone",      "Electronics", 15000.00, 25));
          products.add(new Product(3, "Headphones", "Electronics",  2000.00, 50));
      }

      @GetMapping("/health")
      public ResponseEntity<Map<String, Object>> health() {
          Map<String, Object> response = new HashMap<>();
          response.put("status", "UP");
          response.put("service", "product-service");
          response.put("version", "1.0.0");
          response.put("port", 8081);
          return ResponseEntity.ok(response);
      }

      @GetMapping("/products")
      public ResponseEntity<Map<String, Object>> getAllProducts() {
          Map<String, Object> response = new HashMap<>();
          response.put("success", true);
          response.put("count", products.size());
          response.put("data", products);
          return ResponseEntity.ok(response);
      }

      @GetMapping("/products/{id}")
      public ResponseEntity<Map<String, Object>> getProductById(@PathVariable int id) {
          Map<String, Object> response = new HashMap<>();
          Product found = null;
          for (Product p : products) {
              if (p.getId() == id) {
                  found = p;
                  break;
              }
          }
          if (found == null) {
              response.put("success", false);
              response.put("message", "Product not found");
              return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
          }
          response.put("success", true);
          response.put("data", found);
          return ResponseEntity.ok(response);
      }

      @PostMapping("/products")
      public ResponseEntity<Map<String, Object>> createProduct(@RequestBody Product product) {
          Map<String, Object> response = new HashMap<>();
          if (product.getName() == null || product.getName().isEmpty()) {
              response.put("success", false);
              response.put("message", "Product name is required");
              return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
          }
          product.setId(products.size() + 1);
          products.add(product);
          response.put("success", true);
          response.put("data", product);
          return ResponseEntity.status(HttpStatus.CREATED).body(response);
      }
  }
