import  module from '../../module'
export  default  {
   getMenu(){
     return module.menuList.map(item=>item.title)
   }
}
