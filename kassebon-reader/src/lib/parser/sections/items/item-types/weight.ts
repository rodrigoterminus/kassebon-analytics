import { ItemType, Parser, Weight } from '../../../types'

export default class WeightParser implements Parser<Weight> {
  parse(content: string): Weight {
    const match = content.match(
      /\s+Handeingabe E-Bon\s+(?<value>[\d,]+)\s(?<unit>\w+)/,
    )
    const { unit, value } = match?.groups as Weight
    return {
      unit,
      value,
      type: ItemType.weight,
    }
  }
}
