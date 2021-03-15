import ItemsParser from './sections/items'
import TotalParser from './sections/total'
import { Kassebon, Parser, Total, Item } from './types'

const SECTION_PARSERS = {
  items: ItemsParser,
  total: TotalParser,
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
