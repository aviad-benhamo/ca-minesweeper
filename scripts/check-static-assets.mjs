import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const indexPath = path.join(rootDir, 'index.html')
const gamePath = path.join(rootDir, 'js', 'game.js')

const requiredFiles = [
  'index.html',
  'css/style.css',
  'js/utils.js',
  'js/game.js',
  'assets/logo/minesweeper.svg',
]

const failures = []

function assertExists(relativePath) {
  const normalizedPath = relativePath.replaceAll('\\', '/')
  if (!existsSync(path.join(rootDir, normalizedPath))) {
    failures.push(`Missing file: ${normalizedPath}`)
  }
}

for (const file of requiredFiles) {
  assertExists(file)
}

const indexHtml = readFileSync(indexPath, 'utf8')
const localRefPattern = /\b(?:href|src)="([^"#?:]+)"/g
for (const match of indexHtml.matchAll(localRefPattern)) {
  assertExists(match[1])
}

const gameJs = readFileSync(gamePath, 'utf8')
const soundNames = new Set()
for (const match of gameJs.matchAll(/playSound\(['"]([^'"]+)['"]\)/g)) {
  soundNames.add(match[1])
}

for (const soundName of soundNames) {
  assertExists(`assets/sounds/${soundName}.mp3`)
}

if (failures.length > 0) {
  console.error('Static asset check failed:')
  for (const failure of failures) {
    console.error(`- ${failure}`)
  }
  process.exit(1)
}

console.log('Static asset check passed.')
