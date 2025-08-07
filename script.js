function Name(){
    let arr = [1,2,3,4,5]
    let obj = {
        Name:"Tej",
        Age:24
    }

    const cars = ["BMW","AUDI","NEXON","SUZUKI","ALTROZ"]   // elemenents in an array/list should assigned with unique keys

                                                            // we can make use of index to create unique keys and "key" is not an attribute, it is a react element

    return(<>
    <h1>Arrays and Objects </h1>
    <h2>{arr}</h2>
    {arr.map((num,idx) =><h2 key={idx}>{num}</h2> )}
    <h2>Cars list</h2>
    <ul>
        {cars.map((ele,index) => <li key={index}>{ele}</li>)}    
    </ul>

    <h2>{obj.Name}</h2>  
    </>)             // we cannot access objects in jsx because objects are not valid as a react child
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<Name/>)

