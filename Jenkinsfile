pipeline {
    agent any

    environment {
        IMAGE = "teja731/devops-app"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE .'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'app-credential',
                    usernameVariable: 'saiteja257',
                    passwordVariable: 'dckr_pat_Fj6XqARQYDqsJRoqjztZm3c_PgQ'
                )]) {
                    sh '''
                    echo "$PASS" | docker login -u "$USER" --password-stdin
                    docker push $IMAGE
                    '''
                }
            }
        }
    }
}
