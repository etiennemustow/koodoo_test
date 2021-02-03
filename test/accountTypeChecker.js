var expect = require("chai").expect;
var checker = require("../accountTypeChecker")
var helper = require('./helpers/accountBalanceHistories');


describe("Account Type Checker", function() {
    it("shows A when array type is variable", function() {
        expect(checker.accountTypeChecker(helper.variableDifferencesThreeMonths)).to.equal("A")
    })
    it("shows B when array type is fixed", function() {
        expect(checker.accountTypeChecker(helper.fixedDifferencesThreeMonths)).to.equal("B")
    })
    it("shows A when first three months seem fixed but last month is variable", function() {
        expect(checker.accountTypeChecker(helper.threeMonthsFixedlastMonthVariable)).to.equal("A")
    })
    it("shows A when month numbers are out of order and balances are varialble", function() {
        expect(checker.accountTypeChecker(helper.unarrangedMonthNumbers)).to.equal("A")
    })
    it("shows B when there's a fixed difference from negative balance", function() {
        expect(checker.accountTypeChecker(helper.fixedDifferenceFromNegative)).to.equal("B")
    })
    it("shows B when there's a fixed difference into negative balance", function() {
        expect(checker.accountTypeChecker(helper.fixedDifferenceIntoNegative)).to.equal("B")
    })
    it("shows A when there's one variable difference at the start and many fixed differences", function() {
        expect(checker.accountTypeChecker(helper.oneVariableManyFixed)).to.equal("A")
    })
})