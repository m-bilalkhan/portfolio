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
                  def dockerCmd = 'docker run -d -p 80:80 mbilalkhan/my-portfolio:lts'
                  sshagent(['ec2-sever-key']) {
                    sh "ssh -o StrictHostKeyChecking=no ec2-user@3.110.162.30 ${dockerCmd}"
                  }
                }
            }
        }               
    }
} 