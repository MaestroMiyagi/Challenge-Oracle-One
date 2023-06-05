const encodeButton = document.getElementById('encode-button')
const textInput = document.getElementById('text-input')
const resultOutput = document.createElement('textarea')
const rightSidebar = document.getElementById('right-sidebar')

encodeButton.addEventListener('click', () => {
  const inputText = textInput.value.toLowerCase()
  const encodedText = encodeText(inputText)
  resultOutput.value = encodedText
})

function encodeText(text) {
  const encodingMap = {
    e: 'enter',
    i: 'imes',
    a: 'ai',
    o: 'ober',
    u: 'ufat',
  }

  let encodedText = text
  for (const [key, value] of Object.entries(encodingMap)) {
    encodedText = encodedText.replace(new RegExp(key, 'g'), value)
  }
  return encodedText
}

const decodeButton = document.getElementById('decode-button')

decodeButton.addEventListener('click', () => {
  const inputText = textInput.value.toLowerCase()
  const decodedText = decodeText(inputText)
  resultOutput.value = decodedText
})

function decodeText(text) {
  const encodingMap = {
    e: 'enter',
    i: 'imes',
    a: 'ai',
    o: 'ober',
    u: 'ufat',
  }

  let decodedText = text
  for (const [key, value] of Object.entries(encodingMap)) {
    decodedText = decodedText.replace(new RegExp(value, 'g'), key)
  }
  return decodedText
}

rightSidebar.appendChild(resultOutput)

const copyButton = document.createElement('button')
copyButton.textContent = 'Copy'
rightSidebar.appendChild(copyButton)

copyButton.addEventListener('click', () => {
  resultOutput.select()
  resultOutput.setSelectionRange(0, 99999)
  document.execCommand('copy')
  resultOutput.blur()
})

const container = document.createElement('div')
container.classList.add('result-container')
container.appendChild(resultOutput)
container.appendChild(copyButton)

rightSidebar.appendChild(container)

