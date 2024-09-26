import { FormData } from "@/app/components/contact";

export function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";
  // console.log(JSON.stringify(data));
  fetch(apiEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => {
      console.log("Response status:", res.status);
      return res.json();
    })
    // .then((res) => res.text()) // Парсимо як текст, щоб побачити повну відповідь
    // .then((text) => {
    //   console.log("Response text:", text);
    //   return JSON.parse(text); // Пробуємо парсити, якщо це JSON
    // })
    .then((response) => {
      console.log("Server response:", response);
      alert(response.message);
    })
    .catch((err) => {
      // alert(err);
      console.error("Fetch error:", err);
      alert("Error: " + err.message);
    });
}
