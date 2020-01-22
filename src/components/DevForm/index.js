import React, { useState, useEffect } from 'react';

const DevForm = ({ onSubmit }) => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [accuracy, setAccuracy] = useState('');
    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const {latitude, longitude, accuracy } = position.coords;
            setLatitude(latitude);
            setLongitude(longitude);
            //setAccuracy(accuracy);
          }, 
          (error) => {
            console.log(error)
          },
          {
            timeout: 30000,
          }
        )
    
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
        });

        setGithubUsername('');
        setTechs('');
    }

    return (
        <form onSubmit={ handleSubmit }>
          <div className='input-block'>
            <label htmlFor='github_username'>Usuário do Github</label>
            <input type="text" name='github_username' id='github_username' required
             value={github_username} onChange={e => setGithubUsername(e.target.value)} />
          </div>

          <div className='input-block'>
            <label htmlFor='techs'>Tecnologias</label>
            <input type="text" name='techs' id='techs' required
             value={techs} onChange={e => setTechs(e.target.value)} />
          </div>

          <div className='input-group'>
            <div className='input-block'>
              <label htmlFor='latitude'>Usuário do Github</label>
              <input type="number" name='latitude' id='latitude' required value={latitude} onChange={e => setLatitude(e.target.value)} />
            </div>

            <div className='input-block'>
              <label htmlFor='longitude'>Tecnologias</label>
              <input type="number" name='longitude' id='longitude' required value={longitude} onChange={e => setLongitude(e.target.value)} />
            </div>
          </div>
          <button type='submit'>Salvar</button>
        </form>
    )
}

export default DevForm;