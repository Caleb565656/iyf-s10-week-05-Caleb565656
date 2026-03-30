// ===== TASK 9: DOM SELECTION & TRAVERSAL =====

// Select elements
const header = document.getElementById("main-header");
console.log("getElementById:", header);

const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);

// Practice selection
const h1 = document.querySelector("h1");
const form = document.getElementById("contact-form");
const emailInput = document.getElementById("email");
const navListItems = document.querySelectorAll("nav li");
const lastParagraph = document.querySelector("article p:last-child");

console.log(h1, contents, form, emailInput, navListItems, lastParagraph);

// ===== TASK 9.2: Traversing DOM =====
const nav = document.querySelector("nav");
console.log(nav.parentElement);           // header
console.log(nav.children);                // HTMLCollection
console.log(nav.firstElementChild);       // ul
console.log(nav.lastElementChild);        // ul

const article = document.querySelector("article");
console.log(article.nextElementSibling);  // section
console.log(article.previousElementSibling); // null

const navLinks = nav.querySelectorAll("a");
console.log(navLinks);

// ===== TASK 9.3: Modifying Content =====
h1.textContent = "New DOM Title";
article.innerHTML = `
    <h2>Updated Article</h2>
    <p>This is new content.</p>
`;
const link = document.querySelector(".nav-link");
link.setAttribute("href", "https://example.com");

// Styles
const container = document.querySelector(".container");
Object.assign(container.style, {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "8px"
});

// ===== TASK 9.4: Adding & Removing Elements =====
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a dynamically added paragraph!";
newParagraph.className = "content highlight";
article.appendChild(newParagraph);

// Remove footer
const footer = document.querySelector("footer");
footer?.remove(); // safe check

// Cloning nav item
const navItem = document.querySelector(".nav-link").parentElement;
const clone = navItem.cloneNode(true);
clone.querySelector("a").textContent = "Blog";
document.querySelector(".nav-list").appendChild(clone);

// Function to add nav item
function addNavItem(text, href) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = text;
    a.href = href;
    a.className = "nav-link";
    li.appendChild(a);
    document.querySelector(".nav-list").appendChild(li);
}
addNavItem("Portfolio", "/portfolio");

// ===== TASK 10: EVENTS =====
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);
button.addEventListener("click", () => console.log("Button clicked!"));

document.addEventListener("keydown", function(event) {
    console.log("Key pressed:", event.key);
});
