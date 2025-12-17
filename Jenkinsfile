pipeline {
    agent any

    stages {
<<<<<<< HEAD
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
=======
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Test') {
            steps {
                echo 'Ejecutando tests automatizados con Jest...'
                sh 'npm install'
                sh 'npx jest --ci --reporters=default'
            }
        }

        stage('Build') {
            steps {
                echo 'Instalando dependencias...'
                sh 'npm install'
>>>>>>> c324c14 (Añadida etapa de test para Hito 3)
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

    post {
        always {
            echo 'Pipeline finalizado'
        }
        failure {
            echo 'Ha ocurrido un fallo en los tests o build'
        }
    }
}
