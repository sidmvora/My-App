import { useNavigate } from 'react-router-dom';
import { countrys, genderOptions } from '../ConstantsData/constants'

const Table = props => {
  const { remove, list } = props
  const navigate = useNavigate();
  return (
    <div style={{
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
  }}>
    <table>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Describe</th>
        <th>Gender</th>
        <th>Country</th>
        <th>Is Accept?</th>
        <th>Action</th>
      </tr>
      {list.map((item, index) => {
        const gender = genderOptions.find((g) => {
          return g.value.toString() === item.gender
        })
        const country = countrys.find((c) => {
          return c.value.toString() === item.country
        })
        return <tr key={index}>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.describe}</td>
          <td>{gender.lable}</td>
          <td>{country.lable}</td>
          <td>{item.isAccept.toString()}</td>
          <td><button onClick={() => { remove(index) }}>Remove</button>
            <button onClick={() => { navigate('/' + index) }}>Edit</button></td>
        </tr>

      })}
    </table>
    </div>
  )
}

export default Table;