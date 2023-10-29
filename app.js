const card = document.querySelector(".card__content--h5");

card.innerHTML = "<em>Everything</em> You Need to Know About Data";

const communitySection = document.querySelector(".testimonials");
const newElement = document.createElement("h2");
newElement.textContent = "Advice for New Udacity Students";
community.appendChild(newElement);
const advice =
  "<p>Set aside specific blocks of time each week \
	for your coursework. Add those blocks to your calendar and \
	set reminders.</p>";
newElement.insertAdjacentHTML('afterend', adviceString);
