node {
    def IMAGE = "saiteja257/todo-app"

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

}
