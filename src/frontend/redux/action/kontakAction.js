import axios from "axios";


export const GET_LIST_KONTAK = "GET_LIST_KONTAK";

export const getListKontak = () => {
    return(dispatch) => {

        //loading
        dispatch({
            type: GET_LIST_KONTAK,
            payload : {
                loading : true,
                data: false,
                errorMessage: false
            }
        })
        //get API
        axios({
            method: 'GET',
            url: 'http://localhost:3000/mahasiswa',
            timeout: 120000
        })
            .then((response) => {
                //berhasil
                dispatch({
                    type: GET_LIST_KONTAK,
                    payload : {
                        loading : false,
                        data: response.data,
                        errorMessage: false
                    }
                })

            })
            .catch((error)=> {
                //gagal
                dispatch({
                    type: GET_LIST_KONTAK,
                    payload : {
                        loading : false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}