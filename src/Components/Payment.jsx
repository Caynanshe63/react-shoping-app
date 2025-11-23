import { useState } from "react";

const Payment = () => {

  const initalPayment ={
    evc : false,
    zaad : false ,
    sahal : false
  }
  const [paymentMethod, setPaymentMethod] = useState(initalPayment);

  const [phone, setPhone] = useState("");

  const SelectMethod = (method) =>{
    setPaymentMethod({
      evc : false,
      zaad : false ,
      sahal : false,
      [method] : true,

    });
  }

  const handlePhone = (event) =>{
    setPhone(event.target.value);
  }

  const handleSubmit =(event)=>{
    event.preventDefault();
    if(phone.length>0){
      alert("Payment Success");
    }else{
      alert("Invalid Phone");
    }
    
  }
  

  return (
    <div>
      <h2>Pay With</h2>
      <div className="payment-cards">
        <div onClick={() => SelectMethod("zaad")} className={`payment-card ${paymentMethod.zaad ? "selected" : ""}`} >
            <h3>ZAAD Serice</h3>
        </div>
      </div>
      <div className="payment-cards">
        <div onClick={() => SelectMethod("evc")} className={`payment-card ${paymentMethod.evc ? "selected" : ""}`}>
            <h3>EVC PLUS</h3>
        </div>
      </div>
      <div className="payment-cards">
        <div onClick={() => SelectMethod("sahal")} className={`payment-card ${paymentMethod.sahal ? "selected" : ""}`}>
            <h3>SAHAL</h3>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handlePhone} placeholder="2526........." className="form-control"/>
        <button className="btn-proceed">Proceed</button>
      </form>
    </div>
  )
}

export default Payment;
