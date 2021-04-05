export enum Currency {
  euro = 'EUR',
}

export enum ItemType {
  empty = 'empty',
  pfand = 'pfand',
  product = 'product',
  quantity = 'quantity',
  unknown = 'unknown',
  weight = 'weight',
}

export enum ItemUnit {
  unit = 'STK',
  kg = 'KG',
}

export interface Kassebon {
  items: Item[]
  total: Total
}

export interface Item {
  type: ItemType
}

export interface Empty extends Item {}

export interface Product extends Item {
  description: string
  total: number
  taxClass: string
  extra?: string
}

export interface Pfand extends Item {
  currency: Currency
  price: number
  total: number
  taxClass: string
  extra?: string
}

export interface Quantity extends Item {
  value: number
  price: number
  unit: ItemUnit
}

export interface Unknown extends Item {}

export interface Weight extends Item {
  value: number
  unit: ItemUnit
}

export interface Total {
  currency?: string
  value: number
}

export interface Parser<T> {
  parse(content: string): T
}
