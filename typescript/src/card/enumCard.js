"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 花色
var SuitEnum;
(function (SuitEnum) {
    SuitEnum[SuitEnum["Clubs"] = 1] = "Clubs";
    SuitEnum[SuitEnum["Diamonds"] = 2] = "Diamonds";
    SuitEnum[SuitEnum["Heards"] = 3] = "Heards";
    SuitEnum[SuitEnum["Spades"] = 4] = "Spades";
})(SuitEnum = exports.SuitEnum || (exports.SuitEnum = {}));
// 点数
var RankEnum;
(function (RankEnum) {
    RankEnum[RankEnum["Two"] = 2] = "Two";
    RankEnum[RankEnum["Three"] = 3] = "Three";
    RankEnum[RankEnum["Four"] = 4] = "Four";
    RankEnum[RankEnum["Five"] = 5] = "Five";
    RankEnum[RankEnum["Six"] = 6] = "Six";
    RankEnum[RankEnum["Seven"] = 7] = "Seven";
    RankEnum[RankEnum["Eight"] = 8] = "Eight";
    RankEnum[RankEnum["Nine"] = 9] = "Nine";
    RankEnum[RankEnum["Ten"] = 10] = "Ten";
    RankEnum[RankEnum["Jack"] = 11] = "Jack";
    RankEnum[RankEnum["Queen"] = 12] = "Queen";
    RankEnum[RankEnum["King"] = 13] = "King";
    RankEnum[RankEnum["Ace"] = 14] = "Ace";
})(RankEnum = exports.RankEnum || (exports.RankEnum = {}));
