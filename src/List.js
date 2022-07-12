import Table from "./Component/Table";
import React from 'react'


const List = props => {
    const { list, remove } = props

    return (
        <Table list={list} remove={remove} />
    )
}
export default List;


