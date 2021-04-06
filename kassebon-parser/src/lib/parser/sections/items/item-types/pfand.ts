import { Currency, ItemType, Parser, Pfand } from '../../../types'

export default class PfandParser implements Parser<Pfand> {
  parse(content: string): Pfand {
    const match = content.match(
      /^PFAND\s(?<price>[\d,]+)?\s+(?<currency>[A-Z]{3})?\s+(?<total>[\d,]+)\s(?<taxClass>[A-Z])?(?<extra>.*)/,
    )
    const { currency, price, total, taxClass, extra } = match?.groups || {}
    return {
      extra,
      currency: currency as Currency,
      price: price ? Number(price.replace(',', '.')) : null,
      total: Number(total.replace(',', '.')),
      taxClass,
      type: ItemType.pfand,
    }
  }
}
