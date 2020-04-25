"use strict";
function getFullName(config) {
    // config.age = 10 // 编译报错：Cannot assign to 'age' because it is a read-only property
    console.log(config.firstName + " - " + config.middleName + " - " + config.lastName);
}
getFullName({
    age: 2,
    firstName: 'anna',
    lastName: 'an',
    middleName: 'qq',
    test: 111,
}); // anna - an - qq
