const transtiondata = [];
document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const pinNumber = 1234;
    // bank
    const bank = document.getElementById("bank").value;

    // account number

    const account = document.getElementById("bankNumber").value;

    // add money

    const money = parseInt(document.getElementById("amount").value);
    if(money <=0){
      alert('Invalid amount')
      return;
    }
    // pin Number

    const pin = parseInt(document.getElementById("pin").value);

    // money

    const aviblebalance = parseInt(document.getElementById("money").innerText);
    if (account.length !== 11) {
      alert("please privide valid account number");
      return;
    }
    if (pinNumber !== pin) {
      alert("please privide valid pin Number");
      return;
    }

    const totalmoney = money + aviblebalance;
    console.log(totalmoney);

    document.getElementById("money").innerText = totalmoney;

    const data = {
      name: "Add Money",
      date: new Date().toLocaleString(),
    };
    transtiondata.push(data);
    console.log(transtiondata);
  });

document
  .getElementById("withdraw-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const pinnumber = 1234;
    const pin = parseInt(document.getElementById("pinNumber").value);
    const agentNumber = document.getElementById("agentNumber").value;

    const amount = parseInt(document.getElementById("amounts").value);

    const total = document.getElementById("money").innerText;
    if(amount <=0 || amount >total){
      alert('Invalid amount')
      return;
    }

    if (pin !== pinnumber) {
      alert("please privide valid pin Number");
      return;
    }
    if (agentNumber.length !== 11) {
      alert("please privide valid agent number");
      return;
    }

    const totalmoney = total - amount;

    document.getElementById("money").innerText = totalmoney;

    const data = {
      name: "Add Money",
      date: new Date().toLocaleString(),
    };
    transtiondata.push(data);
    console.log(transtiondata);
  });

document
  .getElementById("transction-btn")
  .addEventListener("click", function () {
    const transtioncontainer = document.getElementById("transtionData");
    for (const data of transtiondata) {
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="flex justify-between items-center rounded-2xl p-3 max-w-lg mx-auto bg-white">
        <div class="flex">
          <div class="bg-gray-200 p-4 rounded-full">
            <img src="./assets/wallet1.png" alt="">
          </div>
          <div class="ml-4">
            <h1>${data.name}</h1>
            <p>${data.data}</p>
          </div>
        </div>
        <div>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
        `;
        transtioncontainer.appendChild(div)
    }
  });

function styletoggle(id) {
  const formbtn = document.getElementsByClassName("form-btn");
  console.log(formbtn);

  for (const form of formbtn) {
    form.classList.remove("bg-[#0874f20d]", "border-[#0874f2]");
    form.classList.add("border-gray-300");
  }

  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add("bg-[#0874f20d]", "border-[#0874f2]");
}

// toggle

function toggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const num of forms) {
    num.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

document.getElementById("addmoney").addEventListener("click", function () {
  toggle("add-money");
  styletoggle("addmoney");
});
document.getElementById("cashout").addEventListener("click", function () {
  toggle("cash-out");
  styletoggle("cashout");
});
document
  .getElementById("transfer-money")
  .addEventListener("click", function () {
    toggle("transfer");
    styletoggle("transfer-money");
  });
document
  .getElementById("transction-btn")
  .addEventListener("click", function () {
    toggle("transction");
    styletoggle("transction-btn");
  });
