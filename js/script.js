/* script.js */

// عند اكتمال تحميل الصفحة (DOM) ننفذ بقية الأكواد
document.addEventListener("DOMContentLoaded", function() {

  // ========== 1) دوال إظهار/إخفاء نماذج التسجيل/تسجيل الدخول ==========
  // سنعرّف هذه الدوال ونربطها بـ window حتى يمكن استدعاؤها من الأزرار في الـ HTML
  function showLogin() {
    const loginFormContainer = document.getElementById("loginFormContainer");
    const registerFormContainer = document.getElementById("registerFormContainer");
    if (loginFormContainer && registerFormContainer) {
      loginFormContainer.style.display = "block";
      registerFormContainer.style.display = "none";
    }
  }

  function showRegister() {
    const loginFormContainer = document.getElementById("loginFormContainer");
    const registerFormContainer = document.getElementById("registerFormContainer");
    if (loginFormContainer && registerFormContainer) {
      registerFormContainer.style.display = "block";
      loginFormContainer.style.display = "none";
    }
  }

  // نجعل الدوال متاحة في النطاق العام لكي تُستدعى من الأزرار (onclick="showLogin()")
  window.showLogin = showLogin;
  window.showRegister = showRegister;

  // ========== 2) التحقق من صحة نموذج التسجيل ==========
  const registerFormEl = document.getElementById("registerForm");
  if (registerFormEl) {
    registerFormEl.addEventListener("submit", function(e) {
      e.preventDefault();
      const password = document.getElementById("regPassword").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      if (password !== confirmPassword) {
        alert("كلمة المرور وتأكيدها غير متطابقين. يرجى المحاولة مرة أخرى.");
        return;
      }
      alert("تم التسجيل بنجاح!");
      this.reset();
    });
  }

  // ========== 3) التحقق من بيانات نموذج تسجيل الدخول + إعادة توجيه ==========
  const loginFormEl = document.getElementById("loginForm");
  if (loginFormEl) {
    loginFormEl.addEventListener("submit", function(e) {
      e.preventDefault();
      // هنا يمكنك إضافة تحقق بسيط إن رغبت
      alert("تم تسجيل الدخول بنجاح!");
      // إعادة التوجيه إلى صفحة تحديث العضوية
      window.location.href = "update.html";
    });
  }

}); // نهاية DOMContentLoaded

// ========== 4) دالة toggleDetails الخاصة بصفحة الكورسات ==========
function toggleDetails(element) {
  var newBg = element.getAttribute('data-bg');
  if (newBg) {
    // تخفيض الشفافية للتلاشي
    document.documentElement.style.setProperty('--page-bg-opacity', 0);
    // بعد 300 مللي ثانية، نغير الخلفية ونعيد الشفافية
    setTimeout(function() {
      document.documentElement.style.setProperty('--page-bg', newBg);
      document.documentElement.style.setProperty('--page-bg-opacity', 0.9);
    }, 300);
  }

  // عرض/إخفاء تفاصيل الكورس
  var details = element.querySelector('.course-details');
  details.style.display = (details.style.display === "block") ? "none" : "block";
}
