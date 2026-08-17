import { Modal} from 'bootstrap'
import "./orderrepair.css";
import { useQuery } from '@tanstack/react-query';
import { useUserAuth } from "../context/authenticationcontext";
import { useState } from 'react';

export default function OrderRepair()
{
    const [brand, setBrand] = useState();
    const [area, setArea] = useState();
    const [issuedescription, setIssueDesc] = useState();
    const { user } = useUserAuth();

    async function SaveData(event)
    {
        event.preventDefault()

        //assing value
        const formData = new FormData();
        formData.set("UserName", user.email);
        formData.set("Brand", brand);
        formData.set("Area", area);
        formData.set("IssueDescription",issuedescription);



        const response = await fetch(
            'http://localhost:5070/api/TVRepair/AddRepairOrder',
            {
                method : 'POST',
                credentials : "include",
                body : formData
            }
        )

        if (response.ok) {

        const modalElement = document.getElementById('successModal')
        Modal.getOrCreateInstance(modalElement).show()
        } else {
        const error = await response.text()
        console.error(error)
        }
    }

    
    return (
    <div className="bg-info">  
      <div className="container-fluid row justify-content-end text-bg-success">

        <div className="col-8 container p-5 border border-2 left-side-tv bg-success">
           <h1 >TV Broken?</h1>
           <p>Take photo and send to us</p>
           <p>Assign to technician under 5 minute and technician will pickup your tv at your home</p>
        </div>


        <div className="col-4 border border-2 p-5">
            <form onSubmit={SaveData}> 
            <p><b>What's wrong with your TV?</b></p>

            {/* <p>TV Brand?</p>
            <input name='Brand' type='text' className="form-control"></input>

            <p>Issue description</p>
            <input name='IssueDescription' type='text' className="form-control"></input>

            <p>Area</p>
            <input name='Area' type='text' className="form-control"></input>

            <p>Add Photo</p>
            <input name='Photo' type='file' accept='image/*' className="form-control"></input>
             */}
            <p>TV Brand?</p>
            <input type="text" value={brand} onChange={(event)=>setBrand(event.target.value)}></input>

            <p>Issue Description</p>
            <input type="text" value={issuedescription} onChange={(event)=> setIssueDesc(event.target.value)}></input>

            <p>Area</p>
            <input type="text" value={area} onChange={(event)=>setArea(event.target.value)}></input>
            
            <p>Add Photo</p>
            <input name='Photo' type='file' accept='image/*' className="form-control"></input>



            <br></br>
            <br></br>
            <button>Submit Order</button>

        </form>
        </div>

        
        <div className="modal fade" id="successModal" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-title">
                    Order submitted
                </div>

                <div className="modal-body">
                    Successfully submitted
                </div>

            </div>

        </div>
        </div>

    </div>
    </div>
    )
}