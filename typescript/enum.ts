enum BadStat {
    InProgress,
    Success,
    Fail
}

BadStat.InProgress
BadStat.Success
BadStat.Fail

/**
 * Problem with number based enums, If we do not declare its value then it automatically takes number from to to incremental order of the property
 */

// How to Fix it

// 1. Easy fix would be define the values of enum

enum GoodState1 {
    InProgress = "InProgress",
    Success = "Success",
    Fail = "Fail",
}

const checkGoodState1 = (state: GoodState1) => { }

checkGoodState1(GoodState1.InProgress)

// 2. define state as type not enum

type GoodState2 = "InProgress" | "Success" | "Fail"; 