import { Item, ItemType, Parser, Quantity, Weight } from '../../../types'
import EmptyParser from './empty'
import PfandParser from './pfand'
import ProductParser from './product'
import QuantityParser from './quantity'
import UnknownParser from './unknown'
import WeightParser from './weight'

const parsers = {
  [ItemType.empty]: EmptyParser,
  [ItemType.pfand]: PfandParser,
  [ItemType.product]: ProductParser,
  [ItemType.quantity]: QuantityParser,
  [ItemType.weight]: WeightParser,
  [ItemType.unknown]: UnknownParser,
}

function guessLineType(line: string): ItemType {
  if (line.length === 0) {
    return ItemType.empty
  }

  const testers = {
    [ItemType.pfand]: /^\s?PFAND/i,
    [ItemType.product]: /^[\w\d].+\s(?:[\d,]+)/,
    [ItemType.quantity]: /^\s+[\w\d\s,]+\sx\s+(?:[\d,]+)/,
    [ItemType.weight]: /[\d,]+\s\w{2,}$/,
  }
  return (Object.keys(testers).find((type) => testers[type].test(line)) ||
    ItemType.unknown) as ItemType
}

function reduceItems(items: Item[], item: Item): Item[] {
  const { type } = item

  if ([ItemType.quantity, ItemType.weight].includes(type)) {
    const { value } = item as Quantity | Weight
    const product = items.pop()
    delete Object.assign(item, { [type]: value }).value

    items.push({
      ...{ ...item },
      ...product,
    })
    return items
  }

  return [...items, item]
}

function parseItem(content: string): Item {
  const type = guessLineType(content)
  return new parsers[type]().parse(content)
}

export { parseItem, reduceItems }
