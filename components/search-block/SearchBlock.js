import styled from "styled-components";import Controls from "./form/Controls";import {dataRu} from "../../localeData/ru";import {dataUa} from "../../localeData/ua";import {useRouter} from "next/router";const Container = styled.section`  display: flex;  flex-direction: column;  justify-content: center;  align-items: center;  position: relative;  width: 960px;  max-height: 212px;  margin: 0 auto;  background: #FFFFFF;  color: var(--black);`;const MainText = styled.h1`  margin: 36px 0 0 0;  font: 700 24px/32px var(--font-Relaway);`;const SecondaryText = styled.h3`  font: 400 16px/28px var(--font-Noto-sans);  margin-top: 8px;  margin-bottom: 0;`;export default function ({onSearch, products}) {    let router = useRouter();    const text = router.locale === 'ua' ? dataUa : dataRu;    return (        <Container>            <MainText>{text.title}</MainText>            <SecondaryText>{text.description}</SecondaryText>            <Controls onSearch={onSearch}                      text={text}                      products={products} />        </Container>    )}