import { Currency, ItemType, Parser, Product } from '../../../types'

export default class ProductParser implements Parser<Product> {
  parse(content: string): Product {
    const match = content.match(
      /^(?<description>\w.*)\s{3}(?<total>[\d,]+)\s+(?<taxClass>[A-Z])?(?<extra>.*)/,
    )
    const { description, total, taxClass, extra } = match?.groups || {}
    return {
      description: description.trim() as string,
      extra,
      total: Number(total.replace(',', '.')),
      taxClass,
      type: ItemType.product,
    }
  }
}
