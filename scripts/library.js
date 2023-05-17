exports.packageName = function () {
    return "packageTest";
}

exports.nested1 = function () {
    var versionResponse = "Version response: " + dependencies.versionTest.versionLib().versionValue();
    var dependencyResponse = "Dependency response: " + dependencies.nesteddep1.other().nested1()
    return "From package [testLibrary] |\n " + dependencyResponse + " |\n " + versionResponse;
}