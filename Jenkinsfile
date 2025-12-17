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
        stage('Post-build') {
            steps {
                echo 'Build terminado correctamente'
            }
        }
    }
}
