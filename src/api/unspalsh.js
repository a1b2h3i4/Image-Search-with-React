import Axios from 'axios';
export default Axios.create({
    baseURL: 'https://api.unsplash.com',
        headers:{
            Authorization:'Client-ID a2f6d01c93faeb7cfee58eaccffeba152b5eea0bdd4477fa65df8397fdc7f89c'
        }
    }
);