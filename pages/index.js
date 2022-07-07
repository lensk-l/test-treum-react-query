import SearchBlock from "../components/search-block/SearchBlock";import ProductsList from "../components/products-list/ProductsList";import {useRouter} from "next/router";import Nav from "../components/nav/Nav";import {useQuery} from "react-query";import {ProductsService} from "../app/servises/products.service";import Preload from "../components/preload/Preload";export async function getServerSideProps() {    const productsAll = await ProductsService.getAll();    return {props: {productsAll}}}const Index = (props) => {    const router = useRouter();    const getQuery = (router) => {        let queryParams = '?'        if (router.query.amount) {            queryParams = queryParams.concat('amount=').concat(router.query.amount)        }        if (router.query.category) {            queryParams = queryParams.concat('&&category=').concat(router.query.category)        }        return queryParams;    }    const {data, isLoading} = useQuery(        ['products', getQuery(router)],        () => ProductsService.getAllByParams(getQuery(router)),        {            onError: () => console.log('error')        });    const handleSearch = (price, category) => {        const query = {};        if (price) {            query['amount'] = price        }        if (category) {            query['category'] = category        }        router.push({                pathname: '/',                query: query            },            undefined, {shallow: true}        )    }    console.log(data)    return (        <>            <Nav/>            {isLoading                ? (<Preload/>)                : (<> <SearchBlock onSearch={handleSearch} products={props.productsAll}/>                    <ProductsList products={data}/></>)            }        </>    )}export default Index;