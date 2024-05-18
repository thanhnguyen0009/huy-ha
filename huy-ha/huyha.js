

(function() {
  const images = ["./dung-my/anh/slider1.jpg", "./dung-my/anh/slider2.jpg", "./dung-my/anh/slider3.jpg", "./dung-my/anh/slider4.jpg", "./dung-my/anh/slider5.jpg"];
  //setup a counter
  let counter = 0;
  //listen to button prev and next events
  let btns = document.querySelectorAll(".btn");

  let image = document.getElementById("image");
  // console.log(image);
  //listen on each button each
  btns.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
      let value = event.target;
      // console.log(value);

      if (value.classList.contains("prev")) {
        // console.log("prev clicked");
        counter--;
        //to loop continuously
        if (counter < 0) {
          counter = images.length - 1;
        }
        // console.log(counter);
        //template literals to get the corresponding image value
        image.src = `${images[counter]}`;
      }
      if (value.classList.contains("next")) {
        // console.log("next clicked");
        counter++;
        //to loop continuously
        if (counter > images.length - 1) {
          counter = 0;
        }
        // console.log(counter);
        //template literals to get the corresponding image value
        image.src = `${images[counter]}`;
      }
    });
  });
})();





// =====countdown
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
  
//INSERT EVENT DATE AND TIME HERE IN THIS FORMAT: 'June 1, 2023, 19:00:00'
const EVENTDATE = new Date('August 3, 2024, 18:00:00');
 
const countDown = new Date(EVENTDATE).getTime();
const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDown - now;

    if (distance <= 0) {
        clearInterval(x); // Dừng interval nếu thời gian hết
        return; // Dừng thực thi của hàm
    }

    document.getElementById("days").innerText = Math.floor(distance / day);
    document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
    document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
    document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);
}, 1000); // Sử dụng khoảng thời gian 1000ms (1 giây) cho interval




// lời chúc


const slider = document.querySelector('.slider-wrapper');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; 
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
});


// const sheets = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1MSzOAXOYNX5kSISU_fRI-8u8H_E4PQA8rPXBMyfnzvI/edit#gid=0");
// const sheet = sheets.getSheetByName("dung-my");

// function doPost(e){
//   let data = e.parameter;
//   sheet.appendRow([data.spend, data.ten, data.option, data.number]);

//   // Load lại form sau khi gửi dữ liệu
//   let htmlOutput = HtmlService.createHtmlOutput('<script>window.location.href = "http://www.yenstudio.com.vn";</script>');
//   return htmlOutput;
// }











AOS.init({
  duration: 1000,
})



document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("data-entry-form");
  form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
          data[key] = value;
      });

      // Convert the data to JSON (optional)
      const jsonData = JSON.stringify(data);

      // Send data to Google Sheets using Google Apps Script URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbwJiAI1FLuu3lHMI3e4MDpcXeL1Lddlm0yBZvjnZZi_bvPT69QBY_Yeojq2DYHOU1Q/exec';
      const requestOptions = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: jsonData
      };

      fetch(scriptURL, requestOptions)
          .then(response => {
              // Handle the response as needed
              console.log('Data sent successfully');
              form.reset();
          })
          .catch(error => {
              console.error('Error sending data:', error);
          });
  });
});




function show() {
document.getElementById("popup").style.display = "block";
}

// function hide() {
//   document.getElementById("popup").style.display = "none";
//   clearForm();
// }


function hide() {
var popup = document.getElementById('popup');
popup.style.display = 'none'; // ẩn form khi ấn nút gửi
}

function add() {
var name = document.getElementById("name").value;
var age = document.getElementById("age").value;
var country = document.getElementById("country").value;

if (name == "" || age == "" || country == "") {
    alert("Please fill all fields.");
} else {
    document.getElementById("popup").style.display = "none";
    var newdiv = document.createElement("div");
    newdiv.className += "cont";
    newdiv.innerHTML = "Name: " + name + "<br>Age: " + age + "<br>Country: " + country;
    document.getElementById("results").appendChild(newdiv);

    clearForm();

    // Chuyển hướng trang sau khi thêm dữ liệu
    window.location.href = "ten_trang_moi.php"; // Thay thế "ten_trang_moi.php" bằng đường dẫn của trang mới
}
}



// ======================








