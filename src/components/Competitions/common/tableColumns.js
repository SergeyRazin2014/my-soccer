import { NavLink } from 'react-router-dom';
import { urls } from '../../../api/urls';

export const culumns = [ // Название колонок в таблице
    {
        title: "Название соревнования",
        dataIndex: "nameCompetition",
        key: "nameCompetition",
    },
    {
        title: "Место проведения",
        dataIndex: "area",
        key: "area",
        render: (text) => <a>{text}</a>
    },
    {
        title: "Код страны",
        dataIndex: "countryCode",
        key: "countryCode",
    },
    {
        title: "Начало сезона",
        dataIndex: "startDate",
        key: "startDate",
    },
    {
        title: "Конец сезона",
        dataIndex: "endDate",
        key: "endDate",
    },
];