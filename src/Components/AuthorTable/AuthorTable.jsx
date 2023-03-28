import React from 'react';
import icon3 from '../../imagenes/Union.png';
import InputActive from '../ImputActive/ImputActive';
import { useSelector } from 'react-redux';
import './authorTable.css'

export default function AuthorTable() {
  const activeData = useSelector(store => store.Author.activeAuthor);
  const inactiveData = useSelector(store => store.Author.inactiveAuthor);

  const allData = inactiveData && activeData ? [...Object.values(inactiveData), ...Object.values(activeData)].sort((a, b) => a.active - b.active) : [];

  return (
    <table>
      {allData?.length > 0 && allData.map((item,i) => (
        <tr key={i}>
          <td>
            <img id="icon3" src={icon3} alt="icono" />
          </td>
          <td className="colum1">{item.name}</td>
          <td className="colum2">{item.city}</td>
          <td className="colum3">
            <img className="photo-perfil-author" src={item.photo} alt="photo" />
          </td>
          <td>
            <InputActive author={true} item={item} />
          </td>
        </tr>
      ))}
    </table>
  );
}
