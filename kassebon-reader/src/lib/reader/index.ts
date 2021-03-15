import { parse } from 'node:path'
import path = require('path')
import PdfReader from './formats/pdf'
import { Reader, FileExtensions } from './types'

const readers: Map<FileExtensions, Reader> = new Map()
readers.set(FileExtensions.pdf, PdfReader)

function readFile(filepath: string): string {
  const fileExtension = path
    .extname(filepath)
    .replace(/^\.?/, '')
    .toUpperCase() as FileExtensions

  const reader = new (readers.get(fileExtension))()
  return reader.read(filepath)
}

export { readFile }
