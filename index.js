const contentLetterSrart_actived = "Lời chúc của anh Bin tới bé Mây siu xinh đẹp bước vào tuổi 18 " //Lời mở đầu cho bức thư
const mainContentLetter = "Gửi bé Mây. Vậy là một năm nữa đã trôi qua rồi, người con gái của anh đã đến tuổi trưởng thành, phải chính chắn hơn, tỉnh táo hơn trước khi bước ra một xã hội tấp nập đầy vội vã. Được nhìn ngắm em trưởng thành lên mỗi ngày là một điều may mắn ông trời ban tặng cho anh, anh mong rằng anh vẫn luôn sẽ được nhìn ngắm em mãi như vậy. Lại một năm nữa trôi qua, mùa đông lại đến, anh lại được đón chờ cái ngày mà tình yêu của anh được sinh ra đời, Đây là lần thứ 5 anh đón sinh nhật cùng em và cũng là lần thứ 18 của cuộc đời em, mốc đánh dấu quan trọng của cuộc đời em. Anh xin chúc tình yêu của anh bước vào tuổi 18 sẽ luôn xinh đẹp, khỏe mạnh, cố gắng hơn nữa để có một tương lai tốt đẹp không gì phải lo nghĩ. Ngoài ra, anh cũng mong muốn rằng tình yêu của em dành cho anh sẽ luôn mạnh liệt, to lớn mãi mãi. Cả cuộc đời anh chưa bao giờ anh cảm thấy sợ mất một người như em, cuộc đời anh bây giờ đã gắng liền với tên em, không thể gỡ bỏ ra được và anh lại càng không muốn gỡ ra. Em hãy nhớ rằng dù ngoài kia bao nhiêu sóng gió anh vẫn luôn ở bên em, anh sẽ luôn ủng hộ ước mơ của em, em cứ việc bước đi anh sẽ luôn ở sau hỗ trợ em. Một lần nữa, chúc mừng sinh nhật 'Tình yêu của anh'. Anh yêu em <3" //Nội dung của bức thư

// Gắn 1 đường link ảnh bất kì
let imgStart = document.querySelector(".myAI"); //Hình ảnh xuất hiện trong lời mở đầu của bức thư
imgStart.src = "../img/cake.JPG";

// Gắn 1 link ảnh bất kì
let imgLetter = document.querySelector(".img");
imgLetter.src = "./img/anhcuoi.jpg"; //Hình ảnh xuất hiện trong nội dung của bức thư sau khi bức thư được viết ra hết

const splitContentLetterSrart_actived = contentLetterSrart_actived.split("");

document.querySelector(".sticker").addEventListener("click", function () { //Hiệu ứng gõ chữ cho phần mở đầu của bức thư
    document.querySelector(".contentLetter").innerHTML = "";
    document.querySelector(".startLetter").classList.add("active")
    setTimeout(() => {
        splitContentLetterSrart_actived.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".contentLetter").innerHTML += val;
                if (index == contentLetterSrart_actived.length - 1) {
                    setTimeout(() => {
                        document.querySelector(".recieve").setAttribute("style", "opacity: 1; transition: .5s")
                    }, 1000)
                }
            }, 50 * index)
        })
    }, 1000)
})

document.querySelector("#mess").addEventListener("change", function () { //Hiệu ứng gõ chữ cho phần nội dung của bức thư
    if (this.checked == true) {
        document.querySelector(".content").classList.add("actived")
        const splitMainContentLetter = mainContentLetter.split("");

        splitMainContentLetter.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".mainContent").innerHTML += val;
                if (index == mainContentLetter.length - 1) {
                    document.querySelector(".img1").setAttribute("style", "opacity: 1; transition: .5s")
                }
            }, 50 * index)
        })

    } else {
        document.querySelector(".content").classList.remove("actived")
        document.querySelector(".img1").setAttribute("style", "opacity: 0; transition: .5s")
        document.querySelector(".mainContent").innerHTML = "";
    }
})

document.querySelector(".recieve").addEventListener("click", () => {
    document.querySelector(".startLetter").classList.add("close");
    setTimeout(() => {
        document.querySelector(".startForm").classList.add("close");
        setTimeout(() => {
            document.querySelector(".startForm").setAttribute("style", "bottom: 100%");

            let getTypeDevice = document.documentElement.clientWidth;
            if (getTypeDevice <= 768) {
                createLight(20)
            } else {
                createLight(40)
            }

        }, 500)
    }, 500)
})

// Animation Drop light _ Tạo hiệu ứng kim tuyến rơi
//Bạn có thể thiết kế lại để trông chân thật hơn nhé, thiết kế của mình hơi bị cứng và thiếu sự tự nhiên
const getBackground = document.querySelector(".backgroundParty");
var width = getBackground.offsetWidth;
var height = getBackground.offsetHeight;

function createLight(a) {
    var container = document.querySelector(".backgroundParty");
    const blurLv = [2, 4];
    const count = a;
    const allDefaultColor = ["red", "lime", "yellow", "orange", "blue"]

    for (var i = 0; i < count; i++) {
        var randomLeft = 0;
        randomLeft = Math.floor(Math.random() * width);
        var randomTop = 0;
        randomTop = Math.floor(Math.random() * height / 2);
        var color = "white";
        var blur = Math.floor(Math.random() * 2);
        var widthEle = Math.floor(Math.random() * 5) + 15;
        var moveTime = Math.floor(Math.random() * 4) + 4;

        var div = document.createElement("div");
        div.classList.add = "snow";
        div.style.position = "absolute";
        div.style.backgroundColor = allDefaultColor[Math.floor(Math.random() * 5)]
        div.style.borderRadius = Math.floor(Math.random() * 10 + 10).toString() + "px"

        div.style.height = "0px";
        div.style.width = "0px";

        div.style.height = widthEle * Math.floor(Math.random() * 4 + 1) + "px";
        div.style.width = widthEle + "px";
        div.style.marginLeft = randomLeft + "px"
        div.style.marginTop = randomTop + "px"
        div.style.filter = "blur(" + blurLv[blur] + "px" + ")"
        div.style.animation = "moveLight " + moveTime + "s ease-in-out infinite";

        container.appendChild(div);
    }
}