import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { SiGmail } from "react-icons/si";
import { MdEmail } from "react-icons/md";

function ContactPage() {

    {/* Calling THe emailjs service*/}
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_5e161te", //My service ID 
            "template_1e01lwq", //My template ID 
            form.current,
            "ERI23ZUNwlo6qCtu_" , //My public key
        ).then(
            (result) => {
                console.log("Success:", result.text);
                alert("Message sent!");
            },
            (error) => {
                console.log("Error:", error.text);
                alert("Failed to send.");
            }
        );
    };
    {/* Contact form inside a card */}

  return ( 
  <div id="contact" className="flex items-center min-h-screen bg-[#CDC8B8]">
    <img src="/frame2.png" alt="frame2" className="h-[600px] ml-[100px] z-0 relative"/>
    <div className=" flex gap-0.5 items-center -ml-[500px]">
    <div className="bg-[#C0A887] p-8 w-[262px] h-[415px] mx-30 z-10 relative ml-31 mt-0.5">
          <div className="inline-block -mt-[200px]">
               <p className="text-3xl text-black">Contact us</p>
               <hr />
          </div>
         <br /><br />
           <div >
              <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 "> 
                   <fieldset>
                            <label htmlFor="name" className="text-black font-medium "> Full Name: </label>                     
                            <input type="text" name="name" placeholder="Your Name" className="ml-5 text-black bg-[#C0A887] inputoutputText" required />                    
                            <br /><br />                          
                            <label htmlFor="email" className="text-black font-medium " > Email: </label>
                            <input type="email" name="email" placeholder="Your Email" className="ml-5 text-black bg-[#C0A887] inputoutputText" required /> 
                            <br /><br />
                            <label htmlFor="message" className="text-black font-medium " > Message: </label>
                            <br />
                            <textarea name="message" placeholder="Your Message" className="bg-[#C0A887] text-black inputoutputText" required />
                            <br /><br />
                            <div className="text-black rounded-2xl w-20">
                                 <button type="submit" className="ml-[20px]">Send</button>
                            </div>
                   </fieldset>
              </form>
           </div>
           <br /><br />
    </div>
        <div className="font-medium text-black mt-[-40px] pl-5 w-[190px] ml-[100px]">
            <p className="text-5xl w-[170px]"> Site Map </p>
            <hr />
            <br /><br />
            <p className="text-3xl">Home</p>
            <br />
            <p className="w-[250px] text-3xl">Cryptography Algorithms</p>
             <br />
            <p className="text-3xl">Contact</p>
        </div>
        <div className="mr-[-20px] mt-[-60px]">
            <img src="/logo.png" alt="logo" className="w-70 ml-60" />
            <div className="flex gap-0.25">
            <img src="/ink.png" alt="ink" className="w-[77px] h-[78px] mt-5 ml-[120px]"/>
            <p className="text-black text-[64px] ml-[70px]">Kryptosbase</p>
            </div>
            <div className="flex gap-1 ">
            <div className="flex gap-1 text-3xl text-black items-center ml-[300px] ">
                           {/* Email */}
                            <a href="mailto:ahlam.ouldkhesal@gmail.com">
                             <MdEmail />
                           </a>
            </div>
            <p className="text-0.25xl text-black ml-5"> kryptosbase@gmail.com</p>
            </div>
        </div>
    </div>
    </div>
);
}

export default ContactPage;
