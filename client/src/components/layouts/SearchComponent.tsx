'use client'

import React from 'react'
import ComboBox from "@/components/ComboBox"
import TuneIcon from '@mui/icons-material/Tune';
import DropDown from "@/components/layouts/DropDown"
import Chip from '@mui/material/Chip';
import jobTitles from '@/data/jobtitles.js'
import Button from '@/components/Buttons/Buttons'



const SearchComponent = () => {
  
  const PlaceData = [
    { label: "New York" },
    { label: "San Francisco" },
  ];

  const JobType = [
    { label: 'Full-time', value: 'full-time' },
    { label: 'Part-time', value: 'part-time' },
    { label: 'Contract', value: 'contract' }
  ];
  
  const Modality = [
    { label: 'Remote', value: 'remote' },
    { label: 'On-site', value: 'on-site' },
    { label: 'Hybrid', value: 'hybrid' }
  ];
  
  const Country = [
    { label: 'USA', value: 'usa' },
    { label: 'Canada', value: 'canada' },
    { label: 'UK', value: 'uk' }
  ];
  
  const Salary = [
    { label: '50k-60k', value: '50k-60k' },
    { label: '60k-70k', value: '60k-70k' },
    { label: '70k-80k', value: '70k-80k' }
  ];

  const handleDropdownChange = (selectedValue: string) => {
    console.log('Selected value:', selectedValue);
  };

  return (
    <div>
      <div className='flex items-center justify-center gap-4'>
        <ComboBox data={jobTitles} placeholder='select keywords'></ComboBox>
        <ComboBox data={PlaceData} placeholder='location'></ComboBox>
        <Button variant="primary" size="medium">Search</Button>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-start'>
          <DropDown title="Job Type" items={JobType} onChange={handleDropdownChange}></DropDown>
          <DropDown title="Modality" items={Modality} onChange={handleDropdownChange}></DropDown>
          <DropDown title="Country" items={Country} onChange={handleDropdownChange}></DropDown>
          <DropDown title="Salary" items={Salary} onChange={handleDropdownChange}></DropDown>
        </div>
        <Button variant={'primary'} size={'medium'}>Clear FIlter</Button>
      </div>
    </div>
  );
}

export default SearchComponent;
