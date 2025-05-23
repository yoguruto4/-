// プロフィール画像をクリックしたときの動き
document.getElementById("profilePic").onclick = function() {
    let result = confirm("私の秘密の写真を表示しますか？");
    if(result) {
        alert("（ここで秘密の写真を表示できます）");
        
        // document.getElementById("profilePic").src = "img/secret.jpg";
    } else {
        alert("キャンセルされました");
    }
};



// ①「好きなものを追加」ボタンでリストを増やす
function addFavorite() {
    let favoriteList = document.getElementById("favoriteList");
    let newItem = document.createElement("li");
    newItem.textContent = prompt("好きなものを1つ入力してください！");
    if(newItem.textContent) {
        favoriteList.appendChild(newItem);
    }
}

// ②「連絡先」画面に切り替え（画面遷移例）
function showContact() {
    document.getElementById("profilePage").style.display = "none";
    document.getElementById("contactPage").style.display = "block";
}

function showProfile() {
    document.getElementById("profilePage").style.display = "block";
    document.getElementById("contactPage").style.display = "none";
}

// ③リストの1つをクリックしたらアラート＋色変化（DOM参照・変更の例）
window.onload = function() {
    let list = document.getElementById("favoriteList");
    list.onclick = function(e) {
        if(e.target.tagName === "LI") {
            alert(e.target.textContent + " がクリックされました");
            e.target.style.color = "orange";
        }
    }
}
