
import './App.css'

import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'


function App() {
 

  return (
   
 
 <div className="flex bg-green-100 m-auto h-screen w-full  font-karla ">
    <div className="grid w-full max-w-lg m-auto bg-white  p-5  gap-1.5 text-left">
      <h1 className="font-bold text-[30px]">Contact Us</h1>
   <div className="grid grid-cols-2 gap-5  text-left">
    <div>
     <Label htmlFor="First name">First Name <span className="text-[#0c7d69]">*</span></Label>
    <Input type="text" id="name" name='name' placeholder="First Name" required /> 
    </div>
    <div>
    <Label htmlFor="Last name">Last Name <span className="text-[#0c7d69]">*</span></Label>
    <Input type="text" id="name" name='name' placeholder="Last Name" required/> 
    </div>
    </div>
    <div>
    <Label htmlFor="email">Email <span className="text-[#0c7d69]">*</span></Label>
    <Input type="email" id="email" placeholder="Email" required />
    </div>
    <div className=" mt-3 text-left">Query Type <span className="text-[#0c7d69]">*</span></div>
         <div className=" flex flex-col sm:flex-row gap-4 "> 
         {/* General */}
             <div className="flex border border-gray-300 rounded-lg w-full p-3 items-center">
                            <Input type="radio" name="queryType" value="General Enquiry" className=" radio-input mr-2 w-4 h-4"/>
                            <Label className="flex item-center">General Enquiry </Label>
                    </div>
                          {/*Support  */}
                        <div className="flex  border border-gray-300 rounded-lg w-full p-3 items-center">
                        <Input type="radio" id="support request" name="queryType" value="General Enquiry" className=" radio-input mr-2 w-4 h-4" />
                        <Label htmlFor="Request">Support Request</Label>
                    </div>
                </div>
                <div>
                <Label htmlFor="message " className="">Message <span className="text-[#0c7d69]">*</span></Label>
                    <Textarea typeof="textarea" id="message" placeholder="message"  required/>
                    </div>
                    <div className="flex items-center mt-6 ">
                   
                   <Input type="checkbox" className="input-checkbox w-[16px] h-[16px] mr-5 font-medium" required/>
                   <Label htmlFor="checkBox">I consent to being contacted by the team <span className="text-[#0c7d69]">*</span></Label>
               </div>
                {/* submit button */}
                <button type="submit" className="mt-6 w-full p-5 bg-[#0c7d69] text-white text-[15px] rounded-lg">Submit</button>

  </div>
  

     </div> 

     
   )
 }
 export default App
       
     
  


