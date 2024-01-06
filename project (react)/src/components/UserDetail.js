import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserDetail( { activeUserId } ) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios(`https://jsonplaceholder.typicode.com/users/${activeUserId}`)
            .then((res) => setUser(res.data))
            .finally(() => setLoading(false));
    }, [activeUserId]);




  return (
    <div>
        <h2>
            Kullanıcı Detayları
        </h2>

        {loading && <div>Yükleniyor...</div>}
         {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
        <div>
            <ul>
                <li>
                    <h4>İsim : <span>{user.name}</span> </h4>
                </li>
                <li>
                    <h4>Email : <span>{user.email}</span> </h4>
                </li>
                <li>
                    <h4>ADRES : </h4>
                    <h5>Sokak : <span>{user.address.street}</span> </h5>
                    <h5>Apartman : <span>{user.address.suite}</span> </h5>
                    <h5>Şehir : <span>{user.address.city}</span> </h5>
                    <h5>Posta Kodu : <span>{user.address.zipcode}</span> </h5>
                </li>
                <li>
                    <h4>Websitesi : <span>{user.website}</span> </h4>
                </li>
                <li>
                    <h4>Telefon : <span>{user.phone}</span> </h4>
                </li>
                <li>
                    <h4>ŞİRKET : </h4>
                    <h5>İsmi : <span>{user.company.name}</span> </h5>
                    <h5>sloganı : <span>{user.company.catchPhrase}</span> </h5>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default UserDetail