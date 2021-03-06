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
      console.log(`ā File "${file}" parsed succesfully`)
      console.log(`\tš  Items:`, result.items.length)
      console.log(`\tš° Total:`, result.total.value)
      console.log(`\tš  Date: `, result.date)
      console.log('\n')
    } catch (e) {
      console.error(`ā Fail to parse file "${file}"\n`, e.stack)
    }
  }
})()
