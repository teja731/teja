pipeline {
    agent any

    environment {
        IMAGE = "yourdockerhub/devops-app"
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
                    passwordVariable: 'saiteja1234'
                )]) {
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
                    sh 'docker push $IMAGE'
                }
            }
        }
    }
}
