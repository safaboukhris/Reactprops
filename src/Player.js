import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
    {/*inline styling */}
    const styleObject={
        textAlign: "center",
        fontSize : "15px",
        padding :"20px",
        justifyContent: 'space-evenly',
    }

return (
    <div  className="col-md-4 mb-4" style={styleObject} >
    {/*import of the card and displaying all attribute */}
        <Card style={{ width: '18rem' , borderRadius: "180px" , border:"1px solid #ccc" }}>
            <Card.Img variant="top" src={image} style={{ width:"100%" , height:"300px", borderRadius: "180px" }} />
            <Card.Body>
                <Card.Title style={{color:'rgb(65,2,0)' , fontWeight:' bold'}}>{name}</Card.Title>
                <Card.Text>
                    <span style={{color:'rgb(47, 79, 79)' }}>Nationality:</span> {nationality}<br />
                    <span style={{ color:'rgb(47, 79, 79)' }}>Age:</span> {age}<br />
                    <span style={{ color:'rgb(47, 79, 79)'}}>Team:</span> {team}<br />
                    <span style={{ color:'rgb(47, 79, 79)'}}>Jersey Number:</span> {jerseyNumber}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
)
}

        {/* Set default props */}
Player.defaultProps={
    name: "Kylian Mbappé" ,
    team:  "Paris Saint-Germain Football Club"  , 
    nationality: "french",
    jerseyNumber:  7,
    age: 24,
    image: "mbappe.jfif"
};


export default Player
