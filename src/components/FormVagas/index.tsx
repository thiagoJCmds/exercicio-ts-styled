import { FormEvent, SetStateAction, useState } from 'react'
import { BtnPesquisar, Campo, Formulario } from './Styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Formulario onSubmit={aoEnviarForm}>
      <Campo
     
        placeholder="Front-end, fullstack, node, design"
        onChange={(e: { target: { value: SetStateAction<string> } }) => setTermo(e.target.value)}
        type="search"
      />
      <BtnPesquisar type="submit">
        Pesquisar
      </BtnPesquisar>
    </Formulario>
  )
}
export default FormVagas
