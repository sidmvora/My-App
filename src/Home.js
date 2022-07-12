import React, { useEffect, useState } from 'react'
import { countrys, genderOptions } from './ConstantsData/constants';
import Input from './Component/Input'
import { useParams, useNavigate } from 'react-router-dom';


const Home = props => {
    const navigate = useNavigate();
    const { addToList, list } = props
    const [formData, setFormData] = useState({ firstName: '', lastName: '', describe: '', gender: '1', country: '1', isAccept: false })
    let { id } = useParams();


    const handelChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handelOnChange = e => setFormData({ ...formData, [e.target.name]: e.target.checked });

    useEffect(() => {
        if (id) {
            setFormData({ ...list[id] })
        }
    }, [id, list])
    return (
        <>
            <h1 style={{ textAlign: "center" }}>My App</h1>
            <div style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <table className='my-3'>
                    <tr>
                        <th>First Name:</th>
                        <td><Input name='firstName' type='text' value={formData.firstName} onChange={handelChange} /></td>
                    </tr>
                    <tr>
                        <th>Last Name:</th>
                        <td><Input name='lastName' type='text' value={formData.lastName} onChange={handelChange} /></td>
                    </tr>
                    <tr>
                        <th>Describe:</th>
                        <td><Input name='describe' type='textarea' value={formData.describe} onChange={handelChange} /></td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td><Input name='gender' type='radio' options={genderOptions} checked={formData.gender} onChange={handelChange} /></td>
                    </tr>
                    <tr>
                        <th>Countrys:</th>
                        <td><Input name='country' type='select' options={countrys} value={formData.country} onChange={handelChange} /></td>
                    </tr>
                    <tr>
                        <th colSpan={2}><Input name='isAccept' type='checkbox' checked={formData.isAccept} onChange={handelOnChange} />IS Accept?</th>
                    </tr>
                    <tr>
                        <td colSpan={2}><button onClick={() => { addToList(formData, id); navigate('/List') }}>{id !== undefined ? 'Update' : 'Add'}</button></td>
                    </tr>
                </table>
            </div>
        </>
    )
}
export default Home;