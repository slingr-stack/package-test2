exports.getNestedDepMsg = function(){
    var response = dependencies.nesteddep1.dependency.getDepMsg();
    return response;
}

exports.setNestedDepMsg = function(value){
    dependencies.nesteddep1.dependency.setDepMsg(value);
    return "Message configured on dependency with value:" + value
}

exports.callNestedDepService = function () {
    return dependencies.nesteddep1.dependency.callDepService()
}