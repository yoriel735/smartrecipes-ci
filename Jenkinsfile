pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                echo 'Instalando dependencias...'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Ejecutando tests...'
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                echo 'Construyendo la aplicación...'
                sh 'npm run build'
            }
        }
        stage('Post-build') {
            steps {
                echo 'Build terminado correctamente'
            }
        }
    }
}
