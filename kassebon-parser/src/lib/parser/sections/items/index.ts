import { Item, ItemType, Parser } from '../../types'
import { parseItem, reduceItems } from './item-types'

export default class ItemsParser implements Parser<Item[]> {
  parse(content: string): Item[] {
    const match = content.match(
      /\n(?<header>[\s\w]+EUR)?\n(?<items>(?:.*\n)+)(?<delimiter>\s?-+)\n/,
    )

    const { items } = match?.groups as { items: string }
    return items
      .split('\n')
      .map(parseItem)
      .filter(({ type }) => ![ItemType.empty, ItemType.unknown].includes(type))
      .reduce(reduceItems, [])
  }
}
