// 1.
// צור פונקציה גנרית ותנו לה שם מתאים שלוקחת שני ארגומנטים מסוגים שונים ומחזירה מערך המכיל את שני הארגומנטים.
// תפקיד הפונקציה, ליצור צמד
// ['asd',3]
function myMerge<T, K>(arg1: T, arg2: K): (T | K)[] {
    const array: (T | K)[] = [];
    array.push(arg1);
    array.push(arg2);
    return array;
}

// 2.
// צור פונקציה גנרית שמקבלת אובייקט מכל סוג ומפתח ומחזירה את ערך המפתח באובייקט
function returnKey<T, K extends keyof T>(object: T, key: K): T[K] {
    return object[key];
}

//מתקדם
//צור פונקציה גנרית שמקבלת מערך של אובייקטים ואובייקט כארגומנטים. הפונקציה תוסיף את האובייקט שהתקבל לכל איבר במערך
// עליכם לקרוא על ולהשתמש ב: Record
function addObject<T extends Record<string,(string|number|boolean)>>(array:T[],ob:T){
    const extendArray:T[] = array.filter((item:T)=>({...item,...ob}))

}
type Person = {
    name: string
    id: number
}

interface Product{
    title: string
    price: number
}

type myBook = {
    name: string
    author: string
    current: boolean
}

const theBook: myBook = {
    name:'Harry Potter',
    author: "J.K Rolling",
    current: true
}



const array: (Person | Product)[] = [
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
const withoutKey = (arg:myOb):Rest=>{

    const omitMyOb:Rest = {}  
    return omitMyOb
}
interface myOb{
 name:string
}

const myObject = {
    name: 'Adi'
}

type Rest = Omit<myOb,"name">


// כתוב פונקציה שמקבלת אובייקט,מפתח וערך. הפונקציה תחזיר אובייקט חדש עם המפתח והערך שהוזנו לה כשדה חדש באובייקט שהוזן לה
// השתמשו ב &
function addKeyValue(obj:MyObjet,arg1:string,arg2:string): MyObjet & Record<string,string>{
    return {...obj,[arg1]:arg2} as MyObjet & Record<string,string>
}

type MyObjet = {
    id: number
}

const useMyObject: MyObjet = {
    id: 4
}
const myKey: string = "chaim"
const myValue: string = "keleinerman"