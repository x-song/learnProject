import  module from '../../module'
export  default  {
   getMenu(){
     //test
     return module.menuList.map(item=>item.title)
   }
}
