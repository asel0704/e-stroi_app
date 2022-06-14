import axios from "axios";

export function fetchProducts({ id }) {
    return axios
        .get(`http://e-stroi.kz:8082/catalog/client/item?categoryId=${id}`,)
        .then((res) => {
            return res.data;
        });
}