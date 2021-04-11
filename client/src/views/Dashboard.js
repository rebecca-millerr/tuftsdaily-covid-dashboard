import React, { useState, useEffect } from 'react';
import { getSheetData } from '../api';

const Dashboard = () => {
    useEffect(() => {
        const getData = async () => {
            const res = await getSheetData();
            console.log(res);
        }
        getData();
    }, [])

    return (
        <div>Hello world</div>
    )
}

export default Dashboard;