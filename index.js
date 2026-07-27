let message = "またあの人に会えるかな…見つけてもらえるかな…"

console.log(message)

function aisatsu (kota) {
    let message = "";

    if (kota === 0) {
        message = "え！？も、もしかしてあの人…！？また会えてうれしいです！！！";
    } else if (kota === 1) {
        message = "うれしーーー！！！！";
    } else if (kota === 2) {
        message = "あぁ…やっぱり聞こえてないんだ…ぐすん";
    } else {
        message = "ん？なんか言った？";
    }

    console.log(message);
}