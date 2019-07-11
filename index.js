import axios from 'axios';


const entry = document.querySelector('.entry')

axios.get('https://dog.ceo/api/breed/terrier/images')
    .then(res => {
        console.log('response', res)
        const images = res.data.message
        images.forEach(imageUrl => {
            const element = createDogCard(imageUrl)
            entry.appendChild(element)
        })
    })
    .catch(error => {
        console.log('error', error)
    })

entry.appendChild()

function createDogCard(imageUrl, breed) {
    const card = document.createElement('div')
    const img = document.createElement('img')
    card.classList.add('dog-card')
    img.classList.add('dog-image')
    img.src = imageUrl
    title.textContent = `Breed: ${breed}`
    card.appendChild(img)
    card.appendChild(title)
    return card
}