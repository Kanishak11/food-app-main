import React ,{useState,useEffect} from "react";
import './Footer.css'
import { Link } from "react-router-dom";
import {Image} from 'semantic-ui-react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import axios from "axios";
import { useParams } from "react-router";
const FooterPagePro = () => {
  const {id} = useParams()
  const [data ,setData] = useState({name:'' ,address : {} ,logo:{}})
  useEffect(()=>{
    axios.get(`api/customer/restaurant/${id}`).then(res =>{setData(res.data)}).catch(err => {console.log(err)})
  },[])
  return (
    <section>
    <MDBFooter color="mdb-color" style ={{"backgroundColor":"#C7C7C7"}} className="font-small pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
            {data.name}
            </h6>
            <p>
              {data.address.line1}  , {data.address.line2}
            </p>
            <Image src={data?.logo?.mainUrl} size='tiny' />
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
            <p>
              <Link to="#">Home</Link>
            </p>
            <p>
              <Link to="#">About</Link>
            </p>
            <p>
              <Link to="#">BrandFlow</Link>
            </p>
            <p>
              <Link to="#">Other Link</Link>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <p>
              <Link to="#">Your Account</Link>
            </p>
            <p>
              <Link to="#">Become an Affiliate</Link>
            </p>
            <p>
              <Link to="#">Shipping Rates</Link>
            </p>
            <p>
              <Link to="#">Help</Link>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p>
              <i className="fa fa-home mr-3" /> {data?.address?.city}
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> {data?.email}
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> 999999999
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            <p className="text-center text-md-left grey-text">
              &copy; Copyright:{" "}
              <Link to="/"> Times Internet </Link>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
    </section>
  );
}

export default FooterPagePro;