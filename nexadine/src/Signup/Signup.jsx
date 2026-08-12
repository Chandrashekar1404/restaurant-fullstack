const handleSignup = () => {
  if (
    adminEmails.includes(email.trim()) ||
    adminPhones.includes(phone.trim())
  ) {
    navigate("/admin/dashboard");
  } else {
    navigate("/user-dashboard");
  }
};