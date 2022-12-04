var programming_languages = [
	"tiger", "mink","lion","crocodile","bear", "panda","leopard","zebra","snake","gorilla","elephant"
]

function randomWord() {
  return programming_languages[Math.floor(Math.random() * programming_languages.length)]
}

export { randomWord }