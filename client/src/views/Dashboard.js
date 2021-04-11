import React, { useState, useEffect } from 'react';
import { getSheetData } from '../api';
import './Dashboard.css';

const Dashboard = () => {
    const [data, setData] = useState([[]]);
    
    useEffect(() => {
        const getData = async () => {
            const res = await getSheetData();
            setData(res.data.data);
        }
        getData();
    }, [])

    return (
        <div>
            <h1>This is some test data</h1>
            <div className="test-table">
                {data.map((row, rindex) => 
                    <React.Fragment key={rindex}>
                        {Object.values(row).map((col, cindex) =>
                            <div key={cindex}>{col}</div>
                        )}
                    </React.Fragment>
                )}
            </div>
        </div>
    )
}

export default Dashboard;