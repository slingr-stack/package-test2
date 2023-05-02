exports.otherTest2 = function () {
    return "other test 2";
}

exports.nestedmethod = function () {
    var value = "Dependency Y\n" +  dependencies.nesteddep.test.nested();
    return value;
}