import { useEffect, useState } from 'react';
import { Table, Input, Divider, Button, Space } from "antd";
import { getTeams } from '../../api';
import { getDataSource } from './common/getDataSource';
import { culumns } from './common/tableColumns';

export const Teams = () => {

    const [teams, setTeams] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getTeams().then(data => {
            debugger;
            setTeams(getDataSource(data.teams));
            setLoaded(true);
        })
    }, []);

    if (!loaded) {
        return <p>Loading...</p>
    }

    return <Table bordered columns={culumns} dataSource={teams} />
}