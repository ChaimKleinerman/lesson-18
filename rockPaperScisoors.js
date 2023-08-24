"use strict";
// בנו תכנית שמדמה את המשחק אבן נייר ומספריים
// התכנית תגדיר מי המנצח לפי חוקיות המשחק
// אבן מנצח מספריים שמנצחות נייר שמנצח אבן
Object.defineProperty(exports, "__esModule", { value: true });
exports.game = void 0;
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
var game;
(function (game) {
    game["stone"] = "stone";
    game["paper"] = "paper";
    game["sizer"] = "sizer";
})(game || (exports.game = game = {}));
function playGame(player1, player2) {
    if (player1.choice === player2.choice)
        "tie";
    if (!player1.choice)
        throw console.error("the players don't playx`    x");
    if (player1.choice === "sizer" && player2.choice === "paper")
        "player1";
    if (player1.choice === "stone" && player2.choice === "sizer")
        "player1";
    if (player1.choice === "paper" && player2.choice === "stone")
        "player1";
    else
        "player2";
}
const player1 = {
    name: "player1",
    choice: game.sizer
};
const player2 = {
    name: "player1",
    choice: game.sizer
};
const play = playGame(player1, player2);
// console.log(play);
//Output: player1 or player2 or tie
