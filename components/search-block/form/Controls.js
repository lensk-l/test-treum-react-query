import CustomSelect from "./CustomSelect";import React, {useEffect, useState} from 'react';import styled from "styled-components";import {components} from "react-select";import {useSelector} from "react-redux";import {useRouter} from "next/router";import Head from "next/head";const InputGroup = styled.div`  display: flex;  flex-direction: row;  justify-content: space-around;  padding: 0 92px 0;  margin-top: 24px;  margin-bottom: 36px;`;const SearchInput = styled.input.attrs({    type: 'search',    placeholder: 'Сумма до, грн',})`  width: 253px;  height: 48px;  font: 400 16px/28px var(--font-Noto-sans);  border: var(--border);  color: var(--light-gray);  border-radius: var(--radii);  padding-left: 12px;  margin-right: 8px;  &:focus-within {    border: 2px solid var(--primary-blue-600);  }  &:focus {    outline: none;  }`;const Button = styled.button`  width: 253px;  height: 48px;  background-color: var(--secondaty-green);  color: white;  letter-spacing: 0.1em;  text-transform: uppercase;  font-feature-settings: 'pnum' on, 'lnum' on;  border: none;  border-radius: var(--radii);  margin-left: 16px;`;const IconImg = styled.img``const DropdownIndicator = props => {    return (        <components.DropdownIndicator {...props}>            <IconImg src='/down.svg' alt='down'/>        </components.DropdownIndicator>    );};const Controls = ({onSearch, querySearch, text}) => {    let {query} = useRouter();    const [searchPrice, setSearchPrice] = useState('');    const [category, setCategory] = useState([]);    const [defaultVal, setDefVal] = useState([])     const products = useSelector(state => state.products.productsAll)    const options = [];    useEffect(() => {        let allCategories = [];        products.map(item => {            if (!allCategories.includes(item.category)) {                allCategories.push(item.category)            }        });        setCategory(allCategories);    }, []);    category.map(item => {        options.push({value: item, label: item})    })    useEffect(() => {            if (query.category) {                setDefVal({value: query.category, label: query.category})            }            setSearchPrice(query.amount);            querySearch(query.amount, query.category);    }, [query.amount, query.category])    let searchVal = defaultVal?.value || ''    return (        <>            <Head>                {searchVal === 'КБТ' && <>                    <title>Крупна побутова техніка</title>                    <meta                        name="description"                        content="Тільки в нашому магазини великий вибір крупної побутової технікі"                    />                </>                }                {searchVal === 'МБТ' && <>                    <title>Мала побутова техніка</title>                    <meta                        name="description"                        content="Тільки в нашому магазини великий вибір малої побутової технікі"                    />                </>                }                {!!searchVal === false && <>                    <title>Побутова техніка</title>                    <meta                        name="description"                        content="Тільки в нашому магазини великий вибір побутової технікі"                    />                </>                }            </Head>            <InputGroup>                <SearchInput type='number' name='price'                             value={searchPrice}                             onChange={(e) => setSearchPrice(e.target.value)}                />                {                    <CustomSelect                        text={text.category}                        value={defaultVal}                        id='customSelect'                        instanceId='customSelect'                        placeholder={text.category}                        isClearable={true}                        options={options}                        components={{IndicatorSeparator: () => null, DropdownIndicator}}                        onChange={setDefVal}                    />                }                <Button onClick={() => onSearch(searchPrice, searchVal)}>{text.buttonCheck}</Button>            </InputGroup>        </>    );};export default Controls;