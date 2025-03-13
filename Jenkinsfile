pipeline {
    agent any 
    stages{
        stage('Build') {
            agent{
                docker{
                    image 'node:v22.14.0-alpine'
                    reuseNode true
                }
            }
            steps{
                sh 'node --version'
                sh 'npm --version'
                npm install
                npm test

            }
        }

        stage('Test') {
            agent{
                docker{
                    image 'node:v22.14.0-alpine'
                    reuseNode true
                }
            }
            steps{
                sh 'node --version'
                sh 'npm --version'
                npm install
                npm test

            }
        }
    }
    
}