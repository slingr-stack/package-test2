exports.getNestedDepMsg = function(){
    var response = dependencies.nesteddep1.dependency.getDepMsg();
    return response;
}

exports.setNestedDepMsg = function(value){
    dependencies.nesteddep1.dependency.setDepMsg(value);
    return "Message configured on nested dependency with value:" + value
}

exports.callNestedDepService = function () {
    return dependencies.nesteddep1.dependency.callDepService()
}

exports.nestedFunction1 = function () {
    return dependencies.nesteddep1.dependency.function1();
}