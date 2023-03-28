import React from 'react';
import icon3 from '../../imagenes/Union.png';
import InputActive from '../ImputActive/ImputActive';
import { useSelector } from 'react-redux';
import './companyTable.css'

export default function CompanyTable() {
  const activeData = useSelector(store => store.Company.activeCompany);
  const inactiveData = useSelector(store => store.Company.inactiveCompany);

  const allData = inactiveData && activeData ? [...Object.values(inactiveData), ...Object.values(activeData)].sort((a, b) => a.active - b.active) : [];

  return (
    <>
      <table>
        {allData?.length > 0 && allData.map((item, i) => (
          <tbody key={i}>
            <tr >
              <td >
                <img id="icon3" src={icon3} alt="icono" />
              </td>
              <td className="colum1">{item.name}</td>
              <td className="colum2">{item.website}</td>
              <td className="colum3">
                <img className="photo-perfil-author" src={item.logo} alt="photo" />
              </td>
              <td>
                <InputActive author={false} item={item} />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </>

  );
}
