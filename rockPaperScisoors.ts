
// בנו תכנית שמדמה את המשחק אבן נייר ומספריים
// התכנית תגדיר מי המנצח לפי חוקיות המשחק
// אבן מנצח מספריים שמנצחות נייר שמנצח אבן

// דגשים
// שחקן  יכול לבחור בין אבן נייר ומספרים בלבד! אך שחקן יכול שלא תהיה לו בחירה
// התכנית יכולה להחזיר את המחרוזות
// 'tie', 'player1', 'player2' 
// התשובה חייבת להכיל
// ENUM
// type/interface
// union
// במידה ולשחקן אין בחירה הצג זרקו שגיאה
// ממשו את הפונקציה הוסיפו טיפוסים לפרמטרים ולערך החזרה של הפונקציה
export enum game {
    stone = "stone",
    paper = "paper",
    sizer = "sizer"
}
type play1 = {
    name: string;
    choice?: game;
}

interface play2{
   name: string;
   choice?: game;
}

function playGame(player1:play1, player2:play2): void|string{
    if(player1.choice === player2.choice)"tie"
    if(!player1.choice)throw console.error("the players don't playx`    x");
    
    if (player1.choice === "sizer" && player2.choice === "paper")"player1"
    if (player1.choice === "stone" && player2.choice === "sizer")"player1"
    if (player1.choice === "paper" && player2.choice === "stone")"player1"
    else "player2"

       

    }


const player1:play1 ={
    name: "player1",
    choice: game.sizer
} 
const player2:play2 ={
    name: "player1",
    choice: game.sizer
} 



const play = playGame(player1, player2);

// console.log(play);
//Output: player1 or player2 or tie

