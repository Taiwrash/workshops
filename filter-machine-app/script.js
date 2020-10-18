const input = document.querySelector("input");

const filterFunction = () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((item) => {
    let whatToSearch = item.querySelector("p");
    if (
      whatToSearch.innerHTML.toUpperCase().indexOf(input.value.toUpperCase()) >
      -1
    ) {
      item.style.display = "";
    } else {
      item.style.display = "none";
      const notFound = document.getElementById("not-found");
      notFound.style.display = "flex";
    }
  });
};
input.addEventListener("keyup", filterFunction);
