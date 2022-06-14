import React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom'
import { fetchProducts } from "../fetchers/fetchProducts"
import NotFoundPage from './NotFoundPage'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#F9E79F',
    height: '40px',
    color: theme.palette.text.primary,
}));

const ProductPages = () => {
    const { id } = useParams()
    // console.log(useParams());
    const [product, setProduct] = React.useState([])


    React.useEffect(() => {
        fetchProducts({ id }).then(res => {
            setProduct(res)
        })
    }, [id])
    console.log(product.content);

    return (
        <div style={{ marginLeft: "550px", marginBottom: '500px' }}>{
            product.content == false ? <NotFoundPage message={"Product not found"} /> :
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ marginTop: '-400px', marginRight: '190px' }}>
                        {Array.from(product.content).map((item, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index} >
                                <Item style={{
                                    textTransform: 'lowercase',
                                    textAlign: 'justify',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    width: '250px',
                                    }}>{item.name}</Item>
                            </Grid>
                        ))}
                    </Grid>
                    </Box>
        }</div>
    )
}

export default ProductPages