# Tests y CI

Resumen rápido
- Ejecuta los tests unitarios con `npm test` (modo interactivo) o `npm run test:ci` (modo CI, produce JUnit XML).
- El pipeline de Jenkins ejecuta `npm run test:ci` y publica `test-results/jest/junit.xml` como resultado de pruebas.

Comandos útiles

```bash
# instalar dependencias (local)
npm install

# ejecutar tests en modo interactivo
npm test

# ejecutar tests en modo CI (no interactivo) y generar JUnit XML
npm run test:ci
```

¿Qué hace `test:ci`?
- Ejecuta `react-scripts test` en modo `CI=true` y añade `jest-junit` como reporter.
- El resultado JUnit se escribe en `test-results/jest/junit.xml`.

Configuración en Jenkins
- El `Jenkinsfile` incluye una etapa `Test` que ejecuta:
  - `npm ci` (instala dependencias a partir de `package-lock.json`)
  - `npm run test:ci`
  - publica los resultados con el paso `junit 'test-results/jest/junit.xml'`
- He movido la etapa `Test` antes de `Build` para que la compilación solo ocurra si los tests pasan.

Mini-reto / evidencia (Hito 3)
- En `src/__tests__/app.test.js` hay un test intencionalmente roto (`test que falla a propósito`) que busca el texto `Adios`.
- Esto hace que `npm run test:ci` termine con código de salida distinto de 0 y que Jenkins marque la etapa como fallida — exactamente lo que requiere el mini-reto: demostrar que el pipeline se detiene cuando hay tests rotos.

Qué hacer para pasar el pipeline
- Arreglar el test (eliminar/ajustar el test intencional) o modificar el componente para que incluya el texto buscado.

Notas
- No se deben commitear `node_modules/` ni `test-results/` normalmente; `test-results/` solo lo incluí localmente para verificar la salida. En CI Jenkins recogerá el XML generado por el agente.

Si quieres, empaco estos cambios y los subo ahora a GitHub y/o puedo eliminar el test intencional para que el pipeline pase.
