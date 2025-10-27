import emailjs from "emailjs-com";

// Replace these with your actual EmailJS credentials from the dashboard
const SERVICE_ID = "service_uoseau6";
const TEMPLATE_ID = "template_qz3ca7c"; // replace with your actual template ID
const PUBLIC_KEY = "J0-ECxOpqiTl59NBu";  // starts with something like "OuJH3z5mKxxxx"

export const sendEmail = async (formData) => {
  const templateParams = {
    company : "QuantFox",
    from_name: formData.name || formData.fullName,
    from_email: formData.email,
    phone: formData.phone || "N/A",
    address: formData.address || "N/A",
    message: formData.message,
  };

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );
    console.log("✅ EmailJS response:", response);
    return response;
  } catch (error) {
    console.error("❌ EmailJS error:", error);
    throw error;
  }
};
