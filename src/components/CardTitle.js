import React from "react"
import "./CardTitle.css"


function CardTitle() {
    return ( 
        <div className="card text-center test">
            
                <img src="http://placehold.it/500x325" className="card-img-top" alt=""></img>
      
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>

            </div>
            <div className="card-footer text-muted">
                <a href="#" class="btn btn-primary">Find Out More!</a>
            </div>
        </div>
 
    );
}







export default  CardTitle
                
                /*
                
                
<div class="card">
                        <img src="..." class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
  </div>

                        */