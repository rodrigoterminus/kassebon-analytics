import { ItemType, Parser, Quantity } from '../../../types'

export default class QuantityParser implements Parser<Quantity> {
  parse(content: string): Quantity {
    const match = content.match(
      /\s+(?<value>[\d,]+)\s(?<unit>\w+)\s+x\s+(?<price>[\d,]+)/,
    )
    const { price, value, unit } = match?.groups as Quantity
    return {
      price,
      type: ItemType.quantity,
      unit,
      value,
    }
  }
}
