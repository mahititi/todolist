# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
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
  }
}
document.addEventListener('DOMContentLoaded',function(){
  slidesToscroll: 1,
  slidesVisible: 1
  })
})
