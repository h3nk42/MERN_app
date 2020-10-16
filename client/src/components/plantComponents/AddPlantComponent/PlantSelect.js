import {Select} from 'antd';
import React from 'react'

const { Option } = Select;

const PlantSelect = (props) =>{

    function onChange(value) {
        props.setAge(value)
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }

    let species = [{
        name: 'monstera',
        id: 1},
        {
            name: 'philodendron',
            id: 2},
        {
            name: 'pilea peperomioides\n',
            id: 3}]

   const renderSpecies = species.map((data) =>
       <Option
           key={data.id}
           value={data.id}
       >
           {data.name}
       </Option>
   )

    return(
        <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a species"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            {renderSpecies}
        </Select>
    )}

export default PlantSelect