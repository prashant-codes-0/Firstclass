
import Sdata from "./Sdata";
function Body() {


    return(

        <>
        <h1> i am a body</h1>
        {
            Sdata.map(function(curval){
           return (
            <>
             {curval.title}
             {curval.id}
             {curval.name}

            </>
           )

            })
        }

    </>




    )
}

export default Body;