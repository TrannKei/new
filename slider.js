let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
/* ALERT BOOKING SUCCESS
*/
const bookingName = document.querySelector("#name-input")
const bookingPhone = document.querySelector("#phone-input")
const bookingEmail = document.querySelector("#email-input")
const bookingDate = document.querySelector("#user-date")
const bookingTime = document.querySelector("#user-time")
const bookingStore = document.querySelector("#store-booking-select")


function showAlert() {
  Swal.fire({
    // position: 'top-end',
    icon: 'success',

    title: `Cảm ơn quý khách hàng ${bookingName.value.toUpperCase()} với số điện thoại ${bookingPhone.value} đã đặt lịch vào lúc ${bookingTime.value} ngày ${bookingDate.value}. \n Quý khách vui lòng đến đúng giờ để nhận được những dịch vụ tốt nhất!`,
    showConfirmButton: false,
    timer: 5000,
    // showBookingTab.style.display = "none"
  });
  showBookingTab.style.display = "none"
}

const showBookingTab = document.querySelector(".booking-here");
const btnShowBooking = document.querySelector(".white-text")

function noneAlert() {
  if (showBookingTab.style.display !== "none") {
    showBookingTab.style.display = "none";
  } else {
    showBookingTab.style.display = "block";
  }
};








const userIdInput = document.querySelector("#user-id")
const userPasswordInput = document.querySelector("#user-password")

const loginBtnNav = document.querySelector(".help-btn1")
const signUpBtnNav = document.querySelector(".help-btn2")
const loginSlide = document.querySelector(".login-container")
const signUpSlide = document.querySelector(".sign-up-container")
const createInLogin = document.querySelector(".create-account-btn")
const createInCreate = document.querySelector(".create-account-btn1")
const hiUser = document.querySelector(".say-hi")
const hideBtnLoginSignUp = document.querySelector(".button-container")

function callLoginSlide() {
  if (loginSlide.style.display !== "none") {
    loginSlide.style.display = "none"
    signUpSlide.style.display = "none"
  } else {
    loginSlide.style.display = "block";
    signUpSlide.style.display = "none"

  }
}
function callSignUpSlide() {
  if (signUpSlide.style.display !== "none") {
    signUpSlide.style.display = "none"
    loginSlide.style.display = "none"
  } else {
    signUpSlide.style.display = "block";
    loginSlide.style.display = "none"

  }
}






const car1 = document.querySelector(".car-1");
const car2 = document.querySelector(".car-2");
const carItem1 = document.querySelector(".catalogue-container")
const carItem2 = document.querySelector(".catalogue-container2")

function showItems() {
  if (carItem1.style.display !== "none") {
    carItem1.style.display = "none";
    carItem2.style.display = "none";
    // car1.style.backgroundColor = "#000"
  } else if (carItem1.style.display === "none") {
    carItem1.style.display = "flex";
    // car1.style.backgroundColor = "#cccccc"
    carItem2.style.display = "none";
  }
}
// car1.addEventListener("click", showItems)

function showItems2() {
  if (carItem2.style.display !== "none") {
    carItem2.style.display = "none";
    carItem1.style.display = "none";
  } else if (carItem2.style.display === "none") {
    carItem2.style.display = "flex"
    carItem1.style.display = "none";
  }
}





// GOI CUU HO
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

function callHelp() {
  swalWithBootstrapButtons.fire({
    title: 'Chúng tôi muốn sử dụng vị trí của bạn?',
    text: "Để giúp việc cứu hộ diễn ra suôn sẻ nhất!",
    icon: 'question',
    showCancelButton: true,
    cancelButtonText: 'Không',
    confirmButtonText: 'Đồng ý!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swal.fire({
        title: 'Điền số điện thoại',
        input: 'text',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Chúng tôi đã nhận được thông tin!',
            'Và sẽ liên lạc cho bạn trong thời gian sớm nhất',
            'success'
          )
        }
      })

    } else
      swal.fire({
        title: 'Điền số điện thoại',
        input: 'text',
      }
      ).then((result) => {
        if (result.isConfirmed) {
          swal.fire({
            title: 'Địa chỉ hiện tại của xe bạn!',
            input: 'text',
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Chúng tôi đã nhận được thông tin!',
                'Và sẽ liên lạc cho bạn trong thời gian sớm nhất',
                'success'
              )
            }
          })
        }


      })
  })
}


// get nav bar

const getUl = document.querySelector(".header-nav")
function getNav()
{
    if(getUl.style.display !== "none")
     getUl.style.display = "none"
    else getUl.style.display = "block"
}




