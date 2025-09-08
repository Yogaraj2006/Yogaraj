function rollDice() {
  const diceFaces = ["⚀","⚁","⚂","⚃","⚄","⚅"];
  const dice = document.getElementById("dice");

  // Add rolling animation
  dice.classList.add("rolling");

  // Pick random face after short delay
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * 6);
    dice.textContent = diceFaces[randomIndex];
    dice.classList.remove("rolling");
  }, 500);
}
