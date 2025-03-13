stage('Build') {
    agent{
        docker{
            image 'node:6-alpine'
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
            image 'node:6-alpine'
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