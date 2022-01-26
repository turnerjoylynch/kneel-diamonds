import { getCurrentOrder, getStyles, setStyle } from "./database.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "styles") {
            window.alert(`User chose style ${event.target.value}`)
        }
    }
)

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
        }
    }
)

export const JewelryStyles = () => {
    const currentOrder = getCurrentOrder()
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(itemStyle => {
        return `<li>
            <input type="radio" name="styles" value="${itemStyle.id}" /> ${itemStyle.style}
        </li>`
    })

    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}

