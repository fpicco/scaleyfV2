const form = document.forms[0];
const apiUrl = "https://scaleyf.com/api";

window.addEventListener("load", function () {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    fetchApiProfile(`${apiUrl}/profile`);
    form.reset();
  });
});

async function fetchApiProfile(url) {
  const settings = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(getPayload()),
  };

  try {
    const response = await fetch(url, settings);
    const data = await response.json();
    if (!response.ok) {
      if (response.status === 422) {
        throw new Error("Something went wrong, please try again");
      }
      throw new Error(data.detail);
    }
    console.log(`Success: ${data}`);
    Swal.fire({
      title: `${data.detail}`,
      text: "Now it's time to set your strategy!",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `<a href="set-strategy.html">Let's do it now</a>`,
      cancelButtonText: "I will do it later",
    });

    return data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: `${error}\n`,
      showConfirmButton: false,
      timer: 1500,
    });
  }
}

function getPayload() {
  const apiKey = document.querySelector("#apikey");
  const apiSecret = document.querySelector("#apisecret");
  const email = document.querySelector("#email-profile");
  const tgmId = document.querySelector("#tgmid");

  const payload = {
    email: email.value,
    api_key: apiKey.value,
    api_secret: apiSecret.value,
    tgm_chat_id: tgmId.value,
  };
  return payload;
}

const questionTgm = document.getElementById("tgm-question");
questionTgm.addEventListener("click", () =>
  Swal.fire({
    title: "Get your telegram chat ID",
    html: `1. Open a conversation with the <b style="color:#28427A"><a href="#" onclick='window.open("https://t.me/scaleyf_bot");return false;'>ScaleYF BOT</a></b>
      <br>
     2. Get your chat id from 
      <b style="color:#28427A"><a href="#" onclick='window.open("https://t.me/get_my_chat_id_bot");return false;'>THIS BOT </a></b>and copy that number.`,

    confirmButtonColor: "#28427A",
  })
);
