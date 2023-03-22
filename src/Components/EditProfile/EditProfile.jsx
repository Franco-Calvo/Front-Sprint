import React from 'react'
import './editProfile.css'
import { useRef, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import authorAction from '../../Store/Author/actions.js'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
const { read_author, update_author } = authorAction

export default function EditProfile() {
  const dispatch = useDispatch()
  const formRef = useRef();
  const [update, setUpdate] = useState(false)
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate()
  let authores = useSelector(store => store.Author.author)
  const authoresDate = authores?.date?.split('T')[0]

  const handleSave = async (event) => {
    event.preventDefault();
    const cityCountry = formRef.current.city_country.value
    const array = cityCountry.split(',')
    const data = {
      name: formRef.current.name.value,
      city: array[0],
      country: array[1].trim(),
      date: formRef.current.date.value,
      photo: formRef.current.photo.value
    };

    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(update_author({ data: data }))
        setUpdate(!update)
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  };
  const handleDelete = async (event) => {
    event.preventDefault();
    Swal.fire({
      title: 'Are you sure you want to delete your account?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        const data = { active: false };
        dispatch(update_author({ data: data }));
        setUpdate(!update);
        setTimeout(() => {
          navigate('/');
        }, 500);
        Swal.fire('Your account has been deleted', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Cancelled', '', 'info');
      }
    });
  };
  
  useEffect(
    () => {
      if (authores) {
        dispatch(read_author())
      }
    }, [update]
  )
  useEffect(
    () => {
      if (authores) {
        dispatch(update_author())
      }
    }, [update]
  )

  useEffect(() => {
    if (authores?.city && authores?.country) {
      setInputValue(`${authores?.city}, ${authores?.country}`);
    }
  }, [authores]);

  return (
    <div className='edition-Profile'>
      <form className='form-Edition' ref={formRef}>
        <input name="name" className="author-Form-Edition" type="text" placeholder="Name" defaultValue={authores?.name} />
        <input name="city_country" className="author-Form-Edition" type="text" placeholder="City, Country" defaultValue={inputValue} />
        <input name="date" className="author-Form-Edition" type="date" defaultValue={authoresDate} />
        <input name="photo" className="author-Form-Edition" type="text" placeholder="URL Profile Image" defaultValue={authores?.photo} />
        <input id='btn-save' type="submit" value="Save" onClick={handleSave} />
        <input id='btn-delete' type="submit" value="Delete Acount" onClick={handleDelete} />
      </form>
    </div>
  )
}
