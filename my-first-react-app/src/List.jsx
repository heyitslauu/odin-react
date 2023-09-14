export const Animals = () => {
    const animals = ['Cat', 'Dog', 'Duck', 'Geese'];
    return (
        <>
            <h1>Animals List</h1>
            <ul>
                {
                    animals.map((animal) => {
                        return <li key={animal}>{animal}</li>;
                    })
                }
            </ul>
        </>
    )
}

export const Brands = () => {
    const brands = ['Nike', 'Adidas', 'Vans', 'Sperry'];
    const brandList = brands.map((brand) => <li key={brand}>{brand}</li>)

    return (
        <>
            <h1>Brand List</h1>
            <ul>
                {brandList}
            </ul>
        </>
    )
}