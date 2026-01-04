// 1. スコアを数える変数の準備
let score = 0;

// 2. 画面上のパーツ（要素）をJavaScriptで操作できるように捕まえる
const scoreDisplay = document.getElementById('score-container');
const seasonImg = document.getElementById('season-img');
const infoDisplay = document.getElementById('month-info');
const clickBtn = document.getElementById('click-target');

// 3. 「今の月」を判定する
// getMonth()は 0(1月)〜11(12月) で返ってくるので、+1 して 1〜12 に直すよ
const now = new Date();
const currentMonth = now.getMonth() + 1;

// 4. 画面を今の月にセットする
// 画像ファイル名が「1.png」「2.png」...となっている前提だよ
seasonImg.src = `${currentMonth}.png`;
infoDisplay.innerText = `${currentMonth}月のクリッカー`;

// 5. 画像が読み込めなかった時のエラー対策
seasonImg.onerror = () => {
    seasonImg.alt = `${currentMonth}.png が見つかりません`;
};

// 6. クリックした時の動き
clickBtn.addEventListener('click', () => {
    // スコアを1増やす
    score++;
    
    // 画面の数字を書き換える
    scoreDisplay.innerText = score;

    // おまけ：クリックした瞬間にちょっとだけ画像を揺らす演出（JSでクラスをつける）
    // 連打しても動くように一回消してからつけるのがコツだよ！
    seasonImg.style.transform = "scale(0.95)";
    setTimeout(() => {
        seasonImg.style.transform = "scale(1)";
    }, 50);
});
