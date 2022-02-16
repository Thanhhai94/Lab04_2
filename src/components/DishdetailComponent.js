import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

    

    function RenderList({comments}){
        return(    
            <div className="col-12 col-md-5 m-1">
              <Card>
                  <CardBody>
                    <CardTitle style={{fontWeight: "600"}}>Comment</CardTitle>
                    <CardText>
                        {comments.map(el => 
                            <div key={el.id}>
                            <p>{el.comment}</p>
                            <p>--{el.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(el.date)))}</p>
                            </div>
                        )}
                    </CardText>
                  </CardBody>
              </Card>
            </div>
          );
    }     
    function RenderDish({dishSelect}) {
        return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                         <CardImg top src={dishSelect.image} alt={dishSelect.name} />
                        <CardBody>
                        <CardTitle style={{fontWeight: "600"}}>{dishSelect.name}</CardTitle>
                        <CardText>{dishSelect.description}</CardText>
                        </CardBody>
                        </Card>
                </div>
            )}

    const Dishdetail = (props) => {
        if(props.selectedDish != null){
            return(
                <div className='container'>
                <div className='row'>
                    
                <RenderDish dishSelect={props.selectedDish} />
                <RenderList comments={props.selectedDish.comments} />
                    
                </div>
                </div>
            )}
        return(<div></div>)
    }


export default Dishdetail

