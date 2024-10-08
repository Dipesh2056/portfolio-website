/*=============== SERVICES MODAL ===============*/
const modal = document.querySelectorAll('.services__modal'),
modalButton = document.querySelectorAll('.services__button'),
modaClose = document.querySelectorAll('.services__modal-close')


let activeModal= (modalClick)=>{
    modal[modalClick].classList.add('active-modal')
}

modalButton.forEach((modalButton,i)=>{
    modalButton.addEventListener('click',()=>{
        activeModal(i)
    })
})

modaClose.forEach((modaClose)=>{
    modaClose.addEventListener('click',()=>{
        modal.forEach((modalRemove)=>{
            modalRemove.classList.remove('active-modal')
        })
    })
})



/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                       :  scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)
