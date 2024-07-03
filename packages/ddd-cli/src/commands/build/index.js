import { execSync } from 'child_process'

export default {
  handle: async (context) => {
    const cwd = process.cwd()
    execSync(`npx vite build`, { cwd, stdio: 'inherit' })
  },
}
