def IMAGE = "teja731/devops-app"

stage('Build Docker Image') {
    sh "docker build -t ${IMAGE} ."
}

stage('Push to DockerHub') {
    withCredentials([usernamePassword(
        credentialsId: 'app-credential',
        usernameVariable: 'USER',
        passwordVariable: 'PASS'
    )]) {
        sh """
        echo "${PASS}" | docker login -u "${USER}" --password-stdin
        docker push ${IMAGE}
        """
    }
}
