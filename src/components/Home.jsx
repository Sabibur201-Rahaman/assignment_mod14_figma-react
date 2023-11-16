
import React, { useState, useEffect } from 'react';
import './css/Home.css'
function Home() {
    // Work List
    const [workList, setWorkList] = useState([
        "Task 1: Complete project proposal",
        "Task 2: Design user interface",
        "Task 3: Implement backend functionality",
    ]);

    // Counter
    const [counterValue, setCounterValue] = useState(0);

    useEffect(() => {
        // Simulate a counter increment every second
        const interval = setInterval(() => {
            setCounterValue(prevValue => prevValue + 1);
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    // Featured Product
    const featuredProduct = {
        name: "Featured Widget",
        description: "An amazing widget with advanced features.",
        price: 19.99,
    };

    return (
        <div className="container">
            <div id="workList">
                <h2>Work List</h2>
                <ul>
                    {workList.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>
            <div id="counter">
                <h2>Counter</h2>
                <p>Current Count: {counterValue}</p>
            </div>
            <div id="featureProduct">
                <h2>Featured Product</h2>
                <div className="featured-product">
                    <h3>Product Name: {featuredProduct.name}</h3>
                    <p>Description: {featuredProduct.description}</p>
                    <p>Price: ${featuredProduct.price.toFixed(2)}</p>
                    <button onClick={() => alert("Product purchased! Thank you for shopping with us.")}>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;


