//java for search with "Enter" keydown

const contacts = [
  "Klew:6450934",
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];
document.addEventListener("DOMContentLoaded", () => {
    const para = document.querySelector("p");
    const input = document.querySelector("input");
    const btn = document.querySelector("button");

    const searchContact = () => {
        const searchName = input.value.toLowerCase();
        input.value = "";
        input.focus();
        para.textContent = "";
        for (const contact of contacts) {
            const splitContact = contact.split(":");
            if (splitContact[0].toLowerCase() === searchName) {
                para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
                return;
            }
        }
        para.textContent = "Contact not found.";
    };
    btn.addEventListener("click", searchContact);

    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            searchContact();
        }
    })
});