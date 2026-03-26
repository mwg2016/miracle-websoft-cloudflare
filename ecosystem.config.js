const fs = require('fs')
const path = require('path')

// Read .env.local without needing dotenv dependency
function loadEnvLocal() {
  try {
    const content = fs.readFileSync(path.join(__dirname, '.env.local'), 'utf-8')
    const env = {}
    content.split('\n').forEach(line => {
      const trimmed = line.trim()
      if (trimmed && !trimmed.startsWith('#')) {
        const eqIdx = trimmed.indexOf('=')
        if (eqIdx > 0) {
          env[trimmed.slice(0, eqIdx).trim()] = trimmed.slice(eqIdx + 1).trim()
        }
      }
    })
    return env
  } catch {
    return {}
  }
}

module.exports = {
  apps: [
    {
      name: 'miraclewebsoft',
      script: '.next/standalone/server.js',
      env: {
        PORT: 3200,
        NODE_ENV: 'production',
        ...loadEnvLocal(),
      },
    },
  ],
}
