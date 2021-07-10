import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import moment from 'moment';
import { Table, DatePicker, Space, Divider } from 'antd';
import { getDataSource } from './common/getDataSource';
import { culumns } from './common/tableColumns';
import { getMatches } from '../../api';
import { useQuery } from '../../hooks/useQuery';

export const Matches = () => {

    const history = useHistory();

    const [matches, setMatches] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const [isDateError, setIsDateError] = useState(false);

    const dateFrom = useQuery().get('dateFrom') ?? '2021-05-01';
    const dateTo = useQuery().get('dateTo') ?? '2021-05-09';

    useEffect(() => {
        getMatches({ dateFrom, dateTo }).then(data => {
            setMatches(getDataSource(data.matches));
            setLoaded(true);
        }).catch(err => {
            console.log(JSON.stringify(err, null, 2));
        })
    }, [dateFrom, dateTo]);


    const onDataChange = (date, datesStr) => {

        // считаем разницу в днях между датами
        const diff = Math.abs(date[0].diff(date[1], 'days'));

        // если разница больше 10 дней - тогда показать ошибку
        if (diff > 10) {
            setIsDateError(true);
        } else {
            setIsDateError(false);
            // помещаем параметры в кверистринг
            history.push({
                search: `?dateFrom=${datesStr[0]}&dateTo=${datesStr[1]}`
            });
        }
    }

    if (!loaded) {
        return <p>Loading...</p>
    }


    const { RangePicker } = DatePicker;
    return (
        <>
            <>
                <Space direction="vertical" size={12}>
                    <RangePicker defaultValue={[moment(dateFrom), moment(dateTo)]} onChange={onDataChange} />
                </Space>
                {isDateError && <p style={{ color: 'red' }}>Разница между началом периода и концом периода не должно превышать 10 дней</p>}
                <Divider />
                <Table bordered columns={culumns} dataSource={matches} />
            </>
        </>
    )
}