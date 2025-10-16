import React from 'react'
import { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import dropdown from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Items/Item'



const ShopCategory = (props) => {
   const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12 </span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown} alt="" />
        </div>
        <div className="shopcategory-products">
          {all_product.map((item,i)=>{
            if(item.category === props.category){
              return <Item key={i} id={item.id} name={item.name} image={item.image}
                new_price={item.new_price} old_price={item.old_price}/>
            }else{
              return null
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default ShopCategory