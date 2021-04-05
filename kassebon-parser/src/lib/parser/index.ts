import DateParser from './sections/date'
import ItemsParser from './sections/items'
import NumberParser from './sections/number'
import TotalParser from './sections/total'
import TracerParser from './sections/trace'
import { Kassebon } from './types'

const SECTION_PARSERS = {
  items: ItemsParser,
  total: TotalParser,
  number: NumberParser,
  trace: TracerParser,
  date: DateParser,
}

function parseContent(content): Kassebon {
  return Object.entries(SECTION_PARSERS).reduce(
    (acc, [sectionName, ParserStrategy]) => {
      const parser = new ParserStrategy()
      return {
        ...acc,
        [sectionName]: parser.parse(content),
      }
    },
    {},
  ) as Kassebon
}

export { parseContent }
