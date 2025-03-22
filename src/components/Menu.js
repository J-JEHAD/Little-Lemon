import React from "react";
import Swal from "sweetalert2";

import img1 from "../images/greek salad.jpg"
import img2 from "../images/product-2.jpg"
import img3 from "../images/product-8.jpg"

const Menu = () => {
    const handleOrder = (id) => {
        Swal.fire({
            title: "Order Now",
            icon: "question",
            iconHtml: "",
            confirmButtonText: "Yes",
            cancelButtonText: "No",
            showCancelButton: true,
            showCloseButton: true
          });
    }

    const recipes = [
        { 
          id: 1,
          title: "Greek salad",
          price: 12.99,
          image: img1,
          description:
            "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons",
        },
        {
          id: 2,
          title: "Pineapple",
          price: 5.99,
          image: img2,
          description:
            "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        },
        {
          id: 3,
          title: "Panana",
          price: 4.78,
          image: img3,
          description:
            "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        },
      
      ];

    return (
        <div className="menu-container">
            <div className="menu-header">
                <h2>This week special</h2>
                <button>Order Menu</button>
            </div>

            <div className="cards">
                {
                    recipes.map(recipe => <div key={recipe.id} className="menu-items">
                        <img src={recipe.image} alt=''/>
                        <div className="menu-content">
                            <div className="heading">
                                <h2>{recipe.title}</h2>
                                <p>{recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className="orderbtn" onClick={() => handleOrder(recipe.id)}>Order Now</button>
                        </div>

                    </div>)
                }
            </div>
        </div>

    )
}

export default Menu;