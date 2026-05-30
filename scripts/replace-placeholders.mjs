// 占位符替换脚本
// npm run private  → 将 {{placeholders}} 替换为真实信息（从 user-info.json）
// npm run public   → 将真实信息替换回 {{placeholders}}（用于提交到公开仓库）

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const docsDir = resolve(__dirname, '../docs')
const infoPath = resolve(docsDir, '.vitepress/user-info.json')

// 加载真实信息
let info = {}
if (existsSync(infoPath)) {
  info = JSON.parse(readFileSync(infoPath, 'utf-8'))
}

const mapping = {
  '{{name}}': info.name || '[姓名]',
  '{{nameEn}}': info.nameEn || '[Name]',
  '{{email}}': info.email || '[邮箱]',
  '{{phone}}': info.phone || '[电话]',
  '{{location}}': info.location || '[城市]',
  '{{birth}}': info.birth || '[出生年月]',
  '{{educationSummary}}': info.educationSummary || '[教育背景]',
  '{{researchInterests}}': info.researchInterests || '[研究方向]',
}

const mode = process.argv[2] || '--real'

// 如果 --public，反向映射
let replacements = {}
if (mode === '--public') {
  for (const [placeholder, real] of Object.entries(mapping)) {
    if (real && real !== placeholder && !real.startsWith('[')) {
      replacements[real] = placeholder
    }
  }
} else {
  replacements = mapping
}

// 递归处理目录
function processDir(dir) {
  const entries = readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = resolve(dir, entry.name)
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== 'dist' && entry.name !== 'cache') {
      processDir(fullPath)
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mts')) {
      let content = readFileSync(fullPath, 'utf-8')
      let modified = false
      for (const [from, to] of Object.entries(replacements)) {
        if (content.includes(from)) {
          content = content.replaceAll(from, to)
          modified = true
        }
      }
      if (modified) {
        writeFileSync(fullPath, content, 'utf-8')
        console.log(`  ${fullPath.replace(docsDir, 'docs')}`)
      }
    }
  }
}

console.log(mode === '--public' ? '\n🔒 隐私化处理（替换为占位符）...' : '\n🔓 注入真实信息...')
processDir(docsDir)
console.log('  完成。\n')
