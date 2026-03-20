const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const isAlreadyFlipped = card.classList.contains("flipped");

    cards.forEach((currentCard) => {
      currentCard.classList.remove("flipped");
    });

    if (!isAlreadyFlipped) {
      card.classList.add("flipped");
    }
  });
});

const button = document.getElementById("btn");
const result = document.getElementById("res");

const meals = [
  "🍔 Burger",
  "🍝 Pasta",
  "🌯 Shawarma",
  "🍕 Pizza",
  "🥞 Pancakes",
  "🍩 Donuts",
  "🍫 Chocolate",
  "🍟 Fries",
  "🧀 Mac & Cheese",
  "🍦 Ice Cream",
  "🍰 Chocolate cake",
  "☕ Hot chocolate",
  "🍣 Sushi",
  "🍓 Smoothie",
  "🍨 Dessert",
  "🥪 Sandwich",
  "🍳 Omelette",
  "🥗 Salad",
  "🍜 Instant noodles",
  "🍞 Toast",
  "🥣 Cereal",
];

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * meals.length);
  const randomMeal = meals[randomIndex];

  result.textContent = "Your surprise meal is: " + randomMeal;
});
