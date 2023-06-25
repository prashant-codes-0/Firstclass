
function Header(props) {

    console.log("data",props)


    return(

        <>
        <h1> i am a header</h1>
        {props.name}
        {props.id}
        {props.title}
    </>




    )
}

export default Header;