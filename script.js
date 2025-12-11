const quotes = [
    "Believe you can and you're halfway there.",
    "Dream big. Start small. Act now.",
    "sun will rise after every dark night"
];

document.getElementById("generate").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
});
