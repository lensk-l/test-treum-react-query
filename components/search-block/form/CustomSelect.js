import Select from 'react-select'import styled from "styled-components";const CustomSelect = styled(Select).attrs({    styles: {        control: (provided) => ({            ...provided,            background: 'none',            height: '48px',            borderRadius: 'var(--radii)',            cursor: 'pointer',        }),        option: (provided, state) => ({            ...provided,            cursor: 'pointer',            backgroundColor: state.isSelected                ? 'var(--background-dark)'                : 'white',        }),    }})    `      width: 253px;      height: 48px;      color: var(--light-gray);      border-radius: var(--radii);      font-family: var(--font-Noto-sans) !important;      & input {        padding-left: 0.25rem;      }      & * {        color: var(--light-gray) !important;      }    `;export default CustomSelect;