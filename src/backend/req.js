import axios from 'axios';
import React from 'react'


const Req = () => {

    //GET
    // axios.get('http://localhost:3000/mahasiswa')
    // .then(res => {
    //     console.log(res.data);
    // })
    // .catch(error => {
    //     console.log(error);
    // });

    //POST
    //Data yang di masukan. :
    // const newDosen = {
    // "id": 4,
    // "nim": "10115079",
    // "nama": "Tati Tarwati",
    // "alamat": "Bandung",
    // "jurusan": "Kecerdasan Buatan"
    // }

   
    // axios.post('http://localhost:3000/mahasiswa',newDosen)
    // .then(res => {
    //     console.log(res.data);
    // })
    // .catch(error => {
    //     console.log(error);
    // });


    //PUT
    // const newDosen = {
    //     "id": 4,
    //     "nim": "10115080",
    //     "nama": "Tati Tarwati 2",
    //     "alamat": "Bandung",
    //     "jurusan": "Kecerdasan Buatan"
    //     }
    
       
    //     axios.put('http://localhost:3000/mahasiswa/4',newDosen)
    //     .then(res => {
    //         console.log(res.data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });

    //PATCH

    const PatchDosen = {
      "id": 4,
      "nim": "10115080",
      "nama": "Tati Tarwati 2",
      "alamat": "Bandung",
      "jurusan": "Kecerdasan Buatan"
      }
  
     
      axios.patch('http://localhost:3000/mahasiswa/3',PatchDosen)
      .then(res => {
          console.log(res.data);
      })
      .catch(error => {
          console.log(error);
      });
    

    //DELETE

    // axios.delete('http://localhost:3000/mahasiswa/4')
    // .then(res => {
    //     console.log(res.data);
    // })
    // .catch(error => {
    //     console.log(error);
    // });


  return (
    <div>
    </div>
  )
}

export default Req

