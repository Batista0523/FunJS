/* In your breakout groups, work together to design the class structure for your assigned scenario, define properties and methods, and ensure that they make sense within the context of your room’s title.
At least 4 properties (attributes) that are relevant to the class.
Two methods (functions) that perform specific actions or calculations related to the class.
One of the methods should interact with another instance of the class.
Each breakout room has a specific scenario based on its title */



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
