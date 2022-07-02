const people = [
    { name: 'adri' },
    { name: 'becky' },
    { name: 'chris' },
    { name: 'dillon' },
    { name: 'evan' },
    { name: 'frank' },
    { name: 'georgette' },
    { name: 'hugh' },
    { name: 'igor' },
    { name: 'jacoby' },
    { name: 'kristina' },
    { name: 'lemony' },
    { name: 'matilda' },
    { name: 'nile' },
    { name: 'ophelia' },
    { name: 'patrick' },
    { name: 'quincy' },
    { name: 'roslyn' },
    { name: 'solene' },
    { name: 'timothy' },
    { name: 'uff' },
    { name: 'violet' },
    { name: 'wyatt' },
    { name: 'x' },
    { name: 'yadri' },
    { name: 'zack' },
]

const searchInput = document.querySelector('.input');

searchInput.addEventListener("input", (e) => {
    let value = e.target.value

    if (value && value.trim().length > 0) {
        value = value.trim().toLowerCase()

        //returning only the results of setList if the value of the search is included in the person's name
        setList(people.filter(person => {
            return person.name.includes(value)
        }))
    } else {
        // 5. return nothing
        clearList()

    }
});

function noResults() {
    // create an element for the error; a list item ("li")
    const error = document.createElement('li')
    // adding a class name of "error-message" to our error element
    error.classList.add('error-message')

    // creating text for our element
    const text = document.createTextNode('No results found. Sorry!')
    console.log(text);
    // appending the text to our element
    error.appendChild(text)
    // appending the error to our list element
    list.appendChild(error)
}


function setList(results) {
    clearList()
    for (const person of results) {
        const resultItem = document.createElement('li')
        resultItem.classList.add('result-item')
        const text = document.createTextNode(person.name)
        resultItem.appendChild(text)
        list.appendChild(resultItem)
    }

    if (results.length === 0) {
        noResults()
    }
}

function clearList() {
    // looping through each child of the search results list and remove each child
    while (list.firstChild) {
        list.removeChild(list.firstChild)
    }
}