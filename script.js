// ẨN THÔNG TIN CÁ NHÂN
// CHỌN ELEMENT
const Submit = document.querySelector(".submit");
const email = document.querySelector(".email").textContent;
const info = document.querySelector("#info");
const infoEmail = document.querySelector("#enteremail");
const enterEmail = document.querySelector(".email-input");
const warningEl = document.querySelector(".warning");
const emailNoteHidden = document.querySelector(".email-note").classList;

// Biểu thức chính quy kiểm tra định dạng email
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

//HÀM CẢNH BÁO KHI NHẬP EMAIL
const warning = function (warning) {
  warningEl.textContent = warning;
  warningEl.classList.add("warning-color");
};

// HIỂN THỊ BONG BÓNG GHI CHÚ
enterEmail.addEventListener("mouseenter", function () {
  emailNoteHidden.remove("hidden");
});
enterEmail.addEventListener("mouseleave", function () {
  emailNoteHidden.add("hidden");
});

// CÁC TRƯỜNGN HỢP XẢY RA KHI NHẬP EMAIL
Submit.addEventListener("click", function () {
  if (validateEmail(enterEmail.value)) {
    // Nếu nhập đúng dạng email thì
    // HIỂN THỊ THÔNG TIN
    info.classList.remove("hidden");
    infoEmail.classList.add("hidden");
  } else if (enterEmail.value.length === 0) {
    //Chưa nhập email thì cảnh báo:
    warning("Vui lòng nhập email.");
  } else {
    //email sai định dạng thì báo:
    warning("Sai định dạng email");
  }
});

// ẨN CÁC THÔNG TIN KINH NGHIỆM -> SỞ THÍCH
//  CHỌN ELEMENT
const viewBtns = document.querySelectorAll(".viewbtn");
const thongtinTitles = document.querySelectorAll(".inf-item");
const sectionContents = document.querySelectorAll(".innf-content");

for (let i = 0; i < thongtinTitles.length; i++) {
  thongtinTitles[`${i}`].addEventListener("mouseenter", function () {
    viewBtns[i].classList.remove("hidden");
  });
  thongtinTitles[`${i}`].addEventListener("click", function () {
    viewBtns[i].textContent = " ▼ VIEW LESS";
    sectionContents[`${i}`].classList.toggle("hidden");
  });
  thongtinTitles[`${i}`].addEventListener("mouseleave", function () {
    viewBtns[i].classList.add("hidden");
  });
}
