import { useState, useEffect, useMemo } from 'react';
import { Table, Input, Divider, Button, Space } from "antd";
import { getCompetitions } from "../../api";
import { getDataSource } from './common/getDataSource';
import { culumns } from './common/tableColumns';


export const Competitions = () => {

    const [competitions, setCompetitions] = useState(null);
    const [isCompetitionsLoaded, setIsCompetitionsLoaded] = useState(false);
    const [searchByName, setSearchByName] = useState(null);

    useEffect(() => {
        getCompetitions()
            .then((data) => {
                setCompetitions(getDataSource(data.competitions));
                setIsCompetitionsLoaded(true);
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    const handleSearch = (val) => {
        setSearchByName(val);
    };

    const columnsForView = useMemo(() => {
        if (searchByName) {
            return competitions.filter(item => item.nameCompetition.startsWith(searchByName))
        }
        return competitions;
    }, [competitions, searchByName]);

    if (!isCompetitionsLoaded) {
        return <p>Loading...</p>
    }

    return (
        <>
            <Space>
                <Input.Search placeholder="Поиск по имени" enterButton onSearch={handleSearch}
                    style={{ width: "300px" }} />
            </Space>
            <Divider />
            <Table bordered columns={culumns} dataSource={columnsForView} />
        </>
    )
}

