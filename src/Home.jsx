import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill, BsAwardFill, BsHeadphones} from "react-icons/bs"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie } from "recharts"
import { useState } from 'react';
import drake2Img from "../public/drake2.png";
import drake from "../public/image.png";
import drake3 from "../public/drake3.png";

import { useTranslation } from 'react-i18next';

function Home() {

    const{t} = useTranslation();

    const artistsData = [
    { name: 'Drake', Streams: 116981 },
    { name: 'Taylor Swift', Streams: 106756 },
    { name: 'Bad Bunny', Streams: 102927 },
    { name: 'The Weekend', Streams: 81962 },
    { name: 'Justin Bieber', Streams: 61768 },

    { name: 'Ed Sheeran', Streams: 58496 },
    { name: 'Ariana Grande', Streams: 57996 },
    { name: 'Eminem', Streams: 57886.1 },
    { name: 'Travis Scott', Streams: 57744.3 },
    { name: 'Kanye West', Streams: 56317.0 },

    { name: 'Rihanna', Streams: 50663.7 },
    { name: 'Post Malone', Streams: 50273.2 },
    { name: 'Billie Eilish', Streams: 49561.5 },
    { name: 'Kendrick Lamar', Streams: 49126.7 },
    { name: 'J Balvin', Streams: 48508.1 },

    { name: 'Future', Streams: 47052.4 },
    { name: 'Bruno Mars', Streams: 45236.5 },
    { name: 'BTS', Streams: 44072.6 },
    { name: 'Juice WRLD', Streams: 42132.5 },
    { name: 'Ozuna', Streams: 42029.6 },
    ];

    const [selectedRange, setSelectedRange] = useState('1-5');

    const filteredData = (() => { //for first chart, show 5 artists at a time and can be changed by user
        if (selectedRange === '1-5') return artistsData.slice(0, 5);
        if (selectedRange === '6-10') return artistsData.slice(5, 10);
        if (selectedRange === '11-15') return artistsData.slice(10, 15);
        if (selectedRange === '16-20') return artistsData.slice(15, 20);
        return [];
    })();


    const lineChartData = [
        { year: '2020', streams: 10.1 },
        { year: '2021', streams: 11.3 },
        { year: '2022', streams: 13.4 },
        { year: '2023', streams: 17.6 },
        { year: '2024', streams: 8.0 },
    ];

    const monthlyData = {
        2020: [
            { month: "J", streams: 0.82 },
            { month: "F", streams: 0.77 },
            { month: "M", streams: 0.83 },
            { month: "A", streams: 0.92 },
            { month: "M", streams: 0.89 },
            { month: "J", streams: 0.85 },
            { month: "J", streams: 0.81 },
            { month: "A", streams: 0.80 },
            { month: "S", streams: 0.87 },
            { month: "O", streams: 0.85 },
            { month: "N", streams: 0.89 },
            { month: "D", streams: 0.90 },
        ],
        2021: [
            { month: "J", streams: 0.87 },
            { month: "F", streams: 0.85 },
            { month: "M", streams: 0.92 },
            { month: "A", streams: 0.95 },
            { month: "M", streams: 0.98 },
            { month: "J", streams: 1.0 },
            { month: "J", streams: 0.97 },
            { month: "A", streams: 0.98 },
            { month: "S", streams: 1.35 },
            { month: "O", streams: 1.2 },
            { month: "N", streams: 1.13 },
            { month: "D", streams: 1.1 },
        ],
        2022: [
            { month: "J", streams: 0.96 },
            { month: "F", streams: 0.95 },
            { month: "M", streams: 1.0 },
            { month: "A", streams: 1.05 },
            { month: "M", streams: 1.12 },
            { month: "J", streams: 1.15 },
            { month: "J", streams: 1.13 },
            { month: "A", streams: 1.2 },
            { month: "S", streams: 1.55 },
            { month: "O", streams: 1.35 },
            { month: "N", streams: 1.25 },
            { month: "D", streams: 1.24 },
        ],
        2023: [
            { month: "J", streams: 1.35 },
            { month: "F", streams: 1.25 },
            { month: "M", streams: 1.4 },
            { month: "A", streams: 1.42 },
            { month: "M", streams: 1.5 },
            { month: "J", streams: 1.6 },
            { month: "J", streams: 1.55 },
            { month: "A", streams: 1.58 },
            { month: "S", streams: 2.1 },
            { month: "O", streams: 1.85 },
            { month: "N", streams: 1.6 },
            { month: "D", streams: 1.6 },
        ],
        2024: [
            { month: "J", streams: 0.6 },
            { month: "F", streams: 0.58 },
            { month: "M", streams: 0.65 },
            { month: "A", streams: 0.67 },
            { month: "M", streams: 0.7 },
            { month: "J", streams: 0.73 },
            { month: "J", streams: 0.75 },
            { month: "A", streams: 0.78 },
            { month: "S", streams: 0.9 },
            { month: "O", streams: 0.85 },
            { month: "N", streams: 0.82 },
            { month: "D", streams: 0.77 },
        ],
    };


    const [selectedView, setSelectedView] = useState("yearly");

        
    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>{t('title')}</h3>
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>{t('songsReleased')}</h3>
                        <BsHeadphones className='card_icon'/>
                    </div>
                    <h1>500+</h1>
                </div>
                <div className='card'>
                    <div className='card-inner' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <img
                            src={drake2Img}
                            alt="Drake"
                            className="card_icon"
                            width="200"
                            height="200"
                            />
                    </div>
                </div>
                <div className='card'>
                    <div className='card-inner' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <img
                            src={drake}
                            alt="Drake"
                            className="card_icon"
                            width="230"
                            height="200"
                            />
                    </div>
                </div>
            <div className='card'>
                    <div className='card-inner'>
                        <h3>{t('awardsWon')}</h3>
                        <BsAwardFill className='card_icon'/>
                    </div>
                    <h1>281</h1>
                </div>
            </div>

            <div className='charts'>

                <div className='chart-container'>
                    <h4>{t('chart1title')}</h4>

                    <select
                        value={selectedRange}
                        onChange={(e) => setSelectedRange(e.target.value)}
                        style={{
                        marginBottom: "10px",
                        padding: "8px",
                        borderRadius: "5px"
                        }}
                    >
                        <option value="1-5">1–5</option>
                        <option value="6-10">6–10</option>
                        <option value="11-15">11–15</option>
                        <option value="16-20">16–20</option>
                    </select>

                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                        width={500}
                        height={300}
                        data={filteredData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Streams" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                    </div>

                <div className='chart-container'>
                <h4>{t('chart2title')}</h4>

                <select
                    value={selectedView}
                    onChange={(e) => setSelectedView(e.target.value)}
                    style={{
                    marginBottom: "10px",
                    padding: "8px",
                    borderRadius: "5px"
                    }}
                >
                    <option value="yearly">2020-2024</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                </select>

                <ResponsiveContainer>
                    <LineChart
                    data={
                        selectedView === "yearly"
                        ? lineChartData
                        : monthlyData[selectedView] || []
                    }
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={selectedView === "yearly" ? "year" : "month"} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="streams"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    </LineChart>
                </ResponsiveContainer>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="bottom">
                <div className="description-left">
                    <h3>{t('whoishe')}</h3>
                    <p>
                        {t('paragraph')}
                    </p>
                </div>
                <div className="image-right" >
                    <img
                    src={drake3}
                    alt="Drake performing"
                    width={250}
                    height={250}
                    className="description-image"
                    />
                </div>
                
            </div>
        </main>
    )
}

export default Home
