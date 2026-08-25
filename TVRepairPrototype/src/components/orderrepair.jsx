import { Modal} from 'bootstrap'
import "./orderrepair.css";
import { useQuery } from '@tanstack/react-query';
import { useUserAuth } from "../context/authenticationcontext";
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function OrderRepair()
{
    const [brand, setBrand] = useState();
    const [area, setArea] = useState();
    const [issuedescription, setIssueDesc] = useState();
    const { user } = useUserAuth();
    const [photo, setPhoto] = useState();
    const navigate = useNavigate();

    async function SaveData(event)
    {
        event.preventDefault()

        //assing value
        const formData = new FormData();
        formData.set("UserName", user.email);
        formData.set("Brand", brand);
        formData.set("Area", area);
        formData.set("IssueDescription",issuedescription);
        formData.set("Photo",photo);

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
        navigate("/check-status")

        } else {
        const error = await response.text()
        console.error(error)
        }
    }
    
    return (
    <div className="">  
      <div className="container-fluid row justify-content-end">

        <div className="col-8 container p-5 border border-2 left-side-tv">
           <h1>TV Broken?</h1>
           <h1>We Repair, <span className="text-success">You Relax</span></h1>
           <p>Take photo and send to us</p>
           <p>Assign to technician under 5 minute</p>
           <p>technician will pickup your tv at your home</p>

           <div className="d-flex justify-content-end">
            <img src="../src/assets/tvpicturemainpage.png" width={600} height={400}></img>
           </div>
        </div>

        <div className="col-4 border border-2 p-5 right-side-orderform">
            <form onSubmit={SaveData}> 
            <p><b>What's wrong with your TV?</b></p>

            <p>TV Brand?</p>
            {/* <input className="form-control" type="text" value={brand} onChange={(event)=>setBrand(event.target.value)}></input> */}
            <select className='form-select mb-4' value={brand} onChange={(event)=> setBrand(event.target.value)}>
                <option value="Samsung">Samsung</option>
                <option value="Sony">Sony</option>
                <option value="Hitachi">Hitachi</option>
            </select>

            <p>Issue Description</p>
            <input className="form-control" type="text" value={issuedescription} onChange={(event)=> setIssueDesc(event.target.value)}></input>

            <p>Area</p>
            {/* <input className="form-control" type="text" value={area} onChange={(event)=>setArea(event.target.value)}></input> */}
            <select className="form-select mb-4" value={area} onChange={(event)=> setArea(event.target.value)}>
                <option value="Kuala Lumpur">Kuala Lumpur</option>
                <option value="Johor">Johor</option>
                <option value="Selangor">Selangor</option>
                <option value="Cyberjaya">Cyberjaya</option>
            </select>

            <p>Add Photo</p>
            <input className="form-control" name='Photo' type='file' accept='image/*' className="form-control" onChange={(event)=> setPhoto(event.target.files[0])}></input>
            <br></br>
            <button className="bg-success text-light p-2 m-2 align-items-center">Submit Order</button>

        </form>
        </div>

        <div className="m-2 p-4 gap-2 justify-content-center d-flex">
            <div className="row g-5 w-100">
                <div className="col-3">
                    Secure & Safe
                </div>
                <div className="col-3">
                    Live Updates
                </div>
                <div className="col-3">
                    Transparent Pricing
                </div>
                <div className="col-3">
                    Support
                </div>

            </div>
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
