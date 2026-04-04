output "namespace" {
  value = kubernetes_namespace.shopeasy.metadata[0].name
}

output "user_service" {
  value = kubernetes_service.user_service.metadata[0].name
}

output "product_service" {
  value = kubernetes_service.product_service.metadata[0].name
}
