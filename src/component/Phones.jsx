import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const Phones = () => {

    const  [phone, setPhone] =useState([])
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089')
        .then(data => {
            const phonesData = data.data.data
            // setPhone(phonesData);
            const FakeData = phonesData.map(Phone =>{
                const obj ={
                   name: Phone.name,
                  price : Phone.slug.split('-')[1]
                }
                return obj
            })
            setPhone(FakeData)
        })  
            
    },[])

    console.log(phone);
    return (
        <div>
            <BarChart width={1200} height={200} data={Phones}>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar>

                </Bar>
            </BarChart>
        </div>
    );
};

export default Phones;