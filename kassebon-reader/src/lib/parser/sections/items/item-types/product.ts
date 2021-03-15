import { ItemType, Parser, Product } from '../../../types'

export default class ProductParser implements Parser<Product> {
  parse(content: string): Product {
    const match = content.match(
      /^(?<description>\w.*)\s{3}(?<total>[\d,]+)(?<extra>.*)/,
    )
    const { description, total, extra } = match?.groups as Product
    return {
      description: description.trim(),
      extra,
      total,
      type: ItemType.product,
    }
  }
}
