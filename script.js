// let body = document.body
// let div = document.querySelector("div")
// let btnAbout = document.getElementById("btnAbout");
// const h2 = document.createElement('h2')
// const p = document.createElement("p")

// h2.textContent = 'Farel Arlish Orlando, A Man Like Coding'
// h2.style.color = 'white'
// h2.style.fontSize = '24px'

// p.textContent = "Farel Arlish Orlando A Man Study SMKN 1 ADIWRNA, And Like Coding"
// p.style.color = "white"
// p.style.fontSize = "14px"

// btnAbout.style.border = "none"
// btnAbout.style.padding = "24px 48px"
// btnAbout.style.fontSize = "24px"
// btnAbout.style.borderRadius = "8px"
// btnAbout.style.backgroundColor = "green"
// btnAbout.style.color = "white"
// btnAbout.style.cursor = "pointer"

// function aboutMe() {
//     btnAbout.style.backgroundColor = "#8fbc8f"
//     btnAbout.style.color = "black"
//     h2.style.display = "block"
//     p.style.display = "block"
//     div.append(h2)
//     div.append(p)
// }

// function aboutMove() {
//     btnAbout.style.backgroundColor = "rgba(0,0,0,0.5)"
//     btnAbout.textContent = 'Click One More'
//     h2.style.display = "block"
//     p.style.display = "none"
//     div.append(h2)
// }

// function aboutOut() {
//     btnAbout.style.backgroundColor = "green"
//     btnAbout.style.color = "white"
//     btnAbout.textContent = "About Me"
//     h2.style.display = "none"
//     p.style.display = "none"
// }
let arr = [];
let data = {};

document.getElementById("option").addEventListener("change", (e) => {
  const nameInput = document.getElementById("name");
  const btn = document.getElementById("btn");
  const box = document.getElementById("box");
  const selectedOption = e.target.value;

  switch (selectedOption) {
    case "push":
      nameInput.disabled = false;
      nameInput.placeholder = "Masukkan nama siswa";

      btn.textContent = "Tambahkan";
      btn.style.backgroundColor = "rgb(0, 85, 255)";
      break;
    case "pop":
      nameInput.disabled = true;
      nameInput.placeholder = "";

      btn.textContent = "Hapus";
      btn.style.backgroundColor = "red";
      break;
    case "join":
      nameInput.disabled = true;
      nameInput.placeholder = "";

      btn.textContent = "Gabungkan";
      btn.style.backgroundColor = "rgb(0, 85, 255)";
      break;
    case "unshift":
      nameInput.disabled = false;
      nameInput.placeholder = "Masukkan nama siswa";

      btn.textContent = "Tambah";
      btn.style.backgroundColor = "rgb(0, 85, 255)";
      break;
    case "shift":
      nameInput.disabled = true;
      nameInput.placeholder = "";

      btn.textContent = "Hapus";
      btn.style.backgroundColor = "red";
      break;
    case "splice":
      if (arr.length === 0) {
        alert("Tambahkan nama siswa teerlebih dahulu");
        nameInput.placeholder = "";

        btn.style.backgroundColor = "rgb(0, 85, 255)";
        btn.textContent = "Tambahkan";
        document.getElementById("option").value = "push";
      } else {
        nameInput.disabled = true;
        nameInput.placeholder = "";

        btn.textContent = "Tambahkan";
        btn.style.backgroundColor = "rgb(0, 85, 255)";
        box.style.display = "block";
        document.getElementById("container").style.filter = "blur(5px)";
      }
      break;
    case "slice":
      if (arr.length === 0) {
        alert("Tidak ada nama siswa yang dapat di ambil");
        document.getElementById("option").value = "push";
        nameInput.value = "";
      } else {
        nameInput.disabled = false;
        nameInput.placeholder = "(contoh : 1,4)";

        btn.textContent = "Ambil";
        btn.style.backgroundColor = "rgb(0, 85, 255)";
      }
      break;
    case "sort":
      nameInput.disabled = true;
      nameInput.placeholder = "";
      btn.textContent = "Urutkan";
      btn.style.backgroundColor = "rgb(0, 85, 255)";
      break;
    case "find":
      nameInput.disabled = false;
      nameInput.placeholder = "Masukkan nama siswa hanya 1 saja";
      btn.textContent = "Cari";
      btn.style.backgroundColor = "rgb(0, 85, 255)";
      break;
    case "filter":
      nameInput.disabled = false;
      nameInput.placeholder = "Masukkan huruf depan nya saja dan kapital";
      btn.textContent = "Cari";
      btn.style.backgroundColor = "rgb(0, 85, 255)";
      break;
  }
});

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const option = document.getElementById("option");
  const myList = document.getElementById("myList");
  const resultLength = document.getElementById("resultLength");

  switch (option.value) {
    case "push":
      arr.push(
        nameInput.value.charAt(0).toUpperCase() + nameInput.value.slice(1)
      );
      break;
    case "pop":
      if (arr.length === 0) {
        alert("Tambahkan nama siswa terlebih dahulu!!");
      } else {
        arr.pop();
      }
      break;
    case "join":
      if (arr.length === 0) {
        alert("Tidak ada nama siswa untuk di gabungkan!!");
      } else {
        alert(`Hasil penggabungan nama siswa : (${arr.join(") - (")})`);
      }
      break;
    case "unshift":
      arr.unshift(
        nameInput.value.charAt(0).toUpperCase() + nameInput.value.slice(1)
      );
      break;
    case "shift":
      if (arr.length === 0) {
        alert("Tidak ada siswa untuk di hapus!!");
      } else {
        arr.shift();
      }
      break;
    case "splice":
      arr.splice(data.firsIndex, data.removeIndex, data.elNew);
      option.value = "push";
      nameInput.disabled = false;
      break;
    case "slice":
      if (!nameInput.value.includes(",")) {
        alert("Harus memiliki koma untuk pemisah nomer");
      } else {
        const [inputValue1, inputValue2] = nameInput.value.split(",");
        const result = arr.slice(inputValue1, inputValue2);
        console.log(inputValue1);
        console.log(inputValue2);
        alert(result);
      }
      break;
    case "sort":
      if (arr.length === 0) {
        const btn = document.getElementById("btn");

        alert("Tidak ada nama siswa untuk diurutkan!!");
        option.value = "push";
        btn.textContent = "Tambahkan";
        btn.style.backgroundColor = "rgb(0, 85, 255)";
      } else {
        alert("Nama siswa berhasil di urutkan!!");
        arr.sort();
      }
      break;
    case "find":
      if (arr.length === 0) {
        const btn = document.getElementById("btn");

        alert("Tidak ada nama siswa!!");
        option.value = "push";
        nameInput.placeholder = "Masukkan nama siswa";
        nameInput.value = "";

        btn.textContent = "Tambahkan";
        btn.style.backgroundColor = "rgb(0, 85, 255)";
      } else {
        const result = arr.find(
          (i) =>
            i ===
            nameInput.value.charAt(0).toUpperCase() + nameInput.value.slice(1)
        );

        if (result) {
          alert(`Nama siswa yang di cari yaitu : ${result}`);
        } else {
          alert("Nama siswa tidak di temukan!!");
        }
      }
      break;
    case "filter":
      if (arr.length === 0) {
        const btn = document.getElementById("btn");

        alert("Tidak ada nama siswa!!");
        option.value = "push";
        nameInput.placeholder = "Masukkan nama siswa";
        nameInput.value = "";

        btn.textContent = "Tambahkan";
        btn.style.backgroundColor = "rgb(0, 85, 255)";
      } else {
        const result = arr.filter((i) =>
          i.startsWith(nameInput.value.toUpperCase())
        );

        if (result.length > 0) {
          alert(`Hasil : (${result.join(") - (")})`);
        } else {
          alert(
            `Tidak ada nama siswa yang huruf depanya ${nameInput.value.toUpperCase}`
          );
        }
      }
      break;
  }

  myList.innerHTML = "";
  arr.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;

    myList.appendChild(li);

    if (arr.length === 5) {
      document.getElementById("container").style.flexDirection = "column";
      document.body.style.height = "150vh";
      myList.appendChild(li);
      nameInput.value = "";
      return;
    }
  });

  console.log(arr);
  resultLength.textContent = `Total siswa : ${arr.length}`;
  nameInput.value = "";
});

function send() {
  const inputNumber1 = document.querySelector(".input-number1").value;
  const inputNumber2 = document.querySelector(".input-number2").value;
  const inputNumber3 = document.querySelector(".input-number3").value;

  if (inputNumber1 === "") {
    alert("Isi terlebih dahulu!!");
  } else if (inputNumber2 === "") {
    alert("Isi terlebih dahulu!!");
  } else if (inputNumber3 === "") {
    alert("Isi terlebih dahulu!!");
  } else {
    data = {
      firsIndex: inputNumber1,
      removeIndex: inputNumber2,
      elNew: inputNumber3,
    };

    document.getElementById("box").style.display = "none";
    document.getElementById("container").style.filter = "blur(0)";
  }
}

// document.getElementById("form").addEventListener("submit", (e) => {
//   e.preventDefault();

//   const name = document.getElementById("name").value;
//   const option = document.getElementById("option").value;

//   const resultLength = document.getElementById("resultLength");
//   const myList = document.getElementById("myList");

//   switch (option) {
//     case "push":
//       arr.push(name.charAt(0).toUpperCase() + name.slice(1));
//       break;
//     case "pop":
//       arr.pop();
//       break;
//     case "unshift":
//       const option = document.getElementById("option");

//       arr.unshift(name.charAt(0).toUpperCase() + name.slice(1));
//       option.value = "push";
//       break;
//     case "shift":
//       arr.shift();
//       break;
//   }
//   myList.innerHTML = "";

//   arr.forEach((item) => {
//     const li = document.createElement("li");
//     li.textContent = item;

//     myList.appendChild(li);
//   });

//   document.getElementById("name").value = "";
//   resultLength.textContent = `Total siswa : ${arr.length}`;
// });

// document.getElementById("option").addEventListener("change", (e) => {
//   const selectedOption = e.target.value;
//   const nameInput = document.getElementById("name");

//   if (selectedOption === "pop") {
//     nameInput.disabled = true;
//     nameInput.value = "";
//     removeLast();
//   } else if (selectedOption === "join") {
//     nameInput.disabled = true;
//     nameInput.value = "";
//     merger();
//   } else if (selectedOption === "unshift") {
//     nameInput.disabled = false;
//     nameInput.value = "";
//     unshift();
//   } else if (selectedOption === "shift") {
//     nameInput.disabled = true;
//     nameInput.value = "";
//     shift();
//   } else {
//     nameInput.disabled = false;
//   }
// });

// const removeLast = () => {
//   if (arr.length === 0) {
//     alert("Tidak ada siswa untuk dihapus");
//     return;
//   }
// };

// const merger = () => {
//   if (arr.length === 0) {
//     alert("Tidak ada siswa untuk digabungkan");
//   } else {
//     const result = arr.join(") - (");
//     alert(`Hasil penggabungan siswa: (${result})`);
//   }
// };

// const unshift = () => {
//   const name = document.getElementById("name").value;
// };

// const shift = () => {
//   if (arr.length === 0) {
//     alert(
//       "Tidak ada siswa untuk dihapus, silahkan pilih option tambahkan lalu masukkan nama siswa"
//     );
//     return;
//   }
// };
