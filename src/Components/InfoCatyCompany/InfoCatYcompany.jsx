import React from 'react';
import './info.css'
import { Link as Anchor } from 'react-router-dom'


export default function InfoCatYcompany({info}) {
  return (
    <div className="category-company">
      {info.category_id && <button className="category">{info.category_id.name}</button>}
      {info.author_id && (
        <Anchor to={"/author/"+ info.author_id._id}>
          <h3 className="company">{info.author_id.name}</h3>
        </Anchor>
      )}
    </div>
  );
}
