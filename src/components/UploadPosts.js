import React, {useState} from 'react';
import * as XLSX from 'xlsx';


function UploadPosts(){
    const [items, setItems] = useState([]);

//   console.log(result)

    const readExcel = (file) => {

        const promise = new Promise((resolve, reject)=> {

            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file)

            fileReader.onload = (e) => {
                const bufferArray = e.target.result;

                const wb = XLSX.read(bufferArray, {type:'buffer'});

                const wsname = wb.SheetNames[0];

                const ws = wb.Sheets[wsname];

                const data = XLSX.utils.sheet_to_json(ws)

                resolve(data);

            };

            fileReader.onerror= (error) => {
                reject(error);
                
            };

        });

        promise.then((d) => {
            // This is where you show data- connect to DB
            console.log(d)
            // setItems(d)

        })
    };




    return(
        <>
            <section className="about section bd-container" id="about">
                <h1>Upload</h1>
            
            <div>
                <input
                type = "file"
                onChange = {(e) => {
                    const file = e.target.files[0];
                    readExcel(file);
                }}
                />

            <table class="table">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Professor</th>
                <th scope="col">School</th>
                <th scope="col">Department</th>
                {/* <th scope="col">IsOnline</th> */}
                <th scope="col">Location</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map((d) => (
                        <tr key = {d.Item}>
                            <td>{d.name}</td>
                            <td>{d.professor}</td>
                            <td>{d.school}</td>
                            <td>{d.department}</td>
                            {/* <td>{d.isOnline}</td> */}
                            <td>{d.location}</td>
                            {/* <td>Otto</td>
                            <td>@mdo</td> */}
                        </tr>
                    ))
                }
              
            </tbody>
            </table>
            </div>
            </section>
        </>
    )
}

export default UploadPosts;
