import styled from "styled-components";

export const Li = styled.li`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease .3s;
  border-radius: 8px;
  &:hover {
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
}


`
export const VagaTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`
export const Link = styled.a`
  border-color: var(--cor-secundaria);
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);
    display: inline-block;
    padding: 8px 16px;
    text-decoration: none;
    margin-top: 16px;
    font-weight: bold;
    font-size: 14px;
    border-radius: 8px;
    text-align: center;

  &:hover {
  border-color: var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
}


    @media (max-width: 768px) {
      display: block;
    }
`
