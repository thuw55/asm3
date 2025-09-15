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
  // Nếu nhập đúng email thì
  if (enterEmail.value === email) {
    // HIỂN THỊ THÔNG TIN
    info.classList.remove("hidden");
    infoEmail.classList.add("hidden");
    // tại dòng này e đang để nhập đúng email mới mở được
  } else if (validateEmail(enterEmail.value)) {
    //dòng này e để đúng dạng nhưng k đúng email nên báo sai
    warning("Email đã nhập không chính xác. Vui lòng kiểm tra lại.");
  } else {
    //dòng này báo sai dạng ạ
    warning("Địa chỉ email không hợp lệ.");
  }
});

// ẨN CÁC THÔNG TIN KINH NGHIỆM -> SỞ THÍCH
//  CHỌN ELEMENT
const thongtinTitles = document.querySelectorAll(".title");
const sectionContents = document.querySelectorAll(".innf-content");

for (let i = 0; i < thongtinTitles.length; i++) {
  thongtinTitles[`${i}`].addEventListener("mouseenter", function () {
    document.getElementById(`ViewMore--${i}`).classList.remove("hidden");
  });
  thongtinTitles[`${i}`].addEventListener("click", function () {
    document.getElementById(`ViewMore--${i}`).classList.toggle("hidden");
    document.getElementById(`ViewLess--${i}`).classList.toggle("hidden");
    sectionContents[`${i}`].classList.toggle("hidden");
  });
  thongtinTitles[`${i}`].addEventListener("mouseleave", function () {
    document.getElementById(`ViewMore--${i}`).classList.add("hidden");
    document.getElementById(`ViewLess--${i}`).classList.add("hidden");
  });
}
