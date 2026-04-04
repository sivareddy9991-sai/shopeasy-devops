# SHOPEASY - DEVOPS PROJECT NOTES                                                                                                                                                      
  # Author  : sai (kalkal)                                                                                                                                                               
  # Started : 2026-04-01                                                                                                                                                                 
  # Stack   : Jenkins | JFrog | Docker | K8s | Terraform | Ansible | Prometheus | Grafana                                                                                                
  # Cost    : Rs.0 (fully local)                                                                                                                                                        
  ------------------------------------
  SYSTEM INFO
  ------------------------------------
  OS       : Ubuntu 24.04 LTS (WSL2)                                                                                                                                                     
  Kernel   : 6.6.87.2-microsoft-standard-WSL2                                                                                                                                            
  Laptop   : LAPTOP-ARDQ592E                                                                                                                                                             
  CPU      : Intel i5-12500H (16 threads)
  RAM      : 24GB total (11GB to WSL2, 10GB free)                                                                                                                                        
  Disk     : 1007GB (953GB free)                                                                                                                                                         
  User     : kalkal                                                                                                                                                                      
  Home Dir : /home/kalkal/                                                                                                                                                               
  Project  : /home/kalkal/shopeasy/                                                                                                                            
                          
  ----------------------------
  PROJECT FOLDER STRUCTURE
  ----------------------------
  
  shopeasy/
  
  ├── user-service/       Node.js microservice  Port 3000                                                                                                                                
  ├── product-service/    Java microservice   Port 8081                                                                                                                                
  ├── jenkins/            Jenkinsfile CI/CD pipeline
  ├── k8s/                Kubernetes YAML files                                                                                                                                          
  ├── terraform/          Infrastructure as Code                                                                                                                                         
  ├── monitoring/         Prometheus + Grafana configs                                                                                                                                   
  ├── ansible/            Configuration management                                                                                                                                       
  └── docs/               This notes file lives here                                                                                                          
                           
  --------------------
  TOOLS AND VERSIONS
  --------------------
  Tool        Version    Purpose                Status
  --------------------

  Ubuntu      24.04LTS   Base OS                Done                                                                                                                      Git         2.43.0     Version control        Done

  Java        17         Product-service lang   Done

  Maven       3          Java build tool        Done                                                                                                     
  curl        8.5.0      HTTP requests          Done                                                                                                                                     
  wget        1.21.4     File downloads         Done                                                                                                                                     
  tree        2.1.1      Folder visualization   Done                                                                                                                                     
  vim/vi      9.1        Text editor            Done                                                                                                                                     
  Node.js     v24.14.1   user-service lang      Done

  Express     v5.2.1     Node.js webframework   Done                                                                                                                         
  Docker      -          Containerization       Done                                                                                                                                 
  Jenkins     -          CI/CD Pipeline         Done                                                                                                                                  
  NEXUS       -          Artifact Management    Done                                                                                                                                  
  Minikube    -          Local Kubernetes       Done                                                                                                                                  
  kubectl     -          K8s CLI                Done                                                                                                                                  
  Terraform   -          IaC                    Pending                                                                                                                                  
  Ansible     -          Config Management      Pending                                                                                                                                  
  Prometheus  -          Metrics Collection     Pending                                                                                                                                  
  Grafana     -          Dashboards             Pending                                                                                                                                  
                                                                                                                                                                                         
  ----------------------
  PHASE   PROGRESS
  ----------------------
  Phase   Topic                   Status    

  1       Linux + Git             Done
  2       Microservices Code      Done
  3       Docker                  Done                                                                                                                        4       Jenkins CI/CD           Done
  5       NEXUS                   Done                                                                                                                        6       Kubernetes              Done
  7       Terraform               Pending                                                                                      
  8       Ansible                 Pending                                                                                                                     9       Prometheus + Grafana    Pending                                                                                                            
  10      Observability           Pending
  ---------------------
  PHASE 1 - LINUX AND GIT
  ---------------------
  WHAT IS LINUX?                                                                                                                                                                         
  - 96% of servers run Linux                                                                                                                                                             
  - Docker, Jenkins, Kubernetes all run on Linux                                                                                                                                         
  - WSL2 = real Linux kernel inside Windows                                                                                                                                              
  - Ubuntu 24.04 LTS = stable, 5 year support                                                                                                                                            
  - apt = package manager (like Play Store for Linux)                                                                                                                                    
                                                                                                                                                                                         
  WHAT IS GIT?                                                                                                                                                                           
  - Version control system                                                                                                                                                               
  - Tracks every change ever made                                                                                                                                                        
  - git init   = start tracking folder (installs CCTV)                                                                                                                                   
  - git add    = stage files (put in shopping cart)
  - git commit = save snapshot (take photo)                                                                                                                                              
  - git push   = upload to GitHub (cloud backup)                                                                                                                                         
  - git pull   = download latest from GitHub                                                                                                                                             
  - HEAD       = pointer to where you are in history                                                                                                                                     
                                                                                                                                                                                         
  WHAT IS SSH?                                                                                                                                                                           
  - Secure Shell authentication                                                                                                                                                            - Private key = stays on YOUR laptop only                                                                                                                                              
  - Public key  = give to GitHub                                                                                                                                                         
  - Set up once = never type password again
  - More secure than HTTPS + PAT token
                                                                                                                                                                                         
  KEY CONCEPTS:                                                                                                                                                                          
  - idempotency = running same command gives same result                                                                                                                                 
  - ~ = shortcut for /home/kalkal/                                                                                                                                                       
  - sudo = run as administrator                                                                                                                                                          
  - . (dot) prefix = hidden file or folder                                                                                                                                               
  - Ctrl+C = cancel any stuck command                                                                                                                                                    
  - | (pipe) = send output of one command to another                                                                                                                                     
                                                                                                                                                                                         
  LINUX COMMANDS REFERENCE:                                                                                                                                   Command                     What it does
  --------------------------  --------------------------------                                                                                                                           
  pwd                         show current directory                                                                                                                                     
  ls -la                      list all files with details                                                                                                                                
  mkdir -p path               create nested folders                                                                                                                                      
  cd foldername               enter folder                                                                                                                                               
  cd ..                       go one level up                                                                                                                                            
  cd ~                        go to home directory                                                                                                                                       
  cat filename                print file contents                                                                                                                                        
  touch filename              create empty file                                                                                                                                          
  rm filename                 delete file                                                                                                                                                
  rm -rf folder               delete folder recursively                                                                                                                                  
  cp src dest                 copy file                                                                                                                                                  
  mv src dest                 move or rename file                                                                                                                                        
  sudo command                run as administrator                                                                                                                                       
  apt update                  refresh package list                                                                                                                                       
  apt install -y pkg          install package                                                                                                                                            
  apt autoremove -y           remove unused packages                                                                                                                                     
  grep text file              search text in file                                                                                                                                        
  find . -name file           find file by name                                                                                                                                          
  chmod +x file               make file executable                                                                                                                                       
  uname -a                    show kernel + system info                                                                                                                                  
  free -h                     show RAM usage                                                                                                                                             
  df -h ~                     show disk space usage                                                                                                                                      
  head -1                     show first line of output                                                                                                                                  
  pipe (|)                    send output to next command                                                                                                                                
                                                                                                                                                                                         
  GIT COMMANDS REFERENCE:                                                                                                                                                                
  Command                     What it does                                                                                                                                               
  --------------------------  --------------------------------                                                                                                                           
  git init                    initialize git repository                                                                                                                                  
  git status                  check what changed                                                                                                                                         
  git add .                   stage all changes                                                                                                                                          
  git add filename            stage specific file                                                                                                                                        
  git commit -m "msg"         save snapshot with message                                                                                                                                 
  git push                    upload to GitHub                                                                                                                                           
  git push -u origin main     first push (sets upstream)                                                                                                                                 
  git pull                    download from GitHub                                                                                                                                       
  git log --oneline           see commit history                                                                                                                                         
  git remote add origin url   connect to GitHub repo                                                                                                                                     
  git remote -v               verify remote connection                                                                                                                                   
  git config --list           show git configuration                                                                                                                                     
  git branch                  list branches                                                                                                                                              
  ssh-keygen -t ed25519       generate SSH key pair                                                                                                                                      
  ssh -T git@github.com       test GitHub SSH connection                                                                                                                                 
                                                                                                                                                                                         
  GIT CONFIGURATION DONE:                                                                                                                                                                
  user.name  = sai                                                                                                                                                                       
  user.email = sivareddy9991@gmail.com                                                                                                                                                   
  editor     = nano                                                                                                                                                                      
  branch     = main                                                                                                                                                                      
  SSH        = configured and working                                                                                                                                                    
                                                                                                                                                                                         
  GITHUB INFO:                                                                                                                                                                           
  Username    : sivareddy9991-sai                                                                                                                                                        
  Repo        : shopeasy-devops                                                                                                                                                          
  URL         : https://github.com/sivareddy9991-sai/shopeasy-devops                                                                                                                     
  SSH URL     : git@github.com:sivareddy9991-sai/shopeasy-devops.git                                                                                                                     
  First commit: 8c516a5                                                                                                                                                                  
                                                                                                                                                                                         
  TROUBLESHOOTING FACED IN PHASE 1:                                                                                                                                                      
  1. heredoc EOF did not close when pasting multiline content                                                                                                                            
     Symptom : terminal kept showing >                                                                                                                                                   
     Fix     : pressed Ctrl+C, used vi editor instead                                                                                                                                    
     Lesson  : for large content always use vi or nano                                                                                                                                   
                                                                                                                                                                                         
  2. wget command had backslash at end of line                                                                                                                                           
     Symptom : terminal kept showing > waiting for more input                                                                                                                            
     Fix     : pressed Ctrl+C and retyped correctly                                                                                                                                      
     Lesson  : backslash at end means line continues                                                                                                                                     
                                                                                                                                                                                         
  --------------------------
  ERRORS AND FIXES LOG
  -------------------------- 
  Date        Phase  Error                        Fix                                                                                                         ----------  -----  ---------------------------  ------------------                                                                                          2026-04-01  1      heredoc not closing          used vi editor                                                                                              2026-04-01  1      wget backslash issue         Ctrl+C retyped
  --------------------------                                 
  USEFUL LINKS
  --------------------------
  GitHub Repo    : https://github.com/sivareddy9991-sai/shopeasy-devops
  Jenkins UI     : http://localhost:8080  (Phase 4)                                                                                                           JFrog UI       : https://sivareddy9991-sai.jfrog.io  (Phase 5)                           
  Grafana UI     : http://localhost:3000  (Phase 9)
  Prometheus UI  : http://localhost:9090  (Phase 9)                                                                                                           Minikube IP    : run minikube ip  (Phase 6)                           
  --------------------------
  PHASE 2 - MICROSERVICES CODE
  --------------------------

   WHAT ARE MICROSERVICES?
  - Small independent services each doing ONE job
  - Each service has its own language, port, database
  - Services talk to each other via REST API
  - If one fails others keep running
  - Scale each service independently

  WHAT IS REST API?
  - Standard way services talk to each other
  - GET    = fetch data
  - POST   = create data
  - PUT    = update data
  - DELETE = remove data
  - Returns JSON format data

  WHAT IS EXPRESS?
  - Web framework for Node.js
  - Makes building REST APIs easy
  - app.get()  = handle GET request
  - app.post() = handle POST request
  - app.listen(PORT) = start server on port

  USER-SERVICE (Node.js):
  - Location : ~/shopeasy/user-service/
  - Port     : 3000
  - Language : Node.js v24.14.1
  - Framework: Express v5.2.1
  - Files    : server.js, package.json, .gitignore

  USER-SERVICE ENDPOINTS:
  Method  Endpoint      Description         Status
  ------  ----------    ----------------    -------
  GET     /health       health check        tested
  GET     /users        get all users       tested
  GET     /users/:id    get single user     tested
  POST    /users        create user         tested

  USER-SERVICE TEST RESULTS:
  curl http://localhost:3000/health
  → {"status":"UP","service":"user-service","version":"1.0.0"}

  curl http://localhost:3000/users
  → {"success":true,"count":3,"data":[...]}

  curl http://localhost:3000/users/1
  → {"success":true,"data":{"id":1,"name":"sai"...}}

  curl -X POST http://localhost:3000/users -d '{"name":"ravi"...}'
  → {"success":true,"data":{"id":4,"name":"ravi"...}}

  curl http://localhost:3000/users/99
  → {"success":false,"message":"User not found"}

  NODE.JS COMMANDS REFERENCE:
  Command                  What it does
  --------------------     ---------------------------
  npm init -y              create package.json
  npm install express      install express framework
  node server.js           start the server
  Ctrl+C                   stop the server
  npm install              reinstall all dependencies

  PRODUCT-SERVICE (Java Spring Boot):
  - Location : ~/shopeasy/product-service/
  - Port     : 8081
  - Language : Java 17
  - Framework: Spring Boot 3.x
  - Build    : Maven 3.8.7
  

  ## Phase 2 Progress — product-service COMPLETE (2026-04-02)                                                                                                                              
  ### What we built                                                                                                                                           - Java 17 + Spring Boot 3.2.0 REST API
  - Port: 8081                                                                                                                                                                           
  - 4 endpoints: GET /health, GET /products, GET /products/{id}, POST /products                                                                                                          
  - In-memory product list (no database yet)                                                                                                                                                                                                                                                                              ### Files created                                                                                                                                           - pom.xml (Spring Boot parent, spring-boot-starter-web) 

  - ProductServiceApplication.java (@SpringBootApplication entry point)                                                                                                                  
  - model/Product.java (id, name, category, price, stock + getters/setters)                                                                                                              
  - controller/ProductController.java (@RestController, 4 endpoints)                                                                                                                     
  - application.properties (server.port=8081)                                                                                                                                            
  - src/test/java/com/shopeasy/AppTest.java (JUnit 5 contextLoads test)                                                                                                                                                                                                                                                   ### Build command                                                                                                                                           cd ~/shopeasy/product-service
  
  mvn clean package -DskipTests     # build JAR                                                                                                                                          
  mvn spring-boot:run               # run service                                                                                                                                                                                                                                                                         ### All curl tests passed                                                                                                                                   
  curl -s http://localhost:8081/health

  curl -s http://localhost:8081/products                                                                                                                                                 
  curl -s http://localhost:8081/products/1                                                                                                                                               
  curl -s -X POST http://localhost:8081/products -H "Content-Type: application/json" -d '{"name":"Keyboard","category":"Electronics","price":1500.00,"stock":30}'                        
                                                                                                                                                              ### Errors fixed                                                                                                                                            
 - AppTest.java used JUnit 4 (org.junit) — Spring Boot 3.x needs JUnit 5 (org.junit.jupiter.api)                                                             
 - Fix: replaced import with org.junit.jupiter.api.Test + @SpringBootTest
 
 - Multiline curl with backslash fails on paste — always use single-line curl                                                                                                           
                                                                                                                                                             ### Key concepts learned
 - pom.xml = Java's package.json (dependency manager) 
 - @SpringBootApplication = entry point annotation                                                                                                           - @RestController = marks class as REST API handler                                                                                                         - @GetMapping / @PostMapping = route handlers                              
 - @PathVariable = extracts {id} from URL                    
 - @RequestBody = parses JSON body into Java object                                                                                                          - Maven lifecycle: clean → compile → test → package
 - -DskipTests skips test RUN but not COMPILE (use fixed AppTest.java)  
  --------------------------
  PHASE 3 - DOCKER
  --------------------------
### What we built
  - Dockerized both services (user-service + product-service)
  - docker-compose.yml to start both with one command
  - .dockerignore for both services

  ### Docker installation
  sudo apt install -y docker.io
  sudo service docker start
  sudo usermod -aG docker $USER   # run without sudo (reopen terminal after)

  ### Dockerfile — user-service (Node.js)
  FROM node:20-alpine
  WORKDIR /app
  COPY package.json .
  RUN npm install
  COPY . .
  EXPOSE 3000
  CMD ["node", "server.js"]

  ### Dockerfile — product-service (Java)
  FROM eclipse-temurin:17-jre-alpine
  WORKDIR /app
  COPY target/product-service-1.0.0.jar app.jar
  EXPOSE 8081
  CMD ["java", "-jar", "app.jar"]

  ### Build images
  docker build -t shopeasy/user-service:1.0.0 .
  docker build -t shopeasy/product-service:1.0.0 .

  ### Essential Docker commands
  docker images                    # list all images
  docker ps                        # list running containers
  docker ps -a                     # list all containers (including stopped)
  docker run -d -p 3000:3000 --name user-service shopeasy/user-service:1.0.0
  docker stop <name>               # stop container
  docker start <name>              # start container
  docker rm <name>                 # delete container
  docker rmi <image>               # delete image
  docker logs <name>               # view container logs

  ### Docker Compose commands
  docker-compose up -d             # start all services background
  docker-compose down              # stop and remove containers
  docker-compose stop              # stop containers (keep them)
  docker-compose start             # start stopped containers
  docker-compose ps                # show status
  docker-compose logs              # show all logs
  docker-compose logs -f           # follow logs in real time
  docker-compose restart           # restart all services

  ### Key concepts
  - Image = blueprint (read-only), Container = running instance
  - Docker Hub = public registry (like GitHub for images)
  - JFrog = private registry (your own images)
  - alpine = lightweight Linux base (5MB vs 200MB Ubuntu)
  - JRE not JDK in Dockerfile (JRE runs, JDK compiles — smaller image)
  - COPY package.json before COPY . . = Docker layer caching (faster builds)
  - .dockerignore = exclude node_modules, target/, secrets from image
  - restart: unless-stopped = auto restart container if it crashes
  --------------------------
  PHASE 4 - JENKINS
  --------------------------
### Installation
  curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | gpg --dearmor | sudo tee /usr/share/keyrings/jenkins-keyring.gpg > /dev/null
  echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.gpg] https://pkg.jenkins.io/debian-stable binary/" | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null
  sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 7198F4B714ABFC68
  sudo apt update && sudo apt install -y jenkins
  sudo service jenkins start
  sudo cat /var/lib/jenkins/secrets/initialAdminPassword

  ### Jenkins URL
  http://localhost:8080
  admin / admin123

  ### Give Jenkins Docker permission
  sudo usermod -aG docker jenkins
  sudo service jenkins restart

  ### Pipeline stages
  Checkout → Install Deps → Build JAR/Docker → Run Container → Health Check

  ### Jenkinsfiles location
  jenkins/user-service.jenkinsfile
  jenkins/product-service.jenkinsfile

  ### Pipeline config (SCM)
  Definition: Pipeline script from SCM
  SCM: Git
  URL: https://github.com/sivareddy9991-sai/shopeasy-devops.git
  Branch: */main
  Script Path: jenkins/user-service.jenkinsfile

  ### Key concepts
  - Jenkins = automation robot (runs pipeline on every code push)
  - Jenkinsfile = pipeline script stored in GitHub (version controlled)
  - agent any = run on any available Jenkins agent
  - stage = one step in pipeline (Checkout, Build, Deploy)
  - post success/failure = runs after pipeline finishes
  - Pipeline script from SCM = Jenkins reads Jenkinsfile from GitHub
  - || true = don't fail if container doesn't exist yet

  ### Errors fixed
  - GPG key error → used apt-key adv --keyserver to import key by ID
  - Docker permission denied → sudo usermod -aG docker jenkins
  - target/ in .dockerignore → removed it so Docker can find the JAR
  --------------------------
  PHASE 5 - NEXUS
  ---------------------------                        
  ### What is Nexus?
  Nexus is a private artifact repository manager.
  Stores Docker images, Maven JARs, npm packages.                                                                                                             In real companies, no one pulls from Docker Hub directly.                                                                                                   Everything goes through Nexus for security and control.                            
                                                                                                                                                              ### Why Nexus over Docker Hub?
  - Private - your code stays inside company
  - Fast - images cached locally, no internet needed                                                                                                          - Controlled - only approved images get deployed                                                                                                                                       
                                                                                                                                                              ### Setup                                                                                                                                                   - Nexus UI runs on port 8085  
  - Docker registry runs on port 8083                               
  - Data stored at /home/kalkal/nexus/data                                                                                              
  - Config at /home/kalkal/nexus/docker-compose.yml
 
 ### Credentials 
  
  - Username: admin                                                                                                                                                                      
  - Password: Nexus123
                                                                                                                                                             ### Start Nexus
 cd /home/kalkal/nexus && docker-compose up -d                                                                                                                                          
                                                                                                                                                             ### Key Commands

 # Login to Nexus Docker registry  :  docker login localhost:8083 -u admin -p Nexus123                                                                                                                                       
 # Tag image for Nexus : docker tag shopeasy/user-service:1.0.0 localhost:8083/shopeasy/user-service:1.0.0                                                                                                                                                       
 # Push image to Nexusdocker push localhost:8083/shopeasy/user-service:1.0.0                                                                                                                                                                                           
 ### Jenkins Integration
  - Jenkins Docker config: /var/lib/jenkins/.docker/config.json    
  - Pipelines have Push to Nexus stage after Build Docker Image                                                                                                                          
                                                                                                                                                             ### Repository    
 - Name: shopeasy-docker 
 - Type: docker (hosted)                                                                                                                            
 - Port: 8083
  ---------------------------
  PHASE 6 - KUBERNETES
  ---------------------------
  ## Phase 6 - Kubernetes (Minikube)
  ### What is Kubernetes?  Kubernetes (K8s) automatically manages containers:
  
  - Auto-restarts crashed containers                                                                                                                                                     
  - Scales up/down based on load                                                                                                                                                         
  - Load balances traffic                                                                                                                                                                
  - Industry standard for production container management                                                                                                                                                                                                                                                                ### What is Minikube?                                                                                                                                        
 Minikube runs a single-node Kubernetes cluster on your laptop.
 Same concepts as production Kubernetes, zero cost.                                                                                                                                     
                                                                                                                                                             ### Installation
 minikube version: v1.38.1
 kubectl version: v1.35.3                                                                                                                                                               
                                                                                                                                                             ### Key Commands
 # Start cluster
 minikube start --driver=docker 

 # Check cluster
 kubectl get nodes

 # Create namespace
 kubectl create namespace shopeasy

 # Deploy service
 
 kubectl apply -f k8s/user-service.yml
 kubectl apply -f k8s/product-service.yml
 
 # Check pods
 kubectl get pods -n shopeasy

 # Load local image into Minikube
 minikube image load shopeasy/user-service:1.0.0

 # Access service
 kubectl port-forward service/user-service 3000:3000 -n shopeasy
 
 ### Key Concepts 

 -  Pod: smallest unit, runs your container
 - Deployment: manages pods, restarts if crashed                                                                                                             - Service: gives network access to pods                                                                                                                     - Namespace: groups related resources together                             
                                                                                                                                                            ### Files
k8s/user-service.yml    - Deployment + Service for user-service                                                                                             k8s/product-service.yml - Deployment + Service for product-service 
  ---------------------------
  PHASE 7 - TERRAFORM
  ---------------------------
  ### What is Terraform?
 
  Terraform is Infrastructure as Code (IaC).
  Instead of creating resources manually, you write code.
  This means infrastructure is repeatable, versioned, and automated.
  
  ### Why Terraform?

  - Never create infrastructure manually in r- Code is stored in Git - full history of changes                                                                                                                                      
  - Same code can create same infrastructure anywhere                                                                                                                                    
  - Plan before apply - see changes before making them 
  
  ### Key Commands 

  # Initialize - downloads providers   
   terraform init                                                                                                                                                                            
  # Plan - shows what will be created/changed/destroyed  
   terraform plan
 
  # Apply - actually creates the resources 
   terraform apply 
  
  # Destroy - deletes all resources 
   terraform destroy    
  
  # Import existing resource into Terraform state 
   terraform import kubernetes_namespace.shopeasy shopeasy

  ### Files

   terraform/main.tf       - Main infrastructure code 
   terraform/variables.tf  - Input variables
   terraform/outputs.tf    - Output values
 
  ### Key Concepts
  - Provider: plugin that talks to a platform (kubernetes, aws, azure)
  - Resource: infrastructure component (deployment, service, namespace)
  - State: terraform.tfstate file tracks what Terraform manages
  - Plan: preview changes before applying                                                                                                                     - Import: bring existing resources under Terraform management
  ---------------------------
  PHASE 8 - ANSIBLE
  ---------------------------
  (fill after Phase 8 is done)
  ---------------------------
  PHASE 9 - PROMETHEUS AND GRAFANA
  ---------------------------
  (fill after Phase 9 is done)
  ---------------------------
  PHASE 10 - OBSERVABILITY
  ---------------------------
  (fill after Phase 10 is done)                                                
