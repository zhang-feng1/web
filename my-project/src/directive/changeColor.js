import Vue from 'vue'
//自定义指令
//binding.arg在指令插入时写入arg属性，可以在指令的函数中进行判断操作，
//这样可以提高指令的复用率，共有属性可以合写，每个节点
const changeColor=Vue.directive('changeColor',function (el,binding) {

  // console.log(Math.random().toString(16))
  el.style.color='#'+Math.random().toString(16).slice(2,8);
  el.style.fontSize=binding.value.font;
  if(binding.arg==='ita'){
    el.style.fontStyle='italic'
  }

});
const upper=Vue.filter('upper',function (v) {
  return v.toUpperCase();
});


export {changeColor,upper}
