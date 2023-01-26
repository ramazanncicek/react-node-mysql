import axios from 'axios';
import {useState} from 'react';

const EditBox = () => {
    const [newName,setNewName] = useState('');
    const [oldName,setOldName] = useState(0);
    function editSector(){
        let nameEdit = {};
        if(newName === ""){
            alert('Type a valid new name.')
        }
        else if(oldName === ""){
            alert('Select the name you want to change.')
        }
        else {
            nameEdit.oldCode = Number(oldName);
            nameEdit.newName = newName;
        }
        axios.post('http://localhost:3001/editsectors',nameEdit).then(response => {
        if(response.data === true){
            let a1 = document.getElementsByTagName('option');
            for(let prop of a1){
                let a2 = prop.getAttribute('value');
                if(a2 === oldName){
                    prop.innerText = newName;
                }
            }
        }
        })
    }
    return ( 
        <div>
        <h2>Wanna play around? Go on.</h2>
        <section>
        <select name="" id="edit-select" size='7' value={oldName} onChange={e => setOldName(e.target.value)}>
         <option value="1">Manufacturing</option>
         <option value="110">&nbsp;&nbsp;&nbsp;&nbsp;Construction materials</option>
         <option value="111">&nbsp;&nbsp;&nbsp;&nbsp;Electronics and Optics</option>
         <option value="112">&nbsp;&nbsp;&nbsp;&nbsp;Food and Beverage</option>
         <option value="1121">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bakery &amp; confectionery products</option>
         <option value="1122">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beverages</option>
         <option value="1123">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fish &amp; fish products</option>
         <option value="1124">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meat &amp; meat products</option>
         <option value="1125">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Milk &amp; dairy products</option>
         <option value="1126">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other</option>
         <option value="1127">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sweets &amp; snack food</option>
         <option value="113">&nbsp;&nbsp;&nbsp;&nbsp;Furniture</option>
         <option value="1131">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bathroom/sauna</option>
         <option value="1132">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bedroom</option>
         <option value="1133">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Children’s room</option>
         <option value="1134">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kitchen</option>
         <option value="1135">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Living room</option>
         <option value="1136">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Office</option>
         <option value="1137">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other (Furniture)</option>
         <option value="1138">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outdoor</option>
         <option value="1139">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Project furniture</option>
         <option value="114">&nbsp;&nbsp;&nbsp;&nbsp;Machinery</option>
         <option value="1141">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery components</option>
         <option value="1142">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery equipment/tools</option>
         <option value="1143">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manufacture of machinery</option>
         <option value="1144">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maritime</option>
         <option value="1641">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aluminium and steel workboats</option>
         <option value="1642">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Boat/Yacht building</option>
         <option value="1643">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ship repair and conversion</option>
         <option value="1145">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal structures</option>
         <option value="1146">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other</option>
         <option value="1147">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Repair and maintenance service</option>
         <option value="115">&nbsp;&nbsp;&nbsp;&nbsp;Metalworking</option>
         <option value="1151">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Construction of metal structures</option>
         <option value="1152">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Houses and buildings</option>
         <option value="1153">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal products</option>
         <option value="1154">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal works</option>
         <option value="11541">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CNC-machining</option>
         <option value="11542">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forgings, Fasteners</option>
         <option value="11543">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gas, Plasma, Laser cutting</option>
         <option value="11544">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MIG, TIG, Aluminum welding</option>
         <option value="116">&nbsp;&nbsp;&nbsp;&nbsp;Plastic and Rubber</option>
         <option value="1161">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Packaging</option>
         <option value="1162">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic goods</option>
         <option value="1163">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic processing technology</option>
         <option value="11631">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blowing</option>
         <option value="11632">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Moulding</option>
         <option value="11633">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastics welding and processing</option>
         <option value="1164">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic profiles</option>
         <option value="117">&nbsp;&nbsp;&nbsp;&nbsp;Printing</option>
         <option value="1171">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Advertising</option>
         <option value="1172">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Book/Periodicals printing</option>
         <option value="1173">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Labelling and packaging printing</option>
         <option value="118">&nbsp;&nbsp;&nbsp;&nbsp;Textile and Clothing</option>
         <option value="1181">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clothing</option>
         <option value="1182">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Textile</option>
         <option value="119">&nbsp;&nbsp;&nbsp;&nbsp;Wood</option>
         <option value="1191">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other (Wood)</option>
         <option value="1192">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden building materials</option>
         <option value="1193">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden houses</option>
         <option value="2">Other</option>
         <option value="210">&nbsp;&nbsp;&nbsp;&nbsp;Creative industries</option>
         <option value="211">&nbsp;&nbsp;&nbsp;&nbsp;Energy technology</option>
         <option value="212">&nbsp;&nbsp;&nbsp;&nbsp;Environment</option>
         <option value="3">Service</option>
         <option value="310">&nbsp;&nbsp;&nbsp;&nbsp;Business services</option>
         <option value="311">&nbsp;&nbsp;&nbsp;&nbsp;Engineering</option>
         <option value="312">&nbsp;&nbsp;&nbsp;&nbsp;Information Technology and Telecommunications</option>
         <option value="3121">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data processing, Web portals, E-marketing</option>
         <option value="3122">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Programming, Consultancy</option>
         <option value="3123">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Software, Hardware</option>
         <option value="3124">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Telecommunications</option>
         <option value="313">&nbsp;&nbsp;&nbsp;&nbsp;Tourism</option>
         <option value="314">&nbsp;&nbsp;&nbsp;&nbsp;Translation services</option>
         <option value="315">&nbsp;&nbsp;&nbsp;&nbsp;Transport and Logistics</option>
         <option value="3151">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Air</option>
         <option value="3152">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rail</option>
         <option value="3153">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Road</option>
         <option value="3154">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Water</option>
        </select>
        </section>
            <input type="text" name="new-name" value={newName} placeholder="Type the new name..." onChange={e=> setNewName(e.target.value)} />
            <button onClick={editSector}>Save New Name</button>
        </div>
     );
}
 
export default EditBox;