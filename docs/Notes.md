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
  Docker      -          Containerization       Pending                                                                                                                                  
  Jenkins     -          CI/CD Pipeline         Pending                                                                                                                                  
  JFrog       -          Artifact Management    Pending                                                                                                                                  
  Minikube    -          Local Kubernetes       Pending                                                                                                                                  
  kubectl     -          K8s CLI                Pending                                                                                                                                  
  Terraform   -          IaC                    Pending                                                                                                                                  
  Ansible     -          Config Management      Pending                                                                                                                                  
  Prometheus  -          Metrics Collection     Pending                                                                                                                                  
  Grafana     -          Dashboards             Pending                                                                                                                                  
                                                                                                                                                                                         
  ----------------------
  PHASE   PROGRESS
  ----------------------
  Phase   Topic                   Status    Date

  1       Linux + Git             Done      2026-04-01                                                                                                        2       Microservices Code      Done      2026-04-02
  3       Docker                  Pending                                                                                                                     4       Jenkins CI/CD           Pending                             
  5       JFrog Artifactory       Pending                                                                                                                     6       Kubernetes              Pending                           
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
  Status     : IN PROGRESS

  
  --------------------------
  PHASE 3 - DOCKER
  --------------------------
  (fill after Phase 3 is done)
  --------------------------
  PHASE 4 - JENKINS
  --------------------------
  (fill after Phase 4 is done)
  --------------------------
  PHASE 5 - JFROG ARTIFACTORY
  ---------------------------                        
  (fill after Phase 5 is done)
  ---------------------------
  PHASE 6 - KUBERNETES
  ---------------------------
  (fill after Phase is done)
  ---------------------------
  PHASE 7 - TERRAFORM
  ---------------------------
  (fill after Phase 7 is done)
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
