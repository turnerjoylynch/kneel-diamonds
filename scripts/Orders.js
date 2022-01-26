import { getOrders, getMetals, getSizes, getStyles, addCustomOrder } from "./database.js"

const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()





const buildOrderListItem = (order) => { // this function is pulling in the Custom Order data just fine -- but it's only the specified one. The new orders aren't being added to the array.
    
        const foundMetal = metals.find(
            (metal) => {
                return metal.id === order.metalId
            }
        )
        const foundSize = sizes.find(
            (size) => {
                return size.id === order.sizeId
            }
        )
        const foundStyle = styles.find(
            (style) => {
                return style.id === order.styleId
            }
        )
        
    const metalPrice = foundMetal.price
    const sizePrice = foundSize.price
    const stylePrice = foundStyle.price
    
    
    order.price = metalPrice + sizePrice + stylePrice
    return `<li>
        Order #${order.id} was placed on ${order.timestamp} for $${order.price} for someone cool
    </li>`
}

const orders = getOrders()

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
   
    
    const listItems = orders.map(buildOrderListItem)
    let html = "<ul>"

    

    html += listItems.join("")
    html += "</ul>"

    return html
}

