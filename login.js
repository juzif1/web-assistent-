// دالة لإظهار نموذج تسجيل الدخول
function showLogin() {
  document.getElementById("loginFormContainer").style.display = "block";
  document.getElementById("registerFormContainer").style.display = "none";
}

// دالة لإظهار نموذج التسجيل
function showRegister() {
  document.getElementById("registerFormContainer").style.display = "block";
  document.getElementById("loginFormContainer").style.display = "none";
}

// التحقق من صحة بيانات نموذج التسجيل
document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault(); // منع الإرسال التلقائي للنموذج
  const password = document.getElementById("regPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (password !== confirmPassword) {
    alert("كلمة المرور وتأكيدها غير متطابقين. يرجى المحاولة مرة أخرى.");
    return;
  }
  alert("تم التسجيل بنجاح!");
  this.reset();
});

// التحقق من بيانات نموذج تسجيل الدخول
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("تم تسجيل الدخول بنجاح!");
});
