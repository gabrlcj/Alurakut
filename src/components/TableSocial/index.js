import Box from "../Box"
import styled from 'styled-components';

const Table = styled.table`
  display: flex;
  align-items: center;
  margin: 0 auto;
  border: 2px solid #12121250;
  width: fit-content;

  thead {
    text-align: left;
  }

  th {
    background: #A2DBFA;
    border: 1px solid whitesmoke;
  }

  td {
    border: 1px solid whitesmoke;
    background: #E8F0F2;
  }
`

export default function TableSocial() {
  return (
    <Box>
      <h2 className="subTitle">
        Dados do seu perfil:
      </h2>
      <Table>
        <thead>
          <tr>
            <th>Aniversário</th>
          </tr>
          <tr>
            <th>Relacionamento</th>
          </tr>
          <tr>
            <th>Quem sou eu</th>
          </tr>
          <tr>
            <th>Estado</th>
          </tr>
          <tr>
            <th>País</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>13 de abril</td>
          </tr>
          <tr>
            <td>solteiro</td>
          </tr>
          <tr>
            <td>Estudante com foco em se tornar um desenvolvedor frontend</td>
          </tr>
          <tr>
            <td>Paraná</td>
          </tr>
          <tr>
            <td>Brasil</td>
          </tr>
        </tbody>
      </Table>
    </Box>
  )
}