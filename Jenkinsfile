pipeline {   
    agent any
    stages {
        stage("init") {
            steps {
                script {
                  echo "Initializing"
                }
            }
        }

        stage("build image") {
            steps {
                script {
                  echo "building"
                }
            }
        }

        stage("deploy") {
            steps {
                script {
                  sshagent(['ec2-sever-key']) {
                    echo "deploying"
                  }
                }
            }
        }               
    }
} 