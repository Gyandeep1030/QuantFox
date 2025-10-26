// Sends form data to your API route
export const sendEmail = async (formData) => {
  try {
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) throw new Error("Network error");
    return await response.json();
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
};
