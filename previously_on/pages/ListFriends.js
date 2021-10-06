import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar';
// YannisINFO
// token: "d9f7494c47b1",
// client_id: "3bee3373bb7d"
export default function listFriends() {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        console.log("ok")

        var data = JSON.stringify({
            // "login": e.target.value,
        });

        var config = {
            method: 'get',
            url: 'http://127.0.0.1:5000/api/listFriends',
            headers: {
                'Content-Type': 'application/json',
                // "login": e.target.value,
                token: "d9f7494c47b1",
                client_id: "3bee3373bb7d"
            },
            data: data
        };
        axios(config)
            .then(response => {
                console.log("ok")
                console.log(response)
                setFriends(response.data.users)
                // setFriends(
                //     response.data.users.map((mesAmis, i) =>{
                //         const login = mesAmis.login;
                //         const id = mesAmis.id;

                //         return(
                //             <div>
                //                 <div key={i}>{login}</div>
                //             </div>
                //         )
                //     })
                // )
            })
            .catch(function (error) {
                console.log("---", error);
            });

    }, [])


    const removeFriends = async (item, index) => {
        console.log(index)




        var axios = require('axios');
        var data = JSON.stringify({
            "id": item,
            "token": "d9f7494c47b1",
            "client_id": "3bee3373bb7d",
        });

        var config = {
            method: 'delete',
            url: 'http://127.0.0.1:5000/api/removeFriends',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };





        await axios(config)
            .then(async (response) => {
                console.log(response)
                const friendsTMP = await JSON.parse(JSON.stringify(friends));
                await friendsTMP.splice(index, 1)
                setFriends(friendsTMP)
            })
            .catch(function (error) {
                console.log(error);
            });

        //     var config = {
        //         method: 'get',
        //         url: 'http://127.0.0.1:5000/api/listFriends',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             // "login": e.target.value,
        //             token: "d9f7494c47b1",
        //             client_id: "3bee3373bb7d"
        //         },
        //         data: data
        //     };
        //     axios(config)
        //         .then(response => {
        //             console.log("ok")
        //             console.log(response)
        //             setFriends(response.data.users)
        //             // setFriends(
        //             //     response.data.users.map((mesAmis, i) =>{
        //             //         const login = mesAmis.login;
        //             //         const id = mesAmis.id;

        //             //         return(
        //             //             <div>
        //             //                 <div key={i}>{login}</div>
        //             //             </div>
        //             //         )
        //             //     })
        //             // )
        //         })
        //         .catch(function (error) {
        //             console.log("---", error);
        //         });




    }

    return (
        <>
        <Navbar />
        <div >
            {friends && friends.map((v, i) => {
                return (
                    <div key={i}>
                        <p >{v.login}</p>
                        <button onClick={() => removeFriends(v.id, i)}>Retirer amis</button>
                    </div>
                )
            })}
        </div>
        </>
    )
}
