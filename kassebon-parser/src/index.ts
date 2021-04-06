import fs from 'fs'
import { readFile } from './lib/reader'
import { parseContent } from './lib/parser'
;(async () => {
  const files = fs
    .readdirSync('.temp')
    .filter((filename) => !['.DS_Store'].includes(filename))

  for (let file of files) {
    try {
      const content = await readFile(`.temp/${file}`)
      const result = parseContent(content)
      console.log(`✅ File "${file}" parsed succesfully`)
      console.log(`\t🛍  Items:`, result.items.length)
      console.log(`\t💰 Total:`, result.total.value)
      console.log(`\t🗓  Date: `, result.date)
      console.log('\n')
    } catch (e) {
      console.error(`❌ Fail to parse file "${file}"\n`, e.stack)
    }
  }
})()
