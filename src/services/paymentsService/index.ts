import axios from 'axios'

export class PaymentsService {
  static pay(payload: {
    products: string[]
    coupon?: string
    installments?: number
  }) {
    return axios.post('/api/pay', payload)
  }
}
