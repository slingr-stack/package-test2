exports.otherTest2 = function () {
    return "other test 2";
}

exports.nestedmethod = function () {
    var value = dependencies.nesteddep.test.nested();
    return value;
}