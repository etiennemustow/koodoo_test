module.exports = {
    fixedDifferencesThreeMonths: [
    {
      monthNumber: 0, 
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1, 
      account: {
        balance: { amount: 100 },
      },
    },
    {
      monthNumber: 2,
      account: {
        balance: { amount: 200 },
      },
    }
  ],

  threeMonthsFixedlastMonthVariable: [
    {
      monthNumber: 0,
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1, 
      account: {
        balance: { amount: 100 },
      },
    },
    {
      monthNumber: 2, 
      account: {
        balance: { amount: 200 },
      },
    },
    {
        monthNumber: 3, 
        account: {
          balance: { amount: 250 },
        },
      }
  ],


  variableDifferencesThreeMonths: [
    {
      monthNumber: 0, 
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1, 
      account: {
        balance: { amount: 100 },
      },
    },
    {
      monthNumber: 2,
      account: {
        balance: { amount: 250 },
      },
    }
  ],

  unarrangedMonthNumbers: [
    {
      monthNumber: 4, 
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 0, 
      account: {
        balance: { amount: 100 },
      },
    },
    {
      monthNumber: 3,
      account: {
        balance: { amount: 250 },
      },
    },
    {
        monthNumber: 2,
        account: {
          balance: { amount: 250 },
        },
    },
    {
        monthNumber: 1,
        account: {
          balance: { amount: 250 },
        },
    }
  ],

  fixedDifferenceFromNegative: [
    {
      monthNumber: 0, 
      account: {
        balance: { amount: 100 },
      },
    },
    {
      monthNumber: 1, 
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 2,
      account: {
        balance: { amount: -100 },
      },
    }
  ],

  fixedDifferenceIntoNegative: [
    {
      monthNumber: 0, 
      account: {
        balance: { amount: -100 },
      },
    },
    {
      monthNumber: 1, 
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 2,
      account: {
        balance: { amount: 100 },
      },
    }
  ],
  oneVariableManyFixed: [
    {
      monthNumber: 0,
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1, 
      account: {
        balance: { amount: 50 },
      },
    },
    {
      monthNumber: 2, 
      account: {
        balance: { amount: 150 },
      },
    },
    {
        monthNumber: 3, 
        account: {
          balance: { amount: 250 },
        },
      },
      {
        monthNumber: 4, 
        account: {
          balance: { amount: 350 },
        },
      },
      {
        monthNumber: 5, 
        account: {
          balance: { amount: 450 },
        },
      },
      {
          monthNumber: 6, 
          account: {
            balance: { amount: 550 },
          },
        },
  ],

}