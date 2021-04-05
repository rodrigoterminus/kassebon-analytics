import { ItemType, Parser, Empty } from '../../../types'

export default class EmptyParser implements Parser<Empty> {
  parse(): Empty {
    return {
      type: ItemType.empty,
    }
  }
}
