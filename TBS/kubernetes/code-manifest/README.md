## Follow the steps 

### - **Now clone this repo in local machine or katacoda**
1. git clone https://github.com/ahmedbejaouiJS/workshop.git
2. cd workshop/TBS/kubernetes/code-manifest



### **Now let's run our first POD**
1. kubectl apply -f  my-pod.yaml 
2. kubectl get pod -o wide
3. kubectl exec -it name-of-pod /bin/bash

> pod have been created 


### **Now let's run our first DEPLOYMENT**
1. kubectl apply -f  my-deployment.yaml 
2. kubectl get deployment
3. kubectl get pod -o wide

> service have been created 

### **Now let's run our first SERVICE**
1. kubectl apply -f  my-service.yaml 
2. kubectl get deployment
3. kubectl get pod -o wide

> service have been created 


### **Now let's run our first NAME-SPACE**
1. kubectl apply -f  my-name-space.yaml
2. kubectl get ns

> name-space have been created 

