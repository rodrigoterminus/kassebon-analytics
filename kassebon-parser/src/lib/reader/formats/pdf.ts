import fs = require('fs')
import pdfParser from 'pdf-parse'
import { Reader } from '../types'

export default class PdfReader implements Reader {
  read(filepath: string): Promise<string> {
    return new Promise((resolve) => {
      pdfParser(fs.readFileSync(filepath)).then((data) => resolve(data.text))
    })
  }
}
