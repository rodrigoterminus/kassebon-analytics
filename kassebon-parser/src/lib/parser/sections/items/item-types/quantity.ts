import { ItemType, ItemUnit, Parser, Quantity } from '../../../types'

export default class QuantityParser implements Parser<Quantity> {
  parse(content: string): Quantity {
    const match = content.match(
      /\s+(?<value>[\d,]+)\s(?<unit>\w+)\s+x\s+(?<price>[\d,]+)/,
    )
    const { price, value, unit } = match?.groups || {}
    return {
      price: Number(price.replace(',', '.')),
      type: ItemType.quantity,
      unit: unit as ItemUnit,
      value: Number(value),
    }
  }
}
