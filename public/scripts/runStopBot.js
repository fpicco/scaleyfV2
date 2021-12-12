const formRun = document.forms[0];
const formStop = document.forms[1];
const apiUrl = "https://scaleyf.com/api";

const formEvents = (form, payloadFunction, urlEndpoint, swalMessage) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    fetchApi(`${apiUrl}/${urlEndpoint}`, payloadFunction, swalMessage);
    form.reset();
  });
};

const fetchApi = async (apiUrl, payloadFunction, ) => {
  const settings = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payloadFunction()),
  };

  try {
    const response = await fetch(apiUrl, settings);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.detail);
    }
    Swal.fire({
      icon: "success",
      title: `${data.detail}\n`,
      showConfirmButton: false,
      timer: 2500,
    });
    return data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: `${error}\n`,
      showConfirmButton: false,
      timer: 2500,
    })
  }
};

const emailRun = document.querySelector("#email-run");
const pinRun = document.querySelector("#pin-run");
const emailStop = document.querySelector("#email-stop");
const pinStop = document.querySelector("#pin-stop");

const getPayload = (email, pin) => {
  const payload = {
    email: email.value,
    pin: pin.value,
  };
  return payload;
};

formEvents(
  formRun,
  () => getPayload(emailRun, pinRun),
  "bot/run"
);
formEvents(
  formStop,
  () => getPayload(emailStop, pinStop),
  "bot/stop"
);
