pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Instalando dependencias...'
                sh 'npm install'
                echo 'Construyendo la aplicación...'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Ejecutando tests automáticos...'
                sh 'npm test'
            }
        }
        stage('Post-build') {
            steps {
                echo 'Build y tests completados correctamente'
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }
    }
    post {
        failure {
            echo '¡El pipeline falló! Revisa los tests y corrige los errores.'
        }
    }
}
