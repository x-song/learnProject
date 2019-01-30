import  module from '../../module'
export  default  {
   getMenu(){
     const menu_data = [];
     for (let item in module) {
       menu_data.push(module[item].title)
     }
     console.log(menu_data)
   }
}
