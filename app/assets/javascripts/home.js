# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/


const triggers = document.querySelectorAll('[aria-haspopup="dialog"]');
const doc = document.querySelector('.js-document');
const focusableElementsArray = [
  '[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
];
const keyCodes = {
  tab: 9,
  enter: 13,
  escape: 27,
};

const open = function (dialog) {
  const focusableElements = dialog.querySelectorAll(focusableElementsArray);
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  dialog.setAttribute('aria-hidden', false);
  doc.setAttribute('aria-hidden', true);

  // return if no focusable element
  if (!firstFocusableElement) {
    return;
  }

  window.setTimeout(() => {
    firstFocusableElement.focus();

    // trapping focus inside the dialog
    focusableElements.forEach((focusableElement) => {
      if (focusableElement.addEventListener) {
        focusableElement.addEventListener('keydown', (event) => {
          const tab = event.which === keyCodes.tab;

          if (!tab) {
            return;
          }

          if (event.shiftKey) {
            if (event.target === firstFocusableElement) { // shift + tab
              event.preventDefault();

              lastFocusableElement.focus();
            }
          } else if (event.target === lastFocusableElement) { // tab
            event.preventDefault();

            firstFocusableElement.focus();
          }
        });
      }
    });
  }, 100);
};

const close = function (dialog, trigger) {
  dialog.setAttribute('aria-hidden', true);
  doc.setAttribute('aria-hidden', false);

  // restoring focus
  trigger.focus();
};

triggers.forEach((trigger) => {
  const dialog = document.getElementById(trigger.getAttribute('aria-controls'));
  const dismissTriggers = dialog.querySelectorAll('[data-dismiss]');

  // open dialog
  trigger.addEventListener('click', (event) => {
    event.preventDefault();

    open(dialog);
  });

  trigger.addEventListener('keydown', (event) => {
    if (event.which === keyCodes.enter) {
      event.preventDefault();

      open(dialog);
    }
  });

  // close dialog
  dialog.addEventListener('keydown', (event) => {
    if (event.which === keyCodes.escape) {
      close(dialog, trigger);
    }
  });

  dismissTriggers.forEach((dismissTrigger) => {
    const dismissDialog = document.getElementById(dismissTrigger.dataset.dismiss);

    dismissTrigger.addEventListener('click', (event) => {
      event.preventDefault();

      close(dismissDialog, trigger);
    });
  });

  window.addEventListener('click', (event) => {
    if (event.target === dialog) {
      close(dialog, trigger);
    }
  });
});










class Caroussel {


  @param { HTMLElement}element
  @param {Object}options
  @param {Object}options.slidesToscroll
  @param { Object}options.slidesVisible

  constructor (element, options ={}) {
    this.element = element
    this.options = Object.assign({}, {
      slidesToscroll: 1
      slidesVisible: 1
      },options)
      let.children = [].slice.call(element.children)
this.currentItem = 0
      this.root = this.createDivWithClass('carroussel')
      this.container = this.createDivWithClass('carroussel__container')

      this.root.appendChild(this.container)

      this.element.appendChild(this.root)

      this.items = children.map((child)=>{
        let item = this.createDivWitchclass('carroussel__item')
        item.appendChild(child)
        this.container.appendChild(child)
        return item

        })
      this.setStyle()
      this.createNavigation()
  }
setStyle(){
  let ratio =this.items.length / this.options.slidesVisible
  this.container.style.width = (ratio * 100) + "%"
  this.items.forEach(item=>item.style.width = ((100/ this.options.slidesVisible)/ratio)+"%")
}

createNavigation(){
  let nexButton = this.createDivWithClass('carroussel__next')
  let prevButton = this.createDivWithClass('carroussel__prev')
  this.root.appendChild(nexButton)
  this.root.appendChild(prevButton)
  nexButton.addEventListener('click', this.next.bind(this))
  prevButton.addEventListener('click', this.prev.bind(this))
}

next (){
  this.gotoItem(this.currentItem + this.options.slidesToscroll)

}

prev(){
  this.gotoItem(this.currentItem - this.options.slidesToscroll)
}

@param {number} index

gotoItem(index){
  let translatex = index * -100 / this.items.lengh
  this.container.style.transform = translate3d(' + translatex +'%,0,0)'
  this.currentItem = index
}
@param(string) className
@returns (HTMLElement)
let div =document.createElement('div')
root.setAttribute('class',className)
  createDivWithClass (className)
  return div
  {
}
document.addEventListener('DOMContentLoaded',function(){
  slidesToscroll: 3,
  slidesVisible: 3
  })
})
