conditionsBlock = document.querySelector('body > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td.sitebuffer > table > tbody > tr:nth-child(4) > td:nth-child(2)')

conditions = conditionsBlock.innerText.split(':')

text = conditions[1].slice(0, -7)

if (conditions[2].slice(1, 2) == '-') {
    shift = parseInt(conditions[2].slice(1, 3))
} else {
    shift = parseInt(conditions[2].slice(1, 2))
}


result = ''

splitter = text[3]

splittedText = text.split(splitter)
splittedText.pop()

for(i = 0; i < splittedText.length; ++i) {
    numb = parseInt(splittedText[i])
    shiftedLetter = numb - shift
    result += String.fromCharCode(shiftedLetter)

}

input = document.querySelector('body > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td.sitebuffer > table > tbody > tr:nth-child(4) > td:nth-child(2) > form > input')

input.value = result

form = document.querySelector('body > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td.sitebuffer > table > tbody > tr:nth-child(4) > td:nth-child(2) > form')

form.submit()
