
//سكربت صفحة الكورسات
function toggleDetails(element) {
  var newBg = element.getAttribute('data-bg');
  if (newBg) {
    document.documentElement.style.setProperty('--page-bg-opacity', 0);     // تخفيض الشفافية للتلاشي
        setTimeout(function() {
      document.documentElement.style.setProperty('--page-bg', newBg);
      document.documentElement.style.setProperty('--page-bg-opacity', 0.9);
    }, 300); // بعد 300 مللي ثانية، تحديث الخلفية وإرجاع الشفافية

  }  

    var details = element.querySelector('.course-details');
  details.style.display = (details.style.display === "block") ? "none" : "block"; // عرض/إخفاء تفاصيل الكورس

}

//سكربت صفحة تسجيل الدخول
function showLogin() {
  document.getElementById("loginFormContainer").style.display = "block";
  document.getElementById("registerFormContainer").style.display = "none";
}

function showRegister() {
  document.getElementById("registerFormContainer").style.display = "block";
  document.getElementById("loginFormContainer").style.display = "none";
}


document.addEventListener("DOMContentLoaded", function() {
  var loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
      e.preventDefault();
      window.location.href = "update.html";
    });
  }
});
