let formSubmitted = false;

const date = new Date();
const day = date.toLocaleString("en-US", { weekday: "long" });
const timezone = date.toLocaleString("en-US", { timeZoneName: "short" });

const FormData = {
  name: "",
  medium: "",
  phone: "",
  message: "",
};

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const medium = document.querySelector("#medium").value;
  const phone = document.querySelector("#phone").value;
  const message = document.querySelector("#message").value;

  FormData.name = name;
  FormData.medium = medium;
  FormData.phone = phone;
  FormData.message = message;

  if (!formSubmitted) {
    axiosSubmit();
    formSubmitted = true;
  }

  function axiosSubmit() {
    const embeds = [
      {
        title: "🚀 New contact form submission",
        fields: [
          {
            name: "👤 Name",
            value: FormData.name,
          },
          {
            name: "📸 Medium",
            value: FormData.medium,
          },
          {
            name: "📸 Phone Number",
            value: FormData.medium,
          },
          {
            name: "🗨️ Message",
            value: FormData.message,
          },
        ],
        color: 0x1d1d1d,
        footer: {
          text: `Submitted on ${day} | ${timezone}`,
        },
      },
    ];

    axios.post(
      "https://discord.com/api/webhooks/1146008545205170236/1EStAjKtflrDouX30g1RFmtBGZm3CfUwQ6ZoW2ODnkZtaJaJoeP5aHnAP1qCuJqcvEsp",
      {
        embeds,
      }
    );
  }
}
