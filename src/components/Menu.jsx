import * as React from 'react';
// import { TreeView } from '@mui/lab/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { useEffect } from "react"
import { fetchCategory } from '../fetchers/fetchCategory'
import { useDispatch, useSelector } from "react-redux"
import { setShop } from "../store/slice/shop";
import ItemCategory from './ItemCategory';
import { LinkBase } from './LinkBase';


export default function RichObjectTreeView() {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchCategory().then((res) => {
            dispatch(setShop(res))
        }
        )

    }, [])

    const val = useSelector((state) => state.shop.products);
    console.log(val);

    const renderTree = (nodes) => (
        <LinkBase to={`/${nodes.id}`} >

            <TreeItem key={nodes.id} nodeId={nodes.id} label={<ItemCategory nodes={nodes} />}>
                {Array.isArray(nodes.childCategories)
                    ? nodes.childCategories.map((node) => renderTree(node))
                    : null}
            </TreeItem></LinkBase>
    );

    return (
        <TreeView
            aria-label="rich object"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpanded={['root']}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ height: 400, flexGrow: 100, maxWidth: 400, marginTop: 2, marginLeft: 10, overflow: 'inherit' }}
        >
            <TreeItem nodeId="1" label="Категории">
                {val.map((item) => renderTree(item))}
            </TreeItem></TreeView>

    );
}
