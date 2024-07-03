#!/usr/bin/env node
import concurrently from 'concurrently'

const runCli = async (e) => {
  let arg = process.argv.splice(2)
  const a = arg[0] || 'help'

  if(a === 'dev'){
    concurrently([
      { command: 'pnpm ddd-cli dev-helper', name: 'ddd-cli' },
      { command: `npx vite`, name: 'vite' },
    ])
  }else if(a === 'dev-helper'){
    console.log("---helper")
  }
  
}
runCli()
