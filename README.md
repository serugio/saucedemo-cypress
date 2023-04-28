# saucedemo-cypress
UI test case implementation using cypress


## To Enable CI/CD in Jenkins

1. Make sure you have installed Jenkins with following any guide like this one and make sure to install suggested plugins: https://www.jenkins.io/download/#downloading-jenkins
2. fork whis repo in your github account.
3. set credentialsId in your jenkins instance
 - go to the nex path and click on "add credentials" and fill with your github credentials. Disclaimer: this is an unrestricted credential and doesn't follow any good practice regarding security
 ![image](https://user-images.githubusercontent.com/43422922/235029270-5346bff5-d9de-4e55-8992-50453b2596bc.png)

 
4. inside "Jenkinsfile" file replace 'credentialsId' and 'url' parameters 
 - url: replace for your forked repository
 - credendialsId: <your_credentialId>

![image](https://user-images.githubusercontent.com/43422922/235028298-bfa8ec3f-f82d-4b2e-8c44-acf294e187db.png)

### Note
Jenkinsfile was created in a windows machine, for this reason "bat" command is used to execute bash commands. If this job is intende to be executed in a Unix based OS, 'bat' commands should be replaced for 'sh' 

![image](https://user-images.githubusercontent.com/43422922/235029743-1a243155-b8e5-4c1a-81c9-ce1b79e8b8a0.png)


