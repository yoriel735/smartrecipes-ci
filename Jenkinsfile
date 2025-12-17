pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Instalando dependencias...'
                sh 'npm install'
                sh 'npm run build || echo "Build script no definido, continuando..."'
            }
        }
        stage('Post-build') {
            steps {
                archiveArtifacts artifacts: '**/*', fingerprint: true
            }
        }
    }
}
