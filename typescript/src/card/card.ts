import { SuitEnum, RankEnum } from './enumCard'

const Suit = [SuitEnum.Clubs, SuitEnum.Diamonds, SuitEnum.Heards, SuitEnum.Spades]
const Rank = [
  RankEnum.Two,
  RankEnum.Three,
  RankEnum.Four,
  RankEnum.Five,
  RankEnum.Six,
  RankEnum.Seven,
  RankEnum.Eight,
  RankEnum.Nine,
  RankEnum.Ten,
  RankEnum.Jack,
  RankEnum.Queen,
  RankEnum.King,
  RankEnum.Ace,
]

class Card {
  suit: number
  rank: number
  constructor(suit: number, rank: number) {
    this.suit = suit
    this.rank = rank
  }

  // 牌面文本
  toString(): string {
    return `${SuitEnum[this.suit]}, ${RankEnum[this.rank]}`
  }
}

// 桥牌
class CardRank extends Card {
  constructor(suit: number, rank: number) {
    super(suit, rank)
  }

  // 桥牌排序
  sort(a: CardRank, b: CardRank): number {
    if (a.suit < b.suit) return -1
    if (a.suit > b.suit) return 1
    if (a.rank < b.rank) return -1
    if (a.rank > b.rank) return 1
    return 0
  }
}

// 扑克牌
class CardSuit extends Card {
  constructor(suit: number, rank: number) {
    super(suit, rank)
  }

  // 比较两张牌大小
  compareTo(that: CardSuit): number {
    if (this.rank < that.rank) return -1
    if (this.rank > that.rank) return 1
    return 0
  }

  // 扑克牌排序
  sort(a: CardSuit, b: CardSuit): number {
    return a.compareTo(b)
  }
}

// 洗牌&发牌
class Deck {
  type: string = 'suit'
  cards: number[] = []
  constructor(type: string) {
    let cards = this.cards
    this.type = type
    Suit.forEach((s: number) => {
      Rank.forEach((r: number) => {
        let card: any = this.type === 'suit' ? new CardSuit(s, r) : new CardRank(s, r)
        cards.push(card)
      })
    })
  }

  // 洗牌
  shuffle(): Deck {
    let deck = this.cards
    let len = deck.length
    for (let i = len - 1; i > 0; i--) {
      let r = Math.floor(Math.random() * (i + 1))
      let temp = deck[i] // 随机
      deck[i] = deck[r] // 交换
      deck[r] = temp
    }
    return this
  }

  // 发牌
  deal(n: number): number[] {
    if (this.cards.length < n) throw 'Out of cards'
    this.shuffle()
    return this.cards
      .splice(this.cards.length - n, n)
      .sort((a: any, b: any): any => a.sort(a, b))
      .map((v): any => v.toString())
  }
}

let deck = new Deck('suit')
console.log(deck.deal(10))

let deck2 = new Deck('rank')
console.log(deck2.deal(10))
