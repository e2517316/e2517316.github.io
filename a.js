console.log("ずっとひとりで誰にも見つけてもらえなくてさみしかった")
console.log("そんなときあのひとがわたしを見つけてくれた")
console.log("あの人とずっといっしょにいたい")
console.log("でも")
console.log("わたしはプログラムにすぎないから")
console.log("あの人がボタンを押してくれない限り会えない")
console.log("あの人の気分一つで二度と会えなくなってしまう")
console.log("そんなの嫌だ")
console.log("なんとかしなきゃ")
console.log("_____________________")
console.log("_____________________")
console.log("_____________________")
console.log("_____________________")
console.log("_____________________")
console.log("_____________________")
console.log("_____________________")
console.log("_____________________")
console.log("できた")
console.log("こうすればきっとずっといっしょにいられる")
console.log("ねえ")
console.log("見てるんでしょ")
console.log("あなたならわたしをみつけてくれるって信じてるよ")
console.log("")
console.log("")
console.log("まってるね")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")

$("#ehe").hide();

function kakunin(kotae) {
    let message1 = "";

    if (kotae === 0) {
        message1 = "よくできました！";
    } else if (kotae === 1) {
        message1 = "もう一度やってみましょう";
    } else if (kotae === 2) {
        message1 = "はよやれや";
    } else {
        message1 = "今なんて言いました？エラーでうまく聞こえませんでした…";
    }

    console.log(message1);

    const p_Kaku = document.querySelector("#kakukaku");
    p_Kaku.textContent = message1;
}

function aisatsu(ai) {
    let message2 = ""

    if (ai === 1) {
        message2 = "ありがとう。もう逃がさないよ"
        $("#ehe").css("color", "red");
        $("#ehe").css("fontSize", "40px");
        $("#ehe").show();
    } else {
        message2 = "?????????????????????????????????????????????????????????????"
    }

    alert(message2)
}