# ShopEasy - DevOps Project                                                                                                                                                            
                                                                                                                                                                                         
  A microservices e-commerce platform with full DevOps pipeline.                                                                                                                                                                   
  ## Author                                                                                                                                                                              
  - Name  : sai (kalkal)                                                                                                                                                                 
  - Email : sivareddy9991@gmail.com                                                                                                                                                      
                                                                                                                                                                                         
  ## Tech Stack
  - Version Control   : Git + GitHub                                                                                                                                                     
  - Containerization  : Docker                                                                                                                                                           
  - CI/CD             : Jenkins                                                                                                                                                          
  - Artifact Registry : Nexus
                                                                                                                           
  - Orchestration     : Kubernetes (Minikube)                                                                                                                                            
  - IaC               : Terraform                                                                                                                                                        
  - Config Mgmt       : Ansible                                                                                                                                                          
  - Monitoring        : Prometheus + Grafana                                                                                                                                             
                                                                                                                                                                                         
  ## Microservices                                                                                                                                                                       
  - user-service    : Node.js  (Port 3000)                                                                                                                                               
  - product-service : Java   (Port 8081)                                                                                                                                               
                                                                                                                                                                                         
  ## Project Status                                                                                                                                                                      
  - [x] Phase 1  : Linux + Git Setup                                                                                                                                                     
  - [x] Phase 2  : Microservices Code(Node.js+Java-spring-boot)                                                                                                                                                    
  - [x] Phase 3  : Docker                                                                                                                                                                
  - [x] Phase 4  : Jenkins CI/CD                                                                                                                                                         
  - [x] Phase 5  : Nexus
                                                                                                                            
  - [x] Phase 6  : Kubernetes                                                                                                                                                            
  - [x] Phase 7  : Terraform                                                                                                                                                             
  - [x] Phase 8  : Ansible                                                                                                                                                               
  - [x] Phase 9  : Monitoring                                                                                                                                                            
  - [x] Phase 10 : Observability                                                                                                                                                         


What you learned and built                                                                                                                                                             
                                                                                                                                                                                         
  ┌──────────────────┬──────────────────────┬──────────────────────────────────────────┐                                          
  │      Skill       │         Tool         │               What you did               │                                                                    ├──────────────────┼──────────────────────┼──────────────────────────────────────────┤                                                                    │ Version Control  │ Git/GitHub           │ SSH auth, branches, commits              │                                                                    ├──────────────────┼──────────────────────┼──────────────────────────────────────────┤
  │ Microservices    │ Node.js + Java       │ Built 2 REST APIs from scratch           │                             
  ├──────────────────┼──────────────────────┼──────────────────────────────────────────┤                                                                    │ Containerization │ Docker               │ Dockerfiles, images, containers, compose │                                                                    ├──────────────────┼──────────────────────┼──────────────────────────────────────────┤                                                                    │ CI/CD            │ Jenkins              │ Automated build and deploy pipelines     │ 
  ├──────────────────┼──────────────────────┼──────────────────────────────────────────┤                                                                
  │ Artifact Store   │ Nexus                │ Private Docker registry                  │
  ├──────────────────┼──────────────────────┼──────────────────────────────────────────┤                                                                    │ Orchestration    │ Kubernetes           │ Deployments, services, namespaces        │
  ├──────────────────┼──────────────────────┼──────────────────────────────────────────┤                                                                    │ IaC              │ Terraform            │ Infrastructure as code                   │
  ├──────────────────┼──────────────────────┼──────────────────────────────────────────┤                                                                    │ Configuration    │ Ansible              │ Automated deployment playbooks           │
  ├──────────────────┼──────────────────────┼──────────────────────────────────────────┤                                                                    │ Monitoring       │ Prometheus + Grafana │ Metrics and dashboards                   │
  └──────────────────┴──────────────────────┴──────────────────────────────────────────┘                                                                                                                                                                                                                           ---                                                                                                                                                                                    
  Important passwords to remember                                                                                                                                                        
                                                                                                                                                                                         
  ┌─────────┬────────────────┬──────────┬───────────┐
  │ Service │      URL       │ Username │ Password  │                                                                                                       ├─────────┼────────────────┼──────────┼───────────┤                                                                                                       │ Jenkins │ localhost:8080 │ admin    │ admin123  │
  ├─────────┼────────────────┼──────────┼───────────┤                             
  │ Nexus   │ localhost:8085 │ admin    │ Nexus123  │                                                                                                       ├─────────┼────────────────┼──────────┼───────────┤                                                                                                       │ Grafana │ localhost:3001 │ admin    │ Admin@123 │
  └─────────┴────────────────┴──────────┴───────────┘                                 
  ---                                                                                                                                                                                    
  To start everything after reboot                                                                                                                                                                                                                                                                                    sudo service jenkins start
  cd /home/kalkal/nexus && docker-compose up -d                                                                                                                                          
  cd /home/kalkal/shopeasy/monitoring && docker-compose up -d                                                                                                                            
  minikube start --driver=docker                                                                                                                                                         
                                                                                                                                                                                           ---                                                                            
