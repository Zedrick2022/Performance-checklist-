const EMAILJS_PUBLIC_KEY = "adJKCbEeD3htCpqle";
const EMAILJS_SERVICE_ID = "service_ztrinq5";
const EMAILJS_TEMPLATE_ID = "template_u3420ql";
const CHECKLIST_URL = "https://www.image2url.com/r2/default/documents/1787782250247-e138248e-4b05-44b9-aac0-6ef9f6adec81.pdf";
const OWNER_EMAIL = "zedricksalupito@gmail.com";

emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const form = document.getElementById("agencyForm");
const submitBtn = document.getElementById("submitBtn");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!form.checkValidity()) { form.reportValidity(); return; }

  const data = new FormData(form);
  const name = data.get("name").trim();
  const email = data.get("email").trim();

  submitBtn.disabled = true;
  submitBtn.classList.add("loading");
  formStatus.className = "form-status";
  formStatus.textContent = "Sending your checklist…";

  const message = `Hi ${name},\n\nThank you for requesting my Campaign Performance Reporting Checklist for Creative & Digital Marketing Agencies.\n\nThis checklist is designed to help you identify the campaign metrics that matter, organize your performance data, and communicate results more clearly to your clients.\n\nUse it to review how your agency measures engagement, visibility, leads, conversions, customer growth, and overall campaign impact.\n\nDownload your checklist here:\n${CHECKLIST_URL}\n\nKind regards\nZedrick Salupito`;

  const params = {
    to_name: name,
    to_email: email,
    email: email,
    reply_to: OWNER_EMAIL,
    from_name: "Zedrick Salupito",
    subject: "Your Campaign Performance Reporting Checklist",
    message,
    checklist_url: CHECKLIST_URL,
    agency_name: data.get("agency"),
    role: data.get("role"),
    reporting_challenge: data.get("reporting_challenge"),
    client_result: data.get("client_result"),
    reporting_method: data.get("reporting_method"),
    desired_outcome: data.get("desired_outcome")
  };

  try {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);
    formStatus.className = "form-status success";
    formStatus.textContent = "Success! Check your inbox for your checklist.";
    form.reset();
  } catch (error) {
    console.error(error);
    formStatus.className = "form-status error";
    formStatus.textContent = "The email could not be sent. Please try again.";
  } finally {
    submitBtn.disabled = false;
    submitBtn.classList.remove("loading");
  }
});

