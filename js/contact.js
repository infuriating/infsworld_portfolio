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

function reactiveFormData(type) {
  const input = document.querySelector(`#${type}`);
  input.addEventListener("input", () => {
    FormData[type] = input.value;
  });
  setTimeout(() => {
    console.table(FormData);
  }, 50);
}

function handleSubmit(e) {
  e.preventDefault();

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
