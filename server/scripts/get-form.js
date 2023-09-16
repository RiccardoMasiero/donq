import axios from 'axios';

async function call(id) {
    const url = id ? `http://localhost:8000/forms/${id}` : 'http://localhost:8000/forms'
    let res = await axios.get(url)
    console.log(res.status, res.data);

}

call(process.argv[2])