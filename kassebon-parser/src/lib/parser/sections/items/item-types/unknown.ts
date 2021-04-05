import { ItemType, Parser, Unknown } from '../../../types'

export default class UnknownParser implements Parser<Unknown> {
  parse(content: string): Unknown {
    return {
      content,
      type: ItemType.unknown,
    }
  }
}
