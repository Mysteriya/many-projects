export const colorChange = () => {
    if(true){
        document.body.classList.toggle('dark')
        document.querySelector('.Header')?.classList.toggle('dark')
        document.querySelector('.button__converter')?.classList.toggle('dark')
        document.querySelectorAll('.input__converter')?.forEach((elem) => elem.classList.toggle('dark'))
    }
}