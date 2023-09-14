/* eslint-disable react/prop-types */

export const ListItem = (props) => {
    return <li>{props.animals}</li>
}


export const List = (props) => {
    return (
        <ul>
            {
                
                props.animals.map((animal) => {
                    return <ListItem key={animal} animals={animal}/>
                })
            }
        </ul>
    )
}
