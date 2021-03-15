import { ItemType, Parser, Unknown } from '../../../types'

export default class UnknownParser implements Parser<Unknown> {
  parse(): Unknown {
    return {
      type: ItemType.unknown,
    }
  }
}
