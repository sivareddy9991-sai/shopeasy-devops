terraform {
  required_providers {
     kubernetes = {
       source  = "hashicorp/kubernetes"
       version = "~> 2.0"
     }
  }
}

provider "kubernetes" {
  config_path    = "~/.kube/config"
  config_context = "minikube"
}

resource "kubernetes_namespace" "shopeasy" {
  metadata {
    name = var.namespace
  }
}

resource "kubernetes_deployment" "user_service" {
  metadata {
    name      = "user-service"
    namespace = kubernetes_namespace.shopeasy.metadata[0].name
  }
  spec {
    replicas = 1
    selector {
      match_labels = {
         app = "user-service"
      }
    }
    template {
      metadata {
        labels = {
          app = "user-service"
        }
      } 
      spec {
        container {
          name  = "user-service"
          image = "shopeasy/user-service:1.0.0"
          port {
            container_port = 3000
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "user_service" {
  metadata {
    name      = "user-service-tf"
    namespace = kubernetes_namespace.shopeasy.metadata[0].name
  }
  spec {
    selector = {
      app = "user-service"
    }
    port {
      port        = 3000
      target_port = 3000
    }
    type = "NodePort"
  }
}

resource "kubernetes_deployment" "product_service" {
  metadata {
    name      = "product-service"
    namespace = kubernetes_namespace.shopeasy.metadata[0].name
  }
  spec {
    replicas = 1
    selector {
      match_labels = {
        app = "product-service"
      }
    }
    template {
      metadata {
        labels = {
          app = "product-service"
        }
      }
      spec {
        container {
          name  = "product-service"
          image = "shopeasy/product-service:1.0.0"
          port {
            container_port = 8081
          }
        }
      }
    }
  }
}                                                                                                                                                                                         
resource "kubernetes_service" "product_service" {
  metadata {
    name      = "product-service-tf"
    namespace = kubernetes_namespace.shopeasy.metadata[0].name
  }
  spec {
    selector = {
      app = "product-service"
    }
    port {
      port        = 8081
      target_port = 8081
    }
    type = "NodePort"
  }
} 
