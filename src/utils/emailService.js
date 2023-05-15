import AfricasTalking from "africastalking";

const username = process.env.USERNAME;
const apiKey = process.env.AT_API_KEY;

const africastalking = AfricasTalking({
  username,
  apiKey,
});

async function sendEmail(recipient, subject, message) {
  try {
    const options = {
      to: [recipient],
      subject,
      message,
    };

    // Send email
    const response = await africastalking.SMS.send(options);

    console.log("Email sent successfully:", response);
    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

export default sendEmail;
