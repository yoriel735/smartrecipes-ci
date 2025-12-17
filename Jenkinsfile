pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                echo 'Ejecutando tests automáticos (CI)...'
                // instalar dependencias de desarrollo en el agente (forzar devDependencies)
                // usamos NPM_CONFIG_PRODUCTION=false para asegurar instalación de dev deps
                sh 'NPM_CONFIG_PRODUCTION=false npm ci'
                // --- debug: listar workspace y mostrar package.json/branch para diagnosticar "NO test found" ---
                sh '''
                  echo "PWD: $(pwd)"
                  echo "--- ls -la (workspace) ---"
                  ls -la
                  echo "--- ls -R (workspace recursive) ---"
                  ls -R . || true
                  echo "--- package.json ---"
                  cat package.json || true
                  echo "--- git info ---"
                  git rev-parse --abbrev-ref HEAD || true
                  git status --porcelain || true
                '''
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
