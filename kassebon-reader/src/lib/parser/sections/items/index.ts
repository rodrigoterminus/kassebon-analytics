import { Item, Parser } from '../../types'
import { parseItem } from './item-types'

export default class ItemsParser implements Parser<Item[]> {
  parse(content: string): Item[] {
    const match = content.match(
      /\n(?<header>[\s\w]+EUR)\n(?<items>(?:.*\n)+)(?<delimiter>\s-+)\n/,
    )

    const { items } = match?.groups as { items: string }
    return items.split('\n').map(this.parseLine)
  }

  private parseLine(content: string): Item {
    return parseItem(content)
  }
}
