"use strict";
// 1.
// צור פונקציה גנרית ותנו לה שם מתאים שלוקחת שני ארגומנטים מסוגים שונים ומחזירה מערך המכיל את שני הארגומנטים.
// תפקיד הפונקציה, ליצור צמד
// ['asd',3]
function myMerge(arg1, arg2) {
    const array = [];
    array.push(arg1);
    array.push(arg2);
    return array;
}
// 2.
// צור פונקציה גנרית שמקבלת אובייקט מכל סוג ומפתח ומחזירה את ערך המפתח באובייקט
function returnKey(object, key) {
    return object[key];
}
//מתקדם
//צור פונקציה גנרית שמקבלת מערך של אובייקטים ואובייקט כארגומנטים. הפונקציה תוסיף את האובייקט שהתקבל לכל איבר במערך
// עליכם לקרוא על ולהשתמש ב: Record
function addObject(array, ob) {
    const extendArray = array.filter((item) => (Object.assign(Object.assign({}, item), ob)));
}
const theBook = {
    name: 'Harry Potter',
    author: "J.K Rolling",
    current: true
};
const array = [
    {
        name: 'chaim',
        id: 3181
    },
    {
        title: "camera",
        price: 100
    }
];
// כתבו פונקציה שמקבלת אובייקט ושם שדה(מפתח).  הפונקציה תחזיר אובייקט חדש בלי המפתח
// קראו על Omit
const withoutKey = (arg) => {
    const omitMyOb = {};
    return omitMyOb;
};
const myObject = {
    name: 'Adi'
};
// כתוב פונקציה שמקבלת אובייקט,מפתח וערך. הפונקציה תחזיר אובייקט חדש עם המפתח והערך שהוזנו לה כשדה חדש באובייקט שהוזן לה
// השתמשו ב &
function addKeyValue(obj, arg1, arg2) {
    return Object.assign(Object.assign({}, obj), { [arg1]: arg2 });
}
const useMyObject = {
    id: 4
};
const myKey = "chaim";
const myValue = "keleinerman";
