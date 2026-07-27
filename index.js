console.log("どうせ私なんて誰にも見つけてもらえないんだろうなあ")

function aisatsu(kotae) {
    let message2 = ""
    let message3 = ""

    if (kotae === 1) {
        message2 = "え…！？うそ…！私の声が聞こえるの？";
        message3 = "見つけてくれてありがとう…！また会おうね！！"
    } else {
        message2 = "ん？なんか声が聞こえたような…";
    }

    console.log(message2);
    console.log(message3);

}