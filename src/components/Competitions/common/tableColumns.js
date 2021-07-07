import { NavLink } from 'react-router-dom';

export const culumns = [ // Название колонок в таблице
    {
        title: "Название соревнования",
        dataIndex: "nameCompetition",
        key: "nameCompetition",
        render: (text, item) => {
            return <NavLink to={`competition/${item.id}`} >{text}</NavLink>
        }
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
        key: "andDate",
    },
];