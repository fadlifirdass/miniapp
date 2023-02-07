const axios = require ('axios');


const update = {
    "name": "Walter White",
    "username": "Heisenberg"
}

const data = {
    "name": "John Doe",
    "username": "johndoe",
    "email": "johndoe@example.com"
};



const getUsers = async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        res.json(response.data)
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

const createUser = async (req,res) => {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', data);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }

};

const updateUser = async (req,res) => {
    try {
        const { id } = req.params;
        const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, update);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }

}

const updateData = async (req,res) => {
    try {
        const { id } = req.params;
        const response = await axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`, dataUpdate);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }

}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        if(response){
            res.status(200).json({msg: "User Deleted"});
        }
        
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

const dataUpdate = {
    "name": "admin",
    "username": "adminode",
    "email": "admin@node.com",
    "address": {
        "street": "123 Main js.",
        "suite": "Apt. 10",
        "city": "admin town",
        "zipcode": "12345",
        "geo": {
            "lat": "37.7749",
            "lng": "-122.4194"
        }
    },
    "phone": "555-555-5555",
    "website": "admin.com",
    "company": {
        "name": "admin  Co.",
        "catchPhrase": "Where quality meets affordability.",
        "bs": "We do things right."
    }
};


module.exports = {getUsers, createUser, updateUser, updateData, deleteUser};