interface PriceItem {
  item_name: string,
  usd: {
    avg: number
  }
}

export interface CityData {
  city: string,
  country: string,
  livCostData: {
    prices: PriceItem[]
    error: string
  },
  picUrl: string
}
