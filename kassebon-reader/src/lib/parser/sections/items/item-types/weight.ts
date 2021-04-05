import { ItemType, Parser, Weight } from '../../../types'

export default class WeightParser implements Parser<Weight> {
  parse(content: string): Weight {
    const match = content.match(/(?<value>[\d,]+)\s(?<unit>\w{2,})$/)
    const { unit, value } = (match?.groups as Weight) || {}
    return {
      unit,
      value,
      type: ItemType.weight,
    }
  }
}
