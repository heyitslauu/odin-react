/* eslint-disable react/prop-types */

export const ListItem = (props) => {
    
    return !props.animals.startsWith('C') ? <li>{props.animals}</li> : null
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
