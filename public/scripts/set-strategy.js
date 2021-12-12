const form = document.forms[0];
const apiUrl = "https://scaleyf.com/api";
const dcaConfigArray = [
  [0.03, 0.1, 0.15, 0.2],
  [0.08, 0.12, 0.2],
  [0.05, 0.1, 0.15],
];

window.addEventListener("load", function () {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    fetchApiStrategy(`${apiUrl}/bot`);
    form.reset();
  });
});

async function fetchApiStrategy(url) {
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
    Swal.fire({
      icon: "success",
      title: `${data.detail}\n`,
      showConfirmButton: false,
      timer: 1500,
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
  const timeframe = document.querySelector("#timeframe");
  const portfolioAllocation = document.querySelector("#portfolio-allocation");
  const pair = document.querySelector("#pair");
  const dcaConfig = document.querySelector("#dca-config");
  const emailStrategy = document.querySelector("#email-strategy");
  const pinStrategy = document.querySelector("#pin-strategy");

  const payload = {
    timeframe: timeframe.options[timeframe.selectedIndex].value,
    portfolio_allocation: portfolioAllocation.value / 100,
    pair: pair.options[pair.selectedIndex].value,
    dca_config:
      dcaConfigArray[dcaConfig.options[dcaConfig.selectedIndex].value],
    email: emailStrategy.value,
    pin: pinStrategy.value,
  };
  return payload;
}
