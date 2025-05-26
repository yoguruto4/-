// プロフィール画像をクリックしたときの動き 追加可能
const imageList = [
    "img/IMG_7503.jpg",
    "img/IMG_1885.JPG",
    "img/IMG_0973.JPG"
];
// 画像ごとのobject-position設定
const imagePositionList = [
    "30% 80%",
    "60% 20%",
    "50% 50%"
];
let currentImageIndex = 0;
let confirmed = false;

document.getElementById("profilePic").onclick = function () {
    if (!confirmed) {
        let result = confirm("私の別写真を表示しますか？");
        if (!result) {
            alert("キャンセルされました");
            return;
        }
        confirmed = true;
    }
    currentImageIndex = (currentImageIndex + 1) % imageList.length;
    document.getElementById("profilePic").src = imageList[currentImageIndex];
    profilePic.style.objectPosition = imagePositionList[currentImageIndex];

};




// ①「好きなものを追加」ボタンでリストを増やす
function addFavorite() {
    let favoriteList = document.getElementById("favoriteList");
    let newItem = document.createElement("li");
    newItem.textContent = prompt("好きなものを1つ入力してください！");
    if (newItem.textContent) {
        favoriteList.appendChild(newItem);
    }
}

// ②「連絡先」画面に切り替え
function showContact() {
    document.getElementById("profilePage").style.display = "none";
    document.getElementById("contactPage").style.display = "block";
}

function showProfile() {
    document.getElementById("profilePage").style.display = "block";
    document.getElementById("contactPage").style.display = "none";
}

// ③リストの1つをクリックしたらアラート＋色変化
window.onload = function () {
    let list = document.getElementById("favoriteList");
    list.onclick = function (e) {
        if (e.target.tagName === "LI") {
            alert(e.target.textContent + " がクリックされました");
            e.target.style.color = "red";
        }
    }
}

// 「ゲーム」をクリックしたら詳細表示
document.getElementById("gameItem").onclick = function(e) {
    e.stopPropagation(); // 他のイベントを止める場合
    document.getElementById("gameDetail").style.display = "block";
};
// 「×」ボタンで閉じる
function closeGameDetail() {
    document.getElementById("gameDetail").style.display = "none";
}
// 画像パスを配列で用意  LOL
const lolImages = [
  "img/20221211201654.png",   // YONE
  "img/EGS_LeagueofLegends_RiotGames_S1_2560x1440-80471666c140f790f28dff68d72c384b.jpg",  // 2枚目
  
];

let lolIndex = 0;
const lolImgElem = document.getElementById("lolImage");

// 3秒ごとに画像を切り替え
setInterval(() => {
  lolIndex = (lolIndex + 1) % lolImages.length;
  lolImgElem.src = lolImages[lolIndex];
}, 3000);


const MhImages = [
  "img/22b81c7c1b280be4d2586529fc086646fd5d3912c95f74f8.avif",
  "img/20170920-mhw-01.webp"
];
let MhIndex = 0;
const MhImgElem = document.getElementById("MhImage");
setInterval(() => {
  MhIndex = (MhIndex + 1) % MhImages.length;
  MhImgElem.src = MhImages[MhIndex];
}, 3000);

const ST6Images = [
  "img/13450-3485-286bd8e59ebb16bfb9debb703cef52a6-2000x1125.webp",
  "img/sns.jpg"
];
let ST6Index = 0;
const ST6ImgElem = document.getElementById("ST6Image");
setInterval(() => {
  ST6Index = (ST6Index + 1) % MhImages.length;
  ST6ImgElem.src = ST6Images[ST6Index];
}, 3000);

// 表示
document.getElementById("youtubeItem").onclick = function(e) {
    e.stopPropagation();
    document.getElementById("youtubeDetail").style.display = "block";
};
// 閉じる
function closeYoutubeDetail() {
    document.getElementById("youtubeDetail").style.display = "none";
}
