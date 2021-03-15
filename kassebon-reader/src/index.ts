import { readFile } from './lib/reader'
import { parseContent } from './lib/parser'
;(async () => {
  try {
    const content = await readFile('.temp/REWE-eBon.pdf')
    const kassebon = parseContent(content)
    console.log(kassebon)
  } catch (e) {
    console.error(e)
  }
})()
