import React from 'react';

const ExpenseFilter = (props) => {
    const dropdownHandler = (e) => {
        props.onChangeFilter(e.target.value)
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label style={{fontSize : "30px"}}>Filter by Year</label>
                <select value={props.selected} onChange={dropdownHandler}>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;