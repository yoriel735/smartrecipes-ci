pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                echo 'Ejecutando tests automáticos (CI)...'
                // instalar dependencias de desarrollo en el agente
                sh 'npm ci'
                // ejecutar tests en modo CI y generar informe JUnit
                sh 'npm run test:ci'
            }
            post {
                always {
                    // publicar resultados JUnit para su visualización en Jenkins
                    junit 'test-results/jest/junit.xml'
                }
            }
        }
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
