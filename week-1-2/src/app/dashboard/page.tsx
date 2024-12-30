'use client'
import { useBearStore } from '@/stores/useBearStore';
import React from 'react'

const Dashboard = () => {
    const { bears, increasePopulation } = useBearStore();

    return (
        <div>Dashboard{bears}</div>


    )
}

export default Dashboard