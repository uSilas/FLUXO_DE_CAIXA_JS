const form = document.getElementById("form");
const btn = document.getElementById("btn");

btn.addEventListener("click", async (e) => {
  e.preventDefault();

  let data = {};
  const formData = new FormData(form);

  formData.forEach((value, key) => {
    data[key] = value;
  });

  let sheet = [Object.values(data)];

  try {
    const request = await fetch(
      "https://ee29-170-82-230-7.ngrok-free.app/sheet/salgadinho",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_sheet: "10FEDev4qucyT5Ty1T321DTSdqPw6jVneJD0HZ4f-Fw0",
          range: "!A:C",
          data: sheet,
        }),
      }
    );

    const response = await request.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});
