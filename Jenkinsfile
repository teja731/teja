pipeline {
agent any

```
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
                usernameVariable: 'USER',
                passwordVariable: 'PASS'
            )]) {
                sh '''
                echo "$PASS" | docker login -u "$USER" --password-stdin
                docker push $IMAGE
                '''
            }
        }
    }
}
```

}

