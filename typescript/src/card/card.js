"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var enumCard_1 = require("./enumCard");
var Suit = [enumCard_1.SuitEnum.Clubs, enumCard_1.SuitEnum.Diamonds, enumCard_1.SuitEnum.Heards, enumCard_1.SuitEnum.Spades];
var Rank = [
    enumCard_1.RankEnum.Two,
    enumCard_1.RankEnum.Three,
    enumCard_1.RankEnum.Four,
    enumCard_1.RankEnum.Five,
    enumCard_1.RankEnum.Six,
    enumCard_1.RankEnum.Seven,
    enumCard_1.RankEnum.Eight,
    enumCard_1.RankEnum.Nine,
    enumCard_1.RankEnum.Ten,
    enumCard_1.RankEnum.Jack,
    enumCard_1.RankEnum.Queen,
    enumCard_1.RankEnum.King,
    enumCard_1.RankEnum.Ace,
];
var Card = /** @class */ (function () {
    function Card(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
    // 牌面文本
    Card.prototype.toString = function () {
        return enumCard_1.SuitEnum[this.suit] + ", " + enumCard_1.RankEnum[this.rank];
    };
    return Card;
}());
// 桥牌
var CardRank = /** @class */ (function (_super) {
    __extends(CardRank, _super);
    function CardRank(suit, rank) {
        return _super.call(this, suit, rank) || this;
    }
    // 桥牌排序
    CardRank.prototype.sort = function (a, b) {
        if (a.suit < b.suit)
            return -1;
        if (a.suit > b.suit)
            return 1;
        if (a.rank < b.rank)
            return -1;
        if (a.rank > b.rank)
            return 1;
        return 0;
    };
    return CardRank;
}(Card));
// 扑克牌
var CardSuit = /** @class */ (function (_super) {
    __extends(CardSuit, _super);
    function CardSuit(suit, rank) {
        return _super.call(this, suit, rank) || this;
    }
    // 比较两张牌大小
    CardSuit.prototype.compareTo = function (that) {
        if (this.rank < that.rank)
            return -1;
        if (this.rank > that.rank)
            return 1;
        return 0;
    };
    // 扑克牌排序
    CardSuit.prototype.sort = function (a, b) {
        return a.compareTo(b);
    };
    return CardSuit;
}(Card));
// 洗牌&发牌
var Deck = /** @class */ (function () {
    function Deck(type) {
        var _this = this;
        this.type = 'suit';
        this.cards = [];
        var cards = this.cards;
        this.type = type;
        Suit.forEach(function (s) {
            Rank.forEach(function (r) {
                var card = _this.type === 'suit' ? new CardSuit(s, r) : new CardRank(s, r);
                cards.push(card);
            });
        });
    }
    // 洗牌
    Deck.prototype.shuffle = function () {
        var deck = this.cards;
        var len = deck.length;
        for (var i = len - 1; i > 0; i--) {
            var r = Math.floor(Math.random() * (i + 1));
            var temp = deck[i]; // 随机
            deck[i] = deck[r]; // 交换
            deck[r] = temp;
        }
        return this;
    };
    // 发牌
    Deck.prototype.deal = function (n) {
        if (this.cards.length < n)
            throw 'Out of cards';
        this.shuffle();
        return this.cards
            .splice(this.cards.length - n, n)
            .sort(function (a, b) { return a.sort(a, b); })
            .map(function (v) { return v.toString(); });
    };
    return Deck;
}());
var deck = new Deck('suit');
console.log(deck.deal(10));
var deck2 = new Deck('rank');
console.log(deck2.deal(10));
