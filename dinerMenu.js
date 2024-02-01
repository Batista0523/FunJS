


class DinnerMenu {
    constructor(dishName, cuisineType, price, availability) {
        this.dishName = dishName;
        this.cuisineType = cuisineType;
        this.price = price;
        this.availability = availability;
    }

    orderItem(quantity) {
        if (this.availability) {
            console.log(`Ordered ${quantity} ${this.dishName}(s) for $${this.price * quantity}.`);
           
        } else {
            console.log(`Sorry, ${this.dishName} is currently not available.`);
        }
    }

    setAvailability(isAvailable) {
        this.availability = isAvailable;
        if (isAvailable) {
            console.log(`${this.dishName} is now available.`);
        } else {
            console.log(`${this.dishName} is no longer available.`);
        }
    }
}


const dish = new DinnerMenu("Spaghetti Bolognese", "Italian", 12.99, true);

// Method 1: Order the menu item
dish.orderItem(2); 

// Method 2: Set the availability of the menu item
dish.setAvailability(false); 
